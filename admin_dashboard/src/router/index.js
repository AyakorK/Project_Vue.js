import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StoreView from '../views/StoreView.vue'
import DashboardView from '../views/DashboardView.vue'
import ClientsView from '../views/ClientsView.vue'
import CommandesView from '../views/CommandesView.vue'
import ProduitsView from '../views/ProduitsView.vue'
import CategoriesView from '../views/CategoriesView.vue'
import ProfilView from '../views/ProfilView.vue'
import PaginationView from '../views/PaginationView.vue'

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
        path: '/clients',
        name: 'clients',
        component: ClientsView
    },
    {
        path: '/commandes',
        name: 'commandes',
        component: CommandesView
    },
    {
        path: '/produits',
        name: 'produits',
        component: ProduitsView
    },
    {
        path: '/categories',
        name: 'categories',
        component: CategoriesView
    },
    {
        path: '/profil',
        name: 'profil',
        component: ProfilView
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
    },
    {
        path: '/pagination',
        name: 'pagination',
        component: PaginationView
    },
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