import { DefaultTheme, defineConfig } from 'vitepress'

const nav = (): DefaultTheme.NavItem[] => {
    return [
        { text: '指南', link: '/guide/define' },
        {
            text: '平台实现',
            items: [
                {
                    text: '腾讯视频',
                    link: 'https://github.com/misakafs/resource_hunter_docs/blob/main/packages/platform/qq/index.ts',
                },
                {
                    text: '爱奇艺',
                    link: 'https://github.com/misakafs/resource_hunter_docs/blob/main/packages/platform/iqiyi/index.ts',
                },
                {
                    text: '优酷视频',
                    link: 'https://github.com/misakafs/resource_hunter_docs/blob/main/packages/platform/youku/index.ts',
                },
                {
                    text: '芒果视频',
                    link: 'https://github.com/misakafs/resource_hunter_docs/blob/main/packages/platform/mgtv/index.ts',
                },
            ],
        },
        { text: 'JSONPath', link: 'https://www.json.cn/jsonpath/' },
        { text: 'Base64', link: 'https://base64.us/' },
        { text: '关于', link: '/about' },
    ]
}

const sidebar = (): DefaultTheme.SidebarMulti => {
    return {
        '/guide/': {
            base: '/guide/',
            items: [
                {
                    text: '说明',
                    collapsed: false,
                    items: [{ text: '字段定义', link: 'define' }],
                },
                {
                    text: '接口定义',
                    collapsed: false,
                    items: [
                        { text: '发现接口', link: 'discover' },
                        { text: '搜索接口', link: 'search' },
                        { text: '详情接口', link: 'detail' },
                        { text: '剧集接口', link: 'episode' },
                        { text: '解析接口', link: 'parse' },
                        { text: '弹幕接口', link: 'danmu' },
                    ],
                },
            ],
        },
    }
}

export default defineConfig({
    lang: 'zh-cmn-Hans',
    title: '资源猎人',
    description: '不同平台资源猎人',
    lastUpdated: true,
    sitemap: {
        hostname: 'https://resource-hunter-docs.pages.dev',
    },
    themeConfig: {
        logo: { src: '/favicon.ico', width: 24, height: 24 },
        nav: nav(),
        sidebar: sidebar(),
        search: {
            provider: 'local',
            options: {
                placeholder: '搜索文档',
                translations: {
                    button: {
                        buttonText: '搜索文档',
                        buttonAriaLabel: '搜索文档',
                    },
                    modal: {
                        searchBox: {
                            resetButtonTitle: '清除查询条件',
                            resetButtonAriaLabel: '清除查询条件',
                            cancelButtonText: '取消',
                            cancelButtonAriaLabel: '取消',
                        },
                        startScreen: {
                            recentSearchesTitle: '搜索历史',
                            noRecentSearchesText: '没有搜索历史',
                            saveRecentSearchButtonTitle: '保存至搜索历史',
                            removeRecentSearchButtonTitle: '从搜索历史中移除',
                            favoriteSearchesTitle: '收藏',
                            removeFavoriteSearchButtonTitle: '从收藏中移除',
                        },
                        errorScreen: {
                            titleText: '无法获取结果',
                            helpText: '你可能需要检查你的网络连接',
                        },
                        footer: {
                            selectText: '选择',
                            navigateText: '切换',
                            closeText: '关闭',
                            searchByText: '搜索提供者',
                        },
                        noResultsScreen: {
                            noResultsText: '无法找到相关结果',
                            suggestedQueryText: '你可以尝试查询',
                            reportMissingResultsText: '你认为该查询应该有结果？',
                            reportMissingResultsLinkText: '点击反馈',
                        },
                    },
                },
            },
        },
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        outline: {
            label: '页面导航',
            level: [2, 4],
        },
        lastUpdated: {
            text: '最后更新于',
        },
        editLink: {
            pattern: 'https://github.com/misakafs/resource_hunter_docs/edit/main/packages/resource_hunter/docs/:path',
            text: '编辑这个页面',
        },
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/misakafs/resource_hunter_docs',
            },
        ],
    },
})
