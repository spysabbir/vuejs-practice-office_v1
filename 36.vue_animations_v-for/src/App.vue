<template>
  <h3>The &lt;TransitionGroup&gt; Component</h3>
  <p>Items inside the &lt;TransitionGroup&gt; component are animated when they are created or removed.</p>
  <button @click="addDie">Roll</button>
  <button @click="addDie10">Roll 10 dice</button>
  <button @click="dice.sort(compareFunc)">Sort</button>
  <button @click="dice.sort(shuffleFunc)">Shuffle</button><br>
  <TransitionGroup>
    <div 
    v-for="x in dice" 
    :key="x.keyNmbr" 
    class="diceDiv" 
    :style="{ backgroundColor: 'hsl('+x.dieNmbr*60+',85%,85%)' }"
    @click="removeDie(x.keyNmbr)">
      {{ x.dieNmbr }}
    </div>
  </TransitionGroup>
</template>

<script>
  export default {
    data() {
      return {
        dice: [],
        keyNumber: 0
      }
    },
    methods: {
      addDie() {
        const newDie = {
          dieNmbr: Math.ceil(Math.random()*6),
          keyNmbr: this.keyNumber
        };
        this.dice.splice(Math.floor(Math.random()*this.dice.length),0,newDie);
        this.keyNumber++;
      },
      addDie10() {
        for(let i=0; i<10; i++) {
          this.addDie();
        }
      },
      compareFunc(a,b){
        return a.dieNmbr - b.dieNmbr;
      },
      shuffleFunc(a,b){
        return Math.random()-0.5;
      },
      removeDie(key) {
        const pos = this.dice.map(e => e.keyNmbr).indexOf(key);
        this.dice.splice(pos, 1);
      }
    },
    mounted() {
      this.addDie10();
    }
  }
</script>

<style>
.v-enter-from {
  opacity: 0;
  scale: 0;
  rotate: 360deg;
}
.v-enter-to {
  opacity: 1;
  scale: 1;
  rotate: 0deg;
}
.v-enter-active,
.v-leave-active,
.v-move {
  transition: all 0.7s;
}
.v-leave-active { position: absolute; }
.v-leave-from { opacity: 1; }
.v-leave-to { opacity: 0; }
.diceDiv {
  margin: 10px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  vertical-align: middle;
  text-align: center;
  border: solid black 1px;
  border-radius: 5px;
  display: inline-block;
}
.diceDiv:hover {
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
#app {
  position: relative;
}
</style> 