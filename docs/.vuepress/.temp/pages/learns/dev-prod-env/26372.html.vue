<template><h1 id="前端用到的-linux-常用命令有哪些" tabindex="-1"><a class="header-anchor" href="#前端用到的-linux-常用命令有哪些" aria-hidden="true">#</a> 前端用到的 linux 常用命令有哪些</h1>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 登录服务</span>
ssh root@<span class="token number">190.168</span><span class="token number">.1</span><span class="token number">.1</span>
<span class="token comment">// 查看文件， -a 查看全部，包括隐藏文件</span>
ls <span class="token punctuation">[</span><span class="token operator">-</span>a<span class="token punctuation">]</span>
<span class="token comment">// 文件列表</span>
ll
<span class="token comment">// 创建文件夹</span>
mkdir <span class="token punctuation">[</span>dirname<span class="token punctuation">]</span>
<span class="token comment">// 删除文件或文件夹</span>
rm <span class="token operator">-</span>rf <span class="token punctuation">[</span>dirname<span class="token operator">|</span>filename<span class="token punctuation">]</span>
<span class="token comment">// 移动文件</span>
mv <span class="token punctuation">[</span>filename<span class="token punctuation">]</span> <span class="token punctuation">[</span>dirname<span class="token operator">|</span>filename<span class="token punctuation">]</span>
<span class="token comment">// 拷贝文件</span>
cp <span class="token punctuation">[</span>filename<span class="token punctuation">]</span> <span class="token punctuation">[</span>filename<span class="token punctuation">]</span>
<span class="token comment">// 新建文件</span>
touch <span class="token punctuation">[</span>filename<span class="token punctuation">]</span>
vim <span class="token punctuation">[</span>filename<span class="token punctuation">]</span>
<span class="token comment">// 查看文件</span>
cat <span class="token punctuation">[</span>filename<span class="token punctuation">]</span>
head <span class="token punctuation">[</span>filename<span class="token punctuation">]</span> <span class="token comment">// 前面几行</span>
tail <span class="token punctuation">[</span>filename<span class="token punctuation">]</span> <span class="token comment">// 最后几行</span>
<span class="token comment">// 查找内容</span>
grep <span class="token punctuation">[</span>string<span class="token punctuation">]</span> <span class="token punctuation">[</span>filename<span class="token punctuation">]</span>
<span class="token comment">// vim 编辑器</span>
</code></pre></div><p><img src="@source/learns/dev-prod-env/images/3652703406.gif" alt=""></p>
</template>
