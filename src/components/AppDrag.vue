<script setup lang="ts">
interface Props {
  transferData: TransferData
}

interface TransferData {
  type: types
  fromColumnIndex: number
  fromTaskIndex?: number
}

type types = 'task' | 'column'

const props = defineProps<Props>()

// const onDrag = (el: DragEvent) => {
//   el.dataTransfer!.effectAllowed = 'move'
//   el.dataTransfer!.dropEffect = 'move'
//   el.dataTransfer!.setData('payload', JSON.stringify(props.transferData))
// }
</script>

<template>
  <!-- <div draggable @dragstart.self="onDrag" @dragover.prevent @dragenter.prevent> -->
  <div>
    <slot />
  </div>
</template>

<style lang="css" scoped></style>
