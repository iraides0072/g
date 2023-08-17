import "tailwindcss";
import { config } from "tailwindcss";

module.exports = {
  // Importa o módulo config do TailwindCSS
  config: {
    // Define as mixins do TailwindCSS
    base: {},
    components: {},
    utilities: {},

    // Define as configurações do TailwindCSS
    purge: ["./index.tsx"],
    darkMode: false,
    theme: {
      extend: {},
    },
    variants: {},
    plugins: [],
  },
};