<script setup lang="ts">
import type { TransferData } from '@/interfaces'

interface Props {
  transferData: TransferData
}

const props = defineProps<Props>()

const onDrag = (el: DragEvent) => {
  const dataTransfer = el.dataTransfer

  if (dataTransfer) {
    dataTransfer.effectAllowed = 'move'
    dataTransfer.dropEffect = 'move'
    dataTransfer.setData('payload', JSON.stringify(props.transferData))
  }
}
</script>

<template>
  <div draggable="true" @dragstart.self="onDrag" @dragover.prevent @dragenter.prevent>
    <slot />
  </div>
</template>

<style lang="css" scoped></style>
