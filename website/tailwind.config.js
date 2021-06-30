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
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '834px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
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