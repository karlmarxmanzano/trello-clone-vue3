<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useBoardStore } from '@/stores/board'
import type { Task } from '@/interfaces/board'
import useCloseTask from '@/composables/useCloseTask'
import IconClose from '@/components/icons/IconClose.vue'
import TaskComment from '@/components/TaskComment.vue'

const route = useRoute()
const taskId = route.params.id as string

const store = useBoardStore()
const { getTask, updateTaskProperty, createComment } = store

const task = computed<Task | null>(() => {
  return getTask()
})

const { close: closeTask } = useCloseTask()
</script>

<template>
  <div
    class="flex flex-row w-10/12 py-4 mx-auto my-16 text-left bg-gray-300 rounded shadow md:w-6/12"
  >
    <div class="flex-col justify-between flex-grow w-full px-4">
      <div class="flex">
        <input
          type="text"
          class="w-full p-2 text-xs font-bold bg-transparent md:text-xl"
          :value="task.name"
          @change="updateTaskProperty(task, 'name', $event)"
          @keyup.enter="updateTaskProperty(task, 'name', $event)"
        />

        <button @click="closeTask" class="px-2">
          <IconClose />
        </button>
      </div>

      <textarea
        class="w-full h-64 px-2 mt-2 text-sm leading-normal bg-transparent border border-none"
        :value="task.description"
        @change="updateTaskProperty(task, 'description', $event)"
      />

      <p class="text-sm">Comments:</p>

      <TaskComment
        v-for="(comment, $commentIndex) of task.comments"
        :key="$commentIndex"
        :commentIndex="$commentIndex"
        :comment="comment"
        :comments="task.comments"
      />

      <input
        placeholder="Write a comment"
        class="w-full p-2 text-sm rounded"
        @keyup.enter="createComment($event, task.comments)"
      />
    </div>
  </div>
</template>

<style lang="css"></style>
