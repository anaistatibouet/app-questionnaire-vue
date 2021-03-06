import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

// 09/11
// Définition des routes qui permettent de naviguer entre les différentes pages du projet

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./views/Home.vue'),
        },
        {
            path: '/choice',
            name: 'choice',
            component: () => import('./views/Choice.vue'),
        },
        {
            path: '/questionnaire',
            name: 'questionnaire',
            component: () => import('./views/Questionnaire.vue'),
        },
        {
            path: '/result',
            name: 'result',
            component: () => import('./views/Result.vue'),
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('./views/DashboardAdmin.vue'),
        },
    ],
})
