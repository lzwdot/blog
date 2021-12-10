#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 发布当前文件夹
git init
git add -A
git commit -m 'update'
git push -f origin main

# 生成静态文件
# npm run docs:build

# 进入生成的文件夹
# cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'lzwdot.com' > CNAME

# git init
# git add -A
# git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:lzwdot/lzwdot.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:lzwdot/blogs.git master:gh-pages

#cd -