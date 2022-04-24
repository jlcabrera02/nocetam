module.exports = {
  content: [
    "./public/*.{html,js}",
    "./public/components/*.js",
    "./public/helpers/*.js",
    "./src/*.css",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.5s ease-in 0s 1 normal forwards",
        fadeOut: "fadeOut 0.5s ease-in 0s 1 normal forwards",
        scaleOut: "scaleOut 0.3s ease-in 0s 1 normal forwards",
        scaleIn: "scaleIn 0.3s ease-in 0s 1 normal forwards",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },

        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },

        scaleIn: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },

        scaleOut: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)" },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
