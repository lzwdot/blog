function getNavbar(baseUrl) {
  const navTree = [
    // { text: '文章', link: '/posts/' },
    // { text: '学习', link: '/learns/' },
    // { text: '代码', link: '/codes/' },
    // { text: '工具', link: '/tools/' },
    // {text: '归档', link: '/pages/archive'},
    {text: '分类', link: '/pages/category'},
    {text: '关于', link: '/pages/about'},
    {text: 'GitHub主页', link: `https://lzwdot.github.io`}
  ]

  return navTree
}

module.exports = {
  getNavbar
}