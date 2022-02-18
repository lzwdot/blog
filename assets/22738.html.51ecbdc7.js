import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="wordpress\u81EA\u5B9A\u4E49\u767B\u5F55\u9875\u9762logo-\u94FE\u63A5-\u6587\u5B57-\u6837\u5F0F\u7B49" tabindex="-1"><a class="header-anchor" href="#wordpress\u81EA\u5B9A\u4E49\u767B\u5F55\u9875\u9762logo-\u94FE\u63A5-\u6587\u5B57-\u6837\u5F0F\u7B49" aria-hidden="true">#</a> WordPress\u81EA\u5B9A\u4E49\u767B\u5F55\u9875\u9762LOGO\uFF0C\u94FE\u63A5\uFF0C\u6587\u5B57\uFF0C\u6837\u5F0F\u7B49</h1><p>\u8BF4\u5B9E\u8BDD\uFF0C\u5C0F\u7DE8\u5C45\u7136\u89C9\u5F97WordPress\u7684\u540E\u53F0\u767B\u5F55\u9875\u9762\u4E5F\u5F88\u7B80\u5355\uFF0C\u4F46\u5BF9\u4E8E\u4E00\u4E9B\u4F7F\u7528WordPress\u7684\u4EBA\u4E0D\u4EC5\u4EC5\u662F\u4F5C\u4E3A\u535A\u5BA2\uFF0C\u90A3\u4E48\u95EE\u9898\u5C31\u6765\u4E86\uFF0C\u767B\u5F55\u9875\u9762\u9700\u8981\u8FDB\u884C\u5B9A\u5236\u6216\u8005\u4FEE\u6539\uFF0C\u5E76\u4E14\u7B26\u5408\u6574\u4F53\u98CE\u683C\u7684\uFF0C\u6240\u4EE5\u5C0F\u7DE8\u5728\u4E92\u8054\u7F51\u4E0A\u641C\u7D22\u4E86\u4E00\u4E2A\u89E3\u51B3\u65B9\u6848\u3002\u4E5F\u662F\u4E00\u4E2A\u8BB0\u5F55\u5206\u4EAB\uFF01\u6211\u76F8\u4FE1\u60A8\u53EF\u4EE5\u901A\u8FC7\u672C\u6587\u4E2D\u7684\u8BE6\u7EC6\u4EE3\u7801\u793A\u4F8B\u81EA\u5B9A\u4E49\u66F4\u7B26\u5408\u60A8\u7684\u613F\u671B\u7684\u767B\u5F55\u9875\u9762\u3002\u540C\u65F6\uFF0C\u8FD9\u6BD4\u76F4\u63A5\u4FEE\u6539WordPress\u6E90\u6587\u4EF6\u66F4\u65B9\u4FBF\u3002\u5B83\u4E0EWordPress\u5347\u7EA7\u8986\u76D6\u95EE\u9898\u4E0D\u540C\u3002</p><h4 id="\u81EA\u5B9A\u4E49wordpress\u767B\u5F55\u5C4F\u5E55\u6807\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49wordpress\u767B\u5F55\u5C4F\u5E55\u6807\u5FD7" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49WordPress\u767B\u5F55\u5C4F\u5E55\u6807\u5FD7</h4><p>\u5728\u4E3B\u9898\u76EE\u5F55functions.php\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">//Customize WordPress login interface Logo</span>
<span class="token keyword">function</span> <span class="token function">custom_login_logo</span> <span class="token punctuation">(</span> <span class="token punctuation">)</span>  <span class="token punctuation">{</span>
    echo  &#39;<span class="token operator">&lt;</span>style type<span class="token operator">=</span><span class="token string">&quot;text/css&quot;</span><span class="token operator">&gt;</span>
      h1 a <span class="token punctuation">{</span> background<span class="token operator">-</span>image<span class="token operator">:</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token string">&#39; . get_stylesheet_directory_uri() . &#39;</span><span class="token operator">/</span><span class="token punctuation">.</span><span class="token operator">/</span>images<span class="token operator">/</span>logo<span class="token punctuation">.</span>png <span class="token punctuation">)</span> <span class="token operator">!</span>important<span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>&#39; <span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">add_action</span> <span class="token punctuation">(</span> <span class="token string">&#39;login_head&#39;</span> <span class="token punctuation">,</span>  <span class="token string">&#39;custom_login_logo&#39;</span> <span class="token punctuation">)</span> <span class="token punctuation">;</span> 
</code></pre></div><p>\u4F7F\u7528\u4E0A\u8FF0\u65B9\u6CD5\u65F6\uFF0C\u5E94\u8BE5\u63D0\u9192\u60A8\u8981\u66F4\u6362\u7684Logo\u56FE\u50CF\u4F4D\u4E8E\u4E3B\u9898\u76EE\u5F55\u7684/./images/logo.png\u4E0B\u3002\u9ED8\u8BA4\u7684WordPress\u80CC\u666F\u6807\u5FD7\u5927\u5C0F\u4E3A274px*63px\u3002</p><h4 id="\u5220\u9664wordpress\u767B\u5F55\u5C4F\u5E55\u6807\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664wordpress\u767B\u5F55\u5C4F\u5E55\u6807\u5FD7" aria-hidden="true">#</a> \u5220\u9664WordPress\u767B\u5F55\u5C4F\u5E55\u6807\u5FD7</h4><p>\u5982\u679C\u4F60\u60F3\u8BA9\u540E\u53F0\u767B\u5F55\u754C\u9762\u66F4\u52A0\u7B80\u6D01\uFF0C\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u53EA\u7559\u4E0B\u8F93\u5165\u6846\uFF0C\u5220\u9664WordPress\u767B\u5F55\u754C\u9762Logo\u3002\u540C\u6837\u7684\u65B9\u6CD5\u5C06\u4E0B\u9762\u7684\u4EE3\u7801\u6DFB\u52A0\u5230\u4E3B\u9898\u76EE\u5F55functions.php\u4E2D\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">//Delete the WordPress login interface Logo</span>
<span class="token keyword">function</span> <span class="token function">admin_bar_remove</span> <span class="token punctuation">(</span> <span class="token punctuation">)</span>  <span class="token punctuation">{</span>
    global  $wp_admin_bar <span class="token punctuation">;</span>
    <span class="token comment">/* Remove their stuff */</span>
    $wp_admin_bar <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token function">remove_menu</span> <span class="token punctuation">(</span> <span class="token string">&#39;wp-logo&#39;</span> <span class="token punctuation">)</span> <span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">add_action</span> <span class="token punctuation">(</span> <span class="token string">&#39;wp_before_admin_bar_render&#39;</span> <span class="token punctuation">,</span>  <span class="token string">&#39;admin_bar_remove&#39;</span> <span class="token punctuation">,</span>  <span class="token number">0</span> <span class="token punctuation">)</span> <span class="token punctuation">;</span> 
</code></pre></div><h4 id="\u81EA\u5B9A\u4E49logo\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49logo\u94FE\u63A5" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49Logo\u94FE\u63A5</h4><p>\u66F4\u6539Logo\u94FE\u63A5\u5230\u4E3B\u9875\u94FE\u63A5\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// The LOGO link for the custom login page is the home page link</span>
<span class="token function">add_filter</span> <span class="token punctuation">(</span> <span class="token string">&#39;login_headerurl&#39;</span> <span class="token punctuation">,</span>  <span class="token function">create_function</span> <span class="token punctuation">(</span> <span class="token boolean">false</span> <span class="token punctuation">,</span> <span class="token string">&quot;return get_bloginfo(&#39;url&#39;);&quot;</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">;</span> 
</code></pre></div><p>\u5C06Logo\u7684\u94FE\u63A5\u66F4\u6539\u4E3A\u4EFB\u4F55\u94FE\u63A5\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">//Custom login interface LOGO link is any link</span>
<span class="token keyword">function</span> <span class="token function">custom_loginlogo_url</span> <span class="token punctuation">(</span> <span class="token parameter">$url</span> <span class="token punctuation">)</span>  <span class="token punctuation">{</span>
    <span class="token keyword">return</span>  <span class="token string">&#39;https://lzwdot.com&#39;</span> <span class="token punctuation">;</span>  <span class="token comment">//Modify URL address</span>
<span class="token punctuation">}</span>
<span class="token function">add_filter</span> <span class="token punctuation">(</span>  <span class="token string">&#39;login_headerurl&#39;</span> <span class="token punctuation">,</span>  <span class="token string">&#39;custom_loginlogo_url&#39;</span>  <span class="token punctuation">)</span> <span class="token punctuation">;</span> 
</code></pre></div><h4 id="\u81EA\u5B9A\u4E49logo\u63D0\u793A\u4FE1\u606F-tltle" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49logo\u63D0\u793A\u4FE1\u606F-tltle" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49Logo\u63D0\u793A\u4FE1\u606F\uFF08tltle\uFF09</h4><p>\u4E3A\u7F51\u7AD9\u540D\u79F0\u5B9A\u5236\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// The custom login page&#39;s LOGO hint is the site name</span>
<span class="token function">add_filter</span> <span class="token punctuation">(</span> <span class="token string">&#39;login_headertitle&#39;</span> <span class="token punctuation">,</span>  <span class="token function">create_function</span> <span class="token punctuation">(</span> <span class="token boolean">false</span> <span class="token punctuation">,</span> <span class="token string">&quot;return get_bloginfo(&#39;name&#39;);&quot;</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">;</span> 
</code></pre></div><p>\u5C06\u5176\u81EA\u5B9A\u4E49\u4E3A\u4EFB\u4F55\u5176\u4ED6\u6587\u672C\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">/</span>Custom login page <span class="token constant">LOGO</span> hints <span class="token keyword">for</span> any text
<span class="token keyword">function</span> <span class="token function">custom_loginlogo_desc</span> <span class="token punctuation">(</span> <span class="token parameter">$url</span> <span class="token punctuation">)</span>  <span class="token punctuation">{</span>
    <span class="token keyword">return</span>  <span class="token string">&#39;tears snow blog&#39;</span> <span class="token punctuation">;</span>  <span class="token comment">//modify text information</span>
<span class="token punctuation">}</span>
<span class="token function">add_filter</span> <span class="token punctuation">(</span>  <span class="token string">&#39;login_headertitle&#39;</span> <span class="token punctuation">,</span>  <span class="token string">&#39;custom_loginlogo_desc&#39;</span>  <span class="token punctuation">)</span> <span class="token punctuation">;</span> 
</code></pre></div><h4 id="\u81EA\u5B9A\u4E49\u767B\u5F55\u6846\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u767B\u5F55\u6846\u5185\u5BB9" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u767B\u5F55\u6846\u5185\u5BB9</h4><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">/</span> add additional information on the log <span class="token keyword">in</span>
<span class="token keyword">function</span> <span class="token function">custom_login_message</span> <span class="token punctuation">(</span> <span class="token punctuation">)</span>  <span class="token punctuation">{</span>
    echo  <span class="token string">&#39;&lt;P&gt; Welcome&#39;</span> <span class="token punctuation">.</span> <span class="token function">Get_bloginfo</span> <span class="token punctuation">(</span> <span class="token string">&#39;name&#39;</span> <span class="token punctuation">)</span> <span class="token punctuation">.</span> <span class="token string">&#39;, Continuing &lt;/ p&gt; &lt;br /&gt; after login&#39;</span> <span class="token punctuation">;</span>
<span class="token punctuation">}</span>
the <span class="token function">add_action</span> <span class="token punctuation">(</span> <span class="token string">&#39;login_form&#39;</span> <span class="token punctuation">,</span>  <span class="token string">&#39;custom_login_message&#39;</span> <span class="token punctuation">)</span> <span class="token punctuation">;</span> 
</code></pre></div><h3 id="\u81EA\u5B9A\u4E49\u5E95\u90E8\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u5E95\u90E8\u5185\u5BB9" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u5E95\u90E8\u5185\u5BB9</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// Customize the bottom information</span>
<span class="token keyword">function</span> <span class="token function">custom_html</span> <span class="token punctuation">(</span> <span class="token punctuation">)</span>  <span class="token punctuation">{</span>
    echo  <span class="token string">&#39;&lt;p style=&quot;text-align:center&quot;&gt;\xA9 &#39;</span>  <span class="token punctuation">.</span> <span class="token function">get_bloginfo</span> <span class="token punctuation">(</span> url <span class="token punctuation">)</span> <span class="token punctuation">.</span> <span class="token string">&#39;&lt;/p&gt;&#39;</span> <span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">add_action</span> <span class="token punctuation">(</span> <span class="token string">&#39;login_footer&#39;</span> <span class="token punctuation">,</span>  <span class="token string">&#39;custom_html&#39;</span> <span class="token punctuation">)</span> <span class="token punctuation">;</span> 
</code></pre></div><h3 id="\u81EA\u5B9A\u4E49css" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49css" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49CSS</h3><p>\u4E3A\u4E86\u66F4\u7075\u6D3B\u5730\u4FEE\u6539\u767B\u5F55\u9875\u9762\u7684\u663E\u793A\u6837\u5F0F\uFF0C\u5EFA\u8BAE\u6DFB\u52A0\u4E00\u4E2A\u81EA\u5B9A\u4E49CSS\u6587\u4EF6\uFF0C\u7136\u540E\u67E5\u770B\u767B\u5F55\u9875\u9762\u6E90\u4EE3\u7801\u7684html\u7ED3\u6784\uFF0C\u5E76\u7F16\u5199\u81EA\u5DF1\u7684CSS\u6837\u5F0F\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u7684\u4EE3\u7801\u6765\u4ECB\u7ECD\u4F60\u81EA\u5DF1\u7684CSS\uFF0C\u6CE8\u610F\u5728\u4EE3\u7801\u4E2D\u4FEE\u6539css\u5730\u5740\uFF0C\u4E0B\u9762\u7684\u8C03\u7528\u662F\u5728\u4E3B\u9898\u6839\u76EE\u5F55\u4E0B\u7684login_style.css\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">//Add a custom CSS</span>
<span class="token keyword">function</span> <span class="token function">custom_login</span> <span class="token punctuation">(</span> <span class="token punctuation">)</span>  <span class="token punctuation">{</span>
    echo  <span class="token string">&#39;&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;&#39;</span>  <span class="token punctuation">.</span> <span class="token function">get_stylesheet_directory_uri</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">.</span>  <span class="token string">&#39;/login_style.css&quot; /&gt;&#39;</span> <span class="token punctuation">;</span>
<span class="token punctuation">}</span>
the <span class="token function">add_action</span> <span class="token punctuation">(</span> <span class="token string">&#39;login_head&#39;</span> <span class="token punctuation">,</span>  <span class="token string">&#39;custom_login&#39;</span> <span class="token punctuation">)</span> <span class="token punctuation">;</span> 
</code></pre></div><p>\u5176\u5B9E\u5230\u6700\u540E\u7684\u5C0F\u7DE8\u8FD8\u662F\u89C9\u5F97\uFF01\u4EE5\u4E0A\u4EE3\u7801\u53EF\u4EE5\u5E2E\u52A9\u60A8\u81EA\u5B9A\u4E49WordPress\u9ED8\u8BA4\u7684\u540E\u53F0\u767B\u5F55\u9875\u9762\u3002\u5982\u679C\u60A8\u4F7F\u7528WordPress\u8FDB\u884C\u5176\u4ED6\u7F51\u7AD9\u5F00\u53D1\uFF0C\u4E5F\u8BB8\u60A8\u4E0D\u4F1A\u4F7F\u7528WordPress\u9ED8\u8BA4\u7684\u540E\u53F0\u767B\u5F55\u9875\u9762\u3002\u4F60\u53EF\u4EE5\u4ECE\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\u770B\u5230\u3002\u5F00\u7BB1\u5373\u7528\uFF0C\u5BF9\u4E8E\u4E0D\u61C2\u4EE3\u7801\u7684\u4EBA\u6765\u8BF4\uFF0C\u81EA\u5B9A\u4E49\u6B64\u9875\u9762\u975E\u5E38\u65B9\u4FBF\uFF0C\u4F46\u5BF9\u4E8E\u7406\u89E3\u4EE3\u7801\u7684\u4EBA\u5458\u6765\u8BF4\uFF0C\u53EF\u4EE5\u505A\u4E00\u4E2A\u5355\u72EC\u7684\u767B\u5F55\u9875\u9762\u3002</p><p>\u5C0F\u7DE8\u6CA1\u6709\u592A\u591A\u7684\u8BDD\u8981\u8BF4\u3002\u60A8\u53EF\u4EE5\u4F7F\u7528\u4E0A\u8FF0\u4EE3\u7801\u81EA\u5B9A\u4E49\u60A8\u7684WordPress\u540E\u53F0\u767B\u5F55\u9875\u9762\u3002</p><blockquote><p>\u6574\u7406\u6765\u81EA\u4E92\u8054\u7F51</p></blockquote>`,29);function o(p,e){return t}var i=s(a,[["render",o]]);export{i as default};
