<template>
  <h1>Local Component</h1>
  <!-- <p>App.vue controls how local data from the scoped slot is rendered.</p> -->
  <!-- <slot-comp v-slot="dataFromSlot">
    <h2>{{ dataFromSlot.lclData }}</h2>
  </slot-comp> -->

  <!-- <p>Scoped Slot with an Array</p>
  <slot-comp v-slot="food">
  <h2>{{ food.foodName }}</h2>
  </slot-comp> -->

  <!-- <p>Scoped Slot with an Array of Objects</p>
  <slot-comp v-slot="food">
    <hr>
    <h2>{{ food.foodName }}<img :src=food.foodUrl></h2>
    <p>{{ food.foodDesc }}</p>
  </slot-comp> -->

  <p>Static Data from a Scoped Slot</p>
  <slot-comp v-slot="texts">
    <h2>{{ texts.staticText }}</h2>
    <p>{{ texts.dynamicText }}</p>
  </slot-comp>
</template>

<script></script>

<style>
 #app {
    width: 300px;
  }
  h2, .greenP {
    background-color: lightgreen;
    padding: 10px;
    margin: 0;
  }
  img {
    float: right;
    height: 70px;
    margin-left: 10px;
  }
</style>             