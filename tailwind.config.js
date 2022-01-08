module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      monserat: ['Montserrat'],
      // Ensure fonts with spaces have " " surrounding it.
    },
    boxShadow: {
      'light-card':
        '6px 6px 10px  rgba(90, 90, 90, 1), -6px -6px 10px rgba(255, 255, 255, 1)',
      'Pule-card':
        '6px 6px 10px  rgba(90, 90, 90, 1), -6px -6px 10px rgba(137, 36, 203, 1)',
      'green-card':
        '6px 6px 10px  rgba(90, 90, 90, 1), -6px -6px 10px rgba(107, 255, 130, 1)',
      'red-card':
        '6px 6px 10px  rgba(90, 90, 90, 1), -6px -6px 10px rgba(255, 74, 74, 1)', 
    },
    extend: {},
  },
  plugins: [],
}
