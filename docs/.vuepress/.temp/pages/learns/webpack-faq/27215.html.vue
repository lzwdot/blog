<template><h1 id="如何产出一个-lib" tabindex="-1"><a class="header-anchor" href="#如何产出一个-lib" aria-hidden="true">#</a> 如何产出一个 lib</h1>
<p>产出 lib</p>
<ul>
<li>参考 webpack.dll.js</li>
<li>使用 output.library</li>
</ul>
<p>如</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>output<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// lib 的文件名</span>
    filename<span class="token operator">:</span> <span class="token string">'loadsh.js'</span><span class="token punctuation">,</span>
    <span class="token comment">// 输出 lib 到 dist 目录下</span>
    path<span class="token operator">:</span> distPath<span class="token punctuation">,</span>
    <span class="token comment">// lib 的全局变量名</span>
    library<span class="token operator">:</span> <span class="token string">'loadsh'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div></template>
