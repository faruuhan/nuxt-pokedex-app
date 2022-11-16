<template lang="pug">
main
  nuxt
</template>

<script>
export default {
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: "vue-pug-loader",
      },
    ],
  },
};
</script>
