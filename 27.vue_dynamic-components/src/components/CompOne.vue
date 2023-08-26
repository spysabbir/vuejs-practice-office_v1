<template>
  <div>
      <img :src="imgSrc">
      <h2>Component One</h2>
      <p>Choose food.</p>
      <label>
          <input type="radio" name="rbgFood" 
          v-model="imgSrc" :value="'https://www.w3schools.com/vue/img_apple.svg'" /> 
          Apple
      </label>
      <label>
          <input type="radio" name="rbgFood" 
          v-model="imgSrc" :value="'https://www.w3schools.com/vue/img_cake.svg'" /> 
          Cake
      </label>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgSrc: 'https://www.w3schools.com/vue/img_question.svg'
    }
  }
}
</script>

<style scoped>
  div {
      background-color: lightgreen;
  }
  img {
      float: right;
      height: 100px;
      margin-top: 20px;
  }
  label:hover {
      cursor: pointer;
  }
</style>     