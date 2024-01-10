/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radal":
          "radial-gradient(circle, rgba(254,244,192,1) 0%, rgba(254,240,200,1) 26%, rgba(254,232,200,1) 100%)",
      },
      backgroundColor: {
        darkOne: "#17191D",
        darkTwo: "#35373C",
        darkThree: "#46484D",
        lightOne: "#E1E1E1",
        lightTwo: "#F8F8F8",
        lightThree: "#E7E7E7",
      },
      color: {
        primary: "#040F0F",
      },
      backgroundImage: {
        colored: "linear-gradient(45deg, aqua, #ff3e9f, hotpink)",
      },
    },
  },
};
