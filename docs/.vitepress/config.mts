import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid(defineConfig({
  base:"/SFBE-docs/",
  title: "SFBE-docs",
  description: "专注于windowsARG的引擎",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/alpha/' },
      {
        text: '版本',
        items: [
          { text: '(now)alpha', link: '/alpha/' },
          { text: 'beta(future)', link: '/beta/' }
        ]
      }
    ],

    sidebar: {
      '/beta/': [
        {
          text: 'beta 文档',
          items: [
            { text: '首页', link: '/beta/' }
          ]
        }
      ],
      // Default sidebar fallback
      '/alpha/': [
        {
          text: '开始',
          items: [
            { text: '欢迎', link: '/alpha/' },
            { text: '介绍', link: '/alpha/introduce' }
          ]
        },
        {
          text: '角色',
          items: [
            { text: '准备工作', link: '/alpha/character/readyForCharacter' },
            { text: '创建角色', link: '/alpha/character/create' },
            { text: '设置动画', link: '/alpha/character/animation' },
            { text: '碰撞箱', link: '/alpha/character/hitbox' },
            { text: '让角色移动', link: '/alpha/character/move' }
          ]
        },{
          text: '音频',
          items: [
            { text: '音频基础', link: '/alpha/audio/basic' }
          ]
        },{
          text: '时间线',
          items: [
            { text: '时间线基础', link: '/alpha/timeLine/basic' }
          ]
        },{
          text: '插件',
          items: [
            { text: '基本', link: '/alpha/plugin/' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Gardin233/OCStickFiguresByElectron' }
    ]
  }
}))
