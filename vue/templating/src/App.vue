<template>
  <div id="app">
    <!-- <SearchModal />
    <ReviewOrder /> -->
    <SearchModalAfter />
    <ReviewOrderAfter />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import "./styles/index.css";

import { SearchModal, ReviewOrder } from "./components/before";
import { SearchModalAfter, ReviewOrderAfter } from "./components/after";

export default Vue.extend({
  name: "App",

  components: {
    // SearchModal,
    // ReviewOrder,
    SearchModalAfter,
    ReviewOrderAfter,
  },

  data() {
    return {
      isBefore: true,
    };
  },
});
</script>

<style></style>
