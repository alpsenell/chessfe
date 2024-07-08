<script setup lang="ts">
import ChessSquare from './ChessSquare.vue'

const props = defineProps<{
  startDark: boolean
  showLetter: boolean
  rowIndex: number
}>()

function getLetter(index: number) {
  return 'abcdefgh'.split('').reverse().join('')[index]
}

function getNumber() {
  return '12345678'[props.rowIndex]
}
</script>

<template>
  <div class="chess-row">
    <ChessSquare
      v-for="(_, index) in 8"
      :key="index"
      :color="startDark ? (index % 2 === 0 ? 'dark' : 'light') : (index % 2 === 0 ? 'light' : 'dark')"
      :letter="props.showLetter && getLetter(index)"
      :number="index === 0 && getNumber()"
      :square-key="`${getLetter(index)}${getNumber()}`"
      class="chess-row__square"
    />
  </div>
</template>

<style scoped>

</style>
