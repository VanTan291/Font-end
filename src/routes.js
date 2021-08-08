
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/admin/Dashboard'
import ListPost from './components/ListPost'
import Post from './components/admin/post/Index'
import PostAdd from './components/admin/post/Create'

export const routes = [
    { path: '/', name: 'ListPost', component: ListPost},
    { path: '/login', name: 'login', component:Login},
    { path: '/register', name: 'register', component:Register},
    { path: '/dashboard', name: 'dashboard', component:Dashboard,
        children: [
            {
            path: '/post',
            component: Post,         
            },
            {
            path: '/post-add',
            component: PostAdd,         
            }       
        ],
    },
    // { path: '/post', name: 'post', component: Post},
    // { path: '/post-add', name: 'post-add', component: PostAdd},
   
]