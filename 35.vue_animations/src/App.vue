<template>
  <h1>mode="out-in"</h1>
  <p>Click the button to get a new image.</p>
  <p>With mode="out-in", the next image is not added until the current image is removed. Another difference from the previous example, is that here we use computed prop instead of a method.</p>
  <button @click="indexNbr++">Next image</button><br>
  <Transition mode="out-in">
    <img src="https://www.w3schools.com/vue/img_pizza.svg" v-if="imgActive === 'pizza'">
    <img src="https://www.w3schools.com/vue/img_apple.svg" v-else-if="imgActive === 'apple'">
    <img src="https://www.w3schools.com/vue/img_cake.svg" v-else-if="imgActive === 'cake'">
    <img src="https://www.w3schools.com/vue/img_fish.svg" v-else-if="imgActive === 'fish'">
    <img src="https://www.w3schools.com/vue/img_rice.svg" v-else-if="imgActive === 'rice'">
  </Transition>
</template>

<script>
export default {
  data() {
    return {
      imgs: ['pizza', 'apple', 'cake', 'fish', 'rice'],
      indexNbr: 0
    }
  },
  computed: {
    imgActive() {
      if(this.indexNbr >= this.imgs.length) {
        this.indexNbr = 0;
      }
      return this.imgs[this.indexNbr];
    }
  }
}
</script>

<style>
  .v-enter-active {
    animation: swirlAdded 0.7s;
  }
  .v-leave-active {
    animation: swirlAdded 0.7s reverse;
  }
  @keyframes swirlAdded {
    from {
      opacity: 0;
      rotate: 0;
      scale: 0.1;
    }
    to {
      opacity: 1;
      rotate: 360deg;
      scale: 1;
    }
  }
  img {
    width: 100px;
    margin: 20px;
  }
  img:hover {
    cursor: pointer;
  }
</style> 