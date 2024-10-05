import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import HomeView from '@/views/HomeView.vue'

import {
  default as Button,
  default as FloatLabel,
  default as InputText,
  default as Message,
  default as Toast
} from 'primevue/toast'

describe('HomeView tests', () => {
  it('should renders properly', () => {
    const wrapper = shallowMount(HomeView, {
      global: {
        components: { Button, FloatLabel, InputText, Message, Toast }
      }
    })

    expect(wrapper.get('[data-test="home-view-title"]').text()).toBe('Modelity path finder')
    expect(wrapper.find('[data-test="home-view-filters"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-test="home-view-map"]').exists()).toBeTruthy()
  })
})
