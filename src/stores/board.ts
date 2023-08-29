import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { defineStore } from 'pinia'
import { uuid } from '@/helpers/utils'
import type { Board, Column, Task, Comment } from '@/interfaces'
import defaultBoard from '@/assets/default-board.json'

export const useBoardStore = defineStore('board', () => {
  const route = useRoute()
  const router = useRouter()

  const _board = JSON.parse(localStorage.getItem('board') || JSON.stringify(defaultBoard))
  const board = ref<Board>(_board)

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
    board.value.columns?.splice(key, 1)
  }

  const createTask = (event: Event, tasks: Task[] | undefined) => {
    const { target } = event
    const newTask = {
      id: uuid(),
      name: (target as HTMLInputElement).value,
      description: '',
      userAssigned: null,
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

  const selectedTask = computed<Task>(() => {
    const id = route.params.id

    for (const column of board.value.columns ?? []) {
      for (const _task of column?.tasks ?? []) {
        if (_task.id === id) {
          return _task
        }
      }
    }

    throw new Error('404: Task not found.')
  })

  // const getTask = (): Task | null => {
  //   const id = route.params.id

  //   for (const column of board.value.columns ?? []) {
  //     for (const _task of column?.tasks ?? []) {
  //       if (_task.id === id) {
  //         return _task
  //       }
  //     }
  //   }

  //   return null
  // }

  const deleteTask = (columnIndex: number, taskIndex: number) => {
    const columns = board.value.columns

    columns[columnIndex].tasks?.splice(taskIndex, 1)
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
    selectedTask,
    goToTask,
    deleteTask,
    updateTaskProperty,
    createComment,
    deleteComment
  }
})
