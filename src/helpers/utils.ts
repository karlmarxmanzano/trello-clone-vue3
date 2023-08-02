export const uuid = (): string => {
  return Math.random().toString(16).slice(2)
}
