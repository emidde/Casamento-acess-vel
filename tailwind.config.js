/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'system-ui', 'sans-serif'],
        'display': ['Montserrat', 'sans-serif'],
        'body': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'wedding': {
          'pink': '#FFF5FA',
          'primary': '#D63384',
          'purple': '#5A3E85',
          'gray': '#A6A6A6',
          'secondary': '#CCCCCC',
          'lavender': '#F6E7FF',
        }
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'wedding': '0 10px 25px -5px rgba(214, 51, 132, 0.3)',
      },
    },
  },
  plugins: [],
};