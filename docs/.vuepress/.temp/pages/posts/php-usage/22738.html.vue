<template><h1 id="wordpress自定义登录页面logo-链接-文字-样式等" tabindex="-1"><a class="header-anchor" href="#wordpress自定义登录页面logo-链接-文字-样式等" aria-hidden="true">#</a> WordPress自定义登录页面LOGO，链接，文字，样式等</h1>
<p>说实话，小編居然觉得WordPress的后台登录页面也很简单，但对于一些使用WordPress的人不仅仅是作为博客，那么问题就来了，登录页面需要进行定制或者修改，并且符合整体风格的，所以小編在互联网上搜索了一个解决方案。也是一个记录分享！我相信您可以通过本文中的详细代码示例自定义更符合您的愿望的登录页面。同时，这比直接修改WordPress源文件更方便。它与WordPress升级覆盖问题不同。</p>
<h4 id="自定义wordpress登录屏幕标志" tabindex="-1"><a class="header-anchor" href="#自定义wordpress登录屏幕标志" aria-hidden="true">#</a> 自定义WordPress登录屏幕标志</h4>
<p>在主题目录functions.php中添加以下代码：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">//Customize WordPress login interface Logo</span>
<span class="token keyword">function</span> <span class="token function">custom_login_logo</span> <span class="token punctuation">(</span> <span class="token punctuation">)</span>  <span class="token punctuation">{</span>
    echo  '<span class="token operator">&lt;</span>style type<span class="token operator">=</span><span class="token string">"text/css"</span><span class="token operator">></span>
      h1 a <span class="token punctuation">{</span> background<span class="token operator">-</span>image<span class="token operator">:</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token string">' . get_stylesheet_directory_uri() . '</span><span class="token operator">/</span><span class="token punctuation">.</span><span class="token operator">/</span>images<span class="token operator">/</span>logo<span class="token punctuation">.</span>png <span class="token punctuation">)</span> <span class="token operator">!</span>important<span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>' <span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">add_action</span> <span class="token punctuation">(</span> <span class="token string">'login_head'</span> <span class="token punctuation">,</span>  <span class="token string">'custom_login_logo'</span> <span class="token punctuation">)</span> <span class="token punctuation">;</span> 
</code></pre></div><p>使用上述方法时，应该提醒您要更换的Logo图像位于主题目录的/./images/logo.png下。默认的WordPress背景标志大小为274px*63px。</p>
<h4 id="删除wordpress登录屏幕标志" tabindex="-1"><a class="header-anchor" href="#删除wordpress登录屏幕标志" aria-hidden="true">#</a> 删除WordPress登录屏幕标志</h4>
<p>如果你想让后台登录界面更加简洁，你可以尝试只留下输入框，删除WordPress登录界面Logo。同样的方法将下面的代码添加到主题目录functions.php中：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">//Delete the WordPress login interface Logo</span>
<span class="token keyword">function</span> <span class="token function">admin_bar_remove</span> <span class="token punctuation">(</span> <span class="token punctuation">)</span>  <span class="token punctuation">{</span>
    global  $wp_admin_bar <span class="token punctuation">;</span>
    <span class="token comment">/* Remove their stuff */</span>
    $wp_admin_bar <span class="token operator">-</span><span class="token operator">></span> <span class="token function">remove_menu</span> <span class="token punctuation">(</span> <span class="token string">'wp-logo'</span> <span class="token punctuation">)</span> <span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">add_action</span> <span class="token punctuation">(</span> <span class="token string">'wp_before_admin_bar_render'</span> <span class="token punctuation">,</span>  <span class="token string">'admin_bar_remove'</span> <span class="token punctuation">,</span>  <span class="token number">0</span> <span class="token punctuation">)</span> <span class="token punctuation">;</span> 
</code></pre></div><h4 id="自定义logo链接" tabindex="-1"><a class="header-anchor" href="#自定义logo链接" aria-hidden="true">#</a> 自定义Logo链接</h4>
<p>更改Logo链接到主页链接：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// The LOGO link for the custom login page is the home page link</span>
<span class="token function">add_filter</span> <span class="token punctuation">(</span> <span class="token string">'login_headerurl'</span> <span class="token punctuation">,</span>  <span class="token function">create_function</span> <span class="token punctuation">(</span> <span class="token boolean">false</span> <span class="token punctuation">,</span> <span class="token string">"return get_bloginfo('url');"</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">;</span> 
</code></pre></div><p>将Logo的链接更改为任何链接：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">//Custom login interface LOGO link is any link</span>
<span class="token keyword">function</span> <span class="token function">custom_loginlogo_url</span> <span class="token punctuation">(</span> <span class="token parameter">$url</span> <span class="token punctuation">)</span>  <span class="token punctuation">{</span>
    <span class="token keyword">return</span>  <span class="token string">'https://wpfaq.cn'</span> <span class="token punctuation">;</span>  <span class="token comment">//Modify URL address</span>
<span class="token punctuation">}</span>
<span class="token function">add_filter</span> <span class="token punctuation">(</span>  <span class="token string">'login_headerurl'</span> <span class="token punctuation">,</span>  <span class="token string">'custom_loginlogo_url'</span>  <span class="token punctuation">)</span> <span class="token punctuation">;</span> 
</code></pre></div><h4 id="自定义logo提示信息-tltle" tabindex="-1"><a class="header-anchor" href="#自定义logo提示信息-tltle" aria-hidden="true">#</a> 自定义Logo提示信息（tltle）</h4>
<p>为网站名称定制：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// The custom login page's LOGO hint is the site name</span>
<span class="token function">add_filter</span> <span class="token punctuation">(</span> <span class="token string">'login_headertitle'</span> <span class="token punctuation">,</span>  <span class="token function">create_function</span> <span class="token punctuation">(</span> <span class="token boolean">false</span> <span class="token punctuation">,</span> <span class="token string">"return get_bloginfo('name');"</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">;</span> 
</code></pre></div><p>将其自定义为任何其他文本：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>Custom login page <span class="token constant">LOGO</span> hints <span class="token keyword">for</span> any text
<span class="token keyword">function</span> <span class="token function">custom_loginlogo_desc</span> <span class="token punctuation">(</span> <span class="token parameter">$url</span> <span class="token punctuation">)</span>  <span class="token punctuation">{</span>
    <span class="token keyword">return</span>  <span class="token string">'tears snow blog'</span> <span class="token punctuation">;</span>  <span class="token comment">//modify text information</span>
<span class="token punctuation">}</span>
<span class="token function">add_filter</span> <span class="token punctuation">(</span>  <span class="token string">'login_headertitle'</span> <span class="token punctuation">,</span>  <span class="token string">'custom_loginlogo_desc'</span>  <span class="token punctuation">)</span> <span class="token punctuation">;</span> 
</code></pre></div><h4 id="自定义登录框内容" tabindex="-1"><a class="header-anchor" href="#自定义登录框内容" aria-hidden="true">#</a> 自定义登录框内容</h4>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">/</span> add additional information on the log <span class="token keyword">in</span>
<span class="token keyword">function</span> <span class="token function">custom_login_message</span> <span class="token punctuation">(</span> <span class="token punctuation">)</span>  <span class="token punctuation">{</span>
    echo  <span class="token string">'&lt;P> Welcome'</span> <span class="token punctuation">.</span> <span class="token function">Get_bloginfo</span> <span class="token punctuation">(</span> <span class="token string">'name'</span> <span class="token punctuation">)</span> <span class="token punctuation">.</span> <span class="token string">', Continuing &lt;/ p> &lt;br /> after login'</span> <span class="token punctuation">;</span>
<span class="token punctuation">}</span>
the <span class="token function">add_action</span> <span class="token punctuation">(</span> <span class="token string">'login_form'</span> <span class="token punctuation">,</span>  <span class="token string">'custom_login_message'</span> <span class="token punctuation">)</span> <span class="token punctuation">;</span> 
</code></pre></div><h3 id="自定义底部内容" tabindex="-1"><a class="header-anchor" href="#自定义底部内容" aria-hidden="true">#</a> 自定义底部内容</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// Customize the bottom information</span>
<span class="token keyword">function</span> <span class="token function">custom_html</span> <span class="token punctuation">(</span> <span class="token punctuation">)</span>  <span class="token punctuation">{</span>
    echo  <span class="token string">'&lt;p style="text-align:center">© '</span>  <span class="token punctuation">.</span> <span class="token function">get_bloginfo</span> <span class="token punctuation">(</span> url <span class="token punctuation">)</span> <span class="token punctuation">.</span> <span class="token string">'&lt;/p>'</span> <span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">add_action</span> <span class="token punctuation">(</span> <span class="token string">'login_footer'</span> <span class="token punctuation">,</span>  <span class="token string">'custom_html'</span> <span class="token punctuation">)</span> <span class="token punctuation">;</span> 
</code></pre></div><h3 id="自定义css" tabindex="-1"><a class="header-anchor" href="#自定义css" aria-hidden="true">#</a> 自定义CSS</h3>
<p>为了更灵活地修改登录页面的显示样式，建议添加一个自定义CSS文件，然后查看登录页面源代码的html结构，并编写自己的CSS样式。你可以使用下面的代码来介绍你自己的CSS，注意在代码中修改css地址，下面的调用是在主题根目录下的login_style.css：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">//Add a custom CSS</span>
<span class="token keyword">function</span> <span class="token function">custom_login</span> <span class="token punctuation">(</span> <span class="token punctuation">)</span>  <span class="token punctuation">{</span>
    echo  <span class="token string">'&lt;link rel="stylesheet" type="text/css" href="'</span>  <span class="token punctuation">.</span> <span class="token function">get_stylesheet_directory_uri</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">.</span>  <span class="token string">'/login_style.css" />'</span> <span class="token punctuation">;</span>
<span class="token punctuation">}</span>
the <span class="token function">add_action</span> <span class="token punctuation">(</span> <span class="token string">'login_head'</span> <span class="token punctuation">,</span>  <span class="token string">'custom_login'</span> <span class="token punctuation">)</span> <span class="token punctuation">;</span> 
</code></pre></div><p>其实到最后的小編还是觉得！以上代码可以帮助您自定义WordPress默认的后台登录页面。如果您使用WordPress进行其他网站开发，也许您不会使用WordPress默认的后台登录页面。你可以从上面的代码中看到。开箱即用，对于不懂代码的人来说，自定义此页面非常方便，但对于理解代码的人员来说，可以做一个单独的登录页面。</p>
<p>小編没有太多的话要说。您可以使用上述代码自定义您的WordPress后台登录页面。</p>
<blockquote>
<p>整理来自互联网</p>
</blockquote>
</template>
