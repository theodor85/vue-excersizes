const Home = {template: '<div><h1>Home</h1><p>Домашняя страница</p></div>'}
const About = {template: '<div><h1>About</h1><p>Траница эбаут</p></div>'}
const Blog = {template: '<div><h1>Blog</h1><p>Страница блога</p></div>'}

const routes = [
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/blog', component: Blog },
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#app')