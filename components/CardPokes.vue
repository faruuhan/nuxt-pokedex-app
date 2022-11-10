<template>
  <div :class="childclass">
    <div
      :class="
        pokes.types[0].type.name === `grass`
          ? `bg-green-300`
          : pokes.types[0].type.name === `fire`
          ? `bg-orange-300`
          : pokes.types[0].type.name === `water`
          ? `bg-blue-500`
          : pokes.types[0].type.name === `bug`
          ? `bg-[#999917]`
          : pokes.types[0].type.name === `fighting`
          ? `bg-red-300`
          : pokes.types[0].type.name === `poison`
          ? `bg-purple-500`
          : pokes.types[0].type.name === `flying`
          ? `bg-violet-400`
          : pokes.types[0].type.name === `ground`
          ? `bg-[#acbe06]`
          : pokes.types[0].type.name === `rock`
          ? `bg-[#818300]`
          : pokes.types[0].type.name === `ghost`
          ? `bg-violet-700`
          : pokes.types[0].type.name === `steel`
          ? `bg-neutral-500`
          : pokes.types[0].type.name === `electric`
          ? `bg-yellow-300`
          : pokes.types[0].type.name === `psychic`
          ? `bg-pink-500`
          : pokes.types[0].type.name === `ice`
          ? `bg-blue-300`
          : pokes.types[0].type.name === `dragon`
          ? `bg-purple-800`
          : pokes.types[0].type.name === `dark`
          ? `bg-[#4b4333]`
          : pokes.types[0].type.name === `fairy`
          ? `bg-pink-300`
          : `bg-[#D9D2C4]`
      "
      class="flex justify-center relative py-5"
    >
      <div class="bg-white/40 w-24 h-24 rounded-full absolute"></div>
      <img
        :src="
          `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/` +
          String(pokes.id).padStart(3, '0') +
          `.png`
        "
        :alt="pokes.name"
        class="w-[100px] z-10"
      />
    </div>
    <h3 class="text-center text-xl font-medium mt-2">
      {{ pokes.name[0].toUpperCase() + pokes.name.slice(1) }}
    </h3>
    <!-- <p class="text-center my-2">{{ pokes.types[0].type.name }}</p> -->
    <ul class="text-center my-2 ul-style">
      <li
        v-for="pokeType in typesPoke"
        :key="pokeType.name"
        class="font-medium uppercase text-sm"
        :class="
          pokeType.name === `grass`
            ? `text-green-300`
            : pokeType.name === `fire`
            ? `text-orange-300`
            : pokeType.name === `water`
            ? `text-blue-500`
            : pokeType.name === `bug`
            ? `text-[#999917]`
            : pokeType.name === `fighting`
            ? `text-red-300`
            : pokeType.name === `poison`
            ? `text-purple-500`
            : pokeType.name === `flying`
            ? `text-violet-400`
            : pokeType.name === `ground`
            ? `text-[#acbe06]`
            : pokeType.name === `rock`
            ? `text-[#818300]`
            : pokeType.name === `ghost`
            ? `text-violet-700`
            : pokeType.name === `steel`
            ? `text-neutral-500`
            : pokeType.name === `electric`
            ? `text-yellow-300`
            : pokeType.name === `psychic`
            ? `text-pink-500`
            : pokeType.name === `ice`
            ? `text-blue-300`
            : pokeType.name === `dragon`
            ? `text-purple-800`
            : pokeType.name === `dark`
            ? `text-[#4b4333]`
            : pokeType.name === `fairy`
            ? `text-pink-300`
            : `text-[#D9D2C4]`
        "
      >
        {{ pokeType.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["pokes", "childclass"],
  computed: {
    typesPoke() {
      return this.pokes.types.map(({ type }) => {
        return type;
      });
    },
  },
};
</script>

<style>
.ul-style li {
  @apply inline;
}
</style>
