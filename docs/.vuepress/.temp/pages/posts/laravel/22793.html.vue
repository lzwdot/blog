<template><h1 id="laravel5-5-blade模板-yield-section-show-stop-append-overwrite标签区别" tabindex="-1"><a class="header-anchor" href="#laravel5-5-blade模板-yield-section-show-stop-append-overwrite标签区别" aria-hidden="true">#</a> Laravel5.5 Blade模板-@yield @section @show @stop @append @overwrite标签区别</h1>
<blockquote>
<p><strong>内容转自网络，整理排版，未做验证</strong></p>
</blockquote>
<p>Laravel 框架中的 Blade 模板引擎很好用，但是在官方文档中有关 Blade 的介绍并不详细，有些东西没有写出来，而有些则是没有说清楚。比如，使用中可能会遇到这样的问题：</p>
<blockquote>
<p>1.@yield 和 @section 都可以预定义可替代的区块，这两者有什么区别呢？<br>
2.@section 可以用 @show, @stop, @overwrite 以及 @append来结束，这三者又有什么区别呢？</p>
</blockquote>
<p>本文试对这些问题做一个比较浅显但是直观的介绍。</p>
<h2 id="yield-与-section" tabindex="-1"><a class="header-anchor" href="#yield-与-section" aria-hidden="true">#</a> @yield 与 @section</h2>
<p>首先，@yield 是不可扩展的，如果你要定义的部分没有默认内容让子模板扩展的，那么用 @yield($name, $default) 的形式会比较方便，如果你在子模板中并没有指定这个区块的内容，它就会显示默认内容，如果定义了，就会显示你定义的内容。非此即彼。</p>
<p>与之相比， @section 则既可以被替代，又可以被扩展，这是最大的区别。比如：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token operator">--</span> layout<span class="token punctuation">.</span>master <span class="token operator">--</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
@<span class="token keyword">yield</span><span class="token punctuation">(</span><span class="token string">'title'</span><span class="token punctuation">,</span><span class="token string">'默认标题'</span><span class="token punctuation">)</span>
@<span class="token function">section</span><span class="token punctuation">(</span><span class="token string">'content'</span><span class="token punctuation">)</span>
    默认的内容
@show 
</code></pre></div><p>子模板继承</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token operator">--</span> home<span class="token punctuation">.</span>index <span class="token operator">--</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
@<span class="token keyword">extends</span><span class="token punctuation">(</span><span class="token string">'layout.master'</span><span class="token punctuation">)</span>
@<span class="token function">section</span><span class="token punctuation">(</span><span class="token string">'title'</span><span class="token punctuation">)</span>
    @parent
    新的标题
@stop
@<span class="token function">section</span><span class="token punctuation">(</span><span class="token string">'content'</span><span class="token punctuation">)</span>
    @parent
    扩展的内容
@stop 
</code></pre></div><p>上面的例子中，模板用 @yield 和 @section 分别定义了一个区块，然后在子模板中去定义内容，由于 @yield 不能被扩展，所以即使加上了 @parent 也不起作用，输出的内容只有“新的标题”，替换了“默认的标题”。因此最终生成的页面只能是“默认的标题”或者“新的标题”，不能并存。而 @section 定义的部分，由于使用了 @parent 关键字，父模板中的内容会被保留，然后再扩展后添加的内容进去，输出的内容会是 “默认的内容 扩展的内容”。</p>
<p>官方网站上的文档中并没有涉及 @parent关键字，说的是默认行为是“扩展”，要覆盖需要用 @override 来结束，这是错的，github 上的最新文档 已经做了修正。@section 加上 @stop，默认是替换（注入），必须用 @parent 关键字才能扩展。而@override 关键字实际上有另外的应用场景。</p>
<h2 id="show-与-stop" tabindex="-1"><a class="header-anchor" href="#show-与-stop" aria-hidden="true">#</a> @show 与 @stop</h2>
<p>接下来再说说与 @section 对应的结束关键字，@show, @stop 有什么区别呢？（网上的部分文章，以及一些编辑器插件还会提示 @endsection, 这个在 4.0 版本中已经被移除，虽然向下兼容，但是不建议使用）。</p>
<p>@show 指的是执行到此处时将该 section 中的内容输出到页面，而 @stop 则只是进行内容解析，并且不再处理当前模板中后续对该section的处理，除非用 @override覆盖（详见下一部分）。通常来说，在首次定义某个 section 的时候，应该用 @show，而在替换它或者扩展它的时候，不应该用 @show，应该用 @stop。下面用例子说明：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token operator">--</span> layout<span class="token punctuation">.</span>master <span class="token operator">--</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"zoneA"</span><span class="token operator">></span>
  @<span class="token function">section</span><span class="token punctuation">(</span><span class="token string">'zoneA'</span><span class="token punctuation">)</span>
      <span class="token constant">AAA</span>
  @show
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"zoneB"</span><span class="token operator">></span>
  @<span class="token function">section</span><span class="token punctuation">(</span><span class="token string">'zoneB'</span><span class="token punctuation">)</span>
      <span class="token constant">BBB</span>
  @stop
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"zoneC"</span><span class="token operator">></span>
  @<span class="token function">section</span><span class="token punctuation">(</span><span class="token string">'zoneC'</span><span class="token punctuation">)</span>
      <span class="token constant">CCC</span>
  @show
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span> 
</code></pre></div><p>子模板继承</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token operator">--</span> page<span class="token punctuation">.</span>view <span class="token operator">--</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
@<span class="token keyword">extends</span><span class="token punctuation">(</span><span class="token string">'layout.master'</span><span class="token punctuation">)</span>
@<span class="token function">section</span><span class="token punctuation">(</span><span class="token string">'zoneA'</span><span class="token punctuation">)</span>
    aaa
