import CardPokes from "~/components/CardPokes/";
import { mapGetters, mapActions } from "vuex";

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
    await this.fetchData();
  },
  fetchOnServer: false,

  methods: {
    ...mapActions({
      loadMore: "Pokes/handleLoadMore",
      fetchData: "Pokes/fetchData",
    }),
    async handleLoadMore() {
      await this.loadMore();
    },
  },

  computed: {
    ...mapGetters("Pokes", ["getPokes"]),
    allPokes() {
      return this.getPokes;
    },
  },
};
