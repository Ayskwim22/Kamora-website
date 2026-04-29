/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kamora-orange': '#FF6B35',
        'kamora-red': '#C73E1D',
        'kamora-cream': '#FFF0E1',
        'kamora-brown': '#A65D2A',
        'kamora-dark': '#341A0C',
      },
       fontFamily: {
        'sans': ['Abraham', 'Inter', 'system-ui', 'sans-serif'],
        'display': ['Abraham', 'Inter', 'system-ui', 'sans-serif'],
        'heading': ['Abraham', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
