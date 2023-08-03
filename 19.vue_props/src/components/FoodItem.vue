<template>
   <div>
    <h2>{{ foodName }}</h2>
    <!-- <img src="https://www.w3schools.com/vue/img_quality.svg" v-show="isFavorite"> -->
    <img src="https://www.w3schools.com/vue/img_quality.svg" v-show="foodIsFavorite">
    <p>{{ foodDesc }}</p>
    <button v-on:click="toggleFavorite">Favorite</button>
  </div>
  </template>
  
  <script>
    export default {
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
      },

      // props: {
      //   foodName: String,
      //   foodDesc: String,
      //   isFavorite: Boolean
      // },

      // props: {
      //   foodName: {
      //     type: String,
      //     required: true
      //   },
      //   foodDesc: {
      //     type: String,
      //     required: false,
      //     default: 'This is the default description.'
      //   },
      //   isFavorite: {
      //     type: Boolean,
      //     required: false,
      //     default: false
      //   }
      // }
    }
  </script>
  
  <style>
  img {
    height: 1.5em;
    float: right;
  }
  </style>