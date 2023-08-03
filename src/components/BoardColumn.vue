<script setup lang="ts">
import ColumnTask from './ColumnTask.vue'
import AppDrag from './AppDrag.vue'
import AppDrop from './AppDrop.vue'
import useMovingTasksAndColumns from '@/composables/useMovingTasksAndColumns'
import { storeToRefs } from 'pinia'
import { useBoardStore } from '@/stores/board'
import type { Board, Column } from '@/interfaces/board'
import IconTrash from './icons/IconTrash.vue'

const props = defineProps<{
  board: Board
  column: Column
  columnIndex: number
}>()

// const { moveTaskOrColumn } = useMovingTasksAndColumns

const moveTaskOrColumn = () => {}

const store = useBoardStore()

const { updateColumn, deleteColumn, createTask } = store
</script>

<template>
  <AppDrop @drop="moveTaskOrColumn">
    <AppDrag
      class="w-64 max-w-sm p-2 mx-2 text-left bg-gray-300 rounded shadow md:w-84"
      :transferData="{
        type: 'column',
        fromColumnIndex: props.columnIndex
      }"
    >
      <div class="flex items-center group">
        <input
          type="text"
          class="flex items-center w-full p-2 mb-2 font-bold bg-transparent"
          :value="column.name"
          @change="updateColumn(column, $event)"
          @keyup.enter="updateColumn(column, $event)"
        />

        <button
          @click="deleteColumn(props.columnIndex)"
          class="items-end pl-2 text-gray-400 group-hover:text-gray-600"
        >
          <IconTrash />
        </button>
      </div>

      <ColumnTask
        v-for="(task, $taskIndex) of column.tasks"
        :key="$taskIndex"
        :task="task"
        :taskIndex="$taskIndex"
        :column="column"
        :columnIndex="props.columnIndex"
        :board="board"
      />

      <input
        type="text"
        class="w-full p-2 text-xs bg-transparent"
        placeholder="+ Add another card"
        @keyup.enter="createTask($event, column.tasks)"
      />
    </AppDrag>
  </AppDrop>
</template>

<style lang="css"></style>
