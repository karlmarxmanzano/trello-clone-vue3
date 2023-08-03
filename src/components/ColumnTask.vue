<script setup lang="ts">
// import movingTasksAndColumnsMixin from '@/mixins/movingTasksAndColumnsMixin'
import type { Board, Column, Task } from '@/interfaces/board'
import AppDrag from './AppDrag.vue'
import AppDrop from './AppDrop.vue'
import { useBoardStore } from '@/stores/board'
import IconTrash from './icons/IconTrash.vue'

interface Props {
  task: Task
  taskIndex: number
  column: Column
  columnIndex: number
  board: Board
}

const props = defineProps<Props>()

const moveTaskOrColumn = () => {}
// const goToTask = () => {}
const deleteTask = () => {}

const { goToTask } = useBoardStore()
</script>

<template>
  <AppDrop @drop="moveTaskOrColumn">
    <AppDrag
      class="flex items-center justify-between flex-grow px-2 py-2 mb-2 text-sm text-gray-900 no-underline bg-white rounded shadow cursor-pointer group"
      :transferData="{
        type: 'task',
        fromColumnIndex: columnIndex,
        fromTaskIndex: taskIndex
      }"
      @click.native="goToTask(props.task)"
      :key="props.task.id"
    >
      <span class="flex-grow text-sm font-medium truncate">{{ task.name }}</span>

      <button @click.stop="deleteTask" class="items-end text-gray-400 group-hover:text-gray-600">
        <IconTrash />
      </button>
    </AppDrag>
  </AppDrop>
</template>

<style lang="css">
.list-enter-active,
.list-leave-active {
  transition: all 0.2s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
