<!-- <template>
   <h1>The 'beforeCreate' Lifecycle Hook</h1>
  <p>We can see the console.log() message from 'beforeCreate' lifecycle hook, but there is no effect from the text change we try to do to the Vue data property, because the Vue data property is not created yet.</p>
  <button @click="this.activeComp = !this.activeComp">Add/Remove Component</button>
  <div>
    <comp-one v-if="activeComp">

    </comp-one>
  </div>

  <h1>The 'created' Lifecycle Hook</h1>
  <p>We can see the console.log() message from 'created' lifecycle hook, and the text change we try to do to the Vue data property works, because the Vue data property is already created at this stage.</p>
  <button @click="this.activeComp = !this.activeComp">Add/Remove Component</button>
  <div>
    <comp-one v-if="activeComp"></comp-one>
  </div>

</template>

<script>
export default {
  data(){
    return {
      activeComp: false
    }
  }
}
</script>

<style>
#app > div {
  border: dashed black 1px;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
  background-color: lightgreen;
}
#pResult {
  background-color: lightcoral;
  display: inline-block;
}
</style>  -->


<template>
  <!-- <h1>The 'beforeMount' Lifecycle Hook</h1>
  <p>We can see the console.log() message from the 'beforeMount' lifecycle hook, but the text change we try to do to the 'pEl' paragraph DOM element does not work, because the 'pEl' paragraph DOM element does not exist yet at this stage.</p>
  <button @click="this.activeComp = !this.activeComp">Add/Remove Component</button>
  <div>
    <comp-one v-if="activeComp"></comp-one>
  </div> -->

  <h1>The 'mounted' Lifecycle Hook</h1>
  <button @click="this.activeComp = !this.activeComp">Create component</button>
  <div>
    <comp-one v-if="activeComp"></comp-one>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      activeComp: false
    }
  }
}
</script>

<style>
#app > div {
  border: dashed black 1px;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
  background-color: lightgreen;
}
#pEl {
  background-color: lightcoral;
  display: inline-block;
}
</style>