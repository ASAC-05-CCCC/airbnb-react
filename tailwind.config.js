/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
     gridTemplateColumns: {
        fluid: 'repeat(auto-fit, minmax(303px, 1fr))',
      },
      colors: {
        hostColor: '#F0EFE9',
      },
    },
  },
  plugins: [],
}
