/**
 * @vitest-environment jsdom
 */

import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

import ChessBoard from '../src/components/ChessBoard.vue'
import ChessRow from '../src/components/ChessRow.vue'

describe('ChessBoard.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders 8 ChessRow components with correct props', () => {
    const wrapper = mount(ChessBoard)
    const chessRows = wrapper.findAllComponents(ChessRow)
    expect(chessRows.length).toBe(8)

    chessRows.forEach((chessRow, index) => {
      expect(chessRow.props('startDark')).toBe(index % 2 === 0)
      expect(chessRow.props('showLetter')).toBe(index === 7)
      expect(chessRow.props('rowIndex')).toBe(index)
    })
  })
})
