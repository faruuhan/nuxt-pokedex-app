<template>
  <section class="container flex flex-wrap gap-2 px-4">
    <CardPokes
      v-for="char in allPokes"
      :pokes="char"
      :key="char.id"
      childclass="bg-white w-[18rem] rounded overflow-auto shadow-lg"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      allPokes: [],
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
  },
  fetchOnServer: false,
};
</script>
