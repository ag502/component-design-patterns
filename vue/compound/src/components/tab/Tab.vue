<template>
  <div>
    <button
      :class="[$style.tabBtn, tabState.activeTab === id && $style.tabActive]"
      @click.prevent="activateTab(id)"
    >
      <slot />
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CompoundTab",

  props: {
    id: {
      type: String,
      required: true,
    },
  },

  inject: ["activateTab", "tabState"],
});
</script>

<style module lang="scss">
.tabBtn {
  cursor: pointer;
  background: transparent;
  outline: transparent;
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 0.4rem 0.6rem;

  &:hover {
    background-color: #eee;
  }
}

.tabActive {
  border-bottom: 2px solid indigo;
}
</style>
