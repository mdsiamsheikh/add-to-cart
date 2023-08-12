<template>
  <div class="contener">
    <div class="row row-cols-1 row-cols-md-3 card-group-55">
      <div class="card h-100 w-100 p-4" v-for="item in products" :key="item.id">
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
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProductList",
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

.row {
  column-gap: px;
}
</style>
