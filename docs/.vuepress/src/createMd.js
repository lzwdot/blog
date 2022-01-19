const fs = require('fs');
const matter = require('gray-matter');
const moment = require('moment')
const path = require('path')
const vueToWp = require('../plugins/vuepress-plugin-to-wordpress')
const { rpcConf, wpNewPost } = require('./wpRpc')

const docPath = path.join(__dirname, '../../') // 获取文档目录

/*******新建文章 -start*******/

const dirPath = `async/js-asyn`
const title = '标题'

// getMaxId()
// return
createMd(dirPath, title)


/*******新建文章 -end*******/


/** (5,'','','','','','','2020-12-02','2020-12-02','2020-12-02','2020-12-02')
 * 获取最大的文章 id
 * @returns
 */
function getMaxId() {
  const rootPath = docPath// 当前目录的绝对路径
  let maxId = 0// 最大的文章 id
  const res = []

  function recursion(path) {
    const curPath = `${rootPath}/${path}` // 当前目录
    const dirs = fs.readdirSync(curPath) //所有目录和文件


    // 目录循环
    dirs.forEach(item => {
      // 文件状态
      let isDir = fs.statSync(`${curPath}/${item}`).isDirectory()

      // 是目录，排除：.开头的 && node_modules && build && images && pages
      if (isDir && !/^\.|page|public|image/.test(item)) {
        recursion(`${path}/${item}`) //遍历目录循环
      } else {
        // 是 .md 文件，排除 .DS_Store & README.md & about.md
        if (item.includes('.md') && !/^\.|index|README/.test(item)) {
          const frontMatter = matter.read(`${curPath}/${item}`)
          const { ID, title, date } = frontMatter.data
          maxId = Math.max(maxId, ID)
          res.push(`(${ID},'${title}','draft','','','','','','${date}','${date}','${date}','${date}')`)
        }
      }
    })

    return res;
  }

  recursion('')
  fs.writeFileSync(path.join(__dirname) + '/insert.sql', 'INSERT INTO `wp_posts` \n' +
    '(id,post_title,post_status,post_content,post_excerpt,to_ping,pinged,post_content_filtered,post_date,post_date_gmt,post_modified,post_modified_gmt) \n' +
    'VALUES' + res.join(',\n'))

  return maxId
}

/**
 * 创建 README.md 文件
 * @param {*} path
 */
function writeReadMe(path) {
  const filePath = `${path}/README.md`

  let content = ''
  // 先删除文件，重建
  if (fs.existsSync(filePath)) {
    const frontMatter = matter.read(filePath);
    const { title } = frontMatter.data
    if (!title) frontMatter.data['title'] = '导航'

    content = matter.stringify(`# ${frontMatter.data['title']}\n\n${content}`, frontMatter.data)

    // 删除 README.md 文件
    fs.unlinkSync(filePath)
  }

  // 写入内容
  fs.writeFileSync(filePath, content)
}

/**
 * 新建 md 文档
 * @param {*} dirname
 * @param {*} title
 * @param {*} author
 */
function createMd(dirname, title, author = 'lzw.') {
  wpNewPost(vueToWp({ ...rpcConf }).getWpRpc(), (post_id) => {
    const maxId = post_id || getMaxId() + 1
    const path = `${docPath}/${dirname}`
    const filePath = `${path}/${maxId}.md`

    const date = moment().format('YYYY-MM-DD HH:mm:ss');
    const tags = `\n  - "${dirname.split('/').join('"\n  - "')}"`

    const content = `---\n title: "${title}"\n ID: "${maxId}"\n date: "${date}"\n author: "${author}"\n categories: ${tags}\n tags: ${tags}\n---\n\n# ${title}\n\n`

    // 创建文件夹的 readme 文件
    writeReadMe(path)

    //创建 md 文件
    fs.writeFileSync(filePath, content)
    console.log(require('util').inspect(filePath, { colors: true }));
  })
}
