/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        coiny: ["Coiny"],
        titillium: ["Titillium Web"],
      },
      backgroundImage: {
        herograd: "linear-gradient(180deg, #df1731 0%, #df1731 100%)",
        herobtngrad: "linear-gradient(90deg, #09eab4 0%, #d429f3 100%)",
        aboutgrad: "linear-gradient(45deg, #fff, #fff)",
        buygrad: "linear-gradient(180deg, #df1731 0%, #df1731 100%)",
        buyheadinggrad: "linear-gradient(45deg, #fff, #fff)",
        tokenheadinggrad: "-webkit-linear-gradient(45deg, #fff, #fff)",
        tokengrad: "radial-gradient(at center center, #df1731 0%, #df1731 63%)",
        choosegrad: "radial-gradient(at center right, #df1731 0%, #df1731 63%)",
      },
    },
  },
  plugins: [],
};
