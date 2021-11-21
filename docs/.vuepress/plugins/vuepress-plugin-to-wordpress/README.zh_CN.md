## Vuepress To WordPress

插件使用 XmlRpc 方式同步 Vuepress 内容到
WordPress，实现了 [XML-RPC_WordPress_API](http://codex.wordpress.org/XML-RPC_WordPress_API) 中所有接口.

### 使用：

```js
 plugins: [
  //...
    ['vuepress-to-wordpress', {
      username: 'root',
      password: 'password',
      options: {
        https : false,
        host : 'localhost',
        port : 80,
        path : "/xmlrpc.php"
      },
      onPrepared: (wpRpc, app) => {
        app.pages.forEach(page => {
          const content = {
            post_author: 1,
            post_type: 'post',
            post_title: page.frontmatter.title,
            post_content: page.frontmatter.content,
          }
          
          wpRpc.newPost(blogId, content).send((err, data) => {
            // ...
          })
        })
      }
    }]
  //...
]
```

其他 API 接口参考 tests/wordpress-test.js

### 测试

```shell
npm run test
```