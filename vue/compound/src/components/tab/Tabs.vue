<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CompoundTabs",

  props: {
    initialActiveTab: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      activeTab: this.initialActiveTab,
    };
  },

  provide(): { tabState: object; activateTab: (id: string) => void } {
    let tabState = {};

    Object.defineProperty(tabState, "activeTab", {
      enumerable: true,
      get: () => this.activeTab,
    });

    return {
      tabState,
      activateTab: this.activateTab,
    };
  },

  methods: {
    activateTab(id: string) {
      this.activeTab = id;
    },
  },
});
</script>

<style scoped></style>
