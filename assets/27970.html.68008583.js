import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="javascript-\u5B9E\u73B0-\u6700\u5C0F\u5806\u7C7B" tabindex="-1"><a class="header-anchor" href="#javascript-\u5B9E\u73B0-\u6700\u5C0F\u5806\u7C7B" aria-hidden="true">#</a> JavaScript \u5B9E\u73B0\uFF1A\u6700\u5C0F\u5806\u7C7B</h1><p>\u5B9E\u73B0\u529F\u80FD</p><ul><li>\u63D2\u5165</li><li>\u5220\u9664</li><li>\u8FD4\u56DE\u5806\u5934</li><li>\u8FD4\u56DE\u5806\u957F</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * JavaScript \u5B9E\u73B0\uFF1A\u6700\u5C0F\u5806\u7C7B
 * \u63D2\u5165
 * \u5220\u9664
 * \u8FD4\u56DE\u5806\u5934
 * \u8FD4\u56DE\u5806\u957F
 */</span>

<span class="token keyword">class</span> <span class="token class-name">MinHeap</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>heap <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token function">swap</span><span class="token punctuation">(</span><span class="token parameter">i1<span class="token punctuation">,</span> i2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u4EA4\u6362\u4E24\u4E2A\u503C</span>
        <span class="token keyword">const</span> temp <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i1<span class="token punctuation">]</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i1<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i2<span class="token punctuation">]</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i2<span class="token punctuation">]</span> <span class="token operator">=</span> temp
    <span class="token punctuation">}</span>

    <span class="token function">getParentIndex</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u83B7\u53D6\u7236\u5143\u7D20\u7684\u7D22\u5F15\u503C (index-1)/2</span>
        <span class="token comment">// \u7C7B\u4F3C Math.floor((index-1/2))</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>

    <span class="token function">getLeftIndex</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u83B7\u53D6\u5DE6\u5143\u7D20\u7684\u7D22\u5F15\u503C i*2+1</span>
        <span class="token comment">// \u7C7B\u4F3C Math.floor((index-1/2))</span>
        <span class="token keyword">return</span> i <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>

    <span class="token function">getRightIndex</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u83B7\u53D6\u53F3\u5143\u7D20\u7684\u7D22\u5F15\u503C i*2+2</span>
        <span class="token comment">// \u7C7B\u4F3C Math.floor((index-1/2))</span>
        <span class="token keyword">return</span> i <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">2</span>
    <span class="token punctuation">}</span>

    <span class="token function">shiftUp</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

        <span class="token keyword">const</span> parentIndex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getParentIndex</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>

        <span class="token comment">// \u8F83\u5C0F\u7684\u503C \u4E0A\u79FB</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>parentIndex<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">swap</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> parentIndex<span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">shiftUp</span><span class="token punctuation">(</span>parentIndex<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">shiftDown</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> leftIndex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getLeftIndex</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>
        <span class="token keyword">const</span> rightIndex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getRightIndex</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>

        <span class="token comment">// \u8F83\u5927\u7684\u503C \u4E0B\u79FB</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>leftIndex<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">swap</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> leftIndex<span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">shiftDown</span><span class="token punctuation">(</span>leftIndex<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// \u8F83\u5927\u7684\u503C \u4E0B\u79FB</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>rightIndex<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">swap</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> rightIndex<span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">shiftDown</span><span class="token punctuation">(</span>rightIndex<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u63D2\u5165\u65B0\u503C</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">shiftUp</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5220\u9664\u503C\uFF0C\u7528\u5806\u5C3E\u66FF\u6362\u5806\u9876</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment">// \u7136\u540E\u628A\u8F83\u5927\u503C\u4E0B\u79FB</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">shiftDown</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u8FD4\u56DE\u5806\u9876</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u8FD4\u56DE\u5806\u5BB9\u91CF</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> h <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MinHeap</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
h<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
h<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
h<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
h<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
h<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
h<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div>`,4);function t(o,c){return p}var k=s(a,[["render",t]]);export{k as default};
