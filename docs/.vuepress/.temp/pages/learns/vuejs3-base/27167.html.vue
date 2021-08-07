<template><h1 id="proxy-基本使用" tabindex="-1"><a class="header-anchor" href="#proxy-基本使用" aria-hidden="true">#</a> Proxy 基本使用</h1>
<p>回顾 Object.defineProperty 缺点</p>
<ul>
<li>深度监听，需要递归到底，一次性计算量大</li>
<li>无法监听新增属性/删除属性（Vue.set Vue.delete）</li>
<li>无法原生监听数组，需要特殊处理</li>
</ul>
<p>Proxy 基本使用</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// const data = {</span>
<span class="token comment">//     name: 'zhangsan',</span>
<span class="token comment">//     age: 20</span>
<span class="token comment">// }</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> proxyData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 改进</span>
        <span class="token comment">// 只处理本身（非原型的）属性</span>
        <span class="token keyword">const</span> ownKeys <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">ownKeys</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>ownKeys<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'get'</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token comment">// 监听</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">const</span> result <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span>
        <span class="token keyword">return</span> result <span class="token comment">// 返回结果</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> val<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 改进</span>
        <span class="token comment">// 重复的数据，不处理</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">===</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">const</span> result <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> val<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'set'</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> val<span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'result'</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span>
        <span class="token keyword">return</span> result <span class="token comment">// 是否设置成功</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">deleteProperty</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> result <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">deleteProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'delete property'</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'result'</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span>
        <span class="token keyword">return</span> result <span class="token comment">// 是否删除成功</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// proxyData.age</span>
<span class="token comment">// // get age</span>
<span class="token comment">//</span>
<span class="token comment">// proxyData.age = 30</span>
<span class="token comment">// // set age 30</span>
<span class="token comment">// // result true</span>
<span class="token comment">//</span>
<span class="token comment">// delete proxyData.age</span>
<span class="token comment">// // delete property age</span>
<span class="token comment">// // result true</span>
<span class="token comment">// proxyData.push('d')</span>
<span class="token comment">// get push</span>
<span class="token comment">// get length</span>
<span class="token comment">// set 3 d</span>
<span class="token comment">// result true</span>
<span class="token comment">// set length 4</span>
<span class="token comment">// result true</span>
<span class="token comment">// 改进后</span>
proxyData<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'d'</span><span class="token punctuation">)</span>
<span class="token comment">// get length</span>
<span class="token comment">// set 3 d</span>
<span class="token comment">// result true</span>
</code></pre></div><p>Reflect 作用</p>
<ul>
<li>和 Proxy 能力一一对应</li>
<li>规范化，标准化，函数化</li>
<li>替代掉 Object 上的工具函数</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>a<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">}</span>
<span class="token comment">// 判断 a 在 obj 中的方法</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'a'</span> <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token comment">// 看起来更舒服</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Reflect<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token comment">// 删除数据</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">delete</span> obj<span class="token punctuation">.</span>a<span class="token punctuation">)</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Reflect<span class="token punctuation">.</span><span class="token function">deleteProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
obj<span class="token punctuation">.</span>a<span class="token operator">=</span><span class="token number">300</span>
obj<span class="token punctuation">.</span>b<span class="token operator">=</span><span class="token number">400</span>
<span class="token comment">// 可以替换 Object 函数</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// ["a", "b"]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Reflect<span class="token punctuation">.</span><span class="token function">ownKeys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// ["a", "b"]</span>
</code></pre></div></template>
