import Login from '../components/auth/Login';

const routes = [
    {
        path: '/login',
        component: Login,
        name: 'login',
        meta: { guest: true }
    },
];

export default routes;