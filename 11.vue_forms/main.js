
const app = Vue.createApp({
    data() {
      return {
        itemName: null,
        itemNumber: null,
        shoppingList: [
          { name: 'Tomatoes', number: 5 }
        ]
      }
    },
    methods: {
      addItem(){
        let item = {
          name: this.itemName,
          number: this.itemNumber
          }
        this.shoppingList.push(item);
        this.itemName = null
        this.itemNumber = null
      }
    }
  })
app.mount('#app')