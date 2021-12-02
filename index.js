const fs = require('fs')
const http = require('http')
let data = ''

//### fs
// 同步
data = fs.readFileSync('./package.json')
// console.log(data.toString())

// 异步，错误优先回调
fs.readFile('config.js', (err, data) => {
  // if (err) throw err
  // console.log(data.toString())
})

// promise 风格
!(async () => {
  const fs = require('fs')
  const {promisify} = require('util')
  const readFile = promisify(fs.readFile)
  data = await readFile('./index.ts')
  // console.log(data.toString())
})();

//### Buffer
data = Buffer.alloc(10)
// console.log(data)

const data1 = data = Buffer.from('a')
// console.log(data)

const data2 = data = Buffer.from('中')
// console.log(data)

// 合并二进制，可用于图片，文件分包接收
const data3 = Buffer.concat([data1, data2])
// console.log(data3, data3.toString())

//### http
const server = http.createServer((request, response) => {
  // console.log(getPrototypeChain(request), getPrototypeChain(response))
  // response.end('hello world')
  const {url, method, headers} = request
  if (url === '/' && method === 'GET') {
    fs.readFile('./index.html', (err, data) => {
      if (err) {
        response.writeHead(500, {
          'Content-Type': 'text/plain;charset=utf-8'
        })
        response.end('500 服务器错误')
      }
      response.statusCode = 200
      response.setHeader('Content-Type', 'text/html;charset=utf-8')
      response.end(data)
    })
  } else if (url === '/user' && method === 'GET') {
    // json 处理
    response.writeHead(200, {
      'Content-Type': 'application/json'
    })
    response.end(JSON.stringify({
      name: 'lzw'
    }))
  } else if (method === 'GET' && headers.accept.indexOf('image/*') !== -1) {
    /**
     * 所有图片请求怎么处理，
     * 不建议 fs.readFile, 一次性读取文件很大，
     * 使用 stream，用法：fs.createReadStream('./1.jpg').pipe(fs.createWriteStream('./2.jpg'))
     * 比如 index.html 中的 <img src="./index.jpg" />
     */

    fs.createReadStream('.' + url).pipe(response)
  } else {
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/plain;charset=utf-8')
    response.end('404 页面找不到')
  }
})
server.listen(8080)

function getPrototypeChain(obj) {
  const protoChain = []
  while (obj = Object.getPrototypeOf(obj)) {
    protoChain.push(obj)
  }
  return protoChain
}


初始安装

```
npm init -y
npm i commander download-git-repo ora handlebars figlet clear chalk open -D
```


配置 package.josn

```
"bin": {
  "kkb":"./bin/index.js"
},
```

编辑 /bin/index.js 制定解释器
```
#!/usr/bin/env node
```

链接

```
npm link
```