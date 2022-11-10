<template>
  <div class="my-4">
    <section class="container flex flex-wrap gap-y-4 px-4">
      <div
        v-for="char in allPokes"
        class="w-1/2 px-2 md:w-4/12 lg:w-3/12"
        :key="char.id"
      >
        <CardPokes
          :pokes="char"
          childclass="bg-white rounded overflow-auto shadow-lg"
        />
      </div>
    </section>

    <section class="container flex justify-center mt-4">
      <button class="p-3 bg-neutral-200 rounded-lg" @click="handleLoadMore">
        Load more
      </button>
    </section>
  </div>
</template>

<script>
export default {
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
</script>
