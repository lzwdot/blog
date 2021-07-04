const navTree = [
    { text: '文章', link: '/posts/' },
    { text: '学习', link: '/learns/' },
    { text: '关于', link: '/about' }
]

function getNavbar() {
    return navTree
}

module.exports = {
    getNavbar
}