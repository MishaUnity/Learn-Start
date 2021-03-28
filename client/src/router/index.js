import Vue from 'vue'
import VueRouter from 'vue-router'
//подключение страниц
import MainPage from '../components/pages/MainPage'
import LoginPage from '../components/pages/LoginPage'
import RegistrationPage from '../components/pages/RegistrationPage'
import Block from '../components/transition/block.vue'


Vue.use(VueRouter);

let router = new VueRouter({
    routes: [
        {
            name: 'main',
            path: '/main',
            component: MainPage
        },
        {
            name: 'login',
            path: '/',
            component: LoginPage
        },

        {
            name: 'registration',
            path: '/registration',
            component: RegistrationPage
        },
        {
            name:'block',
            path: '/block',
            component: Block
        }

    ]
})

export default router;