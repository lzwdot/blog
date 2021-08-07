<template><h1 id="this-有几种赋值情况-如何取值" tabindex="-1"><a class="header-anchor" href="#this-有几种赋值情况-如何取值" aria-hidden="true">#</a> this 有几种赋值情况，如何取值？</h1>
<blockquote>
<p>this 取值是在函数执行时确定的，不是在定义时</p>
</blockquote>
<p>this 有几种赋值情况</p>
<ul>
<li>作为普通函数</li>
<li>使用 call apply bind</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// window</span>
<span class="token function">fn1</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// {x: 100}</span>
<span class="token function">fn1</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// {x: 200}</span>
<span class="token keyword">const</span> fn2 <span class="token operator">=</span> <span class="token function">fn1</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// {x: 300}</span>
</code></pre></div><ul>
<li>作为对象方法被调用</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> zhangsan <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'张三'</span><span class="token punctuation">,</span>
    <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// this 即当前对象</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// this === window</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">waitAgain</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token comment">// this 即当前对象</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
zhangsan<span class="token punctuation">.</span><span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
zhangsan<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
zhangsan<span class="token punctuation">.</span><span class="token function">waitAgain</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><ul>
<li>在 class 方法中调用</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">People</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token punctuation">}</span>
    <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> lisi <span class="token operator">=</span> <span class="token keyword">new</span>  <span class="token class-name">People</span><span class="token punctuation">(</span><span class="token string">'李四'</span><span class="token punctuation">)</span>
lisi<span class="token punctuation">.</span><span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// lisi 对象</span>
</code></pre></div><ul>
<li>箭头函数</li>
</ul>
</template>
