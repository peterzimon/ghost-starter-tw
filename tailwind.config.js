/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.hbs", "./**/*.hbs"],
  theme: {
      extend: {
        gridTemplateColumns: {
          'feed': 'repeat(auto-fit, minmax(min(350px, 100%), 1fr))'
        },
        spacing: {
          px: '1px',
          0: '0px',
          0.5: '0.2rem',
          1: '0.4rem',
          1.5: '0.6rem',
          2: '0.8rem',
          2.5: '1rem',
          3: '1.2rem',
          3.5: '1.4rem',
          4: '1.6rem',
          5: '2rem',
          6: '2.4rem',
          7: '2.8rem',
          8: '3.2rem',
          9: '3.6rem',
          10: '4rem',
          11: '4.4rem',
          12: '4.8rem',
          14: '5.6rem',
          16: '6.4rem',
          18: '7.2rem',
          20: '8rem',
          22: '9.2rem',
          24: '9.6rem',
          28: '11.2rem',
          32: '12.8rem',
          36: '14.4rem',
          40: '16rem',
          44: '17.6rem',
          48: '19.2rem',
          52: '20.8rem',
          56: '22.4rem',
          60: '24rem',
          64: '25.6rem',
          72: '28.8rem',
          80: '32rem',
          96: '38.4rem'
        },
        fontSize: {
          '2xs': '1.0rem',
          base: '1.45rem',
          xs: '1.2rem',
          sm: '1.35rem',
          md: '1.45rem',
          lg: '1.75rem',
          xl: '2rem',
          '2xl': '2.4rem',
          '3xl': '3rem',
          '4xl': '3.6rem',
          '5xl': ['4.2rem', '1.15'],
          '6xl': ['6rem', '1'],
          '7xl': ['7.2rem', '1'],
          '8xl': ['9.6rem', '1'],
          '9xl': ['12.8rem', '1'],
          inherit: 'inherit'
        },
        lineHeight: {
            base: '1.5em',
            paragraph: '1.45em',
            tight: '1.35em',
            tighter: '1.25em',
            supertight: '1.1em'
        }
      }
  },
  plugins: [
      require('@tailwindcss/typography')
  ]
}