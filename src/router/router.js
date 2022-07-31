import Layout from '../components/base/Body.vue';
import Login from '../components/auth/Login';
import Dashboard from '../pages/dashboard';

const routes = [
    {
        path: '/admin',
        component: Layout,
        children: [{
            path: '',
            component: Dashboard,
            name: 'dashboard',
            meta: { requiresAuth: true }
        }]
    },
    {
        path: '/login',
        component: Login,
        name: 'login',
    },
];

export default routes;