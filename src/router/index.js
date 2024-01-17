// import Vue from 'vue';
// import Router from 'vue-router' // 这是Router3的写法 实际上在Router4中已经不允许这样使用了.
import {createRouter, createWebHistory} from 'vue-router'
import homeIndex from "@/views/home-index/home-index.vue";


const routes = [
    {
        path: '/home-index',
        name: 'home-index',
        component: homeIndex
    },
    {
        path: '/login-index',
        name: 'login-index',
        component: () => import(/* webpackChunkName: "login" */ '/src/views/login/login-index.vue')
    },
    {
        path: '/css-demo',
        name: 'css-demo-list',
        component: () => import(/* webpackChunkName: "login" */ '/src/views/css-demo/css-demo-index.vue')
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})


