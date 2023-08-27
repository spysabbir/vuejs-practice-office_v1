import { createApp } from 'vue'

import App from './App.vue'
import FoodHome from './components/FoodHome.vue'
import FoodAbout from './components/FoodAbout.vue'
import FoodKinds from './components/FoodKinds.vue'

const app = createApp(App)
app.component('food-home', FoodHome)
app.component('food-about', FoodAbout)
app.component('food-kinds', FoodKinds)
app.mount('#app')
               