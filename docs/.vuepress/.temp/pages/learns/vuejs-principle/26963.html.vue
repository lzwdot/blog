<template><h1 id="vue-响应式" tabindex="-1"><a class="header-anchor" href="#vue-响应式" aria-hidden="true">#</a> Vue 响应式</h1>
<p>Vue 响应式</p>
<ul>
<li>组件 data 的数据一旦变化，立刻触发视图的更新</li>
<li>实现数据驱动视图的第一步</li>
<li>了解 Vue 原理的第一步</li>
<li>核心 API - Object.defineProperty</li>
<li>Object.defineProperty 有一些缺点，所以 Vue 3.0 启用 Proxy</li>
</ul>
<p>Proxy 的兼容性问题</p>
<ul>
<li>Proxy 兼容性不好，且无法使用 polyfill</li>
</ul>
<p>Object.defineProperty 实现响应式</p>
<ul>
<li>监听对象，监听数组</li>
<li>复杂对象，深度监听</li>
</ul>
<p>一个详细的代码演示，有点没懂</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 触发更新视图</span>
<span class="token keyword">function</span> <span class="token function">updateView</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'视图更新：'</span> <span class="token operator">+</span> val<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 重新定义数组原型</span>
<span class="token keyword">const</span> oldArrayProperty <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype
<span class="token comment">// 创建新对象，原型指向 oldArrayProperty，再扩展新的方法不会影响原型</span>
<span class="token keyword">const</span> arrProto <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>oldArrayProperty<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">[</span><span class="token string">'push'</span><span class="token punctuation">,</span> <span class="token string">'pop'</span><span class="token punctuation">,</span> <span class="token string">'shift'</span><span class="token punctuation">,</span> <span class="token string">'unshift'</span><span class="token punctuation">,</span> <span class="token string">'splice'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">methodName</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    arrProto<span class="token punctuation">[</span>methodName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">updateView</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 触发视图更新</span>
        oldArrayProperty<span class="token punctuation">[</span>methodName<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token operator">...</span>arguments<span class="token punctuation">)</span>
        <span class="token comment">// 类似 Array.prototype.push.call(this, ...arguments)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 重新定义属性，监听起来</span>
<span class="token keyword">function</span> <span class="token function">defineReactive</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 深度监听</span>
    <span class="token function">observer</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    <span class="token comment">// 核心 API</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> value
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>newValue <span class="token operator">!==</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 这里也需要深度监听，比如</span>
                <span class="token comment">// data.age = {num:21}</span>
                <span class="token comment">// data.age.num = 22</span>
                <span class="token function">observer</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span>
                <span class="token comment">// value 在闭包中，所以再次 get 时也能获取到最新值</span>
                value <span class="token operator">=</span> newValue
                <span class="token comment">// 触发更新视图</span>
                <span class="token function">updateView</span><span class="token punctuation">(</span>key <span class="token operator">+</span> <span class="token string">':'</span> <span class="token operator">+</span> value<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 监听对象属性</span>
<span class="token keyword">function</span> <span class="token function">observer</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> target <span class="token operator">!==</span> <span class="token string">'object'</span> <span class="token operator">||</span> target <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 不是对象或数组</span>
        <span class="token keyword">return</span> target
    <span class="token punctuation">}</span>
    <span class="token comment">// 千万别，污染全局的 Array 原型</span>
    <span class="token comment">// Array.prototype.push = function(){</span>
    <span class="token comment">//     updateView()</span>
    <span class="token comment">//     //    ...</span>
    <span class="token comment">// }</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        target<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> arrProto
    <span class="token punctuation">}</span>
    <span class="token comment">// 重新定义各个属性（for in 也可以遍历数组）</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">defineReactive</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 准备数据</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'zhangsan'</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    info<span class="token operator">:</span> <span class="token punctuation">{</span>
        address<span class="token operator">:</span> <span class="token string">'深圳'</span> <span class="token comment">// 需要深度监听</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    nums<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token comment">// 监听数据</span>
<span class="token function">observer</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token comment">// 测试</span>
data<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'lisi'</span>
data<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">21</span>
<span class="token comment">// console.log(data.age) // 21</span>
data<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token punctuation">{</span>num<span class="token operator">:</span> <span class="token number">21</span><span class="token punctuation">}</span>
data<span class="token punctuation">.</span>age<span class="token punctuation">.</span>num <span class="token operator">=</span> <span class="token number">22</span>
data<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token string">'100'</span> <span class="token comment">// 新增属性，监听不到 - 所以有 Vue.set</span>
<span class="token keyword">delete</span> data<span class="token punctuation">.</span>name <span class="token comment">// 删除属性，监听不到 - 所以有 Vue.delete</span>
data<span class="token punctuation">.</span>info<span class="token punctuation">.</span>address <span class="token operator">=</span> <span class="token string">'上海'</span> <span class="token comment">// 深圳监听</span>
data<span class="token punctuation">.</span>nums<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment">// 监听数组 </span>
</code></pre></div><p>Object.defineProperty 缺点</p>
<ul>
<li>深度监听，需要递归到底，一次性计算量大</li>
<li>无法监听新增属性/删除属性（Vue.set Vue.delete）</li>
<li>无法原生监听数组，需要特殊处理</li>
</ul>
</template>
