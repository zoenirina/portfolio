/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // primaryColor:"#8873ef",
        primaryColor:"#00ffa2",
        headingColor:"#081e21",
        smallTextColor:"#37474f",
        textGreenLight:"#05f59d",
        btnGreenlight:"#30e8a5cf",
      }
    },
  },
  plugins: [],
}

