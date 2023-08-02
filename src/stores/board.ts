import { ref } from 'vue'
import { defineStore } from 'pinia'
import { uuid } from '@/helpers/utils'
import defaultBoard from '@/assets/default-board.json'
import type { Board } from '@/interfaces/board'
import type { Column } from '@/interfaces/column'

export const useBoardStore = defineStore('board', () => {
  let board = ref<Board>({
    name: 'trello-clone-default-board',
    columns: [
      {
        name: 'Tasks',
        tasks: [
          {
            description: '',
            name: 'Update TailwindCSS in trello-clone project',
            id: '1a48ffd5d3279',
            userAssigned: null,
            comments: []
          },
          {
            description: '',
            name: 'Refactor UI design',
            id: '49e3c13f95f56',
            userAssigned: null,
            comments: []
          },
          {
            description: '',
            name: 'Implement Browser Draggable API',
            id: 'cc61af7b0f7d8',
            userAssigned: null,
            comments: []
          }
        ]
      },
      {
        name: 'For Review',
        tasks: [
          {
            description: '',
            name: 'Add new task',
            id: 'c79d312bb5d81',
            userAssigned: null,
            comments: []
          },
          {
            description: '',
            name: 'Add new column',
            id: '55c97713e03a5',
            userAssigned: null,
            comments: []
          }
        ]
      },
      {
        name: 'Done',
        tasks: [
          {
            description: '',
            name: 'Deploy initial project',
            id: '16ed9109733c1',
            userAssigned: null,
            comments: []
          }
        ]
      }
    ]
  })

  const columnName = ref('')

  const createColumn = ({ name }: { name: string }): void => {
    const col = {
      name,
      tasks: []
    }

    board = { ...board, col }

    return
  }

  const updateColumn = ({
    column,
    key,
    value
  }: {
    column: Column
    key: number
    value: string
  }): void => {
    // column[key] = value
    return
  }

  const deleteColumn = ({ key }: { key: number }): void => {
    // const columns = board.value.columns

    // columns?.splice(key, 1)

    return
  }

  // const getTask = ()  => {
  //   return (id: String) => {
  //     const columns = board.value.columns

  //     columns?.find((column) => {
  //       return column.tasks?.some((task) => {
  //         return task.id === id
  //       })
  //     })
  //   }
  // }

  // const createTask = (state, { tasks, name }) => {
  //   tasks.push({
  //     name,
  //     id: uuid(),
  //     description: '',
  //     comments: []
  //   })
  // }

  // const updateTask = ({ task, key, value }) => {
  //   task[key] = value
  // }

  // const deleteTask = ({ columnIndex, key }) => {
  //   const taskList = board.value.columns[columnIndex].tasks
  //   taskList.splice(key, 1)
  // }

  // const createComment = ({ comments, comment }) => {
  //   comments.push({
  //     comment,
  //     id: uuid()
  //   })
  // }

  // const deleteComment = ({ comments, key }) => {
  //   comments.splice(key, 1)
  // }

  // const moveTask = ({ fromTasks, toTasks, fromTaskIndex, toTaskIndex }) => {
  //   const taskToMove = fromTasks.splice(fromTaskIndex, 1)[0]
  //   toTasks.splice(toTaskIndex, 0, taskToMove)
  // }

  // const moveColumn = ({ fromColumnIndex, toColumnIndex }) => {
  //   const columnList = state.board.columns

  //   const columnToMove = columnList.splice(fromColumnIndex, 1)[0]
  //   columnList.splice(toColumnIndex, 0, columnToMove)
  // }

  return { board, columnName, createColumn, updateColumn, deleteColumn }
})
