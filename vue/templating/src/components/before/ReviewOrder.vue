<template>
  <div class="modal-container">
    <div class="modal">
      <h2 class="text-2xl text-gray-900 font-medium">Review Order</h2>

      <!-- ITEM -->

      <!-- TOTAL -->
      <div class="flex items-end justify-end text-lg">
        <span class="mr-8text-gray-70">Total (before tax)</span>
        <span class="font-bold text-gray-600"> ${{ totalPrice }} </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import products from "../../../../utils/data/products.json";

export default Vue.extend({
  data() {
    return {
      products,
    };
  },

  computed: {
    productsInCart() {
      return products.filter((item) => item.inCart);
    },

    totalPrice() {
      return this.productsInCart.reduce((prev, next) => prev + next.price, 0);
    },
  },
});
</script>

<style scoped></style>
