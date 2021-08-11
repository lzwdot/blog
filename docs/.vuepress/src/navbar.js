function getNavbar(baseUrl) {
    const navTree = [
        { text: '文章', link: '/posts/' },
        { text: '学习', link: '/learns/' },
        { text: '代码', link: '/codes/' },
        { text: '关于', link: '/about' },
        { text: 'GitHub', link: `https://awei922.github.io${baseUrl}` }
    ]

    return navTree
}

module.exports = {
    getNavbar
}