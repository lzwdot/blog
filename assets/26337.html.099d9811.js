import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="\u5E38\u7528\u7684-git-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u7684-git-\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u7684 git \u547D\u4EE4</h1><p>\u5E38\u7528\u7684 git \u547D\u4EE4</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u514B\u9686\u4EE3\u7801\u5E93</span>
git clone  git@github<span class="token punctuation">.</span>com<span class="token operator">:</span>lzwdot<span class="token operator">/</span>git<span class="token operator">-</span>demo<span class="token punctuation">.</span>git
<span class="token comment">// \u67E5\u770B\u6587\u4EF6\u4FEE\u6539\u72B6\u6001</span>
git status
<span class="token comment">// \u67E5\u770B\u5206\u652F</span>
git branch
<span class="token comment">// \u67E5\u770B\u4FEE\u6539\u5185\u5BB9</span>
git diff <span class="token punctuation">[</span>filename<span class="token punctuation">]</span>
<span class="token comment">// \u63D0\u4EA4\u6587\u4EF6</span>
git add <span class="token punctuation">[</span><span class="token punctuation">.</span><span class="token operator">|</span>filename<span class="token punctuation">]</span>
<span class="token comment">// \u751F\u6210\u63D0\u4EA4\u8BB0\u5F55</span>
git commit <span class="token operator">-</span>m <span class="token string">&quot;\u521D\u6B21\u4FEE\u6539&quot;</span>
<span class="token comment">// \u67E5\u770B\u63D0\u4EA4\u65E5\u5FD7</span>
git log
<span class="token comment">// \u67E5\u770B\u5F53\u524D\u63D0\u4EA4\u5185\u5BB9\uFF0C[hash]\u4E3A git log \u4E2D\u7684\u65E5\u5FD7 id</span>
git show <span class="token punctuation">[</span>hash<span class="token punctuation">]</span>
<span class="token comment">// \u914D\u7F6E\u4FE1\u606F</span>
git config user<span class="token punctuation">.</span>name lzw
git config user<span class="token punctuation">.</span>email lzw22@qq<span class="token punctuation">.</span>com
<span class="token comment">// \u64A4\u9500\u6240\u6709\u6216\u5355\u4E2A\u6587\u4EF6\u4FEE\u6539</span>
git checkout <span class="token punctuation">[</span><span class="token punctuation">.</span><span class="token operator">|</span>filename<span class="token punctuation">]</span>
<span class="token comment">// \u4E0A\u4F20 master \u5206\u652F\u4EE3\u7801\u5230\u670D\u52A1\u5668</span>
git push origin master
<span class="token comment">// \u4E0B\u8F7D master \u5206\u652F\u6700\u65B0\u4EE3\u7801</span>
git pull origin master
<span class="token comment">// \u65B0\u5EFA\u5206\u652F</span>
git checkout <span class="token operator">-</span>b <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>
<span class="token comment">// \u5207\u6362 master \u5206\u652F</span>
git checkout master
<span class="token comment">// \u62C9\u53D6\u670D\u52A1\u5668\u6240\u6709\u5206\u652F</span>
git fetch
<span class="token comment">// \u5408\u5E76\u5206\u652F\u5230 master</span>
git merge <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>
<span class="token comment">// \u5F53\u524D\u4FEE\u6539\u6682\u65F6\u7F13\u5B58\uFF0C[\u653E\u51FA\u6682\u65F6\u7F13\u5B58\u6587\u4EF6]</span>
git stash <span class="token punctuation">[</span>pop<span class="token punctuation">]</span>
<span class="token comment">// \u4F7F\u7528 https clone \u65F6\uFF0C\u914D\u7F6E\u8BB0\u4F4F\u5BC6\u7801</span>
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">git config --global</span><span class="token template-punctuation string">\`</span></span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">credential.helper store</span><span class="token template-punctuation string">\`</span></span>
</code></pre></div>`,3);function p(e,o){return t}var l=s(a,[["render",p]]);export{l as default};
