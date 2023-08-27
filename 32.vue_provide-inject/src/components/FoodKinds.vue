<template>
    <h2>Different Kinds of Food</h2>
    <p><mark>In this application, food data is provided in "App.vue", and injected in the "FoodKinds.vue" component so that it can be shown here:</mark></p>
    <div v-for="x in foods">
        <img :src="x.imgUrl">
        <p class="pName">{{ x.name }}</p>
    </div>
</template>

<script>
export default {
    inject: ['foods']
}
</script>

<style scoped>
    div {
        margin: 10px;
        padding: 10px;
        display: inline-block;
        width: 80px;
        background-color: #28e49f47;
        border-radius: 10px;
    }
    .pName {
        text-align: center;
        margin: 10px 0 0 0;
    }
    img {
        width: 100%;
    }
</style>           