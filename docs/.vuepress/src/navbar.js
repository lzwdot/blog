const navTree = [
    { text: '博客', link: '/blogs/' },
    { text: '学习', link: '/learns/' },
    { text: '关于', link: '/about' }
]

function getNavbar() {
    return navTree
}

module.exports = {
    getNavbar
}