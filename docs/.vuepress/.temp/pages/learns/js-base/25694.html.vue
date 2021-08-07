<template><h1 id="手写简易-jquery-考虑插件和扩展性" tabindex="-1"><a class="header-anchor" href="#手写简易-jquery-考虑插件和扩展性" aria-hidden="true">#</a> 手写简易 jQuery 考虑插件和扩展性</h1>
<p>首先准备一个基本的 dom</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>p<span class="token operator">></span>文字<span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span>p<span class="token operator">></span>文字<span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span>p<span class="token operator">></span>文字<span class="token number">3</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
</code></pre></div><p>大神手写简易 jQuery</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">//基本的操作</span>
<span class="token keyword">class</span> <span class="token class-name">jQuery</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">selector</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> result <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span>
        <span class="token keyword">const</span> length <span class="token operator">=</span> result<span class="token punctuation">.</span>length
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> result<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">=</span> length
    <span class="token punctuation">}</span>
    <span class="token function">get</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">[</span>index<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token function">each</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> elem <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            <span class="token function">fn</span><span class="token punctuation">(</span>elem<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">on</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token parameter">elem</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            elem<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> fn<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>可以这样来运行</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> $p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">jQuery</span><span class="token punctuation">(</span><span class="token string">'p'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>$p<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">//&lt;p>​文字2​&lt;/p>​</span>
$p<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'clicked'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// clicked</span>
</code></pre></div><p>下面来考虑下插件和扩展性，那就可以这样写完事</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">//插件</span>
jQuery<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">dialog</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">info</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
$p<span class="token punctuation">.</span><span class="token function">dialog</span><span class="token punctuation">(</span><span class="token string">'info'</span><span class="token punctuation">)</span> <span class="token comment">// info</span>
<span class="token comment">//扩展‘造轮子’</span>
<span class="token keyword">class</span> <span class="token class-name">myJQuery</span> <span class="token keyword">extends</span> <span class="token class-name">jQuery</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">selector</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//扩展自己方法</span>
    <span class="token function">addClass</span><span class="token punctuation">(</span><span class="token parameter">className</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
    <span class="token function">style</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></template>
