module.exports = {
  siteName: 'The Old Theater',
  siteDescription: "",
  siteUrl: 'https://oldtheater.org',
  titleTemplate: `%s | The Old Theater`,
  // icon: 'src/favicon.png',

  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: [
      ]
    }
  },

  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "shows/**/*.md",
        typeName: "Show"
      }
    },   
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Article',
        baseDir: './content/articles',
        path: '**/*.md',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
  ],

  templates: {
    Article: [{
      path: '/articles/:title'
    }],
    // News: [
    //   {
    //     path: '/news/:title',
    //     component: './src/templates/News.vue'
    //   }
    // ],
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
