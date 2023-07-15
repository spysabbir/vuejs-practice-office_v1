
const app = Vue.createApp({
  data() {
    return {
      rangeVal: 70,
      xPos: 0,
      xDiff: 0,
      inpAddress: '',
      feedbackText: '',
      myClass: 'invalid'
    }
  },
  watch: {
    rangeVal(val) {
      if( val>20 && val<60 ){
        if(val<40){
          this.rangeVal = 20;
        }
        else{
          this.rangeVal = 60;
        }
      }
    },
    xPos(newVal,oldVal){
      this.xDiff = newVal-oldVal
    },
    inpAddress(newVal,oldVal) {
      if( !newVal.includes('@') ) {
        this.feedbackText = 'The e-mail address is NOT valid';
        this.myClass = 'invalid';
      }
      else if( !oldVal.includes('@') && newVal.includes('@') ) {
        this.feedbackText = 'Perfect! You fixed it!';
        this.myClass = 'valid';
      }
      else {
        this.feedbackText = 'The e-mail address is valid :)';
      }
    }
  },
  methods: {
    updatePos(evt) {
      this.xPos = evt.offsetX
    }
  }
})
app.mount('#app')