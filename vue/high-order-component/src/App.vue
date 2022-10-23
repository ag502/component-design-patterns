<template>
  <div id="app">
    <div>
      <BaseInput />
      <CustomInput :test="'test'" />
    </div>
  </div>
</template>

<script>
import BaseInput from "./components/ BaseInput.vue";
import { withInput } from "./components/withInput";

export default {
  name: "App",

  components: {
    BaseInput,
    CustomInput: withInput(BaseInput),
  },
};
</script>

<style></style>
