<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useBoardStore } from '@/stores/board'
import { storeToRefs } from 'pinia'
import { useCloseTask } from '@/composables/useCloseTask'
import BoardColumn from '@/components/BoardColumn.vue'

const route = useRoute()
const isTaskOpen = computed(() => route.name === 'task')

const store = useBoardStore()
const { board, columnName } = storeToRefs(store)
const { createColumn } = store

// Persist the whole state to the local storage whenever it changes
// store.$subscribe((mutation, state) => {
//   localStorage.setItem('board', JSON.stringify(board))
// })
</script>

<template>
  <div class="h-full p-4 overflow-auto rounded">
    <div class="flex flex-row items-start">
      <BoardColumn
        v-for="(column, $columnIndex) of board.columns"
        :key="$columnIndex"
        :column="column"
        :columnIndex="$columnIndex"
        :board="board"
      />

      <div class="relative flex flex-col">
        <input
          type="text"
          class="flex-grow w-64 max-w-sm p-2 mr-2 text-sm bg-gray-300 rounded md:w-84"
          placeholder="+ Add new list"
          v-model="columnName"
        />
      </div>
    </div>

    <div class="h-screen inset-0 absolute overflow-auto bg-[rgba(0_0_0_0.5)]" v-if="isTaskOpen">
      <router-view />
    </div>
  </div>
</template>

<style lang="css"></style>
