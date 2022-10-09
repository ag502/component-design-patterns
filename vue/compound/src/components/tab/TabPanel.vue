<template>
  <div v-show="tabState.activeTab === id">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CompoundTabPanel",

  props: {
    id: {
      type: String,
      required: true,
    },
  },

  inject: ["tabState"],
});
</script>

<style scoped></style>
