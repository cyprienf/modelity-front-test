<template>
  <div class="home-view">
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

      <Button label="Calculate my path" icon="pi pi-compass" />
    </div>

    <div id="map" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'

import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const from: Ref<string> = ref('')
const to: Ref<string> = ref('')

const setupMap = () => {
  const map = L.map('map').setView([45.76342, 4.834277], 13)

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(map)
}

onMounted(() => {
  setupMap()
})
</script>

<style scoped lang="scss">
#map {
  height: 30rem;
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
