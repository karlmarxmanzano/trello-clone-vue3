<script setup lang="ts">
import type { Board, Column, Task } from '@/interfaces'
import AppDrag from '@/components/draggable/AppDrag.vue'
import AppDrop from '@/components/draggable/AppDrop.vue'
import { useBoardStore } from '@/stores/board'
import IconTrash from '@/components/icons/IconTrash.vue'
import useMovingTasksAndColumns from '@/composables/useMovingTasksAndColumns'
import { toRefs } from 'vue'

interface Props {
  task: Task
  taskIndex: number
  column: Column
  columnIndex: number
  board: Board
}

const props = defineProps<Props>()

const { moveTaskOrColumn } = useMovingTasksAndColumns({
  column: props.column,
  toColumnIndex: props.columnIndex,
  toTaskIndex: props.taskIndex,
  board: props.board
})

const { goToTask, deleteTask } = useBoardStore()
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

      <button
        @click.stop="deleteTask(columnIndex, taskIndex)"
        class="items-end text-gray-400 group-hover:text-gray-600"
      >
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
