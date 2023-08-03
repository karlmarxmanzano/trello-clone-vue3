<script setup lang="ts">
import { useBoardStore } from '@/stores/board'

interface Props {
  comment: Comment
  commentIndex: number
  comments: Comment[]
}
const props = defineProps<Props>()

const store = useBoardStore()
const { deleteComment } = store
</script>

<template>
  <div>
    <div
      class="flex-wrap items-center p-4 text-sm text-gray-900 no-underline bg-white rounded cursor-pointer"
    >
      <p class="w-full text-sm break-words font-medium-desc">{{ comment.comment }}</p>
    </div>

    <button @click="deleteComment">
      <p class="pl-2 mt-0 text-xs text-gray-600 hover:text-gray-700">Remove</p>
    </button>
  </div>
</template>

<style scoped>
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
