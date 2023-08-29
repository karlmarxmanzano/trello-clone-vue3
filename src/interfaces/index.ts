import type { TransferDataType } from '@/types'

export interface Board {
  name: string
  columns: Column[]
}

export interface Column {
  name: string
  tasks: Task[]
}

export interface Task {
  id: string
  name: string
  description: string
  userAssigned: string | null
  comments: Comment[]
}
export interface Comment {
  id: string
  comment: string
}

export interface TransferData {
  type: TransferDataType
  fromColumnIndex: number
  fromTaskIndex?: number
}

export interface MovingTaskAndColumnProp {
  column: Column | null
  columnIndex: number | null
  taskIndex: number | null
  board: Board | null
}
