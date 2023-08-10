<template>
  <div class="row">
    <div
      class="card"
      style="width: 15rem"
      v-for="item in products"
      :key="item.id"
    >
      <img :src="item.imgUrl" class="card-img-top" alt="item.title" />
      <div class="card-body">
        <p class="card-title">{{ item.title }}</p>
        <p class="card-text">{{ item.price }}</p>
        <a href="#" @click="addToCart(item)" class="btn btn-primary"
          >Add to cart</a
        >
        <products />
      </div>
    </div>
  </div>
</template>

<script>
// import products from "../mock/products.json";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProductList",
  //   data() {
  //     return {
  //       products,
  //     };
  //   },
  computed: {
    ...mapGetters(["products"]),
  },
  methods: {
    ...mapActions(["getProducts", "addToCart"]),
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style scoped>
.card {
  border: none;
}
</style>
