<script setup lang="ts">
import { useMovementsStore } from '../store/movements.ts'

const store = useMovementsStore()
</script>

<template>
  <div class="sidebar">
    <h1 class="sidebar__title">Movements</h1>
    <div class="sidebar__content">
      <div
        v-if="store?.movements?.length"
        class="sidebar__movements">
        <div
          v-for="(movement, index) in store.movements"
          :key="movement"
          class="sidebar__movement tracking-in-expand-fwd"
        >
          {{ index + 1 }}. {{ movement }}
        </div>
      </div>

      <h3
        v-else
        class="sidebar__no-movement"
      >
        No movements yet
      </h3>

      <button
        v-if="store?.movements?.length"
        class="sidebar__reset"
        @click="store.resetMovements"
      >
        Reset
      </button>
    </div>
  </div>
</template>
