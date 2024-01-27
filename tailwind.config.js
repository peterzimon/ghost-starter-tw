/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.hbs", "./**/*.hbs"],
  theme: {
      extend: {
        gridTemplateColumns: {
          'feed': 'repeat(auto-fit, minmax(min(350px, 100%), 1fr))'
        }
      }
  },
  plugins: [
      require('@tailwindcss/typography')
  ]
}