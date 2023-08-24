<template>
  <!-- <div>
    <h2>{{ foodName }}</h2>
  </div> -->
  <div>
    <h2>
      {{ foodName }}
      <img src="https://www.w3schools.com/vue/img_quality.svg" v-show="foodIsFavorite">
    </h2>
    <p>{{ foodDesc }}</p>
    <button v-on:click="toggleFavorite">Favorite</button>
  </div>
</template>
  
<script>
  export default {
    // props: ['foodName']
    props: ['foodName','foodDesc','isFavorite'],
    data() {
      return {
        foodIsFavorite: this.isFavorite
      }
    },
    methods: {
      toggleFavorite() {
        this.foodIsFavorite = !this.foodIsFavorite;
      }
    }
  }
</script>
  
<style>
img {
    height: 1.5em;
    float: right;
  }
</style>