<template><h1 id="简单理解-vue-js-数据双向绑定的原理" tabindex="-1"><a class="header-anchor" href="#简单理解-vue-js-数据双向绑定的原理" aria-hidden="true">#</a> 简单理解 vue.js 数据双向绑定的原理</h1>
<p>聊到 vue.js 数据双向绑定，就不得不提 <code>Object.defineProperty</code> 方法，它是实现数据双向绑定原理所在。先上代码再解释</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"view"</span><span class="token operator">></span>view层<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>input id<span class="token operator">=</span><span class="token string">"model"</span> type<span class="token operator">=</span><span class="token string">"text"</span> value<span class="token operator">=</span><span class="token string">"model层"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token comment">//单向绑定</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'model'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onkeyup</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'view'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token string">'propertyName'</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
        <span class="token function-variable function">get</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> obj
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">set</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'view'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> newVal
            document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'model'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value <span class="token operator">=</span> newVal
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">//双向绑定</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        obj<span class="token punctuation">.</span>propertyName <span class="token operator">=</span> <span class="token string">'测试数据'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">3000</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre></div><p>以上有两个分别模拟 view 层和 model 层的 dom 元素</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"view"</span><span class="token operator">></span>view层<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>input id<span class="token operator">=</span><span class="token string">"model"</span> type<span class="token operator">=</span><span class="token string">"text"</span> value<span class="token operator">=</span><span class="token string">"model层"</span><span class="token operator">></span>
</code></pre></div><p>对于单向绑定，通过 js 事件也可以实现，如以上代码中的 onkeyup 事情，就实现了 <code>model-&gt;view</code> 的绑定</p>
<p>那么双向绑定即： <code>model&lt;-&gt;view</code> 的绑定，就需要 <code>Object.defineProperty</code> 来实现，例如测试代码：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    obj<span class="token punctuation">.</span>propertyName <span class="token operator">=</span> <span class="token string">'测试数据'</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">3000</span><span class="token punctuation">)</span>
</code></pre></div><p>3秒后执行 view 和 model 的值都为 '测试数据'，这样就简单模拟了 vue.js 数据双向绑定</p>
</template>
