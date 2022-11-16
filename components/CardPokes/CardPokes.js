export default {
  props: ["pokes"],

  methods: {
    classBackground(params) {
      if (params === "grass") return "header--grass";
      if (params === "fire") return "header--fire";
      if (params === "water") return "header--water";
      if (params === "bug") return "header--bug";
      if (params === "fighting") return "header--fighting";
      if (params === "poison") return "header--poison";
      if (params === "flying") return "header--flying";
      if (params === "ground") return "header--ground";
      if (params === "rock") return "header--rock";
      if (params === "ghost") return "header--ghost";
      if (params === "steel") return "header--steel";
      if (params === "electric") return "header--electric";
      if (params === "psychic") return "header--psychic";
      if (params === "ice") return "header--ice";
      if (params === "dragon") return "header--dragon";
      if (params === "dark") return "header--dark";
      if (params === "fairy") return "header--fairy";
      if (params === "normal") return "header--normal";
    },

    classTypes(params) {
      if (params === "grass") return "items--grass";
      if (params === "fire") return "items--fire";
      if (params === "water") return "items--water";
      if (params === "bug") return "items--bug";
      if (params === "fighting") return "items--fighting";
      if (params === "poison") return "items--poison";
      if (params === "flying") return "items--flying";
      if (params === "ground") return "items--ground";
      if (params === "rock") return "items--rock";
      if (params === "ghost") return "items--ghost";
      if (params === "steel") return "items--steel";
      if (params === "electric") return "items--electric";
      if (params === "psychic") return "items--psychic";
      if (params === "ice") return "items--ice";
      if (params === "dragon") return "items--dragon";
      if (params === "dark") return "items--dark";
      if (params === "fairy") return "items--fairy";
      if (params === "normal") return "items--normal";
    },
  },

  computed: {
    typesPoke() {
      return this.pokes.types.map(({ type }) => {
        return type;
      });
    },
  },
};
