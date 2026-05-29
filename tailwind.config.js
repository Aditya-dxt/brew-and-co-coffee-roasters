/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['"Playfair Display"', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      colors: {
        coffee: {
          50: '#FDF8F3',
          100: '#F5E6D3',
          200: '#E8C9A0',
          300: '#D4A574',
          400: '#C4864D',
          500: '#8B5E3C',
          600: '#6B4226',
          700: '#4A2C17',
          800: '#2C1A0E',
          900: '#1A0F08',
          950: '#0D0705',
        },
        cream: '#F5E6D3',
        espresso: '#1A0F08',
        mocha: '#3E2723',
        latte: '#D4A574',
      },
      animation: {
        'steam': 'steam 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'grain': 'grain 8s steps(10) infinite',
      },
      keyframes: {
        steam: {
          '0%, 100%': { opacity: '0', transform: 'translateY(0) scaleX(1)' },
          '50%': { opacity: '0.3', transform: 'translateY(-20px) scaleX(1.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
      },
    },
  },
  plugins: [],
}
