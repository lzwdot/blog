<template><h1 id="去掉侧边栏-功能-小工具中wordpress-org" tabindex="-1"><a class="header-anchor" href="#去掉侧边栏-功能-小工具中wordpress-org" aria-hidden="true">#</a> 去掉侧边栏“功能”小工具中WordPress.Org</h1>
<p>最简单方式，在主题的style.css添加：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>a<span class="token punctuation">[</span>href<span class="token operator">=</span><span class="token string">"https://cn.wordpress.org/"</span><span class="token punctuation">]</span><span class="token punctuation">{</span>
     display<span class="token operator">:</span>none
<span class="token punctuation">}</span>
</code></pre></div><blockquote>
<p>此方式是隐藏，并不是真正去掉，但已达到效果</p>
</blockquote>
</template>
