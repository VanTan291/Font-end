
import Login from './components/user/Login'
import Register from './components/user/Register'
import Master from './components/admin/layouts/Master'
import Index from './components/user/Index'
import Home from './components/user/Home'
import PostDetail from './components/user/PostDetail'
import Post from './components/admin/post/Index'
import PostAdd from './components/admin/post/Create'
import PostEdit from './components/admin/post/Edit'
import Dashboard from './components/admin/Dashboard/Index'

export const routes = [
    { path: '/', name: 'Home', component: Home, 
        children: [
            { path: '/', name: 'index', component: Index},
            { path: '/post-detail', name: 'post-detail', component: PostDetail},
            { path: '/login', name: 'login', component:Login},
            { path: '/register', name: 'register', component:Register},       
        ],
    },
   
    { path: '/master', name: 'master', component:Master,
        children: [
            { path: '/dashboard', name: 'dashboard', component: Dashboard},
            { path: '/post', name: 'index', component: Post},
            { path: '/post-add', name: 'add', component: PostAdd},
            { path: '/post-edit', name: 'edit', component: PostEdit}          
        ],
    },
   
]