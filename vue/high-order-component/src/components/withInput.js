export const withInput = (component) => {
  return {
    name: "HOCInput",

    props: ["test"],

    methods: {
      handleInputChange({ target }) {
        console.log("HOC");
        console.log(target.value);
      },
    },

    render(createElement) {
      return createElement(component, {
        props: {
          ...this.$props,
        },
        on: {
          input: this.handleInputChange,
        },
      });
    },
  };
};
