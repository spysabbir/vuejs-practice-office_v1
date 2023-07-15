
const app = Vue.createApp({
  data() {
    return {
      chbxVal: false
    }
  },
  computed: {
    isImportant() {
      if(this.chbxVal){
        return 'yes'
      }
      else {
        return 'no'
      }
    }
  }
})
app.mount('#app')