import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/auth/Login.vue'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/auth/Register.vue'),
      },
      {
        path: 'meu-perfil',
        name: 'Meu Perfil',
        component: () => import('@/views/Profile.vue'),
      },
      {
        path: 'vaga/:id',
        name: 'vaga',
        component: () => import('@/views/Vaga.vue'),
      },
      {
        path: 'empresa/:id',
        name: 'empresa',
        component: () => import('@/views/Empresa.vue'),
      },
    ],
  },
  {
    path: '/404',
    name: 'Not Found',
    component: () => import('@/views/maintenance/NotFound.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

})

export default router
