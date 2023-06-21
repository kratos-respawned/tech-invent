/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-black': '#0D0E12',
        'light-black': '#15181E',
        'light-grey':'rgba(227, 229, 232, 0.52)',
        'white':'rgba(227,229,232,0.9)',
      },
    }
  },
  plugins: [],
}

