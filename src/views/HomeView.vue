<template>
  <div class="home-view">
    <h1>Calculate your path</h1>
    <div class="home-view__inputs"></div>
    <div id="map"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

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
</style>
