<template>
  <div class="my-4">
    <section class="container row">
      <div v-for="char in allPokes" class="row__card" :key="char.id">
        <CardPokes :pokes="char" />
      </div>
    </section>

    <section class="container flex justify-center mt-4">
      <button class="button button--secondary" @click="handleLoadMore">
        Load more
      </button>
    </section>
  </div>
</template>

<script>
export default {
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
</script>

<style lang="scss" scoped>
.row {
  @apply flex flex-wrap gap-y-4 px-4;
  &__card {
    @apply w-1/2 px-2 md:w-4/12 lg:w-3/12;
  }
}

.button {
  @apply p-3 rounded-lg;
  &--secondary {
    @apply bg-neutral-200;
  }
}
</style>
