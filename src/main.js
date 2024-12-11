import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import AVPlugin from 'vue-audio-visual'
// import VueAudio from 'vue-audio-better'
// import echarts from 'echarts'
import * as echarts from 'echarts';
import { BarChart } from 'echarts-gl'
import { borderBox8,borderBox4,decoration12 } from '@jiaminghi/data-view'

import './bordercolor.css'

const app=createApp(App)
app.config.globalProperties.$echarts = echarts;
// const myPlugin = {
//     install(app,options){
//         app.provide($echarts)
//     }
// }
app.use(borderBox4)
app.use(decoration12)
app.use(borderBox8)
app.use(BarChart);
app.use(ElementPlus)
app.use(router)
app.use(AVPlugin)
// .use(VueAudio)
app.mount('#app')