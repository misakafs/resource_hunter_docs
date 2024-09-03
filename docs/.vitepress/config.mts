import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: "资源猎人",
  description: "不同平台资源猎人",
  lastUpdated: true,
  sitemap: {
    hostname: 'https://resource-hunter-docs.pages.dev'
  },
  themeConfig: {
    lastUpdated: {
      text: '最后更新于',
    },
    editLink: {
      pattern: 'https://github.com/misakafs/resource_hunter_docs/edit/main/docs/:path',
      text: '编辑这个页面'
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    outline: {
      label: '页面导航',
      level: [2, 4],
    },
    nav: [
      { text: '关于', link: '/about' },
      { text: 'JSONPath', link: 'https://www.json.cn/jsonpath/' },
    ],
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
          { text: '看韩剧', link: '/platform/kancc' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/misakafs/resource_hunter_docs' }
    ]
  }
})
