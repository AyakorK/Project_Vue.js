import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StoreView from '../views/StoreView.vue'
import DashboardView from '../views/DashboardView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/store',
        name: 'store',
        component: StoreView
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: DashboardView
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/account/LoginView.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () =>
            import ('../views/account/RegisterView.vue')
    }
    // {
    //     path: '/store',
    //     name: 'store',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //         import ( /* webpackChunkName: "about" */ '../views/StoreView/StoreView.vue')
    // },
    // {
    //     path: '/dashboard',
    //     name: 'dashboard',
    //     component: () =>
    //         import ( /* webpackChunkName: "about" */ '../views/DashboardView/DashboardView.vue')
    // },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router