<template>
  <div class="modelity-map">
    <div class="modelity-map__buttons">
      <Button label="Calculate my path" icon="pi pi-compass" @click="onClickCreatePath" />

      <Button
        label="Generate error"
        severity="danger"
        icon="pi pi-times-circle"
        @click="onClickError"
      />

      <Message v-if="errorMessage" severity="error">
        {{ errorMessage }}
      </Message>
    </div>

    <div id="map" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'

import { useToast } from 'primevue/usetoast'

import PlanService from '@/services/plan'

import L, { Map } from 'leaflet'
import 'leaflet/dist/leaflet.css'

const toast = useToast()

const props = defineProps<{
  from: string
  to: string
}>()

const errorMessage: Ref<string> = ref('')
let map: Map

const setupMap = () => {
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(map)
}

const onClickCreatePath = async () => {
  errorMessage.value = ''

  if (!props.from || !props.to) {
    errorMessage.value = 'Please enter start and destination addresses'

    return
  }

  try {
    const plan = await PlanService.getPlan(props.from, props.to)

    plan.forEach((path) => {
      L.polyline(path.path, { color: path.color, opacity: 0.5 })
        .bindPopup(`Duration: ${path.total_duration_s} seconds`)
        .openPopup()
        .addTo(map)
    })

    map.fitBounds(L.polyline(plan[0].path).getBounds())

    toast.add({
      severity: 'success',
      summary: 'Click on path',
      detail: 'You can click on path to see path duration',
      life: 3000
    })
  } catch (e) {
    console.error(e)
  }
}

const onClickError = async () => {
  try {
    const error = await PlanService.getPlanErrors(props.from, props.to)
    toast.add({ severity: 'error', summary: 'Error message', detail: error.error, life: 3000 })
  } catch (e) {
    console.error(e)
  }
}

onMounted(() => {
  map = L.map('map').setView([45.757, 4.834], 14)
  setupMap()
})
</script>

<style scoped lang="scss">
#map {
  height: 70vh;
}

.modelity-map {
  &__buttons {
    display: flex;
    gap: $spacing-xsmall;

    margin: $spacing-medium 0;
  }
}
</style>
