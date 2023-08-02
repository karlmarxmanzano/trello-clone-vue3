import Column from './column'

export default interface Board {
  name: string
  columns?: Column[]
}
