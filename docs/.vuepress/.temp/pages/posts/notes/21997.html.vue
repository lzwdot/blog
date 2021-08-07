<template><h1 id="jmeter接口测试-response-data返回中文乱码和json数据转码" tabindex="-1"><a class="header-anchor" href="#jmeter接口测试-response-data返回中文乱码和json数据转码" aria-hidden="true">#</a> JMeter接口测试，Response Data返回中文乱码和json数据转码</h1>
<p>当没有设置编码时，jmeter会按照jmeter.properties文件中的sampleresult.default.encoding设置的格式解析，对于中文解析使用ISO-8859-1编码肯定会出错。可以通过以下说明解决问题</p>
<h2 id="中文乱码问题" tabindex="-1"><a class="header-anchor" href="#中文乱码问题" aria-hidden="true">#</a> 中文乱码问题</h2>
<p>有两种方式：</p>
<h3 id="修改jmeter-properties文件-永久修改" tabindex="-1"><a class="header-anchor" href="#修改jmeter-properties文件-永久修改" aria-hidden="true">#</a> 修改jmeter.properties文件（永久修改）</h3>
<p>1、apache-jmeter-4.0打开安装路径injmeter.properties文件，搜索“default.encoding”关键字，找到如下配置：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code># The encoding to be used <span class="token keyword">if</span> none is <span class="token function">provided</span> <span class="token punctuation">(</span><span class="token keyword">default</span> <span class="token constant">ISO</span><span class="token operator">-</span><span class="token number">8859</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
#sampleresult<span class="token punctuation">.</span>default<span class="token punctuation">.</span>encoding<span class="token operator">=</span><span class="token constant">ISO</span><span class="token operator">-</span><span class="token number">8859</span><span class="token operator">-</span><span class="token number">1</span>
</code></pre></div><p>2、将注释#删掉，并改成utf-8编码，如下：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code># The encoding to be used <span class="token keyword">if</span> none is <span class="token function">provided</span> <span class="token punctuation">(</span><span class="token keyword">default</span> utf<span class="token operator">-</span><span class="token number">8</span><span class="token punctuation">)</span>
sampleresult<span class="token punctuation">.</span>default<span class="token punctuation">.</span>encoding<span class="token operator">=</span>utf<span class="token operator">-</span><span class="token number">8</span>
</code></pre></div><p>3、重启JMeter即可</p>
<h3 id="使用beanshell-postprocessor-动态修改" tabindex="-1"><a class="header-anchor" href="#使用beanshell-postprocessor-动态修改" aria-hidden="true">#</a> 使用BeanShell PostProcessor（动态修改）</h3>
<p>1、指定请求节点下，新建后置控制器”BeanShell PostProcessor”</p>
<p>2、其脚本框中输入：prev.setDataEncoding(“UTF-8”);</p>
<p>3、保存</p>
<h2 id="json数据转码-unicode转成中文" tabindex="-1"><a class="header-anchor" href="#json数据转码-unicode转成中文" aria-hidden="true">#</a> json数据转码（unicode转成中文）</h2>
<p>首先把返回数据设置为“json”格式。在Jmeter里面的查看结果树的输出框左侧有一栏，可以切换响应输出的格式，如下图：</p>
<p>1、在后置处理器中增加 bean shell preprocessor</p>
<p>2、加入script:</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>prev<span class="token punctuation">.</span><span class="token function">setDataEncoding</span><span class="token punctuation">(</span><span class="token string">"utf-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
String s2<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>prev<span class="token punctuation">.</span><span class="token function">getResponseData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">"UTF-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//---------------一下步骤为转码过程---------------</span>
        char aChar<span class="token punctuation">;</span>
        int len<span class="token operator">=</span> s2<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        StringBuffer outBuffer<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span>int x <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> x <span class="token operator">&lt;</span>len<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            aChar<span class="token operator">=</span> s2<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>x<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>aChar<span class="token operator">==</span><span class="token string">'\\'</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                aChar<span class="token operator">=</span> s2<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>x<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>aChar<span class="token operator">==</span><span class="token string">'u'</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    int value <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
                    <span class="token keyword">for</span><span class="token punctuation">(</span>int i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">4</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                        aChar<span class="token operator">=</span> s2<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>x<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token keyword">switch</span><span class="token punctuation">(</span>aChar<span class="token punctuation">)</span><span class="token punctuation">{</span>
                            <span class="token keyword">case</span><span class="token string">'0'</span><span class="token operator">:</span>
                            <span class="token keyword">case</span><span class="token string">'1'</span><span class="token operator">:</span>
                            <span class="token keyword">case</span><span class="token string">'2'</span><span class="token operator">:</span>
                            <span class="token keyword">case</span><span class="token string">'3'</span><span class="token operator">:</span>
                            <span class="token keyword">case</span><span class="token string">'4'</span><span class="token operator">:</span>
                            <span class="token keyword">case</span><span class="token string">'5'</span><span class="token operator">:</span>
                            <span class="token keyword">case</span><span class="token string">'6'</span><span class="token operator">:</span>
                            <span class="token keyword">case</span><span class="token string">'7'</span><span class="token operator">:</span>
                            <span class="token keyword">case</span><span class="token string">'8'</span><span class="token operator">:</span>
                            <span class="token keyword">case</span><span class="token string">'9'</span><span class="token operator">:</span>
                                value<span class="token operator">=</span><span class="token punctuation">(</span>value <span class="token operator">&lt;&lt;</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token operator">+</span>aChar<span class="token operator">-</span><span class="token string">'0'</span><span class="token punctuation">;</span>
                                <span class="token keyword">break</span><span class="token punctuation">;</span>
                            <span class="token keyword">case</span><span class="token string">'a'</span><span class="token operator">:</span>
                            <span class="token keyword">case</span><span class="token string">'b'</span><span class="token operator">:</span>
                            <span class="token keyword">case</span><span class="token string">'c'</span><span class="token operator">:</span>
                            <span class="token keyword">case</span><span class="token string">'d'</span><span class="token operator">:</span>
                            <span class="token keyword">case</span><span class="token string">'e'</span><span class="token operator">:</span>
                            <span class="token keyword">case</span><span class="token string">'f'</span><span class="token operator">:</span>
                                value<span class="token operator">=</span><span class="token punctuation">(</span>value <span class="token operator">&lt;&lt;</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">10</span><span class="token operator">+</span>aChar<span class="token operator">-</span><span class="token string">'a'</span><span class="token punctuation">;</span>
                                <span class="token keyword">break</span><span class="token punctuation">;</span>
                            <span class="token keyword">case</span><span class="token string">'A'</span><span class="token operator">:</span>
                            <span class="token keyword">case</span><span class="token string">'B'</span><span class="token operator">:</span>
                            <span class="token keyword">case</span><span class="token string">'C'</span><span class="token operator">:</span>
                            <span class="token keyword">case</span><span class="token string">'D'</span><span class="token operator">:</span>
                            <span class="token keyword">case</span><span class="token string">'E'</span><span class="token operator">:</span>
                            <span class="token keyword">case</span><span class="token string">'F'</span><span class="token operator">:</span>
                                value<span class="token operator">=</span><span class="token punctuation">(</span>value <span class="token operator">&lt;&lt;</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">10</span><span class="token operator">+</span>aChar<span class="token operator">-</span><span class="token string">'A'</span><span class="token punctuation">;</span>
                                <span class="token keyword">break</span><span class="token punctuation">;</span>
                            <span class="token keyword">default</span><span class="token operator">:</span>
                                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span>
                                        <span class="token string">"Malformed   \\uxxxx  encoding."</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
                    outBuffer<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                    <span class="token keyword">if</span><span class="token punctuation">(</span>aChar<span class="token operator">==</span><span class="token string">'t'</span><span class="token punctuation">)</span>
                        aChar<span class="token operator">=</span><span class="token string">'\t'</span><span class="token punctuation">;</span>
                    <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>aChar<span class="token operator">==</span><span class="token string">'r'</span><span class="token punctuation">)</span>
                    aChar<span class="token operator">=</span><span class="token string">'\r'</span><span class="token punctuation">;</span>
                    <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>aChar<span class="token operator">==</span><span class="token string">'n'</span><span class="token punctuation">)</span>
                    aChar<span class="token operator">=</span><span class="token string">'\n'</span><span class="token punctuation">;</span>
                    <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>aChar<span class="token operator">==</span><span class="token string">'f'</span><span class="token punctuation">)</span>
                    aChar<span class="token operator">=</span><span class="token string">'\f'</span><span class="token punctuation">;</span>
                    outBuffer<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>aChar<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token keyword">else</span>
                outBuffer<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>aChar<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token comment">//-----------------以上内容为转码过程---------------------------</span>
<span class="token comment">//将转成中文的响应结果在查看结果树中显示</span>
prev<span class="token punctuation">.</span><span class="token function">setResponseData</span><span class="token punctuation">(</span>outBuffer<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>3、关闭程序，重新启动，运行脚本</p>
</template>
