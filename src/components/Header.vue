<template>
  <nav class="navbar navbar-badge breadcrumb">
    <span class="navbar-brand mb-0 h1">Navbar</span>
    <span class="navbar-brand mb-0 h1">Cart ({{ totalQty }})</span>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapGetters(["cart"]),
    totalQty() {
      return this.cart.reduce((a, b) => a + b.qty, 0);
    },
  },
};
</script>

<style scoped>
nav {
  margin-bottom: 50px;
}
</style>
