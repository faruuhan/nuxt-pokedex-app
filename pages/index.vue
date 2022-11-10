<template>
  <section class="flex flex-wrap gap-2 px-4">
    <div
      :class="
        char.types[0].type.name === `grass`
          ? `bg-green-300`
          : char.types[0].type.name === `fire`
          ? `bg-red-300`
          : char.types[0].type.name === `water`
          ? `bg-blue-300`
          : char.types[0].type.name === `bug`
          ? `bg-teal-300`
          : `bg-neutral-100`
      "
      class="w-[18rem] py-2 rounded"
      v-for="char in allPokes"
      :key="char.id"
    >
      <div class="flex justify-center my-4">
        <img
          :src="
            `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/` +
            String(char.id).padStart(3, '0') +
            `.png`
          "
          :alt="char.name"
          class="w-[100px]"
        />
      </div>
      <h3 class="text-center text-lg font-medium">{{ char.name }}</h3>
      <p class="text-center mt-2">{{ char.types[0].type.name }}</p>
    </div>
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
