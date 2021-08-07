<template><h1 id="编写一个通用的事件监听函数" tabindex="-1"><a class="header-anchor" href="#编写一个通用的事件监听函数" aria-hidden="true">#</a> 编写一个通用的事件监听函数</h1>
<p>首先一个 html 结构代码</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>button id<span class="token operator">=</span><span class="token string">"btn1"</span><span class="token operator">></span>按钮<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
</code></pre></div><p>实现事件绑定</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 事件绑定函数</span>
<span class="token keyword">function</span> <span class="token function">bindEvent</span><span class="token punctuation">(</span><span class="token parameter">elem<span class="token punctuation">,</span> type<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    elem<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> fn<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> btn1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'btn1'</span><span class="token punctuation">)</span>
<span class="token function">bindEvent</span><span class="token punctuation">(</span>btn1<span class="token punctuation">,</span> <span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token parameter">event</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token comment">// &lt;button id="btn1">按钮&lt;/button></span>
    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 阻止默认行为</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'clicked'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>通用的事件监听函数</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 通用的事件绑定函数</span>
<span class="token keyword">function</span> <span class="token function">bindEvent</span><span class="token punctuation">(</span><span class="token parameter">elem<span class="token punctuation">,</span> type<span class="token punctuation">,</span> selector<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>fn <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fn <span class="token operator">=</span> selector
        selector <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
    elem<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> <span class="token parameter">event</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> target <span class="token operator">=</span> event<span class="token punctuation">.</span>target
        <span class="token keyword">if</span> <span class="token punctuation">(</span>selector<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 代理绑定</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> event<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 普通绑定</span>
            <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> event<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> btn1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'btn1'</span><span class="token punctuation">)</span>
<span class="token function">bindEvent</span><span class="token punctuation">(</span>btn1<span class="token punctuation">,</span> <span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span> <span class="token comment">// 按钮</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><blockquote>
<p>需要注意的是 this.innerHTML 的指向，此时不能是 event=&gt;{} , 而需要使用 function(event){}</p>
</blockquote>
</template>
