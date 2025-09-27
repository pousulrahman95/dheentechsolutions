/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bungee: ['Bungee-Regular', 'sans-serif'], /* 'bungee' என்பது நாம் பயன்படுத்தும் Tailwind class */
        // நீங்கள் வேறு fonts வைத்திருந்தால் இங்கேயே சேர்க்கலாம், உதாரணமாக:
        // body: ['Arial', 'sans-serif'],
      },
    },
  },

  plugins: [],
};
