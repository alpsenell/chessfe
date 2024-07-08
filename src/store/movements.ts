import { defineStore } from 'pinia'

export const useMovementsStore = defineStore('movements', {
  state: () => ({
    movements:<string[]> [],
  }),
  actions: {
    addMovement(movement: string) {
      if (this.movements.includes(movement)) {
        return
      }

      this.movements.push(movement)
    },
    removeMovement(movement: string) {
      const index = this.movements.indexOf(movement)
      if (index === -1) {
        return
      }

      this.movements.splice(index, 1)
    },
    resetMovements() {
      this.movements = []
    }
  }
})
