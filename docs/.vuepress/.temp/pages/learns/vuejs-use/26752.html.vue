<template><h1 id="vue-循环-列表-渲染" tabindex="-1"><a class="header-anchor" href="#vue-循环-列表-渲染" aria-hidden="true">#</a> Vue 循环（列表）渲染</h1>
<p>循环</p>
<ul>
<li>如何遍历对象？——也可以用 v-for</li>
<li>key 的重要性。key 不能乱写（如 random 或者 index）</li>
<li>v-for 和 v-if 不能一起使用</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>p<span class="token operator">></span>遍历数组<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span>ul<span class="token operator">></span>
            <span class="token operator">&lt;</span>li v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"(item, index) in listArr"</span> <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">"item.id"</span><span class="token operator">></span>
                <span class="token punctuation">{</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">-</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">-</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
        <span class="token operator">&lt;</span>p<span class="token operator">></span>遍历对象<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span>ul <span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>报错 v<span class="token operator">-</span><span class="token keyword">for</span> 优先级更高<span class="token operator">--</span><span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span><span class="token operator">&lt;</span>li v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">"flag"</span> v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"(val, key, index) in listObj"</span> <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">"key"</span><span class="token operator">></span><span class="token operator">--</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>li v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"(val, key, index) in listObj"</span> <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">"key"</span><span class="token operator">></span>
                <span class="token punctuation">{</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">-</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>key<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">-</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>val<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            flag<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            listArr<span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">'a'</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">'标题1'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 数据结构中，最好有 id ，方便使用 key</span>
                <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">'b'</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">'标题2'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">'c'</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">'标题3'</span> <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            listObj<span class="token operator">:</span> <span class="token punctuation">{</span>
                a<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'标题1'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                b<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'标题2'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                c<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'标题3'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre></div></template>
