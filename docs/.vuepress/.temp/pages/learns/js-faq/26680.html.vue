<template><h1 id="什么是-json" tabindex="-1"><a class="header-anchor" href="#什么是-json" aria-hidden="true">#</a> 什么是 JSON ?</h1>
<p>JSON</p>
<ul>
<li>json 是一种数据格式，本质是一段字符串</li>
<li>json 格式和 JS 对象结构一致，对 JS 语言更友好</li>
<li>window.JSON 是一个全局对象：JSON.stringify JSON.parse</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// key 和字符必须使用双引号</span>
<span class="token keyword">const</span> json <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">"name"</span><span class="token operator">:</span> <span class="token string">"张三"</span><span class="token punctuation">,</span>
    <span class="token string">"age"</span><span class="token operator">:</span> <span class="token number">19</span>
<span class="token punctuation">}</span>
</code></pre></div></template>
