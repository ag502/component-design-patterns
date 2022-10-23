<template>
  <input type="text" :value="value" @input="handleInputChange" />
</template>

<script>
export default {
  name: "BaseInput",

  props: ["test"],

  data() {
    return {
      value: "",
    };
  },

  computed: {
    listeners() {
      return {
        input: this.handleInputChange,
        ...this.$listeners,
      };
    },
  },

  methods: {
    handleInputChange({ target }) {
      this.value = target.value;

      if (this.$listeners.input) {
        this.$listeners.input({ target });
        return;
      }
      console.log("BASE");
    },
  },
};
</script>

<style></style>
