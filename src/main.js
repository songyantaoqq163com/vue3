import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import AVPlugin from 'vue-audio-visual'
// import VueAudio from 'vue-audio-better'

const app=createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(AVPlugin)
// .use(VueAudio)
app.mount('#app')