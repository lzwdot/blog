import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="php\u5229\u7528fputcsv\u5BFC\u51FA\u5927\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#php\u5229\u7528fputcsv\u5BFC\u51FA\u5927\u6570\u636E" aria-hidden="true">#</a> php\u5229\u7528fputcsv\u5BFC\u51FA\u5927\u6570\u636E</h1><p>\u4F7F\u7528\u539F\u751F\u7684fputcsv\u5BFC\u51FA\u6570\u636E\uFF0C\u6027\u80FD\u66F4\u597D</p><p><strong>\u5BFC\u51FA\u7684\u6570\u636E\u683C\u5F0F\uFF1A</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">Array</span>
<span class="token punctuation">(</span>
    <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=&gt;</span> <span class="token function">Array</span>
        <span class="token punctuation">(</span>
            <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=&gt;</span> id
            <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=&gt;</span> send_status
            <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=&gt;</span> created_at
            <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=&gt;</span> level
            <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=&gt;</span> price
            <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">=&gt;</span> phone
        <span class="token punctuation">)</span>
    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=&gt;</span> <span class="token function">Array</span>
        <span class="token punctuation">(</span>
            <span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=&gt;</span> <span class="token number">8</span>
            <span class="token punctuation">[</span>send_status<span class="token punctuation">]</span> <span class="token operator">=&gt;</span> \u672A\u53D1\u5956
            <span class="token punctuation">[</span>created_at<span class="token punctuation">]</span> <span class="token operator">=&gt;</span> <span class="token number">2019</span><span class="token operator">-</span><span class="token number">03</span><span class="token operator">-</span><span class="token number">06</span> <span class="token number">02</span><span class="token operator">:</span><span class="token number">54</span><span class="token operator">:</span><span class="token number">31</span>
            <span class="token punctuation">[</span>level<span class="token punctuation">]</span> <span class="token operator">=&gt;</span> \u4E00\u7B49\u5956
            <span class="token punctuation">[</span>price<span class="token punctuation">]</span> <span class="token operator">=&gt;</span> <span class="token number">0.00</span>
            <span class="token punctuation">[</span>phone<span class="token punctuation">]</span> <span class="token operator">=&gt;</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=&gt;</span> <span class="token function">Array</span>
        <span class="token punctuation">(</span>
            <span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=&gt;</span> <span class="token number">9</span>
            <span class="token punctuation">[</span>token<span class="token punctuation">]</span> <span class="token operator">=&gt;</span> o_l54wLlCrhDVbS6tRZD5kDYOS5E
            <span class="token punctuation">[</span>send_status<span class="token punctuation">]</span> <span class="token operator">=&gt;</span> \u672A\u53D1\u5956
            <span class="token punctuation">[</span>created_at<span class="token punctuation">]</span> <span class="token operator">=&gt;</span> <span class="token number">2019</span><span class="token operator">-</span><span class="token number">03</span><span class="token operator">-</span><span class="token number">06</span> <span class="token number">02</span><span class="token operator">:</span><span class="token number">55</span><span class="token operator">:</span><span class="token number">04</span>
            <span class="token punctuation">[</span>level<span class="token punctuation">]</span> <span class="token operator">=&gt;</span> \u4E8C\u7B49\u5956
            <span class="token punctuation">[</span>price<span class="token punctuation">]</span> <span class="token operator">=&gt;</span> <span class="token number">50.00</span>
            <span class="token punctuation">[</span>phone<span class="token punctuation">]</span> <span class="token operator">=&gt;</span>
        <span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre></div><p><strong>\u65B9\u6CD5\u51FD\u6570\uFF1A</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * \u5904\u7406Excel\u5BFC\u51FA
 * <span class="token keyword">@param</span> <span class="token parameter">$filename</span>
 * <span class="token keyword">@param</span> <span class="token parameter">$data</span>
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">doExcel</span><span class="token punctuation">(</span><span class="token parameter">$filename<span class="token punctuation">,</span> $data</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
   <span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type: application/vnd.ms-execl&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Disposition: attachment;filename=&quot;&#39;</span> <span class="token punctuation">.</span> $filename <span class="token punctuation">.</span> <span class="token string">&#39;.csv&quot;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token comment">//\u4EE5\u5199\u5165\u8FFD\u52A0\u7684\u65B9\u5F0F\u6253\u5F00</span>
   $fp <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&#39;php://output&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   $i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>$data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">foreach</span> <span class="token punctuation">(</span>$data <span class="token keyword">as</span> <span class="token parameter">$k</span> <span class="token operator">=&gt;</span> $v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token comment">// CSV\u7684Excel\u652F\u6301GBK\u7F16\u7801\uFF0C\u4E00\u5B9A\u8981\u8F6C\u6362\uFF0C\u5426\u5219\u4E71\u7801</span>
         <span class="token function">foreach</span> <span class="token punctuation">(</span>$v <span class="token keyword">as</span> <span class="token parameter">$k2</span> <span class="token operator">=&gt;</span> $v2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            $v<span class="token punctuation">[</span>$k2<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">iconv</span><span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;GBK&quot;</span><span class="token punctuation">,</span> $v2<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
         <span class="token function">fputcsv</span><span class="token punctuation">(</span>$fp<span class="token punctuation">,</span> $v<span class="token punctuation">)</span><span class="token punctuation">;</span>
         $i<span class="token operator">++</span><span class="token punctuation">;</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>$i <span class="token operator">&gt;</span> <span class="token number">20000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//\u8BFB\u53D6\u4E00\u90E8\u5206\u6570\u636E\u5237\u65B0\u4E0B\u8F93\u51FAbuffer</span>
            <span class="token function">ob_flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            $i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
   <span class="token function">fclose</span><span class="token punctuation">(</span>$fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,6);function t(o,c){return p}var l=s(a,[["render",t]]);export{l as default};
