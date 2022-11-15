import CardPokes from "~/components/CardPokes/";

export default {
  components: {
    CardPokes,
  },

  head() {
    return {
      title: "Nuxt PokeDex",
    };
  },

  async fetch() {
    await this.$store.dispatch("Pokes/fetchData");
  },
  fetchOnServer: false,

  methods: {
    async handleLoadMore() {
      await this.$store.dispatch("Pokes/handleLoadMore");
    },
  },

  computed: {
    allPokes() {
      return this.$store.getters["Pokes/getPokes"];
    },
  },
};
