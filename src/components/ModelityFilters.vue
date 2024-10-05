<template>
  <div class="modelity-filters">
    <FloatLabel>
      <InputText id="from" type="text" v-model="from" :invalid="from === null" />
      <label for="from">Start</label>
    </FloatLabel>

    <FloatLabel>
      <InputText id="to" v-model="to" :invalid="to === null" />
      <label for="to">Destination</label>
    </FloatLabel>
  </div>
</template>

<script setup lang="ts">
import type { ModelRef } from 'vue'

const from: ModelRef<string | undefined> = defineModel('from')
const to: ModelRef<string | undefined> = defineModel('to')
</script>

<style scoped lang="scss">
.modelity-filters {
  display: flex;
  gap: 0.5rem;
}
</style>
