/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        moma: '9rem'
      },
      fontFamily: {
        Poppins: ['Poppins']
      },
      colors: {
        primary: '#12182B',
        secondary: '#FFFFFF',
        tertiary: '#69FAB4'
      },
      screens: {
        'myLS': '800px',
      }
    },
    plugins: [],
  }
}