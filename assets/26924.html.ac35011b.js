import{h as s}from"./app.4ca8afde.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const n={},t=s(`<h1 id="vue-\u7F13\u5B58\u7EC4\u4EF6-\u9AD8\u7EA7" tabindex="-1"><a class="header-anchor" href="#vue-\u7F13\u5B58\u7EC4\u4EF6-\u9AD8\u7EA7" aria-hidden="true">#</a> Vue \u7F13\u5B58\u7EC4\u4EF6\uFF08\u9AD8\u7EA7\uFF09</h1><p>keep-alive</p><ul><li>\u7F13\u5B58\u7EC4\u4EF6</li><li>\u9891\u7E41\u5207\u6362\uFF0C\u4E0D\u9700\u8981\u91CD\u590D\u6E32\u67D3</li><li>Vue \u5E38\u89C1\u6027\u80FD\u4F18\u5316\u4E4B\u4E00</li></ul><p>\u6709\u4E09\u4E2A\u5B50\u7EC4\u4EF6 KeepAliveStageA.vue\uFF0CKeepAliveStageB.vue \u548C KeepAliveStageC.vue\uFF0C\u5185\u5BB9\u90FD\u5DEE\u4E0D\u591A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>state <span class="token constant">A</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// eslint-disable-next-line</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;A mounted&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">destroyed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// eslint-disable-next-line</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;A destroyed&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div><p>\u901A\u8FC7 keep-alive \u6765\u4F7F\u7528</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;changeState(&#39;A&#39;)&quot;</span><span class="token operator">&gt;</span><span class="token constant">A</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;changeState(&#39;B&#39;)&quot;</span><span class="token operator">&gt;</span><span class="token constant">B</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;changeState(&#39;C&#39;)&quot;</span><span class="token operator">&gt;</span><span class="token constant">C</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>keep<span class="token operator">-</span>alive<span class="token operator">&gt;</span> <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> tab \u5207\u6362 <span class="token operator">--</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>KeepAliveStageA v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;state === &#39;A&#39;&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span> <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> v<span class="token operator">-</span>show <span class="token operator">--</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>KeepAliveStageB v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;state === &#39;B&#39;&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>KeepAliveStageC v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;state === &#39;C&#39;&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>keep<span class="token operator">-</span>alive<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> KeepAliveStageA <span class="token keyword">from</span> <span class="token string">&#39;./KeepAliveStateA&#39;</span>
<span class="token keyword">import</span> KeepAliveStageB <span class="token keyword">from</span> <span class="token string">&#39;./KeepAliveStateB&#39;</span>
<span class="token keyword">import</span> KeepAliveStageC <span class="token keyword">from</span> <span class="token string">&#39;./KeepAliveStateC&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        KeepAliveStageA<span class="token punctuation">,</span>
        KeepAliveStageB<span class="token punctuation">,</span>
        KeepAliveStageC
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token string">&#39;A&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">changeState</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> state
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div><p>\u70B9\u51FB\u5207\u6362\uFF0C\u6700\u7EC8\u7ED3\u679C\u53EA\u4F1A\u8F93\u51FA\u4E00\u6B21</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token constant">A</span> mounted
<span class="token constant">B</span> mounted
<span class="token constant">C</span> mounted
</code></pre></div>`,9);function p(o,e){return t}var r=a(n,[["render",p]]);export{r as default};
