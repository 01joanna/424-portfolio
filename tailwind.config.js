/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      overpass: ["Overpass Mono", "sans-serif"],
      editorialReg: ["PP Editorial New Regular", "sans-serif"],
      editorialItalic: ["PP Editorial New Italic", "sans-serif"],
      editorialUltrabold: ["PP Editorial New Ultrabold", "sans-serif"],
      editorialUltralight: ["PP Editorial New Ultralight", "sans-serif"],
      editorialUltraBoldItalic: ["PP Editorial New Ultrabold Italic", "sans-serif"],
      editorialUltraLightItalic: ["PP Editorial New Ultralight Italic", "sans-serif"],
      robertmedium: ["Robert Medium", "sans-serif"],
      neuemedium: ["PP Neue Montreal Medium", "sans-serif"],
      neuethin: ["PP Neue Montreal Thin", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
