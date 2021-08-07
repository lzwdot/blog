<template><h1 id="dom-操作的常用-api" tabindex="-1"><a class="header-anchor" href="#dom-操作的常用-api" aria-hidden="true">#</a> DOM 操作的常用 API</h1>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"div1"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>p id<span class="token operator">=</span><span class="token string">"p1"</span><span class="token operator">></span>一段文字 <span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span>p<span class="token operator">></span>一段文字 <span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span>p<span class="token operator">></span>一段文字 <span class="token number">3</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"div2"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">"https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"</span> alt<span class="token operator">=</span><span class="token string">""</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre></div><p>获取 DOM 节点</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> div1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'div1'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'div1'</span><span class="token punctuation">,</span>div1<span class="token punctuation">)</span>
<span class="token comment">// div1 &lt;div id=​"div1" class=​"container">​…​&lt;/div></span>
​
<span class="token keyword">const</span> divList <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span> <span class="token comment">// 集合</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'divList.length'</span><span class="token punctuation">,</span>divList<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
<span class="token comment">// divList.length 2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'divList[1]'</span><span class="token punctuation">,</span>divList<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// divList[1] &lt;div id=​"div2">​…​&lt;/div>​</span>
<span class="token keyword">const</span> containerList <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">'container'</span><span class="token punctuation">)</span> <span class="token comment">// 集合</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'containerList.length'</span><span class="token punctuation">,</span>divList<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
<span class="token comment">// containerList.length 2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'containerList[1]'</span><span class="token punctuation">,</span>divList<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// containerList[1] &lt;div id=​"div2">​…​&lt;/div></span>
<span class="token keyword">const</span> pList <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">'p'</span><span class="token punctuation">)</span> <span class="token comment">// 集合</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'pList'</span><span class="token punctuation">,</span>pList<span class="token punctuation">)</span>
</code></pre></div><p>property 和 attribute</p>
<ul>
<li>property：修改对象属性，不会体现到 html 结构中（尽量用）</li>
<li>attribute：修改 html 属性，会改变 html 结构</li>
<li>两者都有可能引起 DOM 重新渲染</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> pList <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">'p'</span><span class="token punctuation">)</span> <span class="token comment">// 集合</span>
<span class="token keyword">const</span> p1 <span class="token operator">=</span> pList<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token comment">// property 形式</span>
p1<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token string">'100px'</span>
p1<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">'red'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width<span class="token punctuation">)</span> <span class="token comment">// 100px</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>className<span class="token punctuation">)</span> <span class="token comment">// red</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>nodeName<span class="token punctuation">)</span> <span class="token comment">// p</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>nodeType<span class="token punctuation">)</span> <span class="token comment">// 1</span>
<span class="token comment">// attribute 形式</span>
p1<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'data-name'</span><span class="token punctuation">,</span><span class="token string">'baidu'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">'data-name'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// baidu</span>
p1<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'style'</span><span class="token punctuation">,</span><span class="token string">'font-size:50px'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">'style'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// font-size:50px</span>
</code></pre></div><p>新增/插入节点</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> div1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'div1'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> div2 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'div2'</span><span class="token punctuation">)</span>
<span class="token comment">// 新建节点</span>
<span class="token keyword">const</span> newP <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'p'</span><span class="token punctuation">)</span>
newP<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">'this is newP'</span>
<span class="token comment">// 插入节点</span>
div1<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>newP<span class="token punctuation">)</span>
<span class="token comment">// 移动节点 id="p1" 从 div1 移动到 div2</span>
<span class="token keyword">const</span> p1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'p1'</span><span class="token punctuation">)</span>
div2<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span>
</code></pre></div><p>获取子元素列表 &amp; 获取父元素</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> div1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'div1'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> p1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'p1'</span><span class="token punctuation">)</span>
<span class="token comment">// 获取父元素</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'p1.parentNode'</span><span class="token punctuation">,</span> p1<span class="token punctuation">.</span>parentNode<span class="token punctuation">)</span>
<span class="token comment">// p1.parentNode &lt;div id=​"div1" class=​"container">​…​&lt;/div>​</span>
<span class="token comment">// 获取子元素列表</span>
<span class="token keyword">const</span> div1ChildNodes <span class="token operator">=</span> div1<span class="token punctuation">.</span>childNodes
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>div1ChildNodes<span class="token punctuation">)</span>
<span class="token comment">// NodeList(7) [text, p#p1, text, p, text, p, text]</span>
<span class="token comment">// 0: text</span>
<span class="token comment">// 1: p#p1</span>
<span class="token comment">// 2: text</span>
<span class="token comment">// 3: p</span>
<span class="token comment">// 4: text</span>
<span class="token comment">// 5: p</span>
<span class="token comment">// 6: text</span>
<span class="token comment">// length: 7</span>
<span class="token comment">// 对象转数组，过滤 text 标签 nodeType=3，只留下 p标签 nodeType=1</span>
<span class="token keyword">const</span> div1ChildNodesP <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>div1ChildNodes<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">child</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>child<span class="token punctuation">.</span>nodeType <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'div1ChildNodesP'</span><span class="token punctuation">,</span> div1ChildNodesP<span class="token punctuation">)</span>
</code></pre></div><p>删除节点</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> div1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'div1'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> child <span class="token operator">=</span> div1<span class="token punctuation">.</span>childNodes
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span>
<span class="token comment">//NodeList(7) [text, p#p1, text, p, text, p, text]</span>
<span class="token comment">// 0: p#p1</span>
<span class="token comment">// 1: text</span>
<span class="token comment">// 2: p</span>
<span class="token comment">// 3: text</span>
<span class="token comment">// 4: p</span>
<span class="token comment">// 5: text</span>
<span class="token comment">// length: 6</span>
<span class="token comment">// 对象转数组，过滤 text 标签 nodeType=3，只留下 p标签 nodeType=1</span>
<span class="token keyword">const</span> childP <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">ch</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>ch<span class="token punctuation">.</span>nodeType <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
div1<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>childP<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 删除 p#p1</span>
</code></pre></div></template>
