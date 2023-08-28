<template>
  <h1>Basic CSS Transition</h1>
  <button @click="this.doesRotate = true">Rotate</button>
  <div :class="{ rotate: doesRotate }"></div>

  <button @click="this.doesMove = true">Start</button>
  <div :class="{ move: doesMove }"></div>

  <h1>Add/Remove &lt;p&gt; Tag</h1>
  <button @click="this.exists = !this.exists">{{btnText}}</button><br>
  <Transition>
    <p v-if="exists">Hello World!</p>
  </Transition>
</template>

<script>
export default {
  data() {
    return {
      doesRotate: false,
      doesMove: false,
      exists: false,
    }
  },
  computed: {
    btnText() {
      if(this.exists) {
        return 'Remove';
      }
      else {
        return 'Add';
      }
    },
  }
}
</script>

<style scoped>
  .rotate {
    rotate: 160deg;
    transition: rotate 1s;
  }

  .move {
    animation: move .5s alternate 4 ease-in-out;
  }
  @keyframes move {
    from {
      translate: 0 0;
    }
    to {
      translate: 70px 0;
    }
  }

  div {
    border: solid black 2px;
    background-color: lightcoral;
    width: 60px;
    height: 60px;
  }
  h1, button, div {
    margin: 10px;
  }
  
  .v-enter-from {
    opacity: 0;
    translate: -100px 0;
  }
  .v-enter-to {
    opacity: 1;
    translate: 0 0;
  }
  .v-leave-from {
    opacity: 1;
    translate: 0 0;
  }
  .v-leave-to {
    opacity: 0;
    translate: 100px 0;
  }
  p {
    background-color: lightgreen;
    display: inline-block;
    padding: 10px;
    transition: all 0.5s;
  }
</style>  