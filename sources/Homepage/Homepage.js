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
  data() {
    return {
      allPokes: [],
      loadMore: "",
    };
  },

  async fetch() {
    const pokes = await this.$axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=20"
    );

    const { data } = pokes;
    const dataPokes = [];
    await data.results.map(async (pokemon) => {
      const pokes = await this.$axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      dataPokes.push(pokes.data);
    });

    this.allPokes = dataPokes;
    this.loadMore = data.next;
  },
  fetchOnServer: false,

  methods: {
    async handleLoadMore() {
      const pokes = await this.$axios.get(this.loadMore);

      const { data } = pokes;
      const dataPokes = [...this.allPokes];
      await data.results.map(async (pokemon) => {
        const pokes = await this.$axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        dataPokes.push(pokes.data);
      });

      this.allPokes = dataPokes;
      this.loadMore = data.next;
    },
  },
};
