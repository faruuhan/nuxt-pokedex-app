<template>
  <div :class="childclass">
    <div
      :class="
        pokes.types[0].type.name === `grass`
          ? `bg-green-300`
          : pokes.types[0].type.name === `fire`
          ? `bg-red-300`
          : pokes.types[0].type.name === `water`
          ? `bg-blue-300`
          : pokes.types[0].type.name === `bug`
          ? `bg-[#999917]`
          : `bg-neutral-100`
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
    <p class="text-center my-2">{{ pokes.types[0].type.name }}</p>
  </div>
</template>

<script>
export default {
  props: ["pokes", "childclass"],
};
</script>
