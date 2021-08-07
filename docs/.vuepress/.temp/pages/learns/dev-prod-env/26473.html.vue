<template><h1 id="手写防抖-debounce" tabindex="-1"><a class="header-anchor" href="#手写防抖-debounce" aria-hidden="true">#</a> 手写防抖 debounce</h1>
<p>防抖 debounce</p>
<ul>
<li>监听一个输入框，文字变化后触发 change 事件</li>
<li>直接用 keyup 事件，则会频发触发 change 事件</li>
<li>防抖：用户输入结束活暂停时，才会触发 change 事件</li>
</ul>
<p>有这样一个输入框</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> id<span class="token operator">=</span><span class="token string">"input"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span><span class="token keyword">const</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'input'</span><span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre></div><p>模拟 change 事件，未防抖频繁触发 keyup 事件</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 未防抖，频繁触发 keyup 事件</span>
input<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'keyup'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>利用 setTimeout 增加防抖措施</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token comment">//  利用 setTimeout 增加防抖措施</span>
input<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'keyup'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// 模拟触发 change 事件</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span>
        <span class="token comment">// 清空定时器</span>
        timer <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>进一步优化，封装成函数</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay <span class="token operator">=</span> <span class="token number">500</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// timer 是闭包中</span>
    <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 建议使用，防止 this 和 arguments 作用域问题</span>
        <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span>
        <span class="token keyword">const</span> args <span class="token operator">=</span> arguments
        timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token comment">// 也其实可以用 fn()</span>
            <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
            timer <span class="token operator">=</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
input<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'keyup'</span><span class="token punctuation">,</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>input<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">600</span><span class="token punctuation">)</span>
</code></pre></div></template>
