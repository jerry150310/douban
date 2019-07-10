import Vue from 'vue'
import Router from 'vue-router'
//一级路由
import Home from '@/components/Home'
import Login from '@/components/Login'
import Detail from '@/components/Detail'
import Error from '@/components/Error'
import Gengduo from "@/components/gengduo";
//二级路由
import Main from "@/pages/Main";

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: "/home/main"
    }, {
        path: "/home",
        component: Home,
        children: [{
            path: "/home/main",
            component: Main
        }]
    }, {
        path: "/login",
        component: Login
    }, {
        path: "/detail:id",
        component: Detail
    }, {
        path: "/gengduo",
        component: Gengduo
    }, {
        path: "*",
        component: Error
    }]
})