import {createRouter, createWebHashHistory} from "vue-router"

const routes = [
    {path: '/', redirect: '/home'},
    {
        path: '/home',
        name: 'HelloWorld',
        component: () => import('../components/HelloWorld.vue'),
        meta: {title: '首页'}
    },
    {
        path:'/AudioVisual',
        name:'AuidoVisual',
        component:()=>import('../components/AudioVisual.vue'),
        meta:{title:'audio-visual'}
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router