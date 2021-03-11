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
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#444',
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
            h1: {
              color: '#111',
              fontWeight: 300
            }
          },
        },
      }
    },
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