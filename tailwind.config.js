export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#0f172a',
        slate: {
          950: '#020617',
        },
        brand: {
          500: '#8b5cf6',
          600: '#7c3aed',
        },
      },
      boxShadow: {
        soft: '0 25px 80px rgba(15, 23, 42, 0.12)',
      },
    },
  },
  plugins: [],
}
