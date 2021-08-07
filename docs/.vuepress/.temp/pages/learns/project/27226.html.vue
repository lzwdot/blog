<template><h1 id="todolist-功能组件和状态设计" tabindex="-1"><a class="header-anchor" href="#todolist-功能组件和状态设计" aria-hidden="true">#</a> TodoList 功能组件和状态设计</h1>
<p>通过设计制作一个 TodoList 来说明组件和状态设计，比如要实现这样一个原型图</p>
<p><img src="@source/learns/project/images/3295942119.png" alt=""></p>
<p>1、state 数据结构设计</p>
<ul>
<li>用数据描述所有的内容</li>
<li>数据要结构化，易于程序操作（遍历、查找）</li>
<li>数据要可扩展，以便增加新的功能</li>
</ul>
<p>比如</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
    list<span class="token operator">:</span><span class="token punctuation">[</span> <span class="token comment">// 对象和数组数据是可描述，结构化，可扩展的</span>
        <span class="token punctuation">{</span>
            id<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 唯一标识</span>
            title<span class="token operator">:</span><span class="token string">'标题1'</span><span class="token punctuation">,</span>
            completed<span class="token operator">:</span><span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>2、组件设计</p>
<ul>
<li>从功能上拆分层次</li>
<li>尽量让组件原子化</li>
<li>容器组件（只管理数据）&amp; UI 组件（只显示视图）</li>
</ul>
<p><img src="@source/learns/project/images/2062200202.png" alt=""></p>
<p>上图，第一层红线容器组件，第二层蓝线、绿线等 UI 组件</p>
<p>比如</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>App<span class="token operator">></span> <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>只负责管理数据<span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>Input<span class="token operator">/</span><span class="token operator">></span> <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>只负责输入，将数据结果给父组件<span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>List<span class="token operator">></span> <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>只负责显示列表，从父组件获取数据<span class="token operator">--</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>ListItem <span class="token operator">/</span><span class="token operator">></span> <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>显示单条数据，删除，切换完成状态<span class="token operator">--</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>ListItem <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>ListItem <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>List<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>App<span class="token operator">></span>
</code></pre></div></template>
