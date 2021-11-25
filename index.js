const fs = require('fs')
let data = ''

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

// buff
data =  Buffer.alloc(10)
console.log(data)

data =  Buffer.alloc('a')
console.log(data)