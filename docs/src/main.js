import { createApp } from 'vue'
import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/monokai.css'
import App from './ExampleApp.vue'
import './index.css'

const app = createApp(App)
app.use(VueHighlightJS)

app.mount('#app')
