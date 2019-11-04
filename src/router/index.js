import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Home from '../components/home.vue';
import Login from '../components/login.vue';
import Register from '../components/register.vue';
import Personal from '../components/personal.vue';

const mainRoutes = [
    {path:'/',redirect: '/home'},//默认根目录跳转到/login
    {path:'/home',component: Home},
    {path:'/personal',component: Personal},
    {path:'/login',component: Login},
    {path:'/register',component: Register},
];

const router = new Router({
    routes:mainRoutes,
    linkActiveClass:'myActive'//设置激活类名用于修改样式
});

export default router
