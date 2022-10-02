<template>
  <!-- Base Component를 wrapping 함으로써 노출되는 props를 제한하여, -->
  <!-- 부적절한 사용을 막고 코드의 가독성을 높인다. -->
  <Input :modelValue="value" disabled />
</template>

<script lang="ts">
import Vue from "vue";

import Input from "./Input.vue";

export default Vue.extend({
  name: "ReadOnlyInput",

  components: {
    Input,
  },

  inheritAttrs: false,

  props: {
    value: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped></style>
