import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SFBE-docs",
  description: "专注于windowsARG的引擎",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '测试', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '创建角色',
        items: [
          { text: '测试', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Gardin233/SFBE-docs/' }
    ]
  }
})
