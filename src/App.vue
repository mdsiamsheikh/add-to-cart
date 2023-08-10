<template>
  <div id="app">
    <header-vue />
    <div class="container">
      <div class="row">
        <div class="col-8">
          <produc-list-vue />
        </div>
        <div class="col-4">
          <Cart />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderVue from "./components/Header.vue";
import ProducListVue from "./components/ProducList.vue";
import Cart from "./components/Cart.vue";

export default {
  name: "App",
  components: {
    HeaderVue,
    ProducListVue,
    Cart,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
