<template>
  <h1>Radio Buttons in Vue</h1>
  <form @submit.prevent="registerAnswer">

    <p>What is your favorite animal?</p>
    <label>
      <input type="radio" name="favAnimal" v-model="likeAnimal" value="Cat"> Cat
    </label>
    <label>
      <input type="radio" name="favAnimal" v-model="likeAnimal" value="Dog"> Dog
    </label>
    <label>
      <input type="radio" name="favAnimal" v-model="likeAnimal" value="Turtle"> Turtle
    </label>
    <label>
      <input type="radio" name="favAnimal" v-model="likeAnimal" value="Moose"> Moose
    </label>

    <p>What kinds of food do you like?</p>
    <label>
      <input type="checkbox" v-model="likeFoods" value="Pizza"> Pizza
    </label>
    <label>
      <input type="checkbox" v-model="likeFoods" value="Rice"> Rice
    </label>
    <label>
      <input type="checkbox" v-model="likeFoods" value="Fish"> Fish
    </label>
    <label>
      <input type="checkbox" v-model="likeFoods" value="Salad"> Salad
    </label>

    <h1>Drop-down List in Vue</h1>
    <label for="cars">Choose a car:</label>
    <select  v-model="carSelected" id="cars">
      <option disabled value="">Please select one</option>
      <option>Volvo</option>
      <option>Saab</option>
      <option>Opel</option>
      <option>Audi</option>
    </select>

    <label>How tall are you?<br>
      <input v-model="heightInp" type="range" min="50" max="235"> {{ heightInp }} cm
    </label>

    <label>Choose a color: 
      <input v-model="colorInp" type="color">
    </label>

    <label>Choose a file:
      <input @change="updateVal" type="file">
    </label>

    <button type="submit">Submit</button>
  </form>
  <div>
    <h3>Submitted Choice:</h3>
    <p id="answer">{{ inpAnimalSubmitted }}</p>
    <p id="answer">{{ inpFoodsSubmitted }}</p>
    <p id="answer">{{ inpCarSubmitted }}</p>
    <p id="answer">{{ inpRangeValSubmitted }}</p>
    <p id="answer">{{ inpColorValSubmitted }}</p>
    <p id="answer">{{ inpValSubmitted  }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      likeAnimal: '',
      likeFoods: [],
      carSelected: '',
      heightInp: null,
      colorInp: null,
      fileInp: null,
      inpAnimalSubmitted: 'Not submitted animal',
      inpFoodsSubmitted: 'Not submitted foods',
      inpCarSubmitted: 'Not submitted car',
      inpRangeValSubmitted: 'Not submitted range',
      inpColorValSubmitted: 'Not submitted color',
      inpValSubmitted: 'Not submitted file',
    }
  },
  methods: {
    registerAnswer() {
      if(this.likeAnimal) {
        this.inpAnimalSubmitted = this.likeAnimal;
      }
      if(this.likeFoods) {
        this.inpFoodsSubmitted = this.likeFoods;
      }
      if(this.carSelected) {
        this.inpCarSubmitted = this.carSelected;
      }
      if(this.heightInp) {
        this.inpRangeValSubmitted = this.heightInp + ' cm';
      }
      if(this.colorInp) {
        this.inpColorValSubmitted = this.colorInp;
      }
      if(this.fileInp) {
        this.inpValSubmitted = this.fileInp;
      }
    },

    updateVal(e) {
      this.fileInp = e.target.value;
    }
  }
}
</script>

<style scoped>
  div {
    border: dashed black 1px;
    border-radius: 10px;
    padding: 0 20px 20px 20px;
    margin-top: 20px;
    display: inline-block;
  }
  button {
    margin: 10px;
  }
  label {
    display: block;
    width: 80px;
    padding: 5px;
  }
  label:hover {
    cursor: pointer;
    background-color: rgb(211, 244, 211);
    border-radius: 5px;
  }
  #answer {
    background-color: lightgreen;
    padding: 5px;
  }
</style> 