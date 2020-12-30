module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  purge: {
    content: [
      './src/assets/**/*.css',
      './src/**/*.vue',
      './src/**/*.js'
    ],
    options: {
      defaultExtractor: content => content.match(/[\w-/:%]+(?<!:)/g) || []
    },
  },
  corePlugins: {},
  plugins: [],
}
