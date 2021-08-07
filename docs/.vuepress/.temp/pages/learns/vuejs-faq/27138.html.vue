<template><h1 id="为何组件-data-必须是一个函数" tabindex="-1"><a class="header-anchor" href="#为何组件-data-必须是一个函数" aria-hidden="true">#</a> 为何组件 data 必须是一个函数？</h1>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token string">'app'</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span><span class="token string">'vue'</span><span class="token punctuation">,</span>
            list<span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span><span class="token string">'b'</span><span class="token punctuation">,</span><span class="token string">'c'</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>根本原因是 .vue 组件 export 出来后是一个 class 类，所以 data 必须是一个函数，否则 data 所有数据都共享了一样了</p>
</template>
