<template><h1 id="git-强制更新覆盖本地" tabindex="-1"><a class="header-anchor" href="#git-强制更新覆盖本地" aria-hidden="true">#</a> Git 强制更新覆盖本地</h1>
<p>当需要强制使用远程分支覆盖本地分支，可以使用以下几行命令，比如：强制更新为远程 <code>master</code> 分支</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>git fetch <span class="token operator">--</span>all
git reset <span class="token operator">--</span>hard origin<span class="token operator">/</span>master
</code></pre></div><p><code>git fetch</code> 只是下载远程的库的内容，不做任何的合并； <code>git reset</code> 把 <code>HEAD</code> 指向刚刚下载的最新的版本</p>
</template>
