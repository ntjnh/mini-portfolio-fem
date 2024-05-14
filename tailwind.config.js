/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    fontFamily: {
      'sans': ['"Open Sans"', 'sans-serif'],
      'serif': ['Lora', 'serif']
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '880px',
      'xl': '986px',
      '2xl': '1110px'
    },
    extend: {
      fontSize: {
        '4.5xl': ['2.5rem', '2.5rem']
      }
    },
  },
  plugins: [],
}
