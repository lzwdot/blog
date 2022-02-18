import{d as o,o as p,c as e,a as s,e as t,F as r,h as c,g as a}from"./app.4ca8afde.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const k={},d=c(`<h1 id="\u591A\u53F0\u670D\u52A1\u5668\u4F7F\u7528-rsync-\u540C\u6B65\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u591A\u53F0\u670D\u52A1\u5668\u4F7F\u7528-rsync-\u540C\u6B65\u4EE3\u7801" aria-hidden="true">#</a> \u591A\u53F0\u670D\u52A1\u5668\u4F7F\u7528 rsync \u540C\u6B65\u4EE3\u7801</h1><p>\u5F53\u591A\u53F0\u670D\u52A1\u5668\u4F7F\u7528\u8D1F\u8F7D\u5747\u8861\u7B49\u89E3\u51B3\u65B9\u6848\u65F6\uFF0C\u5404\u670D\u52A1\u5668\u4EE3\u7801\u540C\u6B65\u53C8\u662F\u53E6\u4E00\u4E2A\u95EE\u9898\uFF0C\u8FD9\u65F6\u4F7F\u7528 rsync \u662F\u4E00\u4E2A\u5E38\u7528\u7684\u65B9\u6848\u3002\u8FD9\u91CC\u4EE5\u4E24\u53F0\u670D\u52A1\u5668\u4E3A\u4F8B</p><blockquote><p>\u4E3B\u670D\u52A1\u5668 A \uFF1A192.168.0.2</p><p>\u8F85\u670D\u52A1\u5668 B \uFF1A192.168.0.3</p></blockquote><h2 id="\u5B89\u88C5\u914D\u7F6E-rsync" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u914D\u7F6E-rsync" aria-hidden="true">#</a> \u5B89\u88C5\u914D\u7F6E rsync</h2><p>\u5B89\u88C5 rsync \u5E76\u67E5\u770B\u7248\u672C\u4FE1\u606F</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>yum install rsync
rsync <span class="token operator">-</span>version 
</code></pre></div><p>\u542F\u52A8\u548C\u505C\u6B62 rsync</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">/</span>usr<span class="token operator">/</span>bin<span class="token operator">/</span>rsync <span class="token operator">--</span>daemon <span class="token operator">--</span>config<span class="token operator">=</span><span class="token operator">/</span>etc<span class="token operator">/</span>rsyncd<span class="token punctuation">.</span>conf
ps <span class="token operator">-</span>ef<span class="token operator">|</span>grep rsync
kill <span class="token number">12521</span>
</code></pre></div><p><strong>\u914D\u7F6E\u4E3B\u670D\u52A1\u5668 A</strong>\uFF0C \u9996\u5148\u7B80\u5355\u914D\u7F6E\u4E0B rsync\uFF0C\u4F7F\u7528\u547D\u4EE4 <code>vi\xA0 /etc/rsyncd.conf</code></p><div class="language-javascript ext-js"><pre class="language-javascript"><code>#\u8FD0\u884Crsync\u5B88\u62A4\u8FDB\u7A0B\u7528\u6237\u548C\u7EC4
uid <span class="token operator">=</span> nobody
gid <span class="token operator">=</span> nobody
 #\u5141\u8BB8\u6700\u5927\u8FDE\u63A5\u6570 \u5C31\u662F\u9884\u5E8F\u591A\u5C11\u53F0\u670D\u52A1\u5668\u94FE\u63A5
