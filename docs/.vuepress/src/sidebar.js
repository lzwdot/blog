// sidebar.js

const fs = require('fs');
const matter = require('gray-matter');
const path = require('path')

const docPath = path.join(__dirname, '../../') // 获取文档目录

/**
 * 写入文件
 * @param {*} filePath 
 * @param {*} content 
 */
function writeFile(filePath, content) {
    // 先删除文件，重建
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath)
    }
    fs.writeFileSync(filePath, content)
}

/**
 * 创建 README.md 文件
 * @param {*} path 
 * @param {*} content 
 */
function writeReadMe(path, content) {
    const filePath = `${path}/README.md`

    // 先删除文件，重建
    if (fs.existsSync(filePath)) {
        const frontMatter = matter.read(filePath);

        // 加上 Front Matter
        if (frontMatter && frontMatter.data) {
            const { title } = frontMatter.data
            content = title ? `---\n title: ${title}\n---\n\n# ${title}\n\n${content}` : content
        }

        // 删除 README.md 文件
        fs.unlinkSync(filePath)
    }

    // 写入内容
    fs.writeFileSync(filePath, content)
}

/**
 * 获取 README.md 内容
 * @param {*} path 
 * @returns 
 */
function getReadMe(path) {
    const filePath = `${path}/README.md`

    let res = {}
    if (fs.existsSync(filePath)) {
        const frontMatter = matter.read(filePath);

        // Front Matter 数据
        if (frontMatter && frontMatter.data) {
            res = frontMatter.data
        }
    }

    return res
}


/**
 * 生成md文件格式链接
 * @param {*} filePath 
 * @returns 
 */
function buildMdLink(filePath) {
    let content = ''
    let frontMatter = matter.read(filePath);

    // 拼接成链接
    if (frontMatter && frontMatter.data) {
        const { title, permalink } = frontMatter.data
        content += `[${title}](${permalink})    \n`
    }

    return content;
}

/**
 * 遍历文件夹，生成 真实文件对象树
 * @returns  { name: '文件夹名称', data: [ {...}, {...} ], path: '路径'}
 */
function buildDirTree() {
    const rootPath = docPath// 当前目录的绝对路径  

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
                const dirPath = `${path}/${item}`

                res.push({
                    name: item,
                    data: recursion(dirPath), //遍历目录循环
                    path: dirPath
                })
            } else { // 是 .md 文件，排除 .DS_Store
                if (item !== '.DS_Store' && item.includes('.md')) res.push(item);
            }
        })

        return res;
    }

    const dirTree = recursion('')
    writeFile(`${path.join(__dirname)}/dirTree.json`, JSON.stringify(dirTree, null, 4))

    return dirTree
}

/**
 * 生成侧边栏
 * @param {*} dirTree 
 * @returns 
 */
function createSidebar(dirTree) {
    const rootPath = docPath// 当前目录的绝对路径      
    const sidebarData = {}

    function recursion(tree) {

        for (let i = 0; i < tree.length; i++) {
            const curNode = tree[i]
            const curPath = `${rootPath}/${curNode.path}`
            const sidebar = []
            const children = []

            if (curNode.data == null) continue;

            // 文件夹下还有文件夹
            if (curNode.data[0] && curNode.data[0].data) {
                recursion(curNode.data)

                // 获取到该文件夹的子文件夹 readme 内容，做成类似分类目录
                let content = ''
                for (let j = 0; j < curNode.data.length; j++) {
                    // 目录存在，且不为 readme 文件
                    if (curNode.data[j].path) {
                        // 获取子文件夹 readme 内容
                        const { title } = getReadMe(`${rootPath}/${curNode.data[j].path}`)

                        // markdown 链接语法
                        content += `[${title}](${curNode.data[j].path})    \n`
                    }
                }

                // 写入 readme
                writeReadMe(curPath, content)
            } else {
                // 把文件永久链接 写入到 readme 中，做成文件归档目录   
                let content = ''
                for (let j = 0; j < curNode.data.length; j++) {
                    // 文件存在，且不为 readme 文件
                    if (!curNode.data[j].toUpperCase().includes('README')) {
                        // markdown 链接语法
                        content += buildMdLink(`${rootPath}/${curNode.path}/${curNode.data[j]}`)

                        // 推入文件构成目录
                        children.push(`${curNode.data[j]}`)
                    }
                }
                // 写入内容到 readme 文件                
                writeReadMe(curPath, content)

                // 获取文件夹 readme 内容
                const { title } = getReadMe(curPath)
                sidebar.push({
                    title: title || curNode.name,
                    collapsable: false,
                    children: children
                })

                // 该路径下的目录
                sidebarData[`${curNode.path}/`] = sidebar
            }
        }
    }

    recursion(dirTree)
    writeFile(`${path.join(__dirname)}/sidebar.json`, JSON.stringify(sidebarData, null, 4))

    return sidebarData
}

/**
 * 生成侧边栏
 * @returns 
 */
function getSidebar() {
    // 目录树
    dirTree = buildDirTree()

    return createSidebar(dirTree);
}

module.exports = {
    getSidebar
}
