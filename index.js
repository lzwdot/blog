const fs = require('fs')

// 同步
const data = fs.readFileSync('./package.json')
console.log(data.toString())