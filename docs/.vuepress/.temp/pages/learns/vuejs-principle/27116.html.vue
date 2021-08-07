<template><h1 id="vue-组件是如何渲染和更新的" tabindex="-1"><a class="header-anchor" href="#vue-组件是如何渲染和更新的" aria-hidden="true">#</a> Vue 组件是如何渲染和更新的</h1>
<p>初次渲染过程</p>
<ul>
<li>解析模板为 render 函数（或在开发环境已完成，vue-loader）</li>
<li>触发响应式，监听 data 属性 getter setter</li>
<li>执行render 函数会触发 getter，生成 vnode，执行 diff 算法中的patch(elem,vnode)</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span>message<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                message<span class="token operator">:</span><span class="token string">'hello'</span><span class="token punctuation">,</span> <span class="token comment">// 会触发 get</span>
                city<span class="token operator">:</span><span class="token string">'深圳'</span> <span class="token comment">// 不会触发 get，因为模板没用到，和视图没有关系</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre></div><p>更新过程</p>
<ul>
<li>修改 data，触发 setter（此前在 getter 中已被监听）</li>
<li>重新执行 render 函数，生成 newVnode</li>
<li>执行 diff 算法中的 patch(vnode,newVnode)</li>
</ul>
<p><img src="@source/learns/vuejs-principle/images/3672746512.png" alt=""></p>
<p>更详情的描述：https://zhuanlan.zhihu.com/p/45081605</p>
</template>
