const { getNavbar } = require('./src/navbar')
const { getSidebar } = require('./src/sidebar')

module.exports = {
    lang: 'zh-CN',
    title: '订阅RSS',
    description: '分享所知道的',

    // header 标签内的
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],

    themeConfig: {
        logo: '/logo.png', // logo

        nav: getNavbar(), // 导航栏
        sidebar: getSidebar(), // 侧边栏

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
        [
            'fulltext-search'
        ],
    ]
}