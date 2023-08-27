// Navigate Using a Dynamic Component


// import { createApp } from 'vue'

// import App from './App.vue'
// import FoodItems from './components/FoodItems.vue'
// import AnimalCollection from './components/AnimalCollection.vue'

// const app = createApp(App)
// app.component('food-items', FoodItems);
// app.component('animal-collection', AnimalCollection);

// app.mount('#app')
                  


// From Dynamic Component to Routing


import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import FoodItems from './components/FoodItems.vue'
import AnimalCollection from './components/AnimalCollection.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/animals', component: AnimalCollection },
        { path: '/food', component: FoodItems },
    ]
});

const app = createApp(App)

app.use(router);
app.component('food-items', FoodItems);
app.component('animal-collection', AnimalCollection);

app.mount('#app')
