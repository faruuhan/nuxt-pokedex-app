<template lang="pug">
  .card
    .card__header(:class="pokes.types[0].type.name === `grass`? `card__header--grass`: pokes.types[0].type.name === `fire`? `card__header--fire`: pokes.types[0].type.name === `water`? `card__header--water`: pokes.types[0].type.name === `bug`? `card__header--bug`: pokes.types[0].type.name === `fighting`? `card__header--fighting`: pokes.types[0].type.name === `poison`? `card__header--poison`: pokes.types[0].type.name === `flying`? `card__header--flying`: pokes.types[0].type.name === `ground`? `card__header--ground`: pokes.types[0].type.name === `rock`? `card__header--rock`: pokes.types[0].type.name === `ghost`? `card__header--ghost`: pokes.types[0].type.name === `steel`? `card__header--steel`: pokes.types[0].type.name === `electric`? `card__header--electric`: pokes.types[0].type.name === `psychic`? `card__header--psychic`: pokes.types[0].type.name === `ice`? `card__header--ice`: pokes.types[0].type.name === `dragon`? `card__header--dragon`: pokes.types[0].type.name === `dark`? `card__header--dark`: pokes.types[0].type.name === `fairy`? `card__header--fairy`: `card__header--normal`")
      .card__header__backgroundImg
      img.card__header__image(:src="`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${String(pokes.id).padStart(3, '0')}.png`")
    .card__title {{ pokes.name[0].toUpperCase() + pokes.name.slice(1) }}
    ul.card__types
      li.card__types__items(v-for="pokeType in typesPoke" :key="pokeType.name" :class="pokeType.name === `grass`? `card__types__items--grass`: pokeType.name === `fire`? `card__types__items--fire`: pokeType.name === `water`? `card__types__items--water`: pokeType.name === `bug`? `card__types__items--bug`: pokeType.name === `fighting`? `card__types__items--fighting`: pokeType.name === `poison`? `card__types__items--poison`: pokeType.name === `flying`? `card__types__items--flying`: pokeType.name === `ground`? `card__types__items--ground`: pokeType.name === `rock`? `card__types__items--rock`: pokeType.name === `ghost`? `card__types__items--ghost`: pokeType.name === `steel`? `card__types__items--steel`: pokeType.name === `electric`? `card__types__items--electric`: pokeType.name === `psychic`? `card__types__items--psychic`: pokeType.name === `ice`? `card__types__items--ice`: pokeType.name === `dragon`? `card__types__items--dragon`: pokeType.name === `dark`? `card__types__items--dark`: pokeType.name === `fairy`? `card__types__items--fairy`: `card__types__items--normal`") {{ pokeType.name }}
</template>

<script>
export default {
  props: ["pokes"],
  computed: {
    typesPoke() {
      return this.pokes.types.map(({ type }) => {
        return type;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  @apply bg-white rounded overflow-hidden shadow-lg;
  &__header {
    @apply flex justify-center relative py-5;
    &__backgroundImg {
      @apply bg-white/40 w-24 h-24 rounded-full absolute;
    }
    &__image {
      @apply w-[100px] z-10;
    }
    &--grass {
      @apply bg-green-300;
    }
    &--fire {
      @apply bg-orange-300;
    }
    &--water {
      @apply bg-blue-500;
    }
    &--bug {
      @apply bg-[#999917];
    }
    &--fighting {
      @apply bg-red-300;
    }
    &--poison {
      @apply bg-purple-500;
    }
    &--flying {
      @apply bg-violet-400;
    }
    &--ground {
      @apply bg-[#acbe06];
    }
    &--rock {
      @apply bg-[#818300];
    }
    &--ghost {
      @apply bg-violet-700;
    }
    &--steel {
      @apply bg-neutral-500;
    }
    &--electric {
      @apply bg-yellow-300;
    }
    &--psychic {
      @apply bg-pink-500;
    }
    &--ice {
      @apply bg-blue-300;
    }
    &--dragon {
      @apply bg-purple-800;
    }
    &--dark {
      @apply bg-[#4b4333];
    }
    &--fairy {
      @apply bg-pink-300;
    }
    &--normal {
      @apply bg-[#D9D2C4];
    }
  }
  &__title {
    @apply text-center text-xl font-medium mt-2;
  }
  &__types {
    @apply my-2 flex gap-2 justify-center;
    &__items {
      @apply font-medium uppercase text-sm;
      &--grass {
        @apply text-green-300;
      }
      &--fire {
        @apply text-orange-300;
      }
      &--water {
        @apply text-blue-500;
      }
      &--bug {
        @apply text-[#999917];
      }
      &--fighting {
        @apply text-red-300;
      }
      &--poison {
        @apply text-purple-500;
      }
      &--flying {
        @apply text-violet-400;
      }
      &--ground {
        @apply text-[#acbe06];
      }
      &--rock {
        @apply text-[#818300];
      }
      &--ghost {
        @apply text-violet-700;
      }
      &--steel {
        @apply text-neutral-500;
      }
      &--electric {
        @apply text-yellow-300;
      }
      &--psychic {
        @apply text-pink-500;
      }
      &--ice {
        @apply text-blue-300;
      }
      &--dragon {
        @apply text-purple-800;
      }
      &--dark {
        @apply text-[#4b4333];
      }
      &--fairy {
        @apply text-pink-300;
      }
      &--normal {
        @apply text-[#D9D2C4];
      }
    }
  }
}
</style>
