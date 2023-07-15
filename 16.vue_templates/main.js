
const app = Vue.createApp({
  data() {
    return {
      message: "Hello World!"
    }
  },
  watch: {
   
  },
  methods: {
    
  },
  template:
      `<h1>{{ message }}</h1>
      <p>This is a second line of HTML code, inside backtick quotes</p>`,
})
app.mount('#app')