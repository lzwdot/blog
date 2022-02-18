import{h as n}from"./app.4ca8afde.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";var s="/blog/assets/3652703406.53b51753.gif";const t={},p=n(`<h1 id="\u524D\u7AEF\u7528\u5230\u7684-linux-\u5E38\u7528\u547D\u4EE4\u6709\u54EA\u4E9B" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF\u7528\u5230\u7684-linux-\u5E38\u7528\u547D\u4EE4\u6709\u54EA\u4E9B" aria-hidden="true">#</a> \u524D\u7AEF\u7528\u5230\u7684 linux \u5E38\u7528\u547D\u4EE4\u6709\u54EA\u4E9B</h1><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u767B\u5F55\u670D\u52A1</span>
ssh root@<span class="token number">190.168</span><span class="token number">.1</span><span class="token number">.1</span>
<span class="token comment">// \u67E5\u770B\u6587\u4EF6\uFF0C -a \u67E5\u770B\u5168\u90E8\uFF0C\u5305\u62EC\u9690\u85CF\u6587\u4EF6</span>
ls <span class="token punctuation">[</span><span class="token operator">-</span>a<span class="token punctuation">]</span>
<span class="token comment">// \u6587\u4EF6\u5217\u8868</span>
ll
<span class="token comment">// \u521B\u5EFA\u6587\u4EF6\u5939</span>
mkdir <span class="token punctuation">[</span>dirname<span class="token punctuation">]</span>
<span class="token comment">// \u5220\u9664\u6587\u4EF6\u6216\u6587\u4EF6\u5939</span>
rm <span class="token operator">-</span>rf <span class="token punctuation">[</span>dirname<span class="token operator">|</span>filename<span class="token punctuation">]</span>
<span class="token comment">// \u79FB\u52A8\u6587\u4EF6</span>
mv <span class="token punctuation">[</span>filename<span class="token punctuation">]</span> <span class="token punctuation">[</span>dirname<span class="token operator">|</span>filename<span class="token punctuation">]</span>
<span class="token comment">// \u62F7\u8D1D\u6587\u4EF6</span>
cp <span class="token punctuation">[</span>filename<span class="token punctuation">]</span> <span class="token punctuation">[</span>filename<span class="token punctuation">]</span>
<span class="token comment">// \u65B0\u5EFA\u6587\u4EF6</span>
touch <span class="token punctuation">[</span>filename<span class="token punctuation">]</span>
vim <span class="token punctuation">[</span>filename<span class="token punctuation">]</span>
<span class="token comment">// \u67E5\u770B\u6587\u4EF6</span>
cat <span class="token punctuation">[</span>filename<span class="token punctuation">]</span>
head <span class="token punctuation">[</span>filename<span class="token punctuation">]</span> <span class="token comment">// \u524D\u9762\u51E0\u884C</span>
tail <span class="token punctuation">[</span>filename<span class="token punctuation">]</span> <span class="token comment">// \u6700\u540E\u51E0\u884C</span>
<span class="token comment">// \u67E5\u627E\u5185\u5BB9</span>
grep <span class="token punctuation">[</span>string<span class="token punctuation">]</span> <span class="token punctuation">[</span>filename<span class="token punctuation">]</span>
<span class="token comment">// vim \u7F16\u8F91\u5668</span>
</code></pre></div><p><img src="`+s+'" alt=""></p>',3);function e(o,c){return p}var i=a(t,[["render",e]]);export{i as default};
