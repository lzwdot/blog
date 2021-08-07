<template><h1 id="常用的-git-命令" tabindex="-1"><a class="header-anchor" href="#常用的-git-命令" aria-hidden="true">#</a> 常用的 git 命令</h1>
<p>常用的 git 命令</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 克隆代码库</span>
git clone  git@github<span class="token punctuation">.</span>com<span class="token operator">:</span>awei922<span class="token operator">/</span>git<span class="token operator">-</span>demo<span class="token punctuation">.</span>git
<span class="token comment">// 查看文件修改状态</span>
git status
<span class="token comment">// 查看分支</span>
git branch
<span class="token comment">// 查看修改内容</span>
git diff <span class="token punctuation">[</span>filename<span class="token punctuation">]</span>
<span class="token comment">// 提交文件</span>
git add <span class="token punctuation">[</span><span class="token punctuation">.</span><span class="token operator">|</span>filename<span class="token punctuation">]</span>
<span class="token comment">// 生成提交记录</span>
git commit <span class="token operator">-</span>m <span class="token string">"初次修改"</span>
<span class="token comment">// 查看提交日志</span>
git log
<span class="token comment">// 查看当前提交内容，[hash]为 git log 中的日志 id</span>
git show <span class="token punctuation">[</span>hash<span class="token punctuation">]</span>
<span class="token comment">// 配置信息</span>
git config user<span class="token punctuation">.</span>name awei
git config user<span class="token punctuation">.</span>email lzw22@qq<span class="token punctuation">.</span>com
<span class="token comment">// 撤销所有或单个文件修改</span>
git checkout <span class="token punctuation">[</span><span class="token punctuation">.</span><span class="token operator">|</span>filename<span class="token punctuation">]</span>
<span class="token comment">// 上传 master 分支代码到服务器</span>
git push origin master
<span class="token comment">// 下载 master 分支最新代码</span>
git pull origin master
<span class="token comment">// 新建分支</span>
git checkout <span class="token operator">-</span>b <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>
<span class="token comment">// 切换 master 分支</span>
git checkout master
<span class="token comment">// 拉取服务器所有分支</span>
git fetch
<span class="token comment">// 合并分支到 master</span>
git merge <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>
<span class="token comment">// 当前修改暂时缓存，[放出暂时缓存文件]</span>
git stash <span class="token punctuation">[</span>pop<span class="token punctuation">]</span>
<span class="token comment">// 使用 https clone 时，配置记住密码</span>
<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">git config --global</span><span class="token template-punctuation string">`</span></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">credential.helper store</span><span class="token template-punctuation string">`</span></span>
</code></pre></div></template>
