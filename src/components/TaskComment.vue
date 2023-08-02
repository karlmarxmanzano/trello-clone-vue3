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

<script>
export default {
  name: 'TaskComment',
  props: {
    comment: {
      type: Object,
      required: true
    },
    commentIndex: {
      type: Number,
      required: true
    },
    comments: {
      type: Array,
      required: true
    }
  },
  methods: {
    deleteComment(key) {
      this.$store.commit('DELETE_COMMENT', {
        comments: this.comments,
        key: this.commentIndex
      })
    }
  }
}
</script>

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
