/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure this path covers your components
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
       colors: {
        bg: 'var(--bg-color)',
        primary: 'var(--primary-color)',  // Added 'var' prefix
        accent: 'var(--accent-color)',    // Added 'var' prefix
        text: 'var(--text-color-primary)',         // Added 'var' prefix
        text2: 'var(--text-color-dark)'
      }
    },
  },
  plugins: [],
}
