import { useRouter } from 'vue-router'

const useCloseTask = () => {
  const router = useRouter()

  const close = () => router.push({ name: 'board' })

  return {
    close
  }
}

export default useCloseTask
