<template>
  <div class="home-view">
    <Toast />

    <h1 class="home-view__title">Modelity path finder</h1>

    <ModelityFilters v-model:from="from" v-model:to="to" />

    <ModelityMap :from :to />
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'

import ModelityFilters from '@/components/ModelityFilters.vue'
import ModelityMap from '@/components/ModelityMap.vue'

const from: Ref<string> = ref('')
const to: Ref<string> = ref('')
</script>

<style scoped lang="scss">
.home-view {
  &__title {
    text-align: center;
  }
}
</style>
