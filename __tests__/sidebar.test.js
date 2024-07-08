/**
 * @vitest-environment jsdom
 */

import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

import { useMovementsStore } from '../src/store/movements'
import Sidebar from '../src/components/Sidebar.vue'


describe('Sidebar.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders movements when store has data', () => {
    const store = useMovementsStore()
    store.addMovement('a3')
    const wrapper = mount(Sidebar)

    const movements = wrapper.findAll('.sidebar__movement')
    expect(movements.length).toBe(1)
    expect(movements[0].text()).toBe('1. a3')

    const resetButton = wrapper.find('.sidebar__reset')
    expect(resetButton.exists()).toBe(true)
  })

  it('does not render movements or reset button when store has no data', () => {
    const wrapper = mount(Sidebar)

    const movements = wrapper.findAll('.sidebar__movement')
    expect(movements.length).toBe(0)

    const resetButton = wrapper.find('.sidebar__reset')
    expect(resetButton.exists()).toBe(false)
  })
})
