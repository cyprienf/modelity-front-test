<template>
  <div class="home-view">
    <Toast />

    <h1>Calculate your path</h1>

    <div class="home-view__filters">
      <div class="home-view__filters__inputs">
        <FloatLabel>
          <InputText id="from" type="text" v-model="from" />
          <label for="from">Start</label>
        </FloatLabel>

        <FloatLabel>
          <InputText id="to" v-model="to" />
          <label for="to">Destination</label>
        </FloatLabel>
      </div>

      <Button label="Calculate my path" icon="pi pi-compass" @click="onClickCreatePath" />

      <Button
        label="Generate error"
        severity="danger"
        icon="pi pi-times-circle"
        @click="onClickError"
      />
    </div>

    <div id="map" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'

import { useToast } from 'primevue/usetoast'

import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import PlanService from '@/services/plan'

const from: Ref<string> = ref('')
const to: Ref<string> = ref('')

const toast = useToast()

let map: any

const setupMap = () => {
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(map)
}

const onClickCreatePath = async () => {
  try {
    const plan = await PlanService.getPlan(from.value, to.value)

    plan.forEach((path) => {
      L.polyline(path.path, { color: path.color, opacity: '0.5' })
        .bindPopup(`Duration: ${path.total_duration_s}`)
        .openPopup()
        .addTo(map)
    })

    map.fitBounds(L.polyline(plan[0].path).getBounds())
  } catch (e) {
    console.error(e)
  }
}

const onClickError = async () => {
  try {
    const error = await PlanService.getPlanErrors(from.value, to.value)
    toast.add({ severity: 'error', summary: 'Error message', detail: error.error, life: 3000 })
  } catch (e) {
    console.error(e)
  }
}

onMounted(() => {
  map = L.map('map').setView([45.76342, 4.834277], 13)
  setupMap()
})
</script>

<style scoped lang="scss">
#map {
  height: 75vh;
}

.home-view {
  &__filters {
    margin-bottom: 2rem;

    display: flex;
    gap: 2rem;

    &__inputs {
      display: flex;
      gap: 1rem;
    }
  }
}
</style>
