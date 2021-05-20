import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
import AboutMe from '../components/AboutMe/AboutMe.vue'
import Project from '../components/Project/Project.vue'
import RandomData from '../components/RandomData/RandomData.vue'

const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/aboutme'
        },
        {
            path: '/aboutme',
            component: AboutMe
        },
        {
            path: '/project',
            component: Project
        },
        {
            path: '/randomdata',
            component: RandomData
        }
    ]
})
export default router