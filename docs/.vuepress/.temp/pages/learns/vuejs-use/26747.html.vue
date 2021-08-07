<template><h1 id="vue-条件渲染" tabindex="-1"><a class="header-anchor" href="#vue-条件渲染" aria-hidden="true">#</a> Vue 条件渲染</h1>
<p>v-if v-else 的用法，可使用变量，也可以使用 === 表达式</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>p v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">"type === 'a'"</span><span class="token operator">></span><span class="token constant">A</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span>p v<span class="token operator">-</span><span class="token keyword">else</span><span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">"type === 'b'"</span><span class="token operator">></span><span class="token constant">B</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span>p v<span class="token operator">-</span><span class="token keyword">else</span><span class="token operator">></span>other<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span>p v<span class="token operator">-</span>show<span class="token operator">=</span><span class="token string">"type === 'a'"</span><span class="token operator">></span><span class="token constant">A</span> by v<span class="token operator">-</span>show<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span>p v<span class="token operator">-</span>show<span class="token operator">=</span><span class="token string">"type === 'b'"</span><span class="token operator">></span><span class="token constant">B</span> by v<span class="token operator">-</span>show<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            type<span class="token operator">:</span> <span class="token string">'a'</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre></div><p>v-if 和 v-show 的区别？</p>
<ul>
<li>v-if 只显示满足条件的一个</li>
<li>v-show 满足条件的显示，不满足条件的自动添加 <code>display:none</code> 样式进行隐藏</li>
</ul>
<p>v-if 和 v-show 的使用场景？</p>
<ul>
<li>更新频繁时，使用 v-show</li>
<li>只渲染一次时，使用 v-if</li>
</ul>
</template>
