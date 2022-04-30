import { createRouter, createWebHistory } from "vue-router";

import Home from '../pages/Home.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/posts/:slug',
        name: 'post',
        component: Post,
        props: true
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})