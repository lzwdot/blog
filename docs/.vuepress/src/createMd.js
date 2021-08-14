const fs = require('fs');
const matter = require('gray-matter');
const moment = require('moment')
const path = require('path')

const docPath = path.join(__dirname, '../../') // 获取文档目录

/*******新建文章 -start*******/



const dirPath = `tools`
const title = '标题'

createMd(dirPath, title)


/*******新建文章 -end*******/


/**
 * 获取最大的文章 id
 * @returns 
 */
function getMaxId() {
    const rootPath = docPath// 当前目录的绝对路径  
    let maxId = 0// 最大的文章 id

    function recursion(path) {
        const curPath = `${rootPath}/${path}` // 当前目录
        const dirs = fs.readdirSync(curPath) //所有目录和文件
        const res = []

        // 目录循环
        dirs.forEach(item => {
            // 文件状态
            let isDir = fs.statSync(`${curPath}/${item}`).isDirectory()

            // 是目录，排除：.开头的 && node_modules && build && images
            if (isDir && !/^\./.test(item) && item !== 'node_modules' && item !== 'build' && item !== 'images') {
                recursion(`${path}/${item}`) //遍历目录循环
            } else {
                // 是 .md 文件，排除 .DS_Store & README.md & about.md
                if (item !== '.DS_Store' && item.includes('.md') && !item.toUpperCase().includes('README') && !item.includes('about')) {
                    const frontMatter = matter.read(`${curPath}/${item}`)
                    const { ID } = frontMatter.data
                    maxId = Math.max(maxId, ID)
                }
            }
        })

        return res;
    }

    recursion('')

    return maxId
}

/**
 * 创建 README.md 文件
 * @param {*} path 
 */
function writeReadMe(path) {
    const filePath = `${path}/README.md`

    let content = `---\n title: "导航" \n---\n\n# 导航\n\n`
    // 先删除文件，重建
    if (fs.existsSync(filePath)) {
        const frontMatter = matter.read(filePath);

        // 加上 Front Matter
        if (frontMatter && frontMatter.data) {
            const { title } = frontMatter.data
            content = title ? `---\n title: "${title}"\n---\n\n# ${title}\n\n` : content
        }

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
function createMd(dirname, title, author = 'A.wei') {
    const maxId = getMaxId() + 1
    const path = `${docPath}/${dirname}`
    const filePath = `${path}/${maxId}.md`

    const data = moment().format('YYYY-MM-DD HH:mm:ss');
    const tags = `\n  - "${dirname.split('/').join('"\n  - "')}"`

    const content = `---\n title: "${title}"\n ID: "${maxId}"\n data: "${data}"\n author: "${author}"\n categories: ${tags}\n tags: ${tags}\n---\n\n# ${title}\n\n`

    // 创建文件夹的 readme 文件
    writeReadMe(path)

    //创建 md 文件
    fs.writeFileSync(filePath, content)
}
