export default interface Task {
  id: string
  name: string
  description: string
  userAssigned?: string | null
  comments?: Comment[]
}
