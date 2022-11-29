module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts'
    ]
  },
  theme: {
    fontSize: {
      'xs': ['0.75em', {
        letterSpacing: '0.025em',
        lineHeight: '1.5em',
      }],
      'sm': ['0.875em', {
        letterSpacing: '0.025em',
        lineHeight: '1.5em',
      }],
      'base': ['1.0em', {
        letterSpacing: '0.025em',
        lineHeight: '1.5em',
      }],
      'lg': ['1.125em', {
        letterSpacing: '0.025em',
        lineHeight: '1.5em',
      }],
      'xl': ['1.25em', {
        letterSpacing: '0.025em',
        lineHeight: '1.5em',
      }],
      '2xl': ['1.5em', {
        letterSpacing: '0.025em',
        lineHeight: '1.5em',
      }],
      // Or with a default line-height as well
      '3xl': ['1.875em', {
        letterSpacing: '0.025em',
        lineHeight: '1.5em',
      }],
      '4xl': ['2.25em', {
        letterSpacing: '0.025em',
        lineHeight: '1.5em',
      }],
      // Or with a default line-height as well
      '5xl': ['3em', {
        letterSpacing: '0.025em',
        lineHeight: '1.5em',
      }],
      '6xl': ['4em', {
        letterSpacing: '0.025em',
        lineHeight: '1.5em',
      }],
    },
    fontFamily: {
      sans:['Comfortaa','sans-serif'],
    },

    

      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
        'md': '980px',
        // => @media (min-width: 980px) { ... }
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        'xl': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#000',
            a: {
              color: '#000000',
              '&:hover': {
                color: '#333333',
              },
            },
            h1: {
              color: '#111',
              fontWeight: 300
            },
            ol: {
              'list-style': 'decimal',
              'margin-left': '1.9rem',
              'font-weight': 'bold',
            },
            ul: {
              'list-style': 'disc',
              'margin-left': '1.9rem',
              'font-weight': 'bold',
            },
          },
          
        },
      },
    },
    minHeight: {
      '0': '0',
      '1/4': '6em',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
     }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],

}



// module.exports = {
//   theme: {
//     extend: {
//       typography: (theme) => ({
//         DEFAULT: {
//           css: {
//             color: theme('colors.gray.800'),

//             // ...
//           },
//         },
//       }),
//     }
//   },


// module.exports = {
//   theme: {
//     extend: {
//       typography: {
//         DEFAULT: {
//           css: {
//             color: '#333',
//             a: {
//               color: '#3182ce',
//               '&:hover': {
//                 color: '#2c5282',
//               },
//             },
//           },
//         },
//       }
//     },
//   },