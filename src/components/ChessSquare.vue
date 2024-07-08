<script setup lang="ts">
  import { computed } from 'vue'
  import { useMovementsStore } from '../store/movements.ts'

  const props = defineProps<{
    color: string
    letter: string|boolean
    number: string|boolean
    squareKey: string
  }>()

  const store = useMovementsStore()

  const isSquareHighlighted = computed(() => {
    return store.movements.some(movement => movement === props.squareKey)
  })

  function handleClick() {
    if (isSquareHighlighted.value) {
      store.removeMovement(props.squareKey)

      return
    }

    store.addMovement(props.squareKey)
  }
</script>

<template>
  <div
    class="chess-square"
    :class="[
      props.color === 'light' ? 'chess-square--light' : 'chess-square--dark',
      { 'chess-square--highlighted': isSquareHighlighted }
    ]"
    @click="handleClick"
  >
    <span
      v-if="number !== false"
      class="chess-square__number"
    >
      {{ number }}
    </span>
    <span
      v-if="letter"
      class="chess-square__letter"
    >
      {{ letter }}
    </span>
  </div>
</template>
