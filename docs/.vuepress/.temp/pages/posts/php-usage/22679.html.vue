<template><h1 id="php利用fputcsv导出大数据" tabindex="-1"><a class="header-anchor" href="#php利用fputcsv导出大数据" aria-hidden="true">#</a> php利用fputcsv导出大数据</h1>
<p>使用原生的fputcsv导出数据，性能更好</p>
<p><strong>导出的数据格式：</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token function">Array</span>
<span class="token punctuation">(</span>
    <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=></span> <span class="token function">Array</span>
        <span class="token punctuation">(</span>
            <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=></span> id
            <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=></span> send_status
            <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=></span> created_at
            <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=></span> level
            <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=></span> price
            <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">=></span> phone
        <span class="token punctuation">)</span>
    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=></span> <span class="token function">Array</span>
        <span class="token punctuation">(</span>
            <span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=></span> <span class="token number">8</span>
            <span class="token punctuation">[</span>send_status<span class="token punctuation">]</span> <span class="token operator">=></span> 未发奖
            <span class="token punctuation">[</span>created_at<span class="token punctuation">]</span> <span class="token operator">=></span> <span class="token number">2019</span><span class="token operator">-</span><span class="token number">03</span><span class="token operator">-</span><span class="token number">06</span> <span class="token number">02</span><span class="token operator">:</span><span class="token number">54</span><span class="token operator">:</span><span class="token number">31</span>
            <span class="token punctuation">[</span>level<span class="token punctuation">]</span> <span class="token operator">=></span> 一等奖
            <span class="token punctuation">[</span>price<span class="token punctuation">]</span> <span class="token operator">=></span> <span class="token number">0.00</span>
            <span class="token punctuation">[</span>phone<span class="token punctuation">]</span> <span class="token operator">=></span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=></span> <span class="token function">Array</span>
        <span class="token punctuation">(</span>
            <span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=></span> <span class="token number">9</span>
            <span class="token punctuation">[</span>token<span class="token punctuation">]</span> <span class="token operator">=></span> o_l54wLlCrhDVbS6tRZD5kDYOS5E
            <span class="token punctuation">[</span>send_status<span class="token punctuation">]</span> <span class="token operator">=></span> 未发奖
            <span class="token punctuation">[</span>created_at<span class="token punctuation">]</span> <span class="token operator">=></span> <span class="token number">2019</span><span class="token operator">-</span><span class="token number">03</span><span class="token operator">-</span><span class="token number">06</span> <span class="token number">02</span><span class="token operator">:</span><span class="token number">55</span><span class="token operator">:</span><span class="token number">04</span>
            <span class="token punctuation">[</span>level<span class="token punctuation">]</span> <span class="token operator">=></span> 二等奖
            <span class="token punctuation">[</span>price<span class="token punctuation">]</span> <span class="token operator">=></span> <span class="token number">50.00</span>
            <span class="token punctuation">[</span>phone<span class="token punctuation">]</span> <span class="token operator">=></span>
        <span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre></div><p><strong>方法函数：</strong></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 处理Excel导出
 * <span class="token keyword">@param</span> <span class="token parameter">$filename</span>
 * <span class="token keyword">@param</span> <span class="token parameter">$data</span>
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">doExcel</span><span class="token punctuation">(</span><span class="token parameter">$filename<span class="token punctuation">,</span> $data</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
   <span class="token function">header</span><span class="token punctuation">(</span><span class="token string">'Content-Type: application/vnd.ms-execl'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token function">header</span><span class="token punctuation">(</span><span class="token string">'Content-Disposition: attachment;filename="'</span> <span class="token punctuation">.</span> $filename <span class="token punctuation">.</span> <span class="token string">'.csv"'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token comment">//以写入追加的方式打开</span>
   $fp <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">'php://output'</span><span class="token punctuation">,</span> <span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   $i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>$data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">foreach</span> <span class="token punctuation">(</span>$data <span class="token keyword">as</span> <span class="token parameter">$k</span> <span class="token operator">=></span> $v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token comment">// CSV的Excel支持GBK编码，一定要转换，否则乱码</span>
         <span class="token function">foreach</span> <span class="token punctuation">(</span>$v <span class="token keyword">as</span> <span class="token parameter">$k2</span> <span class="token operator">=></span> $v2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            $v<span class="token punctuation">[</span>$k2<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">iconv</span><span class="token punctuation">(</span><span class="token string">"utf-8"</span><span class="token punctuation">,</span> <span class="token string">"GBK"</span><span class="token punctuation">,</span> $v2<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
         <span class="token function">fputcsv</span><span class="token punctuation">(</span>$fp<span class="token punctuation">,</span> $v<span class="token punctuation">)</span><span class="token punctuation">;</span>
         $i<span class="token operator">++</span><span class="token punctuation">;</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>$i <span class="token operator">></span> <span class="token number">20000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//读取一部分数据刷新下输出buffer</span>
            <span class="token function">ob_flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            $i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
   <span class="token function">fclose</span><span class="token punctuation">(</span>$fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></template>
