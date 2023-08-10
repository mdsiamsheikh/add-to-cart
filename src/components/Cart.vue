<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item" v-for="item in cart" :key="item.id">
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div class="media">
          <img width="88px" :src="item.imgUrl" class="mr-3" :alt="item.title" />
          <div class="media-body">
            <p class="mt-0">{{ item.title }}</p>
            <button class="qty-button btn btn-sm btn-secondary">-</button>
            X {{ item.qty }}
            <button class="qty-button btn btn-sm btn-secondary">+</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["cart"]),
  },
};
</script>

<style scoped>
.media {
  width: 90%;
  text-align: left;
}
.qty-button {
  border-radius: 50%;
  width: 30px;
}
.checkout-button {
  margin-top: 20px;
}
</style>
