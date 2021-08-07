<template><h1 id="vue-组件可用-render-代替-template" tabindex="-1"><a class="header-anchor" href="#vue-组件可用-render-代替-template" aria-hidden="true">#</a> Vue 组件可用 render 代替 template</h1>
<p>render 代替 template</p>
<ul>
<li>理解模板编译后，render 函数就比较好理解了</li>
<li>在一些复杂情况下，不能用 template，可以考虑用 render</li>
<li>React 一直都用 render（没有模板）</li>
</ul>
<p>举例</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'heading'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// template:`xxx`</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">createElement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">createElement</span><span class="token punctuation">(</span>
            <span class="token string">'h'</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>level<span class="token punctuation">,</span>
            <span class="token punctuation">[</span>
                <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                    attrs<span class="token operator">:</span> <span class="token punctuation">{</span>
                        name<span class="token operator">:</span> <span class="token string">'headerId'</span><span class="token punctuation">,</span>
                        href<span class="token operator">:</span> <span class="token string">'#'</span> <span class="token operator">+</span> <span class="token string">'headerId'</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token string">'this is a tag'</span><span class="token punctuation">)</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div></template>
