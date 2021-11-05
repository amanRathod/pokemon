module.exports = {
  future: {
    removeDeprecatedGapUtilities: true
  },
  purge: {
    content: ['./src/**/*.js', './src/**/**/*.js']
  },
  darkMode: 'class',
  theme: {
    fill: (theme) => ({
      red: theme('colors.red.primary')
    }),
    colors: {
      indigo: {
        light: '#3949ab',
        DEFAULT: '#5c6ac4',
        dark: '#303f9f'
      },
      white: '#ffffff',
      headerWhite: '#f6f4f2',
      blue: {
        fifty: '#e3f2fd',
        one: '#bbdefb',
        two: '#90caf9',
        eight: '#1565c0',
        five: '#2196f3',
        seven: '#1976d2',
        nine: '#0d47a1',
        light: '#207DFF',
        medium: '#005c98'
      },
      black: {
        left: '#17191ad0',
        right: '#352d2d',
        base: '#414141',
        dark: '#222831'
      },
      gray: {
        base: '#616161',
        background: '#FDFAF6',
        primary: '#dbdbdb',
        borderbg: '#6b6363',
        formbg: '#362525'
      },
      red: {
        primary: '#ed4956',
        secondary: '#db3236',
        light: '#FECACA'
      },
      grey: {
        one: '#f5f5f5',
        fifty: '#fafafa',
        four: '#bdbdbd',
        five: '#9e9e9e',
        six: '#757575',
        seven: '#616161',
        eight: '#424242'
      },
      darkMode: {
        base: '#121212',
        primary: '#272727',
        blue: '#207DFF'
      }
    }
  },
  variants: {
    extend: {
      padding: ['hover'],
      maxHeight: ['focus'],
      backgroundColor: ['active'],
      display: ['group-hover'],
      visibility: ['hover', 'focus'],
      divideColor: ['group-hover']
    }
  }
};
