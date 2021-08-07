<template><h1 id="wordpress接入熊掌号" tabindex="-1"><a class="header-anchor" href="#wordpress接入熊掌号" aria-hidden="true">#</a> WordPress接入熊掌号</h1>
<p>百度熊掌号已经推出一段时间了，各WordPress站长也纷纷开始接入熊掌号，本人也根据熊掌号文档进行页面改造，通过代码接入熊掌号，特此记录，这里所有代码都添加在functions.php中</p>
<blockquote>
<p>熊掌号接入最基本要求是页面能自适应移动端</p>
</blockquote>
<h3 id="资源提交" tabindex="-1"><a class="header-anchor" href="#资源提交" aria-hidden="true">#</a> 资源提交</h3>
<blockquote>
<p>新增内容 | 历史内容</p>
</blockquote>
<p>新增内容有数量限制，建议合适使用</p>
<p>直接上代码：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add_custom_to_footer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** 熊掌号 **/</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">is_single</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        global $post<span class="token punctuation">;</span>
        $urls <span class="token operator">=</span> <span class="token function">array</span><span class="token punctuation">(</span>
            <span class="token function">get_permalink</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//新增内容接口提交</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token number">24</span><span class="token operator">*</span><span class="token number">60</span><span class="token operator">*</span><span class="token number">60</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token function">strtotime</span><span class="token punctuation">(</span>$post<span class="token operator">-</span><span class="token operator">></span>post_date<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            $api <span class="token operator">=</span> <span class="token string">'http://data.zz.baidu.com/urls?appid=1565838311535855&amp;token=9IczqdTMGBswNYaR&amp;type=realtime'</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token comment">//历史内容接口提交</span>
            $api <span class="token operator">=</span> <span class="token string">'http://data.zz.baidu.com/urls?appid=1565838311535855&amp;token=9IczqdTMGBswNYaR&amp;type=batch'</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        $ch <span class="token operator">=</span> <span class="token function">curl_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        $options <span class="token operator">=</span> <span class="token function">array</span><span class="token punctuation">(</span>
            <span class="token parameter"><span class="token constant">CURLOPT_URL</span></span> <span class="token operator">=></span> $api<span class="token punctuation">,</span>
            <span class="token parameter"><span class="token constant">CURLOPT_POST</span></span> <span class="token operator">=></span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token parameter"><span class="token constant">CURLOPT_RETURNTRANSFER</span></span> <span class="token operator">=></span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token parameter"><span class="token constant">CURLOPT_POSTFIELDS</span></span> <span class="token operator">=></span> <span class="token function">implode</span><span class="token punctuation">(</span>"
"<span class="token punctuation">,</span> $urls<span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token parameter"><span class="token constant">CURLOPT_HTTPHEADER</span></span> <span class="token operator">=></span> <span class="token function">array</span><span class="token punctuation">(</span><span class="token string">'Content-Type: text/plain'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">curl_setopt_array</span><span class="token punctuation">(</span>$ch<span class="token punctuation">,</span> $options<span class="token punctuation">)</span><span class="token punctuation">;</span>
        $result <span class="token operator">=</span> <span class="token function">curl_exec</span><span class="token punctuation">(</span>$ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">curl_close</span><span class="token punctuation">(</span>$ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//echo $result;die;</span>
        <span class="token comment">//成功返回 { "remain_realtime": 9,"success_realtime": 1}</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/** 熊掌号 **/</span>
<span class="token punctuation">}</span>
<span class="token function">add_action</span><span class="token punctuation">(</span><span class="token string">'wp_footer'</span><span class="token punctuation">,</span> <span class="token string">'add_custom_to_footer'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><h3 id="粉丝关注" tabindex="-1"><a class="header-anchor" href="#粉丝关注" aria-hidden="true">#</a> 粉丝关注</h3>
<p>在页面中添加关注按钮。让用户在浏览您的页面时，通过关注按钮成为您的粉丝。</p>
<blockquote>
<p>cambrian.render可以使用 head | body | tail</p>
</blockquote>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add_custom_to_head</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** 熊掌号 **/</span>
    echo <span class="token string">'&lt;script src="//msite.baidu.com/sdk/c.js?appid=1565838311535855">&lt;/script>'</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">is_single</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        echo <span class="token string">"&lt;link rel="</span>canonical<span class="token string">" href="</span><span class="token string">" . get_permalink() . "</span><span class="token string">"/>"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span>script<span class="token operator">></span>cambrian<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">'tail'</span><span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
    <span class="token doc-comment comment">/** 熊掌号 end **/</span>
<span class="token punctuation">}</span>
<span class="token function">add_action</span><span class="token punctuation">(</span><span class="token string">'wp_head'</span><span class="token punctuation">,</span> <span class="token string">'add_custom_to_head'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><h3 id="号主页展现" tabindex="-1"><a class="header-anchor" href="#号主页展现" aria-hidden="true">#</a> 号主页展现</h3>
<p>资源进入熊掌号主页展现，需要先进行页面改造，添加几个必要的字段。</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php
$full_img_url <span class="token operator">=</span> <span class="token function">wp_get_attachment_image_src</span><span class="token punctuation">(</span><span class="token function">get_post_thumbnail_id</span><span class="token punctuation">(</span>$post<span class="token operator">-</span><span class="token operator">></span><span class="token constant">ID</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'full'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
$xdescription <span class="token operator">=</span> <span class="token function">mb_strimwidth</span><span class="token punctuation">(</span><span class="token function">str_replace</span><span class="token punctuation">(</span><span class="token punctuation">[</span>"
<span class="token string">", "</span>
<span class="token string">", "</span><span class="token string">", "</span>    <span class="token string">", "</span><span class="token punctuation">,</span>"<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">' '</span><span class="token punctuation">,</span> <span class="token function">strip_tags</span><span class="token punctuation">(</span>$post<span class="token operator">-</span><span class="token operator">></span>post_content<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">240</span><span class="token punctuation">,</span> <span class="token string">'…'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">?</span><span class="token operator">></span>
<span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"application/ld+json"</span><span class="token operator">></span>
<span class="token punctuation">{</span>
    <span class="token string">"@context"</span><span class="token operator">:</span> <span class="token string">"https://ziyuan.baidu.com/contexts/cambrian.jsonld"</span><span class="token punctuation">,</span>
    <span class="token string">"@id"</span><span class="token operator">:</span> <span class="token string">"&lt;?php echo get_permalink(); ?>"</span><span class="token punctuation">,</span>
    <span class="token string">"appid"</span><span class="token operator">:</span> <span class="token string">"1565838311535855"</span><span class="token punctuation">,</span>
    <span class="token string">"title"</span><span class="token operator">:</span> <span class="token string">"&lt;?php echo the_title(); ?>"</span><span class="token punctuation">,</span>
    <span class="token operator">&lt;</span><span class="token operator">?</span>php <span class="token keyword">if</span> <span class="token punctuation">(</span>$full_img_url<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        echo <span class="token string">'"images": ["'</span> <span class="token punctuation">.</span> $full_img_url<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">.</span> <span class="token string">'"],'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token operator">?</span><span class="token operator">></span>
    <span class="token string">"description"</span><span class="token operator">:</span> <span class="token string">"&lt;?php echo $xdescription; ?>"</span><span class="token punctuation">,</span>
    <span class="token string">"pubDate"</span><span class="token operator">:</span> <span class="token string">"&lt;?php echo the_time('Y-n-jTH:i:s'); ?>"</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span> 
</code></pre></div><p>这段代码添加到下面代码中</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add_custom_to_footer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** 熊掌号 **/</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">is_single</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        global $post<span class="token punctuation">;</span>
        <span class="token comment">//号主页展现</span>
        <span class="token operator">...</span>
        <span class="token comment">//资源提交</span>
        <span class="token operator">...</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/** 熊掌号 **/</span>
<span class="token punctuation">}</span> 
</code></pre></div><p>改造完成后，可以在熊掌号校验工具中校验是否成功，赶紧去试试吧。</p>
</template>
