require('dotenv').config()
const {gitToJs} = require('git-parse')
const path = require('path')
const fs = require('fs')
const matter = require('gray-matter');
const core = require('@actions/core')
const tags = require('./tags.json')

const sleep = (time = 0) => new Promise(resolve => setTimeout(resolve, time))
const gitPath = path.join(__dirname, '../../../')
const blogId = 1 // 没啥用
const rpcConf = {
  username: process.env.RPC_USERNAME || core.getInput('RPC_USERNAME') || null,
  password: process.env.RPC_PASSWORD || core.getInput('RPC_PASSWORD') || null,
  options: eval('(' + (process.env.RPC_OPTIONS || core.getInput('RPC_OPTIONS') || null) + ')'),
}
logCallback('rpcConf', rpcConf.username)

/**
 * 获取 git 中最近一次修改的文章
 * @returns {Promise<{edit: *[], delete: *[]}>}
 */
async function getGitFiles() {
  const files = {
    'edit': [],
    'delete': []
  }
  const commits = await gitToJs(gitPath);
  const editFiles = [...commits[0].filesAdded, ...commits[0].filesModified]
  const deleteFiles = [...commits[0].filesDeleted]

  // 修改的
  editFiles.forEach(item => {
    if (fs.existsSync(`${gitPath}/${item.path}`)) {
      const frontMatter = matter.read(`${gitPath}/${item.path}`)
      const {ID} = frontMatter.data
      if (ID) files['edit'].push(ID)
    }
  })
  // 删除的
  deleteFiles.forEach(item => {
    const ID = item.path.slice(item.path.lastIndexOf('/') + 1, item.path.lastIndexOf('.'))
    if (parseInt(ID)) files['delete'].push(ID)
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
  ).replace(
    /<a(.*?)>#<\/a>/ig,
    ''
  )

  const post_id = frontMatter.ID
  const post_title = frontMatter.title
  const post_category = [] // frontMatter.categories
  const post_tag = []// frontMatter.tags

  // 控制需要更新的文章
  if (!files.includes(post_id)) return

  // 处理分类  slug => '标签'
  if (frontMatter.categories) {
    for (const key of frontMatter.categories) {
      if (tags[key]) post_category.push(tags[key].title)
    }
  }

  // 处理标签  slug => '标签'
  if (frontMatter.tags) {
    for (const key of frontMatter.tags) {
      if (tags[key]) post_tag.push(tags[key].title)
    }
  }

  const content = {
    ID: post_id,
    post_title: `<![CDATA[${post_title}]]>`,
    post_author: blogId,
    post_type: 'post',
    post_status: 'publish',
    post_content: `<![CDATA[${post_content}]]>`,
    terms_names: {
      'category': post_category,
      'post_tag': post_tag
    },
    comment_status: 'open'
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
    logCallback(content.post_title + '：newPost', err, data)
    if (data) {
      post_id = data
    }
    typeof callback === 'function' && callback(post_id)
  })
}

async function wpEditTerm(wpRpc) {
  // 反转下
  const _tags = {}
  for (const key in tags) {
    _tags[tags[key].title] = key;
  }

  const terms = []
  wpRpc.getTerms(blogId, 'post_tag').send((err, data) => {
    // logCallback('post_tag ：getTerms', err, data)
    if (data) terms.push(...data)
  })
  wpRpc.getTerms(blogId, 'category').send((err, data) => {
    // logCallback('category ：getTerms', err, data)
    if (data) terms.push(...data)
  })

  await sleep(2000)
  // console.log(terms)
  for (const term of terms) {
    await sleep(100)

    let parent = tags[_tags[term.name]] ? tags[_tags[term.name]].parent : ''
    if (parent) parent = terms.find(item => item.slug === parent)

    if (_tags[term.name]) wpRpc.editTerm(blogId, term.term_id, Object.assign({
        taxonomy: term.taxonomy,
        slug: `<![CDATA[${_tags[term.name]}]]>`
      },
      term.taxonomy == 'category' && parent ? {parent: parent.term_id} : {}
    )).send((err, data) => {
      logCallback(term.name + ' ：editTerm', err, data)
    })
  }
}

/**
 * delete 文章
 * @param wpRpc
 * @param IDs
 * @returns {Promise<void>}
 */
async function wpDeletePost(wpRpc, IDs = []) {
  for (const id of IDs) {
    await sleep(100)
    // 删除
    wpRpc.deletePost(blogId, id).send((err, data) => {
      logCallback(id + '：deletePost', err, data)
    })
  }
}

module.exports = {
  rpcConf,
  sleep,
  getGitFiles,
  wpEditPost,
  wpNewPost,
  wpEditTerm,
  wpDeletePost
}