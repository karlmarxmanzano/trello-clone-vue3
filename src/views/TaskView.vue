<script setup lang="ts">
import { computed, ref } from 'vue'

type Task = {
  id: string
  name: string
  description: string
  userAssigned?: string
  comments?: Comment[]
}

// const task = computed<Task>(() => {

// })

const task = ref()

type Comment = {
  comment: string
}

const comment = ref<Comment>()

const createComment = (e: Event, comment: Comment) => {}

const updateTaskProperty = (e: Event, key: String) => {}
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
          @change="updateTaskProperty($event, 'name')"
          @keyup.enter="updateTaskProperty($event, 'name')"
        />

        <button @click="" class="px-2">
          <!-- <font-awesome-icon icon="times" /> -->
          Times
        </button>
      </div>

      <textarea
        class="w-full h-64 px-2 mt-2 text-sm leading-normal bg-transparent border border-none"
        :value="task.description"
        @change="updateTaskProperty($event, 'description')"
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
