import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import AudioVisual from 'vue-audio-visual'

// createApp(App).config.productionTip = false

createApp(App).use(ElementPlus).use(router)
.use(AudioVisual)
.mount('#app')