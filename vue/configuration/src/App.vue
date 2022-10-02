<template>
  <div id="app">
    <SearchModalAfter />
    <ReviewOrderAfter />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import "./styles/index.css";
import {
  ReviewOrderAfter,
  SearchModalAfter,
} from "./components/configuration/after";

export default Vue.extend({
  name: "App",

  components: {
    SearchModalAfter,
    ReviewOrderAfter,
  },
});
</script>

<style></style>
