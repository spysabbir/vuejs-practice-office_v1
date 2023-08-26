<template>
  <!-- <slot v-bind:lclData="data"></slot> -->

  <!-- <slot v-for="x in foods" :key="x" :foodName="x" ></slot> -->

  <!-- <slot v-for="x in foods"
    :key="x.name"
    :foodName="x.name"
    :foodDesc="x.desc"
    :foodUrl="x.url"
  ></slot> -->

  <slot staticText="This text is static" :dynamicText="text" ></slot>

</template>

<script>
export default {
  data() {
      return {
          // data: 'This is local data',
          // foods: ['Apple','Pizza','Rice','Fish','Cake'],
          foods: [
              { name: 'Apple', desc: 'Apples are a type of fruit that grow on trees.', url: 'https://www.w3schools.com/vue/img_apple.svg' },
              { name: 'Pizza', desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.', url: 'https://www.w3schools.com/vue/img_pizza.svg' },
              { name: 'Rice', desc: 'Rice is a type of grain that people like to eat.', url: 'https://www.w3schools.com/vue/img_rice.svg' },
              { name: 'Fish', desc: 'Fish is an animal that lives in water.', url: 'https://www.w3schools.com/vue/img_fish.svg' },
              { name: 'Cake', desc: 'Cake is something sweet that tastes good but is not considered healthy.', url: 'https://www.w3schools.com/vue/img_cake.svg' }
          ],
          text: 'This text is from the data property',
      }
  }
}
</script>

<style></style>    