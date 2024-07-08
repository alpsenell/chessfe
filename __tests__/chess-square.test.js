/**
 * @vitest-environment jsdom
 */
import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

import { useMovementsStore } from '../src/store/movements'
import ChessSquare from '../src/components/ChessSquare.vue'


describe('ChessSquare.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders correctly with given props', () => {
    const wrapper = mount(ChessSquare, {
      props: {
        color: 'light',
        letter: 'a',
        number: '1',
        squareKey: 'a1'
      }
    })

    expect(wrapper.classes()).toContain('chess-square--light')
    expect(wrapper.find('.chess-square__number').text()).toBe('1')
    expect(wrapper.find('.chess-square__letter').text()).toBe('a')
  })

  it('highlights the square if it is in the store movements', () => {
    const store = useMovementsStore()
    store.addMovement('a1')

    const wrapper = mount(ChessSquare, {
      props: {
        color: 'dark',
        letter: 'b',
        number: '2',
        squareKey: 'a1'
      }
    })

    expect(wrapper.classes()).toContain('chess-square--highlighted')
  })

  it('adds and removes movement on click', async () => {
    const store = useMovementsStore()

    const wrapper = mount(ChessSquare, {
      props: {
        color: 'dark',
        letter: 'b',
        number: '2',
        squareKey: 'b2'
      }
    })

    await wrapper.trigger('click')
    expect(store.movements).toContain('b2')

    await wrapper.trigger('click')
    expect(store.movements).not.toContain('b2')
  })

  it('does not show number or letter if they are false', () => {
    const wrapper = mount(ChessSquare, {
      props: {
        color: 'dark',
        letter: false,
        number: false,
        squareKey: 'd4'
      }
    })

    expect(wrapper.find('.chess-square__number').exists()).toBe(false)
    expect(wrapper.find('.chess-square__letter').exists()).toBe(false)
  })
})
