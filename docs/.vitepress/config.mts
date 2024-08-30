import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "资源猎人",
  description: "不同平台资源猎人",
  lastUpdated: true,
  sitemap: {
    hostname: 'https://resource-hunter-docs.pages.dev'
  },
  themeConfig: {

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: '视频资源',
        link: '/video',
        collapsed: false,
        items: [
          { text: '腾讯视频', link: '/platform/qq' },
          { text: '爱奇艺', link: '/platform/iqiyi' },
          { text: '芒果视频', link: '/platform/mgtv' },
          { text: '优酷视频', link: '/platform/youku' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/misakafs/resource_hunter_docs' }
    ]
  }
})
