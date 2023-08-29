<script setup lang="ts">
const emit = defineEmits(['drop'])

const onDrop = (e: DragEvent) => {
  if (e.dataTransfer) {
    const transferData = JSON.parse(e.dataTransfer.getData('payload'))
    emit('drop', transferData)
  }
}
</script>

<template>
  <div @drop.stop="onDrop" @dragover.prevent @dragenter.prevent>
    <slot />
  </div>
</template>

<style lang="css" scoped></style>
