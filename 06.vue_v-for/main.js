
const app = Vue.createApp({
    data() {
      return {
        foods: [
          'Burrito',
          'Salad',
          'Cake',
          'Soup',
          'Fish',
          'Pizza',
          'Rice'
        ],
        manyFoods: [
          {name: 'Burrito', url: 'https://www.w3schools.com/vue/img_burrito.svg'},
          {name: 'Salad', url: 'https://www.w3schools.com/vue/img_salad.svg'},
          {name: 'Cake', url: 'https://www.w3schools.com/vue/img_cake.svg'},
          {name: 'Soup', url: 'https://www.w3schools.com/vue/img_soup.svg'},
          {name: 'Fish', url: 'https://www.w3schools.com/vue/img_fish.svg'},
          {name: 'Pizza', url: 'https://www.w3schools.com/vue/img_pizza.svg'},
          {name: 'Rice', url: 'https://www.w3schools.com/vue/img_rice.svg'}
        ]
      }
    }
  })
app.mount('#app')