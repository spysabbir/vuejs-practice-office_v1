
const app = Vue.createApp({
    data() {
      return {
        lightOn: false,
        inpCount: 0,
        colorVal: 50,
        imgUrl: 'https://www.w3schools.com/vue/img_pizza.svg',
        manyFoods: [
          {name: 'Burrito', url: 'https://www.w3schools.com/vue/img_burrito.svg'},
          {name: 'Salad', url: 'https://www.w3schools.com/vue/img_salad.svg'},
          {name: 'Cake', url: 'https://www.w3schools.com/vue/img_cake.svg'},
          {name: 'Soup', url: 'https://www.w3schools.com/vue/img_soup.svg'},
      ]
      }
    }
  })
app.mount('#app')