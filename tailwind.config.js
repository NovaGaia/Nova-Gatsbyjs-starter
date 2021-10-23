module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#43708f',
        secondary: '#7DB6DB',
        text: '#4c4c54',
        'text-light': '#737380',
        heading: '#669795ff',
        'heading-black': '#0b0a1a',
        'heading-black-hero': '#ffffff',
        accent: '#18c942',
        'accent-light': '#e6ffef',
      },
      minHeight: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
        navBar: '5em',
        hero: '15em',
      },
      maxHeight: {
        blogCard: '10em',
      },
      maxWidth: {
        '1/4': '25%',
        '1/3': '33.333333%',
        '1/2': '50%',
        '3/4': '75%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
