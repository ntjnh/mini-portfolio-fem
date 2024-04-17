/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '880px',
      'xl': '986px',
      '2xl': '1110px'
    },
    extend: {},
  },
  plugins: [],
}
