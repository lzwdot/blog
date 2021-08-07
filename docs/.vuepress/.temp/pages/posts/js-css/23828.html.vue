<template><h1 id="微信浏览器-前进后退-的底部banner挡住了h5的底部banner" tabindex="-1"><a class="header-anchor" href="#微信浏览器-前进后退-的底部banner挡住了h5的底部banner" aria-hidden="true">#</a> 微信浏览器“前进后退”的底部banner挡住了H5的底部banner</h1>
<p>问题说明：</p>
<p>ios微信内置浏览器新增了“前进后退”的底部操作banner，在H5也包含 fixed在底部的banner时，进行前进后退操作后，会出现微信 banner 挡住 H5 的banner的情况。</p>
<p>解决思路：</p>
<p>1、 微信浏览器出现了底部操作banner后，页面的body会变化，需要重新矫正</p>
<p>2、当返回页面时，让页面执行矫正 js</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token comment">//解决IOS微信内置浏览器返回后不执行js脚本的问题</span>
    <span class="token keyword">var</span> isPageHide <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'pageshow'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isPageHide<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"body"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">'height'</span><span class="token punctuation">,</span>window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'pagehide'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        isPageHide <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre></div><p>代码中的 <code>pageshow</code> 用来解决ios 返回不执行 js 的问题</p>
</template>
