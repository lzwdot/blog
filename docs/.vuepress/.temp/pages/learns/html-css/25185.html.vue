<template><h1 id="margin-纵向重叠问题" tabindex="-1"><a class="header-anchor" href="#margin-纵向重叠问题" aria-hidden="true">#</a> margin 纵向重叠问题</h1>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token constant">AAA</span> 到 <span class="token constant">BBB</span>的距离是多少？ <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>style<span class="token operator">></span>
    p <span class="token punctuation">{</span>
        font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">16</span>px<span class="token punctuation">;</span>
        line<span class="token operator">-</span>height<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
        margin<span class="token operator">-</span>top<span class="token operator">:</span> <span class="token number">10</span>px<span class="token punctuation">;</span>
        margin<span class="token operator">-</span>bottom<span class="token operator">:</span> <span class="token number">15</span>px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
<span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token constant">AAA</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token constant">BBB</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
</code></pre></div><p>答案：15px</p>
<ul>
<li>相邻元素的 margin-top 和 margin-bottom 会发生重叠</li>
<li>空白内容的 <code>&lt;p &gt;&lt;/ p&gt;</code> 也会发生重叠</li>
</ul>
</template>
