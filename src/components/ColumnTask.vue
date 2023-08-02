<script setup lang="ts">
// import movingTasksAndColumnsMixin from '@/mixins/movingTasksAndColumnsMixin'
import AppDrag from './AppDrag.vue'
import AppDrop from './AppDrop.vue'

interface Board {
  name: string
  columns?: Column[]
}

interface Column {
  name: string
  tasks?: Task[]
}

interface Task {
  id: string
  name: string
  description: string
  userAssigned?: string
  comments?: Comment[]
}

interface Comment {
  comment: string
}

interface Props {
  task: Task
  taskIndex: number
  column: Column
  columnIndex: number
  board: Board
}

const props = defineProps<Props>()

const moveTaskOrColumn = () => {}
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
        <!-- <font-awesome-icon icon="trash-alt" /> -->
        Del
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
