<template>
  <h1>Teleport</h1>
  <p>With &lt;teleport to="body"&gt; we move the red &lt;div&gt; from inside the component to the root of the body tag.</p>
  <comp-one></comp-one>
</template>

<script></script>

<style>
#app {
  width: 350px;
  margin: 10px;
}

#app > div {
  border: solid black 2px;
  padding: 10px;
  margin-top: 10px;
  background-color: rgb(186, 228, 255);
}

h2 {
  text-decoration: underline;
}
</style>  