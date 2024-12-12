/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif' , 'Merriweather Sans'], 
      },
    },
  },
  plugins: [require('@tailwindcss/typography')], 
};
