<template><h1 id="实现购物车功能设计" tabindex="-1"><a class="header-anchor" href="#实现购物车功能设计" aria-hidden="true">#</a> 实现购物车功能设计</h1>
<p>实现购物车功能，有：商品、价格、数量和总价，比如这样一个原型图</p>
<p><img src="@source/learns/project/images/1991417951.png" alt=""></p>
<p>1、data 数据结构设计</p>
<ul>
<li>用数据描述所有的内容</li>
<li>数据要结构化，易于程序操作（遍历、查找）</li>
<li>数据要可扩展，以便增加新的功能</li>
</ul>
<p>比如</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token punctuation">{</span>
    productionList<span class="token operator">:</span><span class="token punctuation">[</span> <span class="token comment">// 对象和数组数据是可描述，结构化，可扩展的</span>
        <span class="token punctuation">{</span>
            id<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span><span class="token string">'商品'</span><span class="token punctuation">,</span>
            price<span class="token operator">:</span><span class="token number">10</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    cartList<span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            id<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 使用商品 id，可扩展</span>
            quantity<span class="token operator">:</span><span class="token number">1</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>2、组件设计</p>
<ul>
<li>从功能上拆分层次</li>
<li>尽量让组件原子化</li>
<li>容器组件（只管理数据）&amp; UI 组件（只显示视图）</li>
</ul>
<p><img src="@source/learns/project/images/1969078992.png" alt=""></p>
<p>上图，第一层红线容器组件，第二层蓝线、绿线等 UI 组件</p>
<p>比如</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>App<span class="token operator">></span> <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>管理所有数据<span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>ProductionList<span class="token operator">></span> <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>商品列表<span class="token operator">--</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>ProductionListItem<span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>ProductionListItem<span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>ProductionListItem<span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ProductionList<span class="token operator">></span>
    <span class="token operator">&lt;</span>CartList<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>购物车列表和总价<span class="token operator">--</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>CartItem<span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>CartItem<span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>CartList<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>App<span class="token operator">></span>
</code></pre></div></template>
