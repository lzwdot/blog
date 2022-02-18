import{d as e,o,c as p,a as s,e as t,F as c,g as n,h as r}from"./app.4ca8afde.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=s("h1",{id:"wordpress\u5229\u7528-htaccess\u89E3\u51B3301\u91CD\u5B9A\u5411",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#wordpress\u5229\u7528-htaccess\u89E3\u51B3301\u91CD\u5B9A\u5411","aria-hidden":"true"},"#"),n(" WordPress\u5229\u7528.htaccess\u89E3\u51B3301\u91CD\u5B9A\u5411")],-1),k=s("p",null,"\u5F53WordPress\u66F4\u597D\u57DF\u540D\u6216\u8005\u4FEE\u6539\u56FA\u5B9A\u94FE\u63A5\u65F6\uFF0C\u6700\u9EBB\u70E6\u7684\u5C31\u662F\u4EA7\u751F\u4F17\u591A\u7684404\u65F6\uFF0C\u4ECE\u641C\u7D22\u5F15\u64CE\u6216\u8005\u5176\u4ED6\u5730\u65B9\u8FDB\u6765\u7684\u94FE\u63A5\u90FD\u6253\u4E0D\u5F00\u4E86\uFF0C\u4ECE\u641C\u7D22\u5F15\u64CE\u4F18\u5316\u89D2\u5EA6\u548C\u7528\u6237\u4F53\u9A8C\u4E0A\u51FA\u53D1\uFF0C301\u91CD\u5B9A\u5411\u662F\u7F51\u5740\u91CD\u5B9A\u5411\u6700\u4E3A\u53EF\u884C\u7684\u4E00\u79CD\u529E\u6CD5\u3002",-1),d=s("p",null,"\u6BD4\u5982\uFF0C\u6539\u7248\u524D\u56FA\u5B9A\u94FE\u63A5\uFF1A",-1),h={href:"http://test.cn/archive/15627.html",target:"_blank",rel:"noopener noreferrer"},_=n("http://test.cn/archive/15627.html"),m=s("p",null,"\u6539\u53D8\u540E\u7684\u94FE\u63A5\uFF1A",-1),f={href:"https://lzwdot.com/blog/archives/15627",target:"_blank",rel:"noopener noreferrer"},g=n("https://lzwdot.com/blog/archives/15627"),w=r(`<p>\u5728.htaccess\u6587\u4EF6\u6DFB\u52A0</p><div class="language-javascript ext-js"><pre class="language-javascript"><code># <span class="token constant">REDIRECTS</span>
<span class="token operator">&lt;</span>IfModule mod_rewrite<span class="token punctuation">.</span>c<span class="token operator">&gt;</span>
RewriteEngine On
RewriteCond <span class="token operator">%</span><span class="token punctuation">{</span><span class="token constant">HTTP_HOST</span><span class="token punctuation">}</span> <span class="token operator">^</span>test<span class="token punctuation">.</span>cn
RewriteRule <span class="token operator">^</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">)</span>$ http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>lzwdot<span class="token punctuation">.</span>com<span class="token operator">/</span>$1 <span class="token punctuation">[</span><span class="token constant">R</span><span class="token operator">=</span><span class="token number">301</span><span class="token punctuation">,</span><span class="token constant">L</span><span class="token punctuation">]</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>IfModule<span class="token operator">&gt;</span>
# <span class="token constant">END</span> <span class="token constant">REDIRECTS</span> 
</code></pre></div><p>RewriteCond\u662F\u65E7\u57DF\u540D\uFF0CRewriteRule\u662F\u65B0\u57DF\u540D\u3002</p><blockquote><p>\u6CE8\u610F\uFF1A\u8981\u4F7F\u7528.htaccess\u6587\u4EF6\uFF0CApache\u5FC5\u987B\u5F00\u542Frewirte\u6A21\u5757\u3002</p></blockquote>`,4);function R(v,E){const a=e("ExternalLinkIcon");return o(),p(c,null,[u,k,d,s("p",null,[s("a",h,[_,t(a)])]),m,s("p",null,[s("a",f,[g,t(a)])]),w],64)}var I=l(i,[["render",R]]);export{I as default};
