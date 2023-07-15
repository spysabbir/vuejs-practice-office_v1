
const app = Vue.createApp({
    data() {
      return {
        inpText: '',
        important: false,
        itemName: null,
        itemNumber: null,
        itemImportant: false,
        shoppingList: [
          { name: 'Tomatoes', number: 5, important: false, found: false },
          { name: 'Bread', number: 1, important: false, found: false },
          { name: 'Soap', number: 1, important: true, found: true }
        ]
      }
    },
    methods: {
      addItem(){
        let item = {
          name: this.itemName,
          number: this.itemNumber,
          important: this.itemImportant,
          found: false
        }
        this.shoppingList.push(item)
        this.itemName = null
        this.itemNumber = null  
        this.itemImportant = false
      }
    }
  })
app.mount('#app')