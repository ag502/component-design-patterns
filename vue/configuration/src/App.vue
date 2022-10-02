<template>
  <div id="app">
    <!-- <SearchModalAfter /> -->
    <!-- <ReviewOrderAfter /> -->
    <TableWithPagination :data="tableData.data" :columns="tableData.cols" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import data from "./components/breakingDown/data.json";

import "./styles/index.css";
// import {
//   ReviewOrderAfter,
//   SearchModalAfter,
// } from "./components/configuration/after";
import { TableWithPagination } from "./components/breakingDown/before";

export default Vue.extend({
  name: "App",

  components: {
    // SearchModalAfter,
    // ReviewOrderAfter,
    TableWithPagination,
  },

  data() {
    return {
      tableData: data,
    };
  },
});
</script>

<style></style>
