import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'board',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BoardView.vue'),
      children: [
        {
          path: 'task/:id',
          name: 'task',
          component: () => import('../views/TaskView.vue'),
        }
      ]
    }
  ]
})

export default router
