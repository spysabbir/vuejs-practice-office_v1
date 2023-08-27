<template>
  <div>
    <!-- <button @click="fetchData">Fetch Data</button>
    <p v-if="data">{{ data }}</p> -->

    <!-- <button @click="fetchData">Fetch Data</button>
    <div v-if="randomMammal">
      <h2>{{ randomMammal.name }}</h2>
      <p>Max weight: {{ randomMammal.maxWeight }} kg</p>
    </div> -->

    <!-- <p>Each click generates an object with a random user from <a href="https://random-data-api.com/" target="_blank">https://random-data-api.com/</a>.</p>
    <p>The robot avatars are lovingly delivered by <a href="http://Robohash.org" target="_blank">RoboHash</a>.</p>
    <button @click="fetchData">Fetch data</button>
    <pre v-if="data">{{ data }}</pre> -->

    <!-- <p>Each click generates an object with a random user from <a href="https://random-data-api.com/" target="_blank">https://random-data-api.com/</a>.</p>
    <p>The robot avatars are lovingly delivered by <a href="http://Robohash.org" target="_blank">RoboHash</a>.</p>
    <button @click="fetchData">Fetch data</button>
    <div v-if="data" id="dataDiv">
      <img :src="data.avatar" alt="avatar">
      <pre>{{ data.first_name + " " + data.last_name }}</pre>
      <p>"{{ data.employment.title }}"</p>
    </div> -->

    <button @click="fetchData">Fetch data</button>
    <div v-if="data" id="dataDiv">
      <img :src="data.data.avatar" alt="avatar">
      <pre>{{ data.data.first_name + " " + data.data.last_name }}</pre>
      <p>"{{ data.data.employment.title }}"</p>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'

export default {
  data() {
    return {
      data: null,
      randomMammal: null,
    };
  },
  methods: {
    // fetchData() {
    //   const response = fetch("file.txt");
    //   this.data = response;
    // },
    // async fetchData() {
    //   const response = await fetch("file.txt");
    //   this.data = response;
    // },
    // async fetchData() {
    //   const response = await fetch("file.txt");
    //   this.data = await response.text();
    // }
    // async fetchData() {
    //   const response = await fetch("bigLandMammals.json");
    //   this.data = await response.json();
    // },
    // async fetchData() {
    //   const response = await fetch("bigLandMammals.json");
    //   const data = await response.json();
    //   const randIndex = Math.floor(Math.random()*data.results.length);
    //   this.randomMammal = data.results[randIndex];
    // },
    // async fetchData() {      
    //   const response = await fetch("https://random-data-api.com/api/v2/users"); 
    //   this.data = await response.json();
    // },
    async fetchData() {      
      this.data = await axios.get("https://random-data-api.com/api/v2/users");
    }
  }
};
</script> 

<style>
#dataDiv {
  width: 240px;
  background-color: aquamarine;
  border: solid black 1px;
  margin-top: 10px;
  padding: 10px;
}
#dataDiv > img {
  width: 100%;
}
pre {
  font-size: larger;
  font-weight: bold;
}
</style>   