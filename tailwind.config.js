/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        bg: 'var(--bg-color)',
        'bg-secondary': 'var(--bg-secondary)',
        primary: 'var(--primary-color)',
        'primary-hover': 'var(--primary-hover)',
        accent: 'var(--accent-color)',
        'accent-hover': 'var(--accent-hover)',
        text: 'var(--text-color-primary)',
        'text-secondary': 'var(--text-color-secondary)',
        'text-muted': 'var(--text-color-muted)',
        border: 'var(--border-color)',
      },
      boxShadow: {
        'glow': '0 0 20px 4px var(--accent-glow)',
        'card': 'var(--card-shadow)',
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '250ms',
        'slow': '400ms',
      },
    },
  },
  plugins: [],
}
