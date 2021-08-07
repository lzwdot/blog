<template><h1 id="wordpress使用子主题中languages" tabindex="-1"><a class="header-anchor" href="#wordpress使用子主题中languages" aria-hidden="true">#</a> WordPress使用子主题中languages</h1>
<h4 id="使用子主题的目的" tabindex="-1"><a class="header-anchor" href="#使用子主题的目的" aria-hidden="true">#</a> 使用子主题的目的</h4>
<p>WordPress可以通过创建一个非常基本的子主题 来对一个父主题的样式和布局进行修改和扩展，而不需要对父主题的文件作任何修改。通过这样的方式，当父主题被更新的时候，您所做的修改就可以保存下来。</p>
<blockquote>
<p>子主题制作参考</p>
</blockquote>
<p><a href="https://codex.wordpress.org/zh-cn" target="_blank" rel="noopener noreferrer">https://codex.wordpress.org/zh-cn<OutboundLink/></a>:子主题</p>
<h4 id="wordpress使用子主题中languages-1" tabindex="-1"><a class="header-anchor" href="#wordpress使用子主题中languages-1" aria-hidden="true">#</a> WordPress使用子主题中languages</h4>
<p>假设您将语言文件放置在languages子主题内的文件夹中，以下代码将告诉WordPress为您的子主题加载单独的语言文件：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token function">add_action</span><span class="token punctuation">(</span> <span class="token string">'after_setup_theme'</span><span class="token punctuation">,</span> <span class="token string">'theme_child_setup'</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">theme_child_setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* Load the child theme's gettext file */</span>
    <span class="token function">load_child_theme_textdomain</span><span class="token punctuation">(</span> <span class="token string">'textdomain'</span><span class="token punctuation">,</span> <span class="token function">get_stylesheet_directory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">.</span> <span class="token string">'/languages'</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>上面的代码进入你的子主题functions.php文件。替换textdomain为您使用的实际文本域。</p>
<p><strong>关于以上的textdomain值</strong></p>
<p>1、可以在父主题中搜索 load_theme_textdomain，如果发现以下代码：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token function">load_theme_textdomain</span><span class="token punctuation">(</span> <span class="token string">'framework'</span><span class="token punctuation">,</span> <span class="token function">get_template_directory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">.</span> <span class="token string">'/languages'</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>那么textdomain值为framework</p>
<p>2、也可以在模板文件中翻译语句，如：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token function">__</span><span class="token punctuation">(</span> <span class="token string">'Theme Options'</span><span class="token punctuation">,</span> <span class="token string">'theme-textdomain'</span> <span class="token punctuation">)</span>
</code></pre></div><p>那么textdomain值为theme-textdomain</p>
<p>3、如果有多个textdomain，也可以直接添加，如：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token function">add_action</span><span class="token punctuation">(</span> <span class="token string">'after_setup_theme'</span><span class="token punctuation">,</span> <span class="token string">'theme_child_setup'</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">theme_child_setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* Load the child theme's gettext file */</span>
    <span class="token function">load_child_theme_textdomain</span><span class="token punctuation">(</span> <span class="token string">'textdomain1'</span><span class="token punctuation">,</span> <span class="token function">get_stylesheet_directory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">.</span> <span class="token string">'/languages'</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">load_child_theme_textdomain</span><span class="token punctuation">(</span> <span class="token string">'textdomain2'</span><span class="token punctuation">,</span> <span class="token function">get_stylesheet_directory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">.</span> <span class="token string">'/languages'</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></template>
