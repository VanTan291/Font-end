
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/admin/Dashboard'

export const routes = [
    { path: '/login', name: 'login', component:Login},
    { path: '/register', name: 'register', component:Register},
    { path: '/dashboard', name: 'dashboard', component:Dashboard}
]