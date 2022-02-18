import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="vue-\u54CD\u5E94\u5F0F" tabindex="-1"><a class="header-anchor" href="#vue-\u54CD\u5E94\u5F0F" aria-hidden="true">#</a> Vue \u54CD\u5E94\u5F0F</h1><p>Vue \u54CD\u5E94\u5F0F</p><ul><li>\u7EC4\u4EF6 data \u7684\u6570\u636E\u4E00\u65E6\u53D8\u5316\uFF0C\u7ACB\u523B\u89E6\u53D1\u89C6\u56FE\u7684\u66F4\u65B0</li><li>\u5B9E\u73B0\u6570\u636E\u9A71\u52A8\u89C6\u56FE\u7684\u7B2C\u4E00\u6B65</li><li>\u4E86\u89E3 Vue \u539F\u7406\u7684\u7B2C\u4E00\u6B65</li><li>\u6838\u5FC3 API - Object.defineProperty</li><li>Object.defineProperty \u6709\u4E00\u4E9B\u7F3A\u70B9\uFF0C\u6240\u4EE5 Vue 3.0 \u542F\u7528 Proxy</li></ul><p>Proxy \u7684\u517C\u5BB9\u6027\u95EE\u9898</p><ul><li>Proxy \u517C\u5BB9\u6027\u4E0D\u597D\uFF0C\u4E14\u65E0\u6CD5\u4F7F\u7528 polyfill</li></ul><p>Object.defineProperty \u5B9E\u73B0\u54CD\u5E94\u5F0F</p><ul><li>\u76D1\u542C\u5BF9\u8C61\uFF0C\u76D1\u542C\u6570\u7EC4</li><li>\u590D\u6742\u5BF9\u8C61\uFF0C\u6DF1\u5EA6\u76D1\u542C</li></ul><p>\u4E00\u4E2A\u8BE6\u7EC6\u7684\u4EE3\u7801\u6F14\u793A\uFF0C\u6709\u70B9\u6CA1\u61C2</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u89E6\u53D1\u66F4\u65B0\u89C6\u56FE</span>
<span class="token keyword">function</span> <span class="token function">updateView</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u89C6\u56FE\u66F4\u65B0\uFF1A&#39;</span> <span class="token operator">+</span> val<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u91CD\u65B0\u5B9A\u4E49\u6570\u7EC4\u539F\u578B</span>
<span class="token keyword">const</span> oldArrayProperty <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype
<span class="token comment">// \u521B\u5EFA\u65B0\u5BF9\u8C61\uFF0C\u539F\u578B\u6307\u5411 oldArrayProperty\uFF0C\u518D\u6269\u5C55\u65B0\u7684\u65B9\u6CD5\u4E0D\u4F1A\u5F71\u54CD\u539F\u578B</span>
<span class="token keyword">const</span> arrProto <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>oldArrayProperty<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">[</span><span class="token string">&#39;push&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;pop&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;shift&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;unshift&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;splice&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">methodName</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    arrProto<span class="token punctuation">[</span>methodName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">updateView</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u89E6\u53D1\u89C6\u56FE\u66F4\u65B0</span>
        oldArrayProperty<span class="token punctuation">[</span>methodName<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token operator">...</span>arguments<span class="token punctuation">)</span>
        <span class="token comment">// \u7C7B\u4F3C Array.prototype.push.call(this, ...arguments)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u91CD\u65B0\u5B9A\u4E49\u5C5E\u6027\uFF0C\u76D1\u542C\u8D77\u6765</span>
<span class="token keyword">function</span> <span class="token function">defineReactive</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6DF1\u5EA6\u76D1\u542C</span>
    <span class="token function">observer</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    <span class="token comment">// \u6838\u5FC3 API</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> value
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>newValue <span class="token operator">!==</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u8FD9\u91CC\u4E5F\u9700\u8981\u6DF1\u5EA6\u76D1\u542C\uFF0C\u6BD4\u5982</span>
                <span class="token comment">// data.age = {num:21}</span>
                <span class="token comment">// data.age.num = 22</span>
                <span class="token function">observer</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span>
                <span class="token comment">// value \u5728\u95ED\u5305\u4E2D\uFF0C\u6240\u4EE5\u518D\u6B21 get \u65F6\u4E5F\u80FD\u83B7\u53D6\u5230\u6700\u65B0\u503C</span>
                value <span class="token operator">=</span> newValue
                <span class="token comment">// \u89E6\u53D1\u66F4\u65B0\u89C6\u56FE</span>
                <span class="token function">updateView</span><span class="token punctuation">(</span>key <span class="token operator">+</span> <span class="token string">&#39;:&#39;</span> <span class="token operator">+</span> value<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u76D1\u542C\u5BF9\u8C61\u5C5E\u6027</span>
<span class="token keyword">function</span> <span class="token function">observer</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> target <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> target <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u4E0D\u662F\u5BF9\u8C61\u6216\u6570\u7EC4</span>
        <span class="token keyword">return</span> target
    <span class="token punctuation">}</span>
    <span class="token comment">// \u5343\u4E07\u522B\uFF0C\u6C61\u67D3\u5168\u5C40\u7684 Array \u539F\u578B</span>
    <span class="token comment">// Array.prototype.push = function(){</span>
    <span class="token comment">//     updateView()</span>
    <span class="token comment">//     //    ...</span>
    <span class="token comment">// }</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        target<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> arrProto
    <span class="token punctuation">}</span>
    <span class="token comment">// \u91CD\u65B0\u5B9A\u4E49\u5404\u4E2A\u5C5E\u6027\uFF08for in \u4E5F\u53EF\u4EE5\u904D\u5386\u6570\u7EC4\uFF09</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">defineReactive</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u51C6\u5907\u6570\u636E</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&#39;\u6DF1\u5733&#39;</span> <span class="token comment">// \u9700\u8981\u6DF1\u5EA6\u76D1\u542C</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">nums</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u76D1\u542C\u6570\u636E</span>
<span class="token function">observer</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token comment">// \u6D4B\u8BD5</span>
data<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;lisi&#39;</span>
data<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">21</span>
<span class="token comment">// console.log(data.age) // 21</span>
data<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">21</span><span class="token punctuation">}</span>
data<span class="token punctuation">.</span>age<span class="token punctuation">.</span>num <span class="token operator">=</span> <span class="token number">22</span>
data<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token string">&#39;100&#39;</span> <span class="token comment">// \u65B0\u589E\u5C5E\u6027\uFF0C\u76D1\u542C\u4E0D\u5230 - \u6240\u4EE5\u6709 Vue.set</span>
<span class="token keyword">delete</span> data<span class="token punctuation">.</span>name <span class="token comment">// \u5220\u9664\u5C5E\u6027\uFF0C\u76D1\u542C\u4E0D\u5230 - \u6240\u4EE5\u6709 Vue.delete</span>
data<span class="token punctuation">.</span>info<span class="token punctuation">.</span>address <span class="token operator">=</span> <span class="token string">&#39;\u4E0A\u6D77&#39;</span> <span class="token comment">// \u6DF1\u5733\u76D1\u542C</span>
data<span class="token punctuation">.</span>nums<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment">// \u76D1\u542C\u6570\u7EC4 </span>
</code></pre></div><p>Object.defineProperty \u7F3A\u70B9</p><ul><li>\u6DF1\u5EA6\u76D1\u542C\uFF0C\u9700\u8981\u9012\u5F52\u5230\u5E95\uFF0C\u4E00\u6B21\u6027\u8BA1\u7B97\u91CF\u5927</li><li>\u65E0\u6CD5\u76D1\u542C\u65B0\u589E\u5C5E\u6027/\u5220\u9664\u5C5E\u6027\uFF08Vue.set Vue.delete\uFF09</li><li>\u65E0\u6CD5\u539F\u751F\u76D1\u542C\u6570\u7EC4\uFF0C\u9700\u8981\u7279\u6B8A\u5904\u7406</li></ul>`,11);function p(o,e){return t}var u=s(a,[["render",p]]);export{u as default};
