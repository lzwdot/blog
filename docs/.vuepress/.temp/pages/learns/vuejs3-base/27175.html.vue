<template><h1 id="vue-3-用-proxy-实现响应式" tabindex="-1"><a class="header-anchor" href="#vue-3-用-proxy-实现响应式" aria-hidden="true">#</a> Vue 3 用 Proxy 实现响应式</h1>
<p>Proxy 实现响应式</p>
<ul>
<li>深度监听，性能更好</li>
<li>可监听 新增/删除属性</li>
<li>可监听数组变化</li>
<li>但，无法兼容所有浏览器，无法 polyfill</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 创建响应式</span>
<span class="token keyword">function</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token parameter">target <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> target <span class="token operator">!==</span> <span class="token string">'object'</span> <span class="token operator">||</span> target <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 不是对象或数组，则返回</span>
        <span class="token keyword">return</span> target
    <span class="token punctuation">}</span>
    <span class="token comment">// 代理配置</span>
    <span class="token keyword">const</span> proxyConf <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 改进</span>
            <span class="token comment">// 只处理本身（非原型的）属性</span>
            <span class="token keyword">const</span> ownKeys <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">ownKeys</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>ownKeys<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'get'</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token comment">// 监听</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">const</span> result <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span>
            <span class="token comment">// return result // 返回结果</span>
            <span class="token comment">// 深度监听，把上面修改成下面</span>
            <span class="token keyword">return</span> <span class="token function">reactive</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 那么性能是如何提升?</span>
            <span class="token doc-comment comment">/**
             *  Object.defineProperty 一次性递归完
             *  Proxy 是 get 到哪一层，就递归到哪一层
             */</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> val<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 改进</span>
            <span class="token comment">// 重复的数据，不处理</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">===</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">const</span> ownKeys <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">ownKeys</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>ownKeys<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'已有的 key'</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'新增的 key'</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span>
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
    <span class="token punctuation">}</span>
    <span class="token comment">// 生成代理对象</span>
    <span class="token keyword">const</span> observed <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> proxyConf<span class="token punctuation">)</span>
    <span class="token keyword">return</span> observed
<span class="token punctuation">}</span>
<span class="token comment">// 测试数据</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'zhangsan'</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    info<span class="token operator">:</span> <span class="token punctuation">{</span>
        city<span class="token operator">:</span> <span class="token string">'shenzhen'</span><span class="token punctuation">,</span>
        a<span class="token operator">:</span> <span class="token punctuation">{</span>
            b<span class="token operator">:</span> <span class="token punctuation">{</span>
                c<span class="token operator">:</span> <span class="token punctuation">{</span>
                    d<span class="token operator">:</span> <span class="token punctuation">{</span>
                        e<span class="token operator">:</span> <span class="token number">100</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> proxyData <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 测试</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxyData<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
<span class="token comment">// get age</span>
<span class="token comment">// 20</span>
<span class="token comment">// 没有深度监听</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxyData<span class="token punctuation">.</span>info<span class="token punctuation">.</span>city<span class="token punctuation">)</span>
<span class="token comment">// get info</span>
<span class="token comment">// shenzhen</span>
<span class="token comment">// 深度监听</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxyData<span class="token punctuation">.</span>info<span class="token punctuation">.</span>city<span class="token punctuation">)</span>
<span class="token comment">// get info</span>
<span class="token comment">// get city</span>
<span class="token comment">// shenzhen</span>
<span class="token comment">// 新增的 key</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxyData<span class="token punctuation">.</span>age1<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">)</span>
<span class="token comment">// 新增的 key age1</span>
<span class="token comment">// set age1 100</span>
<span class="token comment">// result true</span>
<span class="token comment">// 100</span>
</code></pre></div><p>那么性能是如何提升?</p>
<ul>
<li>Object.defineProperty 一次性递归完</li>
<li>Proxy 是 get 到哪一层，就递归到哪一层</li>
</ul>
</template>
