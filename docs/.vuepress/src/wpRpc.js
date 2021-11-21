const blogId = 1 // 没啥用

const rpcConf = {
  username: 'root',
  password: 'T5v0ig9k6jgN*9Q@)FCUvC52',
  options: {path: '/wordpress/xmlrpc.php'},
}

function logCallback(error, data) {
  console.log(require('util').inspect(error ? error.message : data, {showHidden: true, colors: true, depth: 10}));
}

function wpEditPost(wpRpc, page) {
  const frontMatter = page.frontmatter;
  const post_content = page.contentRendered.replace(
    /<html-demo>([\s\S]*?)<\/html-demo>/ig,
    '<div class="html-demo">$1</div>'
  )

  const post_id = frontMatter.ID
  const post_title = frontMatter.title
  const post_category = frontMatter.categories
  const post_tag = frontMatter.tags

  if (!post_id || post_id < 27986) return

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
    logCallback(err, data)
  })
}

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
    logCallback(err, data)
    if (data && data.methodResponse && data.methodResponse.params) {
      post_id = data.methodResponse.params[0]
    }
    callback(post_id)
  })
}

module.exports = {
  rpcConf,
  wpEditPost,
  wpNewPost
}