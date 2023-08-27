<template>
  <div>
    <h2>Component</h2>
    <p>This is the inside of the component.</p>
    <Teleport to="body">
      <div 
        id="redDiv" 
        @click="toggleVal = !toggleVal" 
        :style="{ backgroundColor: bgColor }"
      >
        Hello!<br>
        Click me!
      </div>
    </Teleport>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleVal: true
    }
  },
  computed: {
    bgColor() {
      if (this.toggleVal) {
        return 'lightpink'
      }
      else {
        return 'lightgreen'
      }
    }
  }
}
</script>

<style scoped>
#redDiv {
  margin: 10px;
  padding: 10px;
  display: inline-block;
}

#redDiv:hover {
  cursor: pointer;
}
</style>     