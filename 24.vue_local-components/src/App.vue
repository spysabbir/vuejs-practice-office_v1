<template>
  <h3>Local Component</h3>
  <p>The CompOne.vue component is a local component and can only be used inside App.vue.</p>
  <comp-one />
  <comp-two />
</template>

<script> 
  import CompOne from './components/CompOne.vue';

  export default {
    components: {
      'comp-one': CompOne
    }
  }
</script>