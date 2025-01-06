import {createRouter, createWebHashHistory} from "vue-router"

const routes = [
    {path: '/', redirect: '/home'},
    {
        path: '/home',
        name: 'HelloWorld',
        component: () => import('../components/HelloWorld.vue'),
        meta: {title: '首页'}
    },{
        path: '/echartsform',
        name: 'EchartsForm',
        component: () => import('../components/EchartsForm/echartsOne.vue'),
        meta: {title: 'Echarts绘图'}
    },{
        path: '/dataVone',
        name: 'dataVone',
        component: () => import('../components/EchartsForm/dataVone.vue'),
        meta: {title: 'DataV边框'}
    },
    {
        path:'/AudioVisual',
        name:'AuidoVisual',
        component:()=>import('../components/AudioVisual.vue'),
        meta:{title:'audio-visual'}
    },{
        path:'/FirstHover',
        name:'FirstHover',
        component:()=>import('../components/HoverFunction/FirstHover.vue'),
        meta:{title:'FirstHover'}
    },{
        path:'/SecondHover',
        name:'SecondHover',
        component:()=>import('../components/HoverFunction/SecondHover.vue'),
        meta:{title:'SecondHover'}
    },{
        path:'/ClickFirst',
        name:'ClickFirst',
        component:()=>import('../components/ClickEvent/clickFirst.vue'),
        meta:{title:'点击事件'}
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router