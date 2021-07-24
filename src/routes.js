
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/admin'
import IndexTodo from './components/admin/todos/Index'

export const routes = [
    { path: '/login', name: 'login', component:Login},
    { path: '/register', name: 'register', component:Register},
    { path: '/', name: 'home', component:Home},
    { path: '/IndexTodo', name: 'IndexTodo', component:IndexTodo}
]