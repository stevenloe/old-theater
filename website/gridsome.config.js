module.exports = {
  siteName: 'The Old Theater',
  siteDescription: "",
  siteUrl: 'https://oldtheater.org',
  titleTemplate: `%s | The Old Theater`,
  icon: 'src/favicon.png',

  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: [
      ]
    }
  },

  plugins: [
  ],

  templates: {

  },

  chainWebpack: config => {
    config.module
      .rule('css')
      .oneOf('normal')
      .use('postcss-loader')
      .tap(options => {
        options.plugins.unshift(...[
          require('postcss-import'),
          require('tailwindcss'),
        ])

        return options
      })
  },
}
