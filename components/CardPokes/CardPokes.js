export default {
  props: ["pokes"],
  computed: {
    typesPoke() {
      return this.pokes.types.map(({ type }) => {
        return type;
      });
    },
  },
};
