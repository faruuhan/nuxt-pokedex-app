export default {
  async fetchData({ commit }) {
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

    commit("setPokes", dataPokes);
    commit("setLoadMore", data.next);
  },
  async handleLoadMore({ commit, getters }) {
    const pokes = await this.$axios.get(getters.getLoadMore);

    const { data } = pokes;
    const dataPokes = [...getters.getPokes];
    await data.results.map(async (pokemon) => {
      const pokes = await this.$axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      dataPokes.push(pokes.data);
    });

    commit("setPokes", dataPokes);
    commit("setLoadMore", data.next);
  },
};
