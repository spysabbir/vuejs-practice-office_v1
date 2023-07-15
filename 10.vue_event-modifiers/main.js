
const app = Vue.createApp({
    data() {
      return {
        keyValue: '',
        bgColor: 0
      }
    },
    methods: {
      createAlert(){
        alert('Click alert')
      },
      getKey(evt){
        this.keyValue = evt.target.value;
        console.log(evt.target.value)
      },
      changeColor() {
        this.bgColor+=50
      }
    }
  })
app.mount('#app')