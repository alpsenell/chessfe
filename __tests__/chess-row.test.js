/**
 * @vitest-environment jsdom
 */

import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

import ChessRow from '../src/components/ChessRow.vue'
import ChessSquare from '../src/components/ChessSquare.vue'

describe('ChessRow.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders 8 ChessSquare components with correct props', () => {
    const wrapper = mount(ChessRow, {
      props: {
        startDark: true,
        showLetter: true,
        rowIndex: 0
      }
    })

    const chessSquares = wrapper.findAllComponents(ChessSquare)
    expect(chessSquares.length).toBe(8)

    chessSquares.forEach((chessSquare, index) => {
      const color = index % 2 === 0 ? 'dark' : 'light'
      const letter = 'hgfedcba'[index]
      const number = '1'
      const squareKey = `${letter}${number}`

      expect(chessSquare.props('color')).toBe(color)
      expect(chessSquare.props('letter')).toBe(letter)
      expect(chessSquare.props('number')).toBe(index === 0 ? number : false)
      expect(chessSquare.props('squareKey')).toBe(squareKey)
    })
  })

  it('does not show letter showLetter is false', () => {
    const wrapper = mount(ChessRow, {
      props: {
        startDark: false,
        showLetter: false,
        rowIndex: 1
      }
    })

    const chessSquares = wrapper.findAllComponents(ChessSquare)
    expect(chessSquares.length).toBe(8)

    chessSquares.forEach((chessSquare, index) => {
      const color = index % 2 === 0 ? 'light' : 'dark'

      expect(chessSquare.props('color')).toBe(color)
      expect(chessSquare.props('letter')).toBe(false)
    })
  })
})
