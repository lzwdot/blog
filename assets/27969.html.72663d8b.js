import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="leetcode-133-\u514B\u9686\u56FE" tabindex="-1"><a class="header-anchor" href="#leetcode-133-\u514B\u9686\u56FE" aria-hidden="true">#</a> LeetCode\uFF1A133. \u514B\u9686\u56FE</h1><p>\u6DF1\u5EA6\u4F18\u5148</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span> <span class="token parameter">node</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">cloneGraph</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u8BBF\u95EE\u8FC7\u7684\u8282\u70B9</span>

    <span class="token comment">// \u6DF1\u5EA6\u4F18\u5148</span>
    <span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>       
        <span class="token keyword">const</span> nCp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
        visited<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> nCp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8BBE\u7F6E\u8BBF\u95EE\u8FC7\u7684\uFF0C\u540C\u65F6\u5EFA\u7ACB\u6620\u5C04\u5173\u7CFB\uFF08\u514B\u9686\uFF09</span>
        <span class="token punctuation">(</span>n<span class="token punctuation">.</span>neighbors <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">ne</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>           
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>ne<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">dfs</span><span class="token punctuation">(</span>ne<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// \u76F8\u90BB\u8282\u70B9\u540C\u6837\u8D4B\u503C\u4E00\u4EFD\uFF0C\u4F46\u9700\u8981\u4ECE visited \u91CC\u9762\u62FF</span>
            nCp<span class="token punctuation">.</span>neighbors<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>visited<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>ne<span class="token punctuation">)</span><span class="token punctuation">)</span> 
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>

    <span class="token comment">// \u8FD4\u56DE\u514B\u9686\u7684\u8282\u70B9</span>
    <span class="token keyword">return</span> visited<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> 
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5E7F\u5EA6\u4F18\u5148</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span> <span class="token parameter">node</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">cloneGraph</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u8BBF\u95EE\u8FC7\u7684</span>

    <span class="token comment">// \u8BBE\u7F6E\u7B2C\u4E00\u4E2A\u8BBF\u95EE\u8FC7\u7684\uFF0C\u540C\u65F6\u5EFA\u7ACB\u6620\u5C04\u5173\u7CFB\uFF08\u514B\u9686\uFF09</span>
    visited<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> 

    <span class="token comment">// \u5E7F\u5EA6\u4F18\u5148</span>
    <span class="token keyword">const</span> q <span class="token operator">=</span> <span class="token punctuation">[</span>node<span class="token punctuation">]</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>q<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> n <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">(</span>n<span class="token punctuation">.</span>neighbors <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">ne</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>ne<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>ne<span class="token punctuation">)</span>

                <span class="token comment">// \u8BBE\u7F6E\u8BBF\u95EE\u8FC7\u7684\uFF0C\u540C\u65F6\u5EFA\u7ACB\u6620\u5C04\u5173\u7CFB\uFF08\u514B\u9686\uFF09</span>
                visited<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>ne<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>ne<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>

            <span class="token comment">// \u76F8\u90BB\u8282\u70B9\u540C\u6837\u8D4B\u503C\u4E00\u4EFD\uFF0C\u4F46\u9700\u8981\u4ECE visited \u91CC\u9762\u62FF</span>
            visited<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span>neighbors<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>visited<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>ne<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u8FD4\u56DE\u514B\u9686\u7684\u8282\u70B9</span>
    <span class="token keyword">return</span> visited<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,5);function t(o,c){return p}var l=s(a,[["render",t]]);export{l as default};
