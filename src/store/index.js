import Vue from "vue";
import Vuex from "vuex";
import products from "../mock/products";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  getters: {
    products: (state) => state.products,
    cart: (state) => state.cart,
  },
  actions: {
    getProducts({ commit }) {
      commit("getProductsData");
    },
    addToCart({ commit }, item) {
      commit("addItemToCart", item);
    },
  },
  mutations: {
    getProductsData(state) {
      state.products = products;
    },
    addItemToCart(state, item) {
      const addeItem = state.cart.find((product) => product.id === item.id);
      if (addeItem) {
        addeItem.qty++;
      } else {
        state.cart.push({ ...item, qty: 1 });
      }
    },
  },
});
