/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': "480px",
      'md': "768px",
      'lg': "976px",
      'xl': "1440px",
      '2xl': "1536px",
    },
    colors: {
      blue: "#1fb6ff",
      white: '#ffffff',
      purple: "#7e5bef",
      "text_panel" : "#38383d",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      'barckground_textarea': "#f2f5fa",
      'border_color' : '#d9d9d9',
      'panel': 'rgba(0, 0, 0, 0.02)',
      "gray-dark": "#273444",
      black :"#000",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      red : "#cf5454"
    },
    extend: {
      screens: {
        "3xl": "1600px",
      },
      width : {
        "56vw" : "56vw",
      },
      height : {
        "5vw" : "5vw"
      }
     
    },
  },
  plugins: [],
};
