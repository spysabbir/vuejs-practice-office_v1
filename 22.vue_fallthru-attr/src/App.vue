<template>
  <h3>Todo List</h3>
  <ul>
    <todo-item
      v-for="x in items"
      :key="x"
      :item-name="x"
      style="background-color: lightgreen;"
    />
  </ul>
  <input v-model="newItem">
  <button @click="addItem">Add</button>
</template>
<script>
  export default {
    data() {
      return {
        newItem: '',
        items: ['Buy apples','Make pizza','Mow the lawn']
      };
    },
    methods: {
      addItem() {
        this.items.push(this.newItem),
        this.newItem = '';
      }
    }
  }
</script>