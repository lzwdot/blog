<template><h1 id="wordpress小工具开发" tabindex="-1"><a class="header-anchor" href="#wordpress小工具开发" aria-hidden="true">#</a> WordPress小工具开发</h1>
<p>收集一些小工具的代码</p>
<h4 id="分类文章" tabindex="-1"><a class="header-anchor" href="#分类文章" aria-hidden="true">#</a> 分类文章</h4>
<blockquote>
<p>显示当前文章分类下的文章</p>
</blockquote>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * My_Theme_Classified_Articles_Widget Class
 */</span>
<span class="token keyword">class</span> <span class="token class-name">My_Theme_Classified_Articles_Widget</span> <span class="token keyword">extends</span> <span class="token class-name">WP_Widget</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Constructor
     *
     * My_Theme_Classified_Articles_Widget constructor.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        parent<span class="token operator">:</span><span class="token operator">:</span><span class="token function">__construct</span><span class="token punctuation">(</span>
            <span class="token string">'widget_mytheme_classified_articles'</span><span class="token punctuation">,</span> <span class="token function">__</span><span class="token punctuation">(</span><span class="token string">'Theme Classified Articles'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">array</span><span class="token punctuation">(</span>
                <span class="token string">'classname'</span> <span class="token operator">=></span> <span class="token string">'widget_mytheme_classified_articles'</span><span class="token punctuation">,</span>
                <span class="token string">'description'</span> <span class="token operator">=></span> <span class="token function">__</span><span class="token punctuation">(</span><span class="token string">'Show articles under a single category.'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token string">'customize_selective_refresh'</span> <span class="token operator">=></span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * Output the HTML for this widget.
     *
     * <span class="token keyword">@param</span> <span class="token parameter">array</span> $args
     * <span class="token keyword">@param</span> <span class="token parameter">array</span> $instance
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">widget</span><span class="token punctuation">(</span><span class="token parameter">$args<span class="token punctuation">,</span> $instance</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        global $post<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">is_single</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//文档</span>
            $current_id <span class="token operator">=</span> <span class="token function">get_the_ID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            $categories <span class="token operator">=</span> <span class="token function">get_the_category</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>$categories<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                echo $args<span class="token punctuation">[</span><span class="token string">'before_widget'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token operator">?</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>h1 <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"widget-title"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">?</span>php echo $categories<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">-</span><span class="token operator">></span>name<span class="token punctuation">;</span> <span class="token operator">?</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
                <span class="token operator">&lt;</span>ul<span class="token operator">></span>
                    <span class="token operator">&lt;</span><span class="token operator">?</span>php
                    $posts <span class="token operator">=</span> <span class="token function">get_posts</span><span class="token punctuation">(</span><span class="token function">array</span><span class="token punctuation">(</span>
                        <span class="token string">'numberposts'</span> <span class="token operator">=></span> $instance<span class="token punctuation">[</span><span class="token string">'number'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                        <span class="token string">'category'</span> <span class="token operator">=></span> $categories<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">-</span><span class="token operator">></span>term_id<span class="token punctuation">,</span>
                        <span class="token string">'order'</span> <span class="token operator">=></span> <span class="token string">'ASC'</span><span class="token punctuation">,</span>
                    <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token function">foreach</span> <span class="token punctuation">(</span>$posts <span class="token keyword">as</span> <span class="token parameter">$k</span> <span class="token operator">=></span> $_post<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token operator">?</span><span class="token operator">></span>
                        <span class="token operator">&lt;</span>li<span class="token operator">></span>
                            <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"&lt;?php echo get_permalink($_post->ID); ?>"</span>
                               <span class="token keyword">class</span><span class="token operator">=</span>"<span class="token operator">&lt;</span><span class="token operator">?</span>php <span class="token keyword">if</span> <span class="token punctuation">(</span>$_post<span class="token operator">-</span><span class="token operator">></span><span class="token constant">ID</span> <span class="token operator">==</span> $current_id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                                   echo <span class="token string">'active'</span><span class="token punctuation">;</span>
                               <span class="token punctuation">}</span> <span class="token operator">?</span><span class="token operator">></span>"<span class="token operator">></span>
                                <span class="token operator">&lt;</span><span class="token operator">?</span>php echo <span class="token operator">++</span>$k <span class="token punctuation">.</span> <span class="token string">'. '</span> <span class="token punctuation">.</span> <span class="token function">get_the_title</span><span class="token punctuation">(</span>$_post<span class="token operator">-</span><span class="token operator">></span><span class="token constant">ID</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">?</span><span class="token operator">></span>
                            <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
                        <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
                        <span class="token operator">&lt;</span><span class="token operator">?</span>php
                    <span class="token punctuation">}</span>
                    <span class="token operator">?</span><span class="token operator">></span>
                    <span class="token operator">&lt;</span>li style<span class="token operator">=</span><span class="token string">"margin-top: 10px"</span><span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"&lt;?php echo get_category_link($categories[0]->term_id); ?>"</span><span class="token operator">></span>查看更多<span class="token operator">>></span><span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
                    <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">?</span>php
                echo $args<span class="token punctuation">[</span><span class="token string">'after_widget'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * Deal with the settings when they are saved by the admin.
     *
     * Here is where any validation should happen.
     *
     * <span class="token keyword">@param</span> <span class="token parameter">array</span> $new_instance
     * <span class="token keyword">@param</span> <span class="token parameter">array</span> $old_instance
     * <span class="token keyword">@return</span> array
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">$new_instance<span class="token punctuation">,</span> $instance</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        $instance<span class="token punctuation">[</span><span class="token string">'number'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">strip_tags</span><span class="token punctuation">(</span>$new_instance<span class="token punctuation">[</span><span class="token string">'number'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> $instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * Display the form for this widget on the Widgets page of the Admin area.
     *
     * <span class="token keyword">@param</span> <span class="token parameter">array</span> $instance
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">form</span><span class="token punctuation">(</span><span class="token parameter">$instance</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        $number <span class="token operator">=</span> <span class="token function">isset</span><span class="token punctuation">(</span>$instance<span class="token punctuation">[</span><span class="token string">'number'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function">absint</span><span class="token punctuation">(</span>$instance<span class="token punctuation">[</span><span class="token string">'number'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">;</span>
        <span class="token operator">?</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"&lt;?php echo $this->get_field_id('number'); ?>"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">?</span>php <span class="token function">_e</span><span class="token punctuation">(</span><span class="token string">'Number of posts to show:'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">?</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
            <span class="token operator">&lt;</span>input <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"tiny-text"</span> id<span class="token operator">=</span><span class="token string">"&lt;?php echo $this->get_field_id('number'); ?>"</span>
                   name<span class="token operator">=</span><span class="token string">"&lt;?php echo $this->get_field_name('number'); ?>"</span> type<span class="token operator">=</span><span class="token string">"number"</span> step<span class="token operator">=</span><span class="token string">"1"</span> min<span class="token operator">=</span><span class="token string">"1"</span>
                   value<span class="token operator">=</span><span class="token string">"&lt;?php echo $number; ?>"</span> size<span class="token operator">=</span><span class="token string">"3"</span><span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">?</span>php
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token comment">// class My_Theme_Classified_Articles_Widget</span>
<span class="token function">register_widget</span><span class="token punctuation">(</span><span class="token string">'My_Theme_Classified_Articles_Widget'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><h4 id="文章作者" tabindex="-1"><a class="header-anchor" href="#文章作者" aria-hidden="true">#</a> 文章作者</h4>
<blockquote>
<p>显示当前文章的作者资料</p>
</blockquote>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Author_Profile_Widget Class
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Author_Profile_Widget</span> <span class="token keyword">extends</span> <span class="token class-name">WP_Widget</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Constructor
     *
     * Author_Profile_Widget constructor.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        parent<span class="token operator">:</span><span class="token operator">:</span><span class="token function">__construct</span><span class="token punctuation">(</span>
            <span class="token string">'widget_author_profile'</span><span class="token punctuation">,</span> <span class="token function">__</span><span class="token punctuation">(</span><span class="token string">'Author Profile'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">array</span><span class="token punctuation">(</span>
                <span class="token string">'classname'</span> <span class="token operator">=></span> <span class="token string">'widget_author_profile'</span><span class="token punctuation">,</span>
                <span class="token string">'description'</span> <span class="token operator">=></span> <span class="token function">__</span><span class="token punctuation">(</span><span class="token string">'Show Author Profile.'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token string">'customize_selective_refresh'</span> <span class="token operator">=></span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * Output the HTML for this widget.
     *
     * <span class="token keyword">@param</span> <span class="token parameter">array</span> $args
     * <span class="token keyword">@param</span> <span class="token parameter">array</span> $instance
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">widget</span><span class="token punctuation">(</span><span class="token parameter">$args<span class="token punctuation">,</span> $instance</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        global $post<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">is_single</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> $post<span class="token operator">-</span><span class="token operator">></span>post_type <span class="token operator">==</span> <span class="token string">'post'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//文档</span>
            echo $args<span class="token punctuation">[</span><span class="token string">'before_widget'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token operator">?</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"author-bio"</span> style<span class="token operator">=</span><span class="token string">"border-color:#fff;margin-bottom: 0;"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"bio-avatar"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">?</span>php echo <span class="token function">get_avatar</span><span class="token punctuation">(</span> <span class="token function">get_the_author_meta</span><span class="token punctuation">(</span><span class="token string">'user_email'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">'128'</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">?</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
                <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"bio-name"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">?</span>php <span class="token function">the_author_posts_link</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">?</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
                <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"bio-desc"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">?</span>php <span class="token function">the_author_meta</span><span class="token punctuation">(</span><span class="token string">'description'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">?</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
                <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"clear"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
           <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">?</span>php
            echo $args<span class="token punctuation">[</span><span class="token string">'after_widget'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token comment">// class Author_Profile_Widget</span>
<span class="token function">register_widget</span><span class="token punctuation">(</span><span class="token string">'Author_Profile_Widget'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></template>
