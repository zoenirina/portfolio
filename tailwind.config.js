/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // primaryColor:"#8873ef",
        primaryColor:"#fce515",
        headingColor:"#081e21",
        smallTextColor:"#37474f",
        greenlightq:"#ebeae7db",
        greenlight:"#ffffff",
      }
    },
  },
  plugins: [],
}

