import{h as n}from"./app.4ca8afde.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},t=n(`<h1 id="\u5982\u4F55\u914D\u7F6E-vue-router-\u5F02\u6B65\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u914D\u7F6E-vue-router-\u5F02\u6B65\u52A0\u8F7D" aria-hidden="true">#</a> \u5982\u4F55\u914D\u7F6E Vue-router \u5F02\u6B65\u52A0\u8F7D</h1><p>\u5F02\u6B65\u52A0\u8F7D\uFF0C\u4E5F\u53EB\u61D2\u52A0\u8F7D\u3002\u793A\u4F8B\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span>
                <span class="token comment">/* webpackChunkName:&quot;navigator&quot; */</span>
                <span class="token string">&#39;./../components/Navigator&#39;</span>
            <span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/feedback&#39;</span><span class="token punctuation">,</span>
            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span>
                <span class="token comment">/* webpackChunkName:&quot;feedback&quot; */</span>
                <span class="token string">&#39;./../components/Feedback&#39;</span>
                <span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,3);function p(o,e){return t}var u=a(s,[["render",p]]);export{u as default};
