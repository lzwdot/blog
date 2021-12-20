const {path} = require('@vuepress/utils')

const {getNavbar} = require('./src/navbar')
const {getSidebar} = require('./src/sidebar')
const {rpcConf, sleep, getGitFiles, wpEditPost, wpDeletePost, wpEditTerm} = require('./src/wpRpc')

let baseUrl = '/blog';

try {
  if (process.env.VERCEL) baseUrl = ''
} catch (e) {
  console.log(e);
}

module.exports = {
  // 站点配置
  base: `${baseUrl}/`,
  locales: {
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: "Lzw's 笔记",
      description: '记录和分享，每天进步一点点！',
    }
  },

  // header 标签内的
  head: [
    ['link', {rel: 'stylesheet', href: `//unpkg.com/element-ui@2.15.5/lib/theme-chalk/index.css`}],
    ['link', {rel: 'apple-touch-icon', sizes: '180x180', href: `${baseUrl}/apple-touch-icon.png`}],
    ['link', {rel: 'icon', type: 'image/png', sizes: '32x32', href: `${baseUrl}/favicon-32x32.png`}],
    ['link', {rel: 'icon', type: 'image/png', sizes: '16x16', href: `${baseUrl}/favicon-16x16.png`}],
    ['link', {rel: 'manifest', href: `${baseUrl}/site.webmanifest`}],
    ['link', {rel: 'mask-icon', href: `${baseUrl}/safari-pinned-tab.svg`, color: '#5bbad5'}],
    ['meta', {name: 'msapplication-TileColor', content: '#da532c'}],
    ['meta', {name: 'theme-color', content: '#ffffff'}],

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

  // 主题配置
  themeConfig: {
    navbar: getNavbar(baseUrl), // 导航栏
    sidebar: getSidebar(baseUrl), // 侧边栏

    // 编辑此页链接
    editLinkText: '编辑页面',
    docsRepo: 'lzwdot/blogs',
    docsDir: 'docs',
    docsBranch: 'main',

    backToHome: '回到首页',
    notFound: ['什么都没找到'],

    openInNewWindow: '在新窗口打开',
    toggleDarkMode: '切换夜间模式',

    lastUpdatedText: '更新时间',
    contributorsText: '贡献者',

    // 主题插件配置
    themePlugins: {
      git: process.env.NODE_ENV === 'development' ? false : true // 启用 git 插件
    },
  },

  // Markdown 配置
  markdown: {
    code: {
      lineNumbers: false, // 代码块行号
    }
  },

  // 打包工具配置
  bundler: '@vuepress/vite',
  bundlerConfig: {
    // webpack 打包工具的选项
  },

  // 插件配置
  plugins: [
    ['@vuepress/plugin-search', {
      locales: {
        '/': {
          placeholder: '搜索', // 搜索框在不同 locales 下的文字
        }
      },
      maxSuggestions: 20, // 指定搜索结果的最大条数
      isSearchable: (page) => page.path !== '/',  // 排除首页
      getExtraFields: (page) => page.frontmatter.ID ? [page.frontmatter.ID] : [], // 允许搜索 Frontmatter 中的 `ID`
    }],
    ['@vuepress/register-components', {
      // 该目录下匹配 componentsPatterns 的文件会被自动注册为 Vue 组件。
      componentsDir: path.resolve(__dirname, './components'),
    }],
    ['@vuepress/pwa', {
      skipWaiting: false, // 设置 skipWaiting: false 配合 plugin-pwa-popup 使用
    }],
    ['@vuepress/plugin-pwa'],
    ['@vuepress/plugin-pwa-popup', {
      locales: {
        '/': {
          message: '发现新内容可用',
          buttonText: '刷新',
        },
      },
    }],
    [require('vuepress-plugin-to-wordpress'), {
      ...rpcConf,
      onGenerated: async (wpRpc, app) => {
        if (!rpcConf.username) return

        const files = await getGitFiles()

        await wpDeletePost(wpRpc, files['delete'])
        for (const page of app.pages) {
          await sleep(100)
          await wpEditPost(wpRpc, page, files['edit'])
        }
        await wpEditTerm(wpRpc)
      }
    }]
  ]
}