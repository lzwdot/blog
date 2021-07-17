const { getNavbar } = require('./src/navbar')
const { getSidebar } = require('./src/sidebar')

module.exports = {
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性 
            title: '订阅RSS',
            description: '分享所知道的',
        }
    },

    // header 标签内的
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/logo.png' }],
        ['link', { rel: 'mask-icon', href: '/logo.png', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/logo.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
        ["script", {},
            //百度统计
            `var _hmt = _hmt || [];
            (function () {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?96d91412aff9543cd8e022f381d8bf1c";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            })();`
        ]
    ],

    themeConfig: {
        logo: '/logo.png', // logo

        nav: getNavbar(), // 导航栏
        sidebar: getSidebar(), // 侧边栏

        smoothScroll: true, // 页面滚动

        lastUpdated: '更新时间', // string | boolean
        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'awei922/blogs',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '编辑页面'
    },
    plugins: [
        ['fulltext-search'],
        ['@vuepress/back-to-top'],
        ['@vuepress/blog'],
        ['@vuepress/medium-zoom'],
        ['@vuepress/nprogress'],
        ['@vuepress/register-components']
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
        }],
        ['@vuepress/active-header-links', {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
        }],        
    ]
}