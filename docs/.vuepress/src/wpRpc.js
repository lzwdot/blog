require('dotenv').config()
const {gitToJs} = require('git-parse')
const path = require('path')
const matter = require('gray-matter');
const core = require('@actions/core')

const gitPath = path.join(__dirname, '../../../')
const blogId = 1 // 没啥用
const rpcConf = {
  username: process.env.WP_USER || core.getInput('WP_USER') || null,
  password: process.env.WP_PASS || core.getInput('WP_PASS') || null,
  options: eval('(' + (process.env.OPTIONS || core.getInput('OPTIONS') || null) + ')'),
}
logCallback('rpcConf', rpcConf)
const sleep = (time = 0) => new Promise(resolve => setTimeout(resolve, time))

/**
 * 获取 git 中最近一次修改的文章
 * @returns {Promise<[]>}
 */
async function getGitFiles() {
  const files = []
  const commits = await gitToJs(gitPath);
  const gitFiles = [...commits[0].filesAdded, ...commits[0].filesModified]
  gitFiles.forEach(item => {
    const frontMatter = matter.read(`${gitPath}/${item.path}`)
    const {ID} = frontMatter.data
    if (ID) files.push(ID)
  })

  return files
}

/**
 *  回调打印
 * @param tips
 * @param error
 * @param data
 */
function logCallback(tips, error, data) {
  console.log(`[${tips}]`, require('util').inspect(error ? error : data, {showHidden: true, colors: true, depth: 10}));
}

/**
 * update 内容
 *
 * @param wpRpc
 * @param page
 * @param files
 * @returns {Promise<void>}
 */
async function wpEditPost(wpRpc, page, files = []) {
  const frontMatter = page.frontmatter;
  const post_content = page.contentRendered.replace(
    /<html-demo>([\s\S]*?)<\/html-demo>/ig,
    '<div class="html-demo">$1</div>'
  )

  const post_id = frontMatter.ID
  const post_title = frontMatter.title
  const post_category = frontMatter.categories
  const post_tag = frontMatter.tags

  // 控制需要更新的文章
  if (!files.includes(post_id)) return

  const content = {
    ID: post_id,
    post_title: '<![CDATA[' + post_title + ']]>',
    post_author: blogId,
    post_type: 'post',
    post_status: 'publish',
    post_format: '',
    post_excerpt: '',
    post_content: '<![CDATA[' + post_content + ']]>',
    terms_names: {
      'category': post_category,
      'post_tag': post_tag
    },
  }
  // 更新
  wpRpc.editPost(blogId, post_id, content).send((err, data) => {
    logCallback(post_title + '：editPost', err, data)
  })
}

/**
 * new 一个文章
 *
 * @param wpRpc
 * @param callback
 */
function wpNewPost(wpRpc, callback) {
  const content = {
    post_author: blogId,
    post_type: 'post',
    post_title: 'Xmlrpc 标题',
    post_content: 'Xmlrpc 内容',
  }

  // 新增
  let post_id = 0
  wpRpc.newPost(blogId, content).send((err, data) => {
    logCallback(post_title + '：newPost', err, data)
    if (data) {
      post_id = data
    }
    callback(post_id)
  })
}

module.exports = {
  rpcConf,
  sleep,
  getGitFiles,
  wpEditPost,
  wpNewPost
}