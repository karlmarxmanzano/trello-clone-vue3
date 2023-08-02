import { useRoute, useRouter, type Router } from 'vue-router'

export const useCloseTask = () => {
  const router = useRouter()

  const close = () => router.push({ name: 'board' })

  return {
    close
  }
}
