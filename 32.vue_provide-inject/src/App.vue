<template>
  <h1>Food</h1>

  <div @click="this.activeComp = 'food-home'" class="divBtn">Home</div>
  <div @click="this.activeComp = 'food-about'" class="divBtn">About</div>
  <div @click="this.activeComp = 'food-kinds'" class="divBtn">Kinds</div>
  <div id="divComp">
    <component :is="activeComp"></component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeComp: 'food-home',
      foods: [
        { name: 'Pizza', imgUrl: 'https://www.w3schools.com/vue/img_pizza.svg' },
        { name: 'Apple', imgUrl: 'https://www.w3schools.com/vue/img_apple.svg' },
        { name: 'Cake', imgUrl: 'https://www.w3schools.com/vue/img_cake.svg' },
        { name: 'Fish', imgUrl: 'https://www.w3schools.com/vue/img_fish.svg' },
        { name: 'Rice', imgUrl: 'https://www.w3schools.com/vue/img_rice.svg' }
      ]
    }
  },
  provide() {
    return {
      foods: this.foods
    }
  }
}
</script>

<style scoped>
  .divBtn {
    display: inline-block;
    text-decoration: none;
    text-align: center;
    background-color: white;
    border: solid 2px #04AA6D;
    border-radius: 10px;
    font-family: Verdana,sans-serif;
    color: black;
    padding: 10px;
    margin: 10px;
  }
  .divBtn:hover {
    background-color: #04AA6D;
    color: white;
    cursor: pointer;
  }
  #divComp {
    border: dashed black 1px;
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
    width: 400px;
  }
</style> 