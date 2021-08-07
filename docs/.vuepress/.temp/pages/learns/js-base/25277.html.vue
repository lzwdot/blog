<template><h1 id="何时使用-何时使用" tabindex="-1"><a class="header-anchor" href="#何时使用-何时使用" aria-hidden="true">#</a> 何时使用 === 何时使用 ==？</h1>
<p>变量计算 - 注意某些类型转换的坑</p>
<ul>
<li>字符串拼接</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">100</span> <span class="token operator">+</span> <span class="token number">10</span> <span class="token comment">// 110</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">100</span> <span class="token operator">+</span> <span class="token string">'10'</span> <span class="token comment">// '10010'</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token operator">+</span> <span class="token string">'10'</span> <span class="token comment">// 'true10'</span>
</code></pre></div><ul>
<li>==运算符</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token number">100</span> <span class="token operator">==</span> <span class="token string">'100'</span>  <span class="token comment">// true</span>
<span class="token number">0</span> <span class="token operator">==</span> <span class="token string">''</span> <span class="token comment">// true</span>
<span class="token number">0</span> <span class="token operator">==</span> <span class="token boolean">false</span> <span class="token comment">// true</span>
<span class="token boolean">false</span> <span class="token operator">==</span> <span class="token string">''</span> <span class="token comment">//true</span>
<span class="token keyword">null</span> <span class="token operator">==</span> <span class="token keyword">undefined</span> <span class="token comment">// true</span>
</code></pre></div><p>除了 == null 之外，其他都一律用 ===，例如</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span>a <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre></div><p>相当于：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span>a <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> obj<span class="token punctuation">.</span>a <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><ul>
<li>逻辑判断</li>
</ul>
<p>js 主要是判断 truely 变量还是 falsely 变量</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">&amp;&amp;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// 0 因为 10 是 truely 变量所以要判断第二值 0，所以返回 0</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">''</span> <span class="token operator">||</span> <span class="token string">'abc'</span><span class="token punctuation">)</span> <span class="token comment">// 'abc'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">!</span>window<span class="token punctuation">.</span>abc<span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre></div><p>需要注意的 falsely 变量，都为 false</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">!</span><span class="token operator">!</span><span class="token number">0</span> <span class="token operator">===</span> <span class="token boolean">false</span>
<span class="token operator">!</span><span class="token operator">!</span><span class="token number">NaN</span> <span class="token operator">===</span> <span class="token boolean">false</span>
<span class="token operator">!</span><span class="token operator">!</span><span class="token string">''</span> <span class="token operator">===</span> <span class="token boolean">false</span>
<span class="token operator">!</span><span class="token operator">!</span><span class="token keyword">null</span> <span class="token operator">===</span> <span class="token boolean">false</span>
<span class="token operator">!</span><span class="token operator">!</span><span class="token keyword">undefined</span> <span class="token operator">===</span> <span class="token boolean">false</span>
<span class="token operator">!</span><span class="token operator">!</span><span class="token boolean">false</span> <span class="token operator">===</span> <span class="token boolean">false</span>
</code></pre></div></template>
