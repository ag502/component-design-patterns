<template>
  <div class="modal-container">
    <div class="modal">
      <h2 class="text-2xl text-gray-900 font-medium">Review Order</h2>

      <!-- ITEM -->
      <!-- SearchModal의 ITEM과 같음 -->
      <div class="my-4 -mx-8">
        <div
          v-for="{ name, image, description, price } in products"
          :key="name"
          class="item space-x-6"
        >
          <img
            class="rounded-full w-24 h-24 object-cover border border-gray-500 shadow-md"
            :src="image"
          />
          <div class="flex flex-col justify-center flex-1">
            <span class="text-lg text-gray-900">
              {{ name }}
            </span>
            <span class="mt-1 leading-tight font-light text-gray-700">
              {{ description }}
            </span>
          </div>
          <div class="text-lg text-gray-600 font-bold">${{ price }}</div>
        </div>
      </div>

      <!-- TOTAL -->
      <div class="flex items-end justify-end text-lg">
        <span class="mr-8 text-gray-700">Total (before tax)</span>
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
