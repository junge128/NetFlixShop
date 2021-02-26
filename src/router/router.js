import HelloWorld from '../components/HelloWorld'
import Login from '../components/login'
import User from '../components/user'

export default [
    {
    path: '/',
    component: HelloWorld
    },
    {
    path: '/login',
    component: Login
    },
    {
    path: '/user',
    component: User
    },
    {
    path: '/*',
    redirect: "/"
    }
]