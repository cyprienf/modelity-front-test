import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import ModelityFilters from '@/components/ModelityFilters.vue'

import {
  default as Button,
  default as FloatLabel,
  default as InputText,
  default as Message,
  default as Toast
} from 'primevue/toast'

import ToastService from 'primevue/toastservice'

describe('ModelityFilters tests', () => {
  it('should renders properly', () => {
    const wrapper = shallowMount(ModelityFilters, {
      global: {
        components: { Button, FloatLabel, InputText, Message, Toast },
        plugins: [ToastService]
      }
    })

    expect(wrapper.find('[data-test="modelity-filters-from"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-test="modelity-filters-to"]').exists()).toBeTruthy()
  })
})
