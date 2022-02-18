import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="vue3-\u7528-proxy-\u5B9E\u73B0\u54CD\u5E94\u5F0F" tabindex="-1"><a class="header-anchor" href="#vue3-\u7528-proxy-\u5B9E\u73B0\u54CD\u5E94\u5F0F" aria-hidden="true">#</a> Vue3 \u7528 Proxy \u5B9E\u73B0\u54CD\u5E94\u5F0F</h1><p>Proxy \u5B9E\u73B0\u54CD\u5E94\u5F0F</p><ul><li>\u6DF1\u5EA6\u76D1\u542C\uFF0C\u6027\u80FD\u66F4\u597D</li><li>\u53EF\u76D1\u542C \u65B0\u589E/\u5220\u9664\u5C5E\u6027</li><li>\u53EF\u76D1\u542C\u6570\u7EC4\u53D8\u5316</li><li>\u4F46\uFF0C\u65E0\u6CD5\u517C\u5BB9\u6240\u6709\u6D4F\u89C8\u5668\uFF0C\u65E0\u6CD5 polyfill</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u521B\u5EFA\u54CD\u5E94\u5F0F</span>
<span class="token keyword">function</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token parameter">target <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> target <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> target <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u4E0D\u662F\u5BF9\u8C61\u6216\u6570\u7EC4\uFF0C\u5219\u8FD4\u56DE</span>
        <span class="token keyword">return</span> target
    <span class="token punctuation">}</span>
    <span class="token comment">// \u4EE3\u7406\u914D\u7F6E</span>
    <span class="token keyword">const</span> proxyConf <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u6539\u8FDB</span>
            <span class="token comment">// \u53EA\u5904\u7406\u672C\u8EAB\uFF08\u975E\u539F\u578B\u7684\uFF09\u5C5E\u6027</span>
            <span class="token keyword">const</span> ownKeys <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">ownKeys</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>ownKeys<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token comment">// \u76D1\u542C</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">const</span> result <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span>
            <span class="token comment">// return result // \u8FD4\u56DE\u7ED3\u679C</span>
            <span class="token comment">// \u6DF1\u5EA6\u76D1\u542C\uFF0C\u628A\u4E0A\u9762\u4FEE\u6539\u6210\u4E0B\u9762</span>
            <span class="token keyword">return</span> <span class="token function">reactive</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// \u90A3\u4E48\u6027\u80FD\u662F\u5982\u4F55\u63D0\u5347?</span>
            <span class="token doc-comment comment">/**
             *  Object.defineProperty \u4E00\u6B21\u6027\u9012\u5F52\u5B8C
             *  Proxy \u662F get \u5230\u54EA\u4E00\u5C42\uFF0C\u5C31\u9012\u5F52\u5230\u54EA\u4E00\u5C42
             */</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> val<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u6539\u8FDB</span>
            <span class="token comment">// \u91CD\u590D\u7684\u6570\u636E\uFF0C\u4E0D\u5904\u7406</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">===</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">const</span> ownKeys <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">ownKeys</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>ownKeys<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5DF2\u6709\u7684 key&#39;</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u65B0\u589E\u7684 key&#39;</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">const</span> result <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> val<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;set&#39;</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> val<span class="token punctuation">)</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;result&#39;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span>
            <span class="token keyword">return</span> result <span class="token comment">// \u662F\u5426\u8BBE\u7F6E\u6210\u529F</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">deleteProperty</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> result <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">deleteProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;delete property&#39;</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;result&#39;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span>
            <span class="token keyword">return</span> result <span class="token comment">// \u662F\u5426\u5220\u9664\u6210\u529F</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u751F\u6210\u4EE3\u7406\u5BF9\u8C61</span>
    <span class="token keyword">const</span> observed <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> proxyConf<span class="token punctuation">)</span>
    <span class="token keyword">return</span> observed
<span class="token punctuation">}</span>
<span class="token comment">// \u6D4B\u8BD5\u6570\u636E</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">&#39;shenzhen&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">d</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">e</span><span class="token operator">:</span> <span class="token number">100</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> proxyData <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6D4B\u8BD5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxyData<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
<span class="token comment">// get age</span>
<span class="token comment">// 20</span>
<span class="token comment">// \u6CA1\u6709\u6DF1\u5EA6\u76D1\u542C</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxyData<span class="token punctuation">.</span>info<span class="token punctuation">.</span>city<span class="token punctuation">)</span>
<span class="token comment">// get info</span>
<span class="token comment">// shenzhen</span>
<span class="token comment">// \u6DF1\u5EA6\u76D1\u542C</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxyData<span class="token punctuation">.</span>info<span class="token punctuation">.</span>city<span class="token punctuation">)</span>
<span class="token comment">// get info</span>
<span class="token comment">// get city</span>
<span class="token comment">// shenzhen</span>
<span class="token comment">// \u65B0\u589E\u7684 key</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxyData<span class="token punctuation">.</span>age1<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">)</span>
<span class="token comment">// \u65B0\u589E\u7684 key age1</span>
<span class="token comment">// set age1 100</span>
<span class="token comment">// result true</span>
<span class="token comment">// 100</span>
</code></pre></div><p>\u90A3\u4E48\u6027\u80FD\u662F\u5982\u4F55\u63D0\u5347?</p><ul><li>Object.defineProperty \u4E00\u6B21\u6027\u9012\u5F52\u5B8C</li><li>Proxy \u662F get \u5230\u54EA\u4E00\u5C42\uFF0C\u5C31\u9012\u5F52\u5230\u54EA\u4E00\u5C42</li></ul>`,6);function p(o,e){return t}var u=s(a,[["render",p]]);export{u as default};
