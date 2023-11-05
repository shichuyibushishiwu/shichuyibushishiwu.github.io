const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Tuna',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'shichuyibushishiwu/Tuna.Revit.Extensions',
    editLinks: true,
    logo:'/assets/images/tuna.png',
    docsRepo:'shichuyibushishiwu/shichuyibushishiwu.github.io',
    docsDir: 'docs',
    docsBranch:'main',
    editLinkText: '帮助我们完善文档',
    lastUpdated: '最后更新',
    nav: [
      {
        text: 'Api 文档',
        link: '/guide/',
      },
      {
        text: '软件下载',
        link: '/software/'
      },
      {
        text: 'BiliBili',
        link: 'https://space.bilibili.com/14252097?spm_id_from=333.1007.0.0'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: '金枪鱼API文档',
          collapsable: false,
          children: [
            '',
            'api-query-element.md',
            'api-select-element.md',
            'api-geometry.md',
            'api-transaction.md',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
