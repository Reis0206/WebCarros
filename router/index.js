import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/dashboard.vue'),
    },
    {
      path: '/clientes',
      children: [
        { path: '', name: 'clientes.index', component: () => import('@/views/clientes/index.vue') },
        { path: 'add', name: 'clientes.add', component: () => import('@/views/clientes/add.vue') },
        { path: ':id/edit', name: 'clientes.edit', component: () => import('@/views/clientes/edit.vue') },
        { path: ':id/show', name: 'clientes.show', component: () => import('@/views/clientes/show.vue') },
      ],
    },
    {
      path: '/carros',
      children: [
        { path: '', name: 'carros.index', component: () => import('@/views/carros/index.vue') },
        { path: 'add', name: 'carros.add', component: () => import('@/views/carros/add.vue') },
        { path: ':id/edit', name: 'carros.edit', component: () => import('@/views/carros/edit.vue') },
        { path: ':id/show', name: 'carros.show', component: () => import('@/views/carros/show.vue') },
      ],
    },
  ],
})

export default router
