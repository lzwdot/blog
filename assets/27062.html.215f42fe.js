import{h as n}from"./app.4ca8afde.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},t=n(`<h1 id="vue-\u7EC4\u4EF6\u53EF\u7528-render-\u4EE3\u66FF-template" tabindex="-1"><a class="header-anchor" href="#vue-\u7EC4\u4EF6\u53EF\u7528-render-\u4EE3\u66FF-template" aria-hidden="true">#</a> Vue \u7EC4\u4EF6\u53EF\u7528 render \u4EE3\u66FF template</h1><p>render \u4EE3\u66FF template</p><ul><li>\u7406\u89E3\u6A21\u677F\u7F16\u8BD1\u540E\uFF0Crender \u51FD\u6570\u5C31\u6BD4\u8F83\u597D\u7406\u89E3\u4E86</li><li>\u5728\u4E00\u4E9B\u590D\u6742\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u80FD\u7528 template\uFF0C\u53EF\u4EE5\u8003\u8651\u7528 render</li><li>React \u4E00\u76F4\u90FD\u7528 render\uFF08\u6CA1\u6709\u6A21\u677F\uFF09</li></ul><p>\u4E3E\u4F8B</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;heading&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// template:\`xxx\`</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">createElement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">createElement</span><span class="token punctuation">(</span>
            <span class="token string">&#39;h&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>level<span class="token punctuation">,</span>
            <span class="token punctuation">[</span>
                <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;headerId&#39;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&#39;#&#39;</span> <span class="token operator">+</span> <span class="token string">&#39;headerId&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token string">&#39;this is a tag&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,5);function p(e,o){return t}var l=a(s,[["render",p]]);export{l as default};
