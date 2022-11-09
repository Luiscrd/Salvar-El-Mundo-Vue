import { createRouter, createWebHistory } from 'vue-router'
import isCorrectAnswerGuard from './aswer-guard'


const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "index" */ '@/views/Index.vue')
  },
  {
    path: '/formulario',
    name: 'formulario',
    component: () => import(/* webpackChunkName: "formulario" */ '@/views/Formulario.vue'),
    children: [
      {
        path: ':id',
        name: 'answer',
        component: () => import(/* webpackChunkName: "anwer" */ '@/components/Answer.vue'),
        beforeEnter: [isCorrectAnswerGuard],
        props: ( route ) => {
          return {
              id: route.params.id
          }
      } 
      },
      {
        path: 'error',
        name: 'error',
        component: () => import(/* webpackChunkName: "error" */ '@/components/Fallo.vue'),
      },
      {
        path: 'acierto',
        name: 'acierto',
        component: () => import(/* webpackChunkName: "acierto" */ '@/components/Acierto.vue'),
      },
      {
        path: 'fin',
        name: 'fin',
        component: () => import(/* webpackChunkName: "fin" */ '@/components/Fin.vue'),
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import(/* webpackChunkName: "not-found" */ '@/modules/shared/pages/NoPageFound.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
