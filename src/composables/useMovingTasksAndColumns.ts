export default function useMovingTasksAndColumns() {
  const props = defineProps({
    column: {
      type: Object,
      required: true
    },
    columnIndex: {
      type: Number,
      required: true
    },
    board: {
      type: Object,
      required: true
    }
  })

  const moveTaskOrColumn = (transferData) => {
    // if (transferData.type === 'task') {
    //   this.moveTask(transferData)
    // } else {
    //   this.moveColumn(transferData)
    // }
  }

  const moveTask = ({ fromColumnIndex, fromTaskIndex }) => {
    // const fromTasks = this.board.columns[fromColumnIndex].tasks
    // this.$store.commit('MOVE_TASK', {
    //   fromTasks,
    //   fromTaskIndex,
    //   toTasks: this.column.tasks,
    //   toTaskIndex: this.taskIndex
    // })
  }

  const moveColumn = ({ fromColumnIndex }) => {
    // this.$store.commit('MOVE_COLUMN', {
    //   fromColumnIndex,
    //   toColumnIndex: this.columnIndex
    // })
  }

  return {
    moveTaskOrColumn
  }
}
