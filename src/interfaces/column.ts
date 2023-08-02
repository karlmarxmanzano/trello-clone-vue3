import { Task } from './task'

export default interface Column {
  name: string
  tasks?: Task[]
}
