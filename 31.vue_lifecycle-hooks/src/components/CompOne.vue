<!-- <template>
    <h2>Component</h2>
    <p id="pResult">{{ text }}</p>
</template>

<script>
export default{
    data() {
        return {
            text: '...',
        }
    },
    beforeCreate() {
        this.text = 'initial text';
        console.log("beforeCreate: The component is not created yet.");
    },
    created() {
        this.text = 'initial text';
        console.log("created: The component just got created.");
    },

}
</script> -->

<template>
    <!-- <h2>Component</h2>
    <p>This is the component</p>
    <p ref="pEl" id="pEl">We try to access this text from the 'beforeMount' hook.</p> -->

    <h2>Component</h2>
  <p>Right after this component is added to the DOM, the mounted() function is called and we can add code to that mounted() function. In this example, an alert popup box appears after this component is mounted.</p>
  <p><strong>Note:</strong> The reason that the alert is visible before the component is visible is because the alert is called before the browser gets to render the component to the screen.</p>
</template>

<script>
export default {
//   beforeMount() {
//     console.log("beforeMount: This is just before the component is mounted.");
//     // this.$refs.pEl.innerHTML = "Hello World!";
//   },
    mounted() {
        alert("The component is mounted!");
    }
}
</script>