<template>
  <div id="app">
    <SearchModal />
    <ReviewOrder />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import "./styles/index.css";
import { ReviewOrder, SearchModal } from "./components/before";

export default Vue.extend({
  name: "App",

  components: {
    SearchModal,
    ReviewOrder,
  },
});
</script>

<style></style>
