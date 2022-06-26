import Layout from '../components/base/Body.vue';
import Login from '../components/auth/Login';
import Dashboard from '../pages/dashboard';

const routes = [
    {
        path: '/admin',
        component: Layout,
        meta: { requiresAuth: true },
        children: [{
                path: '',
                component: Dashboard,
                name: 'dashboard',
            },
        ]
    },
    {
        path: '/login',
        component: Login,
        name: 'login',
        meta: { guest: true }
    },
];

export default routes;