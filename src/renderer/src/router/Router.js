import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/HomePage/HomePage.vue'),
        },
        {
            path: '/login',
            component: () => import('../views/LoginPage/LoginPage.vue'),
        },
    ]
});

export default router;
