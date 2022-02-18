import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="react\u7684\u6838\u5FC3\u6280\u672F-vdom-\u548C-diff" tabindex="-1"><a class="header-anchor" href="#react\u7684\u6838\u5FC3\u6280\u672F-vdom-\u548C-diff" aria-hidden="true">#</a> React\u7684\u6838\u5FC3\u6280\u672F vdom \u548C diff</h1><blockquote><p>Vue2.x Vue3.0 React \u4E09\u8005\u5B9E\u73B0 vdom \u7EC6\u8282\u90FD\u4E0D\u540C \u6838\u5FC3\u6982\u5FF5\u548C\u5B9E\u73B0\u601D\u8DEF\uFF0C\u90FD\u4E00\u6837</p></blockquote><p>vdom</p><ul><li>h \u51FD\u6570</li><li>vnode \u6570\u636E\u7ED3\u6784</li><li>patch \u51FD\u6570</li></ul><p>vdom \u7ED3\u6784</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">className</span><span class="token operator">:</span> <span class="token string">&#39;container&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;div1&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&#39;p&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">&#39;vdom&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&#39;ul&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token string">&#39;font-size: 20px&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">&#39;a&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">//...</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>diff \u7B97\u6CD5\u4F18\u5316</p><ul><li>\u53EA\u6BD4\u8F83\u540C\u4E00\u5C42\u7EA7\uFF0C\u4E0D\u8DE8\u7EA7\u6BD4\u8F83</li><li>tag \u4E0D\u76F8\u540C\uFF0C\u5219\u76F4\u63A5\u5220\u9664\u91CD\u5EFA\uFF0C\u4E0D\u518D\u6DF1\u5EA6\u6BD4\u8F83</li><li>tag \u548C key\uFF0C\u4E24\u8005\u90FD\u76F8\u540C\uFF0C\u5219\u8BA4\u4E3A\u76F8\u540C\u8282\u70B9\uFF0C\u4E0D\u518D\u6DF1\u5EA6\u6BD4\u8F83</li></ul>`,8);function t(o,e){return p}var c=s(a,[["render",t]]);export{c as default};
