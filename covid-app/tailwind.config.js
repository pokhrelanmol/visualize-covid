module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "6/7": "85.7142857%",
      },
    },
  },
  variants: {
    extend: {
      transform: ["hover", "focus"],
      scale: ["active", "group-hover"],
      tableLayout: ["hover", "focus"],
      zIndex: ["hover", "active"],
    },
  },
  plugins: [],
};
