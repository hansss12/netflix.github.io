import { createRouter, createWebHistory } from "vue-router";
import home from "../views/login.vue"
import login from "../views/sign-in.vue"
import homePage from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/home',
            name: 'homePage',
            component: homePage,
        },
        {
            path: '/detail/:id',
            name: "detail",
            component: () => import('../views/detail.vue')
        },
        {
            path: '/subscribe/:id',
            name: 'subscribe',
            component: () => import('../views/validateCard.vue')
        },
        {
            path: "/account",
            name: 'account',
            component: () => import('../views/profile.vue')
        },
        {
            path: "/admin",
            name: 'admin'
        },
        {
            path: "/card",
            name: "card",
            component: () => import('../views/card.vue')
        },
        {
            path: "/upcoming",
            component: () => import("../views/upcoming.vue"),
            children: [
                {
                    path: 'tmdb/:id',
                    component: () => import('../components/detailTmdb.vue')
                },
                {
                    path: '/upcoming',
                    component: () => import('../components/trendingTmdb.vue')
                }
            ]
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.name == 'login' && localStorage.access_token) {
        next({ name: 'homePage' })
    } else if (to.name == 'home' && localStorage.access_token) {
        next({ name: 'homePage' })
    } else if (to.name == 'homePage' && !localStorage.access_token) {
        next({ name: 'login' })
    } else if (to.name == 'subscribe' && !localStorage.card_token) {
        next({ name: 'card' })
    } else {
        next()
    }
})

export default router