import{h as s}from"./app.4ca8afde.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=s(`<h1 id="wordpress\u5C0F\u5DE5\u5177\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#wordpress\u5C0F\u5DE5\u5177\u5F00\u53D1" aria-hidden="true">#</a> WordPress\u5C0F\u5DE5\u5177\u5F00\u53D1</h1><p>\u6536\u96C6\u4E00\u4E9B\u5C0F\u5DE5\u5177\u7684\u4EE3\u7801</p><h4 id="\u5206\u7C7B\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u5206\u7C7B\u6587\u7AE0" aria-hidden="true">#</a> \u5206\u7C7B\u6587\u7AE0</h4><blockquote><p>\u663E\u793A\u5F53\u524D\u6587\u7AE0\u5206\u7C7B\u4E0B\u7684\u6587\u7AE0</p></blockquote><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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
        <span class="token literal-property property">parent</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">__construct</span><span class="token punctuation">(</span>
            <span class="token string">&#39;widget_mytheme_classified_articles&#39;</span><span class="token punctuation">,</span> <span class="token function">__</span><span class="token punctuation">(</span><span class="token string">&#39;Theme Classified Articles&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">array</span><span class="token punctuation">(</span>
                <span class="token string">&#39;classname&#39;</span> <span class="token operator">=&gt;</span> <span class="token string">&#39;widget_mytheme_classified_articles&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;description&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">__</span><span class="token punctuation">(</span><span class="token string">&#39;Show articles under a single category.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token string">&#39;customize_selective_refresh&#39;</span> <span class="token operator">=&gt;</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
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
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">is_single</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//\u6587\u6863</span>
            $current_id <span class="token operator">=</span> <span class="token function">get_the_ID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            $categories <span class="token operator">=</span> <span class="token function">get_the_category</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>$categories<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                echo $args<span class="token punctuation">[</span><span class="token string">&#39;before_widget&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token operator">?</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>h1 <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;widget-title&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">?</span>php echo $categories<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">-</span><span class="token operator">&gt;</span>name<span class="token punctuation">;</span> <span class="token operator">?</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span><span class="token operator">?</span>php
                    $posts <span class="token operator">=</span> <span class="token function">get_posts</span><span class="token punctuation">(</span><span class="token function">array</span><span class="token punctuation">(</span>
                        <span class="token string">&#39;numberposts&#39;</span> <span class="token operator">=&gt;</span> $instance<span class="token punctuation">[</span><span class="token string">&#39;number&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                        <span class="token string">&#39;category&#39;</span> <span class="token operator">=&gt;</span> $categories<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">-</span><span class="token operator">&gt;</span>term_id<span class="token punctuation">,</span>
                        <span class="token string">&#39;order&#39;</span> <span class="token operator">=&gt;</span> <span class="token string">&#39;ASC&#39;</span><span class="token punctuation">,</span>
                    <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token function">foreach</span> <span class="token punctuation">(</span>$posts <span class="token keyword">as</span> <span class="token parameter">$k</span> <span class="token operator">=&gt;</span> $_post<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token operator">?</span><span class="token operator">&gt;</span>
                        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
                            <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">&quot;&lt;?php echo get_permalink($_post-&gt;ID); ?&gt;&quot;</span>
                               <span class="token keyword">class</span><span class="token operator">=</span>&quot;<span class="token operator">&lt;</span><span class="token operator">?</span>php <span class="token keyword">if</span> <span class="token punctuation">(</span>$_post<span class="token operator">-</span><span class="token operator">&gt;</span><span class="token constant">ID</span> <span class="token operator">==</span> $current_id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                                   echo <span class="token string">&#39;active&#39;</span><span class="token punctuation">;</span>
                               <span class="token punctuation">}</span> <span class="token operator">?</span><span class="token operator">&gt;</span>&quot;<span class="token operator">&gt;</span>
                                <span class="token operator">&lt;</span><span class="token operator">?</span>php echo <span class="token operator">++</span>$k <span class="token punctuation">.</span> <span class="token string">&#39;. &#39;</span> <span class="token punctuation">.</span> <span class="token function">get_the_title</span><span class="token punctuation">(</span>$_post<span class="token operator">-</span><span class="token operator">&gt;</span><span class="token constant">ID</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">?</span><span class="token operator">&gt;</span>
                            <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
                        <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
                        <span class="token operator">&lt;</span><span class="token operator">?</span>php
                    <span class="token punctuation">}</span>
                    <span class="token operator">?</span><span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span>li style<span class="token operator">=</span><span class="token string">&quot;margin-top: 10px&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">&quot;&lt;?php echo get_category_link($categories[0]-&gt;term_id); ?&gt;&quot;</span><span class="token operator">&gt;</span>\u67E5\u770B\u66F4\u591A<span class="token operator">&gt;&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span><span class="token operator">?</span>php
                echo $args<span class="token punctuation">[</span><span class="token string">&#39;after_widget&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
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
        $instance<span class="token punctuation">[</span><span class="token string">&#39;number&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">strip_tags</span><span class="token punctuation">(</span>$new_instance<span class="token punctuation">[</span><span class="token string">&#39;number&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> $instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * Display the form for this widget on the Widgets page of the Admin area.
     *
     * <span class="token keyword">@param</span> <span class="token parameter">array</span> $instance
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">form</span><span class="token punctuation">(</span><span class="token parameter">$instance</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        $number <span class="token operator">=</span> <span class="token function">isset</span><span class="token punctuation">(</span>$instance<span class="token punctuation">[</span><span class="token string">&#39;number&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function">absint</span><span class="token punctuation">(</span>$instance<span class="token punctuation">[</span><span class="token string">&#39;number&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">;</span>
        <span class="token operator">?</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;&lt;?php echo $this-&gt;get_field_id(&#39;number&#39;); ?&gt;&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">?</span>php <span class="token function">_e</span><span class="token punctuation">(</span><span class="token string">&#39;Number of posts to show:&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">?</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>input <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;tiny-text&quot;</span> id<span class="token operator">=</span><span class="token string">&quot;&lt;?php echo $this-&gt;get_field_id(&#39;number&#39;); ?&gt;&quot;</span>
                   name<span class="token operator">=</span><span class="token string">&quot;&lt;?php echo $this-&gt;get_field_name(&#39;number&#39;); ?&gt;&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;number&quot;</span> step<span class="token operator">=</span><span class="token string">&quot;1&quot;</span> min<span class="token operator">=</span><span class="token string">&quot;1&quot;</span>
                   value<span class="token operator">=</span><span class="token string">&quot;&lt;?php echo $number; ?&gt;&quot;</span> size<span class="token operator">=</span><span class="token string">&quot;3&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">?</span>php
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token comment">// class My_Theme_Classified_Articles_Widget</span>
<span class="token function">register_widget</span><span class="token punctuation">(</span><span class="token string">&#39;My_Theme_Classified_Articles_Widget&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><h4 id="\u6587\u7AE0\u4F5C\u8005" tabindex="-1"><a class="header-anchor" href="#\u6587\u7AE0\u4F5C\u8005" aria-hidden="true">#</a> \u6587\u7AE0\u4F5C\u8005</h4><blockquote><p>\u663E\u793A\u5F53\u524D\u6587\u7AE0\u7684\u4F5C\u8005\u8D44\u6599</p></blockquote><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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
        <span class="token literal-property property">parent</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">__construct</span><span class="token punctuation">(</span>
            <span class="token string">&#39;widget_author_profile&#39;</span><span class="token punctuation">,</span> <span class="token function">__</span><span class="token punctuation">(</span><span class="token string">&#39;Author Profile&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">array</span><span class="token punctuation">(</span>
                <span class="token string">&#39;classname&#39;</span> <span class="token operator">=&gt;</span> <span class="token string">&#39;widget_author_profile&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;description&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">__</span><span class="token punctuation">(</span><span class="token string">&#39;Show Author Profile.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token string">&#39;customize_selective_refresh&#39;</span> <span class="token operator">=&gt;</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
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
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">is_single</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> $post<span class="token operator">-</span><span class="token operator">&gt;</span>post_type <span class="token operator">==</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//\u6587\u6863</span>
            echo $args<span class="token punctuation">[</span><span class="token string">&#39;before_widget&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token operator">?</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;author-bio&quot;</span> style<span class="token operator">=</span><span class="token string">&quot;border-color:#fff;margin-bottom: 0;&quot;</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;bio-avatar&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">?</span>php echo <span class="token function">get_avatar</span><span class="token punctuation">(</span> <span class="token function">get_the_author_meta</span><span class="token punctuation">(</span><span class="token string">&#39;user_email&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;128&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">?</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;bio-name&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">?</span>php <span class="token function">the_author_posts_link</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">?</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;bio-desc&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">?</span>php <span class="token function">the_author_meta</span><span class="token punctuation">(</span><span class="token string">&#39;description&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">?</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;clear&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
           <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">?</span>php
            echo $args<span class="token punctuation">[</span><span class="token string">&#39;after_widget&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token comment">// class Author_Profile_Widget</span>
<span class="token function">register_widget</span><span class="token punctuation">(</span><span class="token string">&#39;Author_Profile_Widget&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,8);function p(o,e){return t}var l=n(a,[["render",p]]);export{l as default};
