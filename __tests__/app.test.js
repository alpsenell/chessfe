/**
 * @vitest-environment jsdom
 */

import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'

import App from '../src/App.vue'
import ChessBoard from '../src/components/ChessBoard.vue'
import SideMenu from '../src/components/SideBar.vue'

describe('App.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders ChessBoard and SideMenu components', () => {
    const wrapper = mount(App)
    const chessBoard = wrapper.findComponent(ChessBoard)
    const sideMenu = wrapper.findComponent(SideMenu)

    expect(chessBoard.exists()).toBe(true)
    expect(sideMenu.exists()).toBe(true)
  })
})
