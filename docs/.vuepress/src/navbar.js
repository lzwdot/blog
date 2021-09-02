function getNavbar(baseUrl) {
    const navTree = [
        { text: '文章', link: '/posts/' },
        { text: '学习', link: '/learns/' },
        { text: '代码', link: '/codes/' },
        { text: '工具', link: '/tools/' },
        { text: '关于', link: '/about' },
        { text: 'GitHub', link: `https://lzwdot.github.io${baseUrl}` }
    ]

    return navTree
}

module.exports = {
    getNavbar
}