
const app = Vue.createApp({
    data() {
      return {
        text: '',
        count: 0
      }
    },
    methods: {
      writeText() {
        this.text = 'Hello World!'
      },
      addMoose(number){
        this.count+=number
      }
    }
  })
app.mount('#app')