import type { Board, Column, Task, TransferData } from '@/interfaces'
import { useBoardStore } from '@/stores/board'
import { storeToRefs } from 'pinia'

interface Props {
  column: Column
  toColumnIndex: number
  toTaskIndex: number
  board: Board
}

const useMovingTasksAndColumns = (props: Props) => {
  const store = useBoardStore()
  const { board } = storeToRefs(store)

  const moveTaskOrColumn = (transferData: TransferData) => {
    if (transferData.type === 'task') {
      moveTask(transferData)
    } else {
      moveColumn(transferData)
    }
  }

  const moveTask = ({ fromColumnIndex, fromTaskIndex }: TransferData) => {
    const fromTasks = board.value.columns[fromColumnIndex].tasks

    if (fromTaskIndex === undefined) {
      throw new Error('From task index is undefined.')
    }

    if (props.toTaskIndex === undefined) {
      throw new Error('To task index is undefined.')
    }

    const taskToMove = fromTasks.splice(fromTaskIndex, 1)[0]
    props.column.tasks.splice(props.toTaskIndex, 0, taskToMove)
  }

  const moveColumn = ({ fromColumnIndex }: TransferData) => {
    const columnList = board.value.columns
    const columnToMove = columnList.splice(fromColumnIndex, 1)[0]
    columnList.splice(props.toColumnIndex, 0, columnToMove)
  }

  return {
    moveTaskOrColumn
  }
}

export default useMovingTasksAndColumns
