<template><h1 id="手写-js-深拷贝" tabindex="-1"><a class="header-anchor" href="#手写-js-深拷贝" aria-hidden="true">#</a> 手写 JS 深拷贝</h1>
<p>浅拷贝和深拷贝</p>
<ul>
<li>浅拷贝，obj1 = obj2，改变 obj2 的值时，obj1 随之改变</li>
<li>深拷贝，obj1 = deepClone(obj2) ，改变 obj2 的值时，obj1 不会改变</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    age<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">'xxx'</span><span class="token punctuation">,</span>
    address<span class="token operator">:</span> <span class="token punctuation">{</span>
        city<span class="token operator">:</span> <span class="token string">'beijing'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    arr<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>深拷贝函数</p>
<ul>
<li>注意判断值类型和引用类型</li>
<li>注意判断是数组还是对象</li>
<li>递归</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 深拷贝
 * <span class="token keyword">@param</span> <span class="token parameter">obj</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">deepClone</span><span class="token punctuation">(</span><span class="token parameter">obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">!=</span> <span class="token string">'object'</span> <span class="token operator">||</span> obj <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 不是对象或者null，直接返回</span>
        <span class="token keyword">return</span> obj
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> result
    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        result <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 保证 key 是自身属性而不是原型的属性</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//递归拷贝</span>
            result<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre></div><blockquote>
<p>深拷贝通过 JSON 对象的 parse 和 stringify</p>
</blockquote>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">deepClone</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> _obj <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">,</span>
        objClone <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>_obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> objClone
<span class="token punctuation">}</span>
</code></pre></div><p>两种拷贝的区别</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span>
obj2<span class="token punctuation">.</span>address<span class="token punctuation">.</span>city <span class="token operator">=</span> <span class="token string">'shanghai'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">.</span>address<span class="token punctuation">.</span>city<span class="token punctuation">)</span> <span class="token comment">//beijing</span>
<span class="token keyword">const</span> obj3 <span class="token operator">=</span> obj1
obj3<span class="token punctuation">.</span>address<span class="token punctuation">.</span>city <span class="token operator">=</span> <span class="token string">'shenzhen'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">.</span>address<span class="token punctuation">.</span>city<span class="token punctuation">)</span><span class="token comment">//shenzhen</span>
</code></pre></div></template>
