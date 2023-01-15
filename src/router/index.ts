import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Container from '../components/container/src/index.vue'


import Home from '../views/home.vue'

const routes:RouteRecordRaw[] = [
    {
        path: '/',
        component: Container,
        children:[
            {
                path: '/',
                component: Home
            },
            {
                path: '/chooseArea',
                component: () => import('../views/chooseArea/index.vue')
            },
            {
                path: '/trend',
                component: () => import('../views/trend/index.vue')
            },
            {
                path: '/notification',
                component: () => import('../views/notification/index.vue')
            },
            {
                path: '/menu',
                component: () => import('../views/menu/index.vue')
            },
        ]

    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
  })
  
  export default router