max connections <span class="token operator">=</span> <span class="token number">4</span>
#\u53EA\u8BFB\u6A21\u5F0F
read only <span class="token operator">=</span> <span class="token boolean">true</span>
#\u9884\u5E8F\u94FE\u63A5\u7684ip \u591A\u4E2A\u7528\u9017\u53F7\u9694\u5F00
#hosts allow <span class="token operator">=</span> <span class="token number">202.207</span><span class="token number">.177</span><span class="token number">.180</span>
# \u73B0\u5728\u662F\u5141\u8BB8\u6240\u6709\u7684\u670D\u52A1\u5668\u90FD\u80FD\u8FDE
hosts allow <span class="token operator">=</span> <span class="token operator">*</span>
transfer logging <span class="token operator">=</span> <span class="token boolean">true</span>
log format <span class="token operator">=</span> <span class="token operator">%</span>h <span class="token operator">%</span>o <span class="token operator">%</span>f <span class="token operator">%</span>l <span class="token operator">%</span>b
#\u65E5\u5FD7\u6587\u4EF6
log file <span class="token operator">=</span> <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>log<span class="token operator">/</span>rsyncd<span class="token punctuation">.</span>log
slp refresh <span class="token operator">=</span> <span class="token number">300</span>
#\u8FDB\u7A0B\u6587\u4EF6\u4F4D\u7F6E
pid file <span class="token operator">=</span> <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>run<span class="token operator">/</span>rsyncd<span class="token punctuation">.</span>pid
lock file <span class="token operator">=</span> <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>run<span class="token operator">/</span>rsyncd<span class="token punctuation">.</span>lock
<span class="token punctuation">[</span>test<span class="token punctuation">]</span>
#<span class="token constant">A</span>\u670D\u52A1\u5668\u9700\u8981\u505A\u955C\u50CF\u7684\u76EE\u5F55
path <span class="token operator">=</span> <span class="token operator">/</span>www<span class="token operator">/</span>wwwroot<span class="token operator">/</span>test
read only <span class="token operator">=</span> <span class="token boolean">false</span>
#\u5141\u8BB8\u7684\u8BA4\u8BC1\u7528\u6237
auth users <span class="token operator">=</span> root
#\u5BC6\u7801\u6587\u4EF6\u4F4D\u7F6E
secrets file <span class="token operator">=</span> <span class="token operator">/</span>etc<span class="token operator">/</span>rsyncd<span class="token punctuation">.</span>password
</code></pre></div><blockquote><p>\u6CE8\u610F\uFF1A\u6CE8\u91CA\u201C#\u201D\u4E0D\u80FD\u653E\u5728\u914D\u7F6E\u9879\u7684\u540E\u9762\uFF0C\u9519\u8BEF\u793A\u4F8B \u201C <code>secrets file = /etc/rsyncd.password #\u5BC6\u7801\u6587\u4EF6\u4F4D\u7F6E</code> \u201D</p></blockquote><p>\u63A5\u7740\u8BBE\u7F6E\u4E0A\u9762\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u5BC6\u7801\u6587\u4EF6 <code>vim rsyncd.password</code> \u6DFB\u52A0\u3010user:password\u3011\u683C\u5F0F\u7684\u5185\u5BB9\u5982\uFF1A<code>root:123456</code>\uFF0C<em>\u5E76\u8BBE\u7F6E 600 \u6743\u9650\uFF0C\u8FD9\u70B9\u975E\u5E38\u91CD\u8981</em></p><div class="language-javascript ext-js"><pre class="language-javascript"><code>chmod <span class="token operator">-</span><span class="token constant">R</span> <span class="token number">600</span> rsyncd<span class="token punctuation">.</span>password
</code></pre></div><p><strong>\u914D\u7F6E\u8F85\u670D\u52A1\u5668 B</strong>\uFF0C\u8FD9\u91CC\u53EA\u9700\u8981\u6DFB\u52A0\u5BC6\u7801\u6587\u4EF6 <code>vim rsyncd.password</code> \u6DFB\u52A0\u3010password\u3011\u683C\u5F0F\u7684\u5185\u5BB9\u5982\uFF1A<code>123456</code></p><p><strong>\u6DFB\u52A0\u5F00\u673A\u542F\u52A8</strong>\uFF0C\u9632\u6B62\u670D\u52A1\u5668\u91CD\u542F\u6216\u8005\u5B95\u673A\u4FEE\u590D\u597D\u4E4B\u540E\uFF0C\u9700\u8981\u624B\u52A8\u91CD\u542F\u670D\u52A1</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>vi <span class="token operator">/</span>etc<span class="token operator">/</span>rc<span class="token punctuation">.</span>local
<span class="token operator">/</span>usr<span class="token operator">/</span>bin<span class="token operator">/</span>rsync <span class="token operator">--</span>daemon <span class="token operator">--</span>config<span class="token operator">=</span><span class="token operator">/</span>ect<span class="token operator">/</span>rsyncd<span class="token punctuation">.</span>conf   #\u5F00\u673A\u81EA\u52A8\u8FD0\u884C
</code></pre></div><h2 id="\u4EE3\u7801\u540C\u6B65" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u540C\u6B65" aria-hidden="true">#</a> \u4EE3\u7801\u540C\u6B65</h2><p>\u914D\u7F6E\u597D\u4E86 rsync\uFF0C\u73B0\u5728\u5C31\u6765\u5B9E\u73B0\u670D\u52A1\u5668 B \u4ECE\u670D\u52A1\u5668 A \u540C\u6B65\u4EE3\u7801\uFF0C\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>rsync <span class="token operator">-</span>vzrtopg <span class="token operator">--</span>progress root@<span class="token number">192.168</span><span class="token number">.0</span><span class="token number">.2</span><span class="token operator">:</span><span class="token operator">:</span>test <span class="token operator">/</span>www<span class="token operator">/</span>wwwroot<span class="token operator">/</span>test <span class="token operator">--</span>password<span class="token operator">-</span>file<span class="token operator">=</span><span class="token operator">/</span>etc<span class="token operator">/</span>rsyncd<span class="token punctuation">.</span>password
</code></pre></div><blockquote><p><code>root</code> \u5BF9\u5E94\u670D\u52A1\u5668 A \u914D\u7F6E\u6587\u4EF6 rsyncd.conf \u4E2D\u7684 auth users = root</p><p><code>192.168.0.2</code> \u5E94\u670D\u52A1\u5668 A \u7684 ip</p><p><code>test</code> \u5BF9\u5E94\u670D\u52A1\u5668 A \u914D\u7F6E\u6587\u4EF6 rsyncd.conf \u4E2D\u7684 [test]</p><p><code>/www/wwwroot/test</code> \u662F\u670D\u52A1\u5668 B \u5B58\u653E\u540C\u6B65\u4EE3\u7801\u7684\u76EE\u5F55</p><p><code>/etc/rsyncd.password</code> \u662F\u670D\u52A1\u5668 B \u7684\u5BC6\u7801\u6587\u4EF6</p></blockquote><p>\u4EE5\u4E0A\u547D\u4EE4\u6267\u884C\u4E00\u6B21\uFF0C\u540C\u6B65\u4E00\u6B21\uFF0C\u9700\u8981\u7528\u5230 crontab \u8BA1\u5212\u4EFB\u52A1\u6765\u505A\u5230\u5B9E\u65F6\u540C\u6B65\uFF0C\u65B0\u5EFA shell \u811A\u672C <code>vim /root/rsyncd.sh</code></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token hashbang comment">#!/bin/bash</span>
<span class="token constant">PATH</span><span class="token operator">=</span><span class="token operator">/</span>bin<span class="token operator">:</span><span class="token operator">/</span>sbin<span class="token operator">:</span><span class="token operator">/</span>usr<span class="token operator">/</span>bin<span class="token operator">:</span><span class="token operator">/</span>usr<span class="token operator">/</span>sbin<span class="token operator">:</span><span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>bin<span class="token operator">:</span><span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>sbin<span class="token operator">:</span><span class="token operator">~</span><span class="token operator">/</span>bin
<span class="token keyword">export</span> <span class="token constant">PATH</span>
#\u95F4\u9694\u7684\u79D2\u6570\uFF0C\u4E0D\u80FD\u5927\u4E8E<span class="token number">60</span>
step<span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">(</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">60</span><span class="token punctuation">;</span> i<span class="token operator">=</span><span class="token punctuation">(</span>i<span class="token operator">+</span>step<span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token function">$</span><span class="token punctuation">(</span>rsync <span class="token operator">-</span>vzrtopg <span class="token operator">--</span>progress root@<span class="token number">192.168</span><span class="token number">.0</span><span class="token number">.2</span><span class="token operator">:</span><span class="token operator">:</span>test <span class="token operator">/</span>www<span class="token operator">/</span>wwwroot<span class="token operator">/</span>test <span class="token operator">--</span>password<span class="token operator">-</span>file<span class="token operator">=</span><span class="token operator">/</span>etc<span class="token operator">/</span>rsyncd<span class="token punctuation">.</span>password<span class="token punctuation">)</span>
    sleep $step
done
exit <span class="token number">0</span>
</code></pre></div><p>\u7136\u540E\u5728\u670D\u52A1\u5668 B \u6DFB\u52A0\xA0 crontab \u5B9A\u65F6\u4EFB\u52A1\uFF0C \u6267\u884C <code>crontab -e</code></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">*</span> <span class="token operator">*</span> <span class="token operator">*</span> <span class="token operator">*</span> <span class="token operator">*</span> sh <span class="token operator">/</span>root<span class="token operator">/</span>rsyncd<span class="token punctuation">.</span>sh <span class="token operator">&gt;</span> <span class="token operator">/</span>dev<span class="token operator">/</span><span class="token keyword">null</span> <span class="token number">2</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span><span class="token number">1</span>
</code></pre></div><p>OK\uFF0C\u5927\u529F\u544A\u6210\uFF0C\u8D76\u7D27\u53BB\u8BD5\u8BD5\u5427\uFF01</p>`,25),i=a("\u53C2\u8003\uFF1A "),u={href:"https://blog.csdn.net/oljuydfcg/article/details/91639416",target:"_blank",rel:"noopener noreferrer"},g=a("https://blog.csdn.net/oljuydfcg/article/details/91639416");function b(y,v){const n=o("ExternalLinkIcon");return p(),e(r,null,[d,s("p",null,[i,s("a",u,[g,t(n)])])],64)}var h=l(k,[["render",b]]);export{h as default};
