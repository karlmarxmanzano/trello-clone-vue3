import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { defineStore } from 'pinia'
import { uuid } from '@/helpers/utils'
import type { Board, Column, Task } from '@/interfaces/board'
import defaultBoard from '@/assets/default-board.json'

export const useBoardStore = defineStore('board', () => {
  const router = useRouter()

  const _board = JSON.parse(localStorage.getItem('board') || JSON.stringify(defaultBoard))
  const board = ref<Board>(_board)

  console.log(board.value)

  const columnName = ref('')

  const createColumn = (): void => {
    const newColumn: Column = {
      name: columnName.value,
      tasks: []
    }

    board.value.columns?.push(newColumn)
  }

  const updateColumn = (column: Column, event: Event | KeyboardEvent): void => {
    const { target } = event
    column.name = (target as HTMLInputElement).value
  }

  const deleteColumn = (key: number): void => {
    const columns = board.value.columns
    columns?.splice(key, 1)
  }

  const createTask = (event: Event, tasks: Task[] | undefined) => {
    const { target } = event
    const newTask = {
      id: uuid(),
      name: (target as HTMLInputElement).value,
      description: '',
      comments: []
    }

    tasks?.push(newTask)
  }

  const goToTask = (task: Task) => {
    router.push({ name: 'task', params: { id: task.id } })
  }

  const updateTaskProperty = (task: Task, key: keyof typeof task, event: Event | KeyboardEvent) => {
    const { target } = event

    if (key !== 'comments') {
      task[key] = (target as HTMLInputElement).value
    }
  }

  const getTask = (taskId: string): Task => {
    return board.value.columns?.find((col) => {
      return col.tasks?.some((task) => {
        return task.id === taskId
      })
    }) as Task
  }

  const createComment = (event: Event, comments: Comment[]): void => {
    const { target } = event
    const newComment: Comment = {
      id: uuid(),
      comment: (target as HTMLInputElement).value
    }

    comments?.push(newComment)
  }

  const deleteComment = (comments: Comment[], key: number) => {
    comments.splice(key, 1)
  }

  return {
    board,
    columnName,
    createColumn,
    updateColumn,
    deleteColumn,
    createTask,
    getTask,
    goToTask,
    updateTaskProperty,
    createComment,
    deleteComment
  }
})
