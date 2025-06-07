import { defineConfig } from 'tailwindcss';

export default defineConfig({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"MADE Tommy"', 'sans-serif'], // override default sans
      },
    },
  },
  plugins: [],
});