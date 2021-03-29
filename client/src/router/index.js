/* импорт библиотек*/
import Vue from 'vue'
import VueRouter from 'vue-router'
//подключение страниц
import MainPage from '../components/pages/MainPage'
import LoginPage from '../components/pages/LoginPage'
import RegistrationPage from '../components/pages/RegistrationPage'
import Blogpage from '../components/pages/Blogpage'
import CoursePage from "../components/pages/CoursePage"
import BlogPost from '../components/blogPost/BlogPost'
import Recording from '../components/blogPost/Recording'


Vue.use(VueRouter);
/* переход по страницам*/
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
            name: 'coursePage',
            path: '/course',
            component: CoursePage
        },
        {
            name: 'BlogPost',
            path: '/blogPost',
            component: BlogPost
        },
        {
            name: 'RecordingPage',
            path: '/recording',
            component: Recording
        }

    ]
})

export default router;