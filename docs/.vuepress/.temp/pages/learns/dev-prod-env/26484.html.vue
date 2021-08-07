<template><h1 id="手写节流-throttle" tabindex="-1"><a class="header-anchor" href="#手写节流-throttle" aria-hidden="true">#</a> 手写节流 throttle</h1>
<p>节流 throttle</p>
<ul>
<li>拖拽一个元素时，要随时拿到该元素被拖拽的位置</li>
<li>直接用 drag 事件，则会频繁触发，很容易导致卡顿</li>
<li>节流：无论拖拽速度多快，都会每隔 100ms 触发一次</li>
</ul>
<p>开启一个可拖拽的 div</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"div"</span> draggable<span class="token operator">=</span><span class="token string">"true"</span><span class="token operator">></span>可拖拽<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span><span class="token keyword">const</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre></div><p>普通的写法，频繁获取</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>div<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'drag'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>offsetX<span class="token punctuation">,</span> e<span class="token punctuation">.</span>offsetY<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>使用 setTimeout 增加节奏措施</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 使用 setTimeout 增加节奏措施</span>
<span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>
div<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'drag'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>offsetX<span class="token punctuation">,</span> e<span class="token punctuation">.</span>offsetY<span class="token punctuation">)</span>
        timer <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>封装一个节流 throttle 函数，注意使用：<code>fn.apply(this, arguments)</code></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay <span class="token operator">=</span> <span class="token number">100</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 建议使用，防止 this 和 arguments 作用域问题</span>
        <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span>
        <span class="token keyword">const</span> args <span class="token operator">=</span> arguments
        timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
            timer <span class="token operator">=</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
div<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'drag'</span><span class="token punctuation">,</span><span class="token function">throttle</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>offsetX<span class="token punctuation">,</span> e<span class="token punctuation">.</span>offsetY<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div></template>
