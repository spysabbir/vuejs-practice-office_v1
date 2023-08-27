<template>
  <h1>Example | The text inside a element is changed.</h1>
  <p>Click the button to put "Hello!" as the text in the green p element.</p>
  <button @click="changeVal">Change Text</button><br>
  <p ref="pEl" id="pEl">This is the initial text</p>

  <h1>Example | The text from the first tag is copied into the second tag.</h1>
  <p ref="p1">Click the button to copy this text into the paragraph below.</p>
  <button @click="transferText">Transfer text</button>
  <p ref="p2">...</p>

  <h1>Example</h1>
  <p>Start writing inside the input element, and the text will be copied into the last paragraph by the use of the '$refs' object.</p>
  <input ref="inputEl" @input="getRefs" placeholder="Write something..">
  <p ref="pEl"></p>

  <h1>Example</h1>
  <p>Click the button to reveal the 3rd list element stored as an array element in the $refs object.</p>
  <button @click="getValue">Get the 3rd list element</button><br>
  <ul>
    <li v-for="x in liTexts" ref="liEl">{{ x }}</li>
  </ul>
  <pre>{{ thirdEl }}</pre>
</template>

<script>
  export default {
    data() {
      return {
        thirdEl: ' ',
        liTexts: ['Apple','Banana','Kiwi','Tomato','Lichi']
      }
    },
    methods: {
      changeVal() { 
        this.$refs.pEl.innerHTML = "Hello!";
      },
      transferText() { 
        this.$refs.p2.innerHTML = this.$refs.p1.innerHTML;
      },
      getRefs() { 
        this.$refs.pEl.innerHTML = this.$refs.inputEl.value;
      },
      getValue() { 
        this.thirdEl = this.$refs.liEl[2].innerHTML;
        console.log("this.$refs.liEl = ",this.$refs.liEl);
      }
    },
  };
</script>

<style>
#pEl {
  background-color: lightgreen;
  display: inline-block;
}
pre {
  background-color: lightgreen;
  display: inline-block;
}
</style> 