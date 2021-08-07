<template><h1 id="leetcode-133-克隆图" tabindex="-1"><a class="header-anchor" href="#leetcode-133-克隆图" aria-hidden="true">#</a> LeetCode：133. 克隆图</h1>
<p>深度优先</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span> <span class="token parameter">node</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">cloneGraph</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 访问过的节点</span>

    <span class="token comment">// 深度优先</span>
    <span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>       
        <span class="token keyword">const</span> nCp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
        visited<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> nCp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 设置访问过的，同时建立映射关系（克隆）</span>
        <span class="token punctuation">(</span>n<span class="token punctuation">.</span>neighbors <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">ne</span> <span class="token operator">=></span> <span class="token punctuation">{</span>           
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>ne<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">dfs</span><span class="token punctuation">(</span>ne<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 相邻节点同样赋值一份，但需要从 visited 里面拿</span>
            nCp<span class="token punctuation">.</span>neighbors<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>visited<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>ne<span class="token punctuation">)</span><span class="token punctuation">)</span> 
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>

    <span class="token comment">// 返回克隆的节点</span>
    <span class="token keyword">return</span> visited<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> 
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>广度优先</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span> <span class="token parameter">node</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">cloneGraph</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 访问过的</span>

    <span class="token comment">// 设置第一个访问过的，同时建立映射关系（克隆）</span>
    visited<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> 

    <span class="token comment">// 广度优先</span>
    <span class="token keyword">const</span> q <span class="token operator">=</span> <span class="token punctuation">[</span>node<span class="token punctuation">]</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>q<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> n <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">(</span>n<span class="token punctuation">.</span>neighbors <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">ne</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>ne<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>ne<span class="token punctuation">)</span>

                <span class="token comment">// 设置访问过的，同时建立映射关系（克隆）</span>
                visited<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>ne<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>ne<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>

            <span class="token comment">// 相邻节点同样赋值一份，但需要从 visited 里面拿</span>
            visited<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span>neighbors<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>visited<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>ne<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 返回克隆的节点</span>
    <span class="token keyword">return</span> visited<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div></template>