@stop
@<span class="token function">section</span><span class="token punctuation">(</span><span class="token string">'zoneB'</span><span class="token punctuation">)</span>
    bbb
@stop
@<span class="token function">section</span><span class="token punctuation">(</span><span class="token string">'zoneC'</span><span class="token punctuation">)</span>
    ccc
@show 
</code></pre></div><p>在 layout.master 中，用 @stop 来结束 &quot;zoneB&quot;，由于整个模板体系中，没有以 @show 结束的 &quot;zoneB&quot; 的定义，因此这个区块不会被显示。而在 page.view 中，用 @show 定义了 'zoneC'，这会在执行到这里时立即显示内容，并按照模板继承机制继续覆盖内容，因此最终显示的内容会是：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 来自 page.view</span>
<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"zoneA"</span><span class="token operator">></span>
    aaa
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"zoneB"</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"zoneC"</span><span class="token operator">></span>
    ccc
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span> 
</code></pre></div><p>从结果可以看到，zoneB 的内容丢失，因为没有用 @show 告诉引擎输出这部分的内容，而 zoneC 的内容会显示两次，并且还破坏了 layout.master 的页面结构，因为 @show 出现了两次。</p>
<h2 id="append-和-override" tabindex="-1"><a class="header-anchor" href="#append-和-override" aria-hidden="true">#</a> @append 和 @override</h2>
<p>刚才说到了，@override 并不是在子模板中指明内容替换父模板的默认内容，而是另有用途，那么是如何使用呢？这又涉及到一个 section 在模板中可以多次使用的问题。也即我们所定义的每一个 section ，在随后的子模板中其实是可以多次出现的。比如：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token operator">--</span> master <span class="token operator">--</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span>div<span class="token operator">></span>
    @<span class="token keyword">yield</span><span class="token punctuation">(</span><span class="token string">'content'</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span> 
</code></pre></div><p>子模板继承</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token operator">--</span> subview <span class="token operator">--</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
@<span class="token keyword">extends</span><span class="token punctuation">(</span><span class="token string">'master'</span><span class="token punctuation">)</span>
@<span class="token function">section</span><span class="token punctuation">(</span><span class="token string">'content'</span><span class="token punctuation">)</span>
    加一行内容
@append
@<span class="token function">section</span><span class="token punctuation">(</span><span class="token string">'content'</span><span class="token punctuation">)</span>
    再加一行内容
@append
@<span class="token function">section</span><span class="token punctuation">(</span><span class="token string">'content'</span><span class="token punctuation">)</span>
    加够了，到此为止吧。
@stop 
</code></pre></div><p>在上例中，我在父级模板中只定义了一个名为 &quot;content&quot; 的 section，而在子模板中三次指定了这个 section 的内容。 这个例子最终的输出是：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div<span class="token operator">></span>
    加一行内容
    再加一行内容
    加够了，到此为止吧。
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span> 
</code></pre></div><p>三次指定的内容都显示出来了，关键就在于 @append 这个关键字，它表明“此处的内容添加到”，因此内容会不断扩展。而最后用了 @stop，表示这个 section 的处理到此为止。如果在后面继续用 @append 或者 @stop 来指定这个 section 的内容，都不会生效。除非用 @override 来处理。 @override 的意思就是“覆盖之前的所有定义，以这次的为准”。比如：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token operator">--</span> master <span class="token operator">--</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span>div<span class="token operator">></span>
    @<span class="token keyword">yield</span><span class="token punctuation">(</span><span class="token string">'content'</span><span class="token punctuation">)</span>
    @<span class="token keyword">yield</span><span class="token punctuation">(</span><span class="token string">'message'</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span> 
</code></pre></div><p>子模板继承</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token operator">--</span> subview <span class="token operator">--</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
@<span class="token keyword">extends</span><span class="token punctuation">(</span><span class="token string">'master'</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span>div<span class="token operator">></span>
    @<span class="token function">section</span><span class="token punctuation">(</span><span class="token string">'content'</span><span class="token punctuation">)</span>
        加一行内容
    @append
    @<span class="token function">section</span><span class="token punctuation">(</span><span class="token string">'content'</span><span class="token punctuation">)</span>
        再加一行内容
    @append
    @<span class="token function">section</span><span class="token punctuation">(</span><span class="token string">'content'</span><span class="token punctuation">)</span>
        加够了，结束吧
    @stop
    @<span class="token function">section</span><span class="token punctuation">(</span><span class="token string">'content'</span><span class="token punctuation">)</span>
        都不要了，我说的。
    @override
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span> 
</code></pre></div><p>这个例子和刚才的类似，只不过最后加了一组定义。最终的输出会是：</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div<span class="token operator">></span>
    都不要了，我说的。
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span> 
</code></pre></div><p>所以，在正式的项目中，有时候需要对数据进行遍历输出的，可以使用 @append，而如果遍历到了某个数据发现前面的都错了呢？用 @override 就可以全部推翻。</p>
</template>
