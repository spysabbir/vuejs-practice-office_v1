import { createApp } from 'vue'

import App from './App.vue'
import CompOne from './components/CompOne.vue'

const app = createApp(App)
app.component('comp-one', CompOne)
app.mount('#app')
                  