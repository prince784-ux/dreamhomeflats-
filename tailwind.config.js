/** @type {import('tailwindcss').Config} */

export default {

  content: [

    "./index.html",

    "./src/**/*.{js,jsx}"

  ],

  theme: {

    extend: {

      colors: {

        emeraldDark: "#07170F",

        emerald: "#0E5A3A",

        emeraldLight: "#16724A",

        gold: "#D4AF37",

        goldLight: "#F6D97B",

        glass: "rgba(255,255,255,.08)"

      },

      fontFamily: {

        heading: ["Cormorant Garamond", "serif"],

        body: ["Poppins", "sans-serif"]

      },

      boxShadow: {

        gold:

          "0 0 25px rgba(212,175,55,.45)",

        emerald:

          "0 0 40px rgba(14,90,58,.4)"

      },

      backgroundImage: {

        hero:

          "linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.75))"

      }

    }

  },

  plugins: []

      }
