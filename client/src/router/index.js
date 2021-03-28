import Vue from 'vue'
import VueRouter from 'vue-router'
//подключение страниц
import MainPage from '../components/pages/MainPage'
import LoginPage from '../components/pages/LoginPage'
import RegistrationPage from '../components/pages/RegistrationPage'
import Blogpage from '../components/pages/Blogpage'


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
            name: 'blogpage',
            path: '/blog',
            component: Blogpage
        },
        {
            name: 'coursepage',
            path: '/coursepage',
            component: Blogpage
        }

    ]
})

export default router;