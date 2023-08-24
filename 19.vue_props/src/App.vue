<template>
  <h1>Food</h1>
  <div id="wrapper">
    <food-item 
      food-name="Apples" 
      food-desc="Apples are a type of fruit that grow on trees."/>
    <food-item 
      food-name="Pizza"
      food-desc="Pizza has a bread base with tomato sauce, cheese, and toppings on top."/>

    <food-item
      food-name="Apples"
      food-desc="Apples are a type of fruit that grow on trees."
      v-bind:is-favorite="true"/>
      <food-item
      food-name="Pizza"
      food-desc="Pizza has a bread base with tomato sauce, cheese, and toppings on top."
      v-bind:is-favorite="false"/>

      <food-item
      food-name="Rice"
      v-bind:is-favorite="false"/>
  </div>
</template>

<script>

</script>

<style>
 #wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  #wrapper > div {
    border: dashed black 1px;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
  }
</style>