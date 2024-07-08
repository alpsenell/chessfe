<script setup lang="ts">
import ChessRow from './ChessRow.vue'

</script>

<template>
  <div class="chess-board">
    <div class="chess-board__wrapper">
      <ChessRow
        v-for="(_, index) in 8"
        :key="index"
        :start-dark="index % 2 === 0"
        :show-letter="index === 7"
        :row-index="index"
      />
    </div>
  </div>
</template>
