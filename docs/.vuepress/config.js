const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Tuna",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "tuna revit api docs",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["link", { rel: "shortcut icon", href: "/assets/images/tuna.ico" }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "shichuyibushishiwu/Tuna.Revit.Extensions",
    editLinks: true,
    logo: "/assets/images/tuna.png",
    docsRepo: "shichuyibushishiwu/shichuyibushishiwu.github.io",
    docsDir: "docs",
    docsBranch: "main",
    editLinkText: "编辑文档",
    lastUpdated: "Last Updated",
    nav: [
      {
        text: "指南",
        link: "/guide/",
      },
      {
        text: "插件",
        link: "/software/",
      },
      {
        text: "社区",
        link: "https://txc.qq.com/products/606967/",
      },
      {
        text: "BiliBili",
        link: "https://space.bilibili.com/14252097?spm_id_from=333.1007.0.0",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "金枪鱼指南",
          collapsable: false,
          sidebarDepth: 1,
          children: [
            "",
            {
              title: "内置对象",
              collapsable: false,
              children: [
                "api-builtin-catagories.md",
                "api-builtin-parameters.md",
              ],
            },
            "api-select-element.md",
            {
              title: "查询图元",
              collapsable: false,
              sidebarDepth: 1,
              children: [
                "api-query-document.md",
                "api-query-view.md",
                "api-query-collector.md",
              ],
            },
            "api-element.md",
            "api-parameter.md",
            "api-geometry.md",
            {
              title: "材质",
              children: ["api-material-color.md", "api-material-appearance.md"],
            },
            "api-transaction.md",
            "api-unit.md",
            "api-geometry-transient.md",
            "api-ribbon.md",
            "api-services-externalevent.md",
          ],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
