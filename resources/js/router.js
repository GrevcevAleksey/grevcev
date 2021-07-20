import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
export const router = new Router({
    // const router = export default new Router({
        // history - чтоб были обычные слеши в путях, без решетки
        mode: 'history',
        routes: [
            // {
            //     path: '/',
            //     name: 'home',
            //     component: Auth,
            // },
            // {
            //     path: '/login',
            //     name: 'login',
            //     component: () => import('./pages/auth/login'),
            // },
            {
                path: '/register',
                name: 'register',
                component: () => import('./pages/auth/register'),
            },
            {
                path: '/login',
                name: 'login',
                component: () => import('./pages/auth/login'),
            },
        ]
    })