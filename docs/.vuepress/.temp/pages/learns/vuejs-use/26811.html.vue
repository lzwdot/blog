<template><h1 id="vue-组件之间如何通讯" tabindex="-1"><a class="header-anchor" href="#vue-组件之间如何通讯" aria-hidden="true">#</a> Vue 组件之间如何通讯</h1>
<p>比如做一个 TodoList，有一个父组件 Index.vue</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>Input @add<span class="token operator">=</span><span class="token string">"addHandler"</span><span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>List <span class="token operator">:</span>list<span class="token operator">=</span><span class="token string">"list"</span> @<span class="token keyword">delete</span><span class="token operator">=</span><span class="token string">"deleteHandler"</span><span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">import</span> Input <span class="token keyword">from</span> <span class="token string">'./Input'</span>
<span class="token keyword">import</span> List <span class="token keyword">from</span> <span class="token string">'./List'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    components<span class="token operator">:</span> <span class="token punctuation">{</span>
        Input<span class="token punctuation">,</span>
        List
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            list<span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    id<span class="token operator">:</span> <span class="token string">'id-1'</span><span class="token punctuation">,</span>
                    title<span class="token operator">:</span> <span class="token string">'标题1'</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    id<span class="token operator">:</span> <span class="token string">'id-2'</span><span class="token punctuation">,</span>
                    title<span class="token operator">:</span> <span class="token string">'标题2'</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    methods<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">addHandler</span><span class="token punctuation">(</span><span class="token parameter">title</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                id<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">id-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
                title
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">deleteHandler</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>id <span class="token operator">!==</span> id<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// eslint-disable-next-line</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'index created'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// eslint-disable-next-line</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'index mounted'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">beforeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// eslint-disable-next-line</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'index before update'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">updated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// eslint-disable-next-line</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'index updated'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre></div><p>子组件 List.vue</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>ul<span class="token operator">></span>
            <span class="token operator">&lt;</span>li v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"item in list"</span> <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">"item.id"</span><span class="token operator">></span>
                <span class="token punctuation">{</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token punctuation">}</span>
                <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"deleteItem(item.id)"</span><span class="token operator">></span>删除<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">import</span> event <span class="token keyword">from</span> <span class="token string">'./event'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token comment">// props: ['list']</span>
    props<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// prop 类型和默认值</span>
        list<span class="token operator">:</span> <span class="token punctuation">{</span>
            type<span class="token operator">:</span> Array<span class="token punctuation">,</span>
            <span class="token keyword">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    methods<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">deleteItem</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'delete'</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">addTitleHandler</span><span class="token punctuation">(</span><span class="token parameter">title</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// eslint-disable-next-line</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'on add title'</span><span class="token punctuation">,</span> title<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// eslint-disable-next-line</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'list created'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// eslint-disable-next-line</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'list mounted'</span><span class="token punctuation">)</span>
        <span class="token comment">// 绑定自定义事件</span>
        event<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">'onAddTitle'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>addTitleHandler<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">beforeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// eslint-disable-next-line</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'list before update'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">updated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// eslint-disable-next-line</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'list updated'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 及时销毁，否则可能造成内存泄露</span>
        event<span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span><span class="token string">'onAddTitle'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>addTitleHandler<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre></div><p>另外一个子组件 Input.vue</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">"title"</span><span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"addTitle"</span><span class="token operator">></span>add<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">import</span> event <span class="token keyword">from</span> <span class="token string">'./event'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">''</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    methods<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">addTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 调用父组件的事件</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'add'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>title<span class="token punctuation">)</span>
            <span class="token comment">// 调用自定义事件</span>
            event<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'onAddTitle'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>title<span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">''</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre></div><p>以上，父子组件通讯是通过 props 和 $emit 来实现</p>
<p>兄弟间通讯则通过自定义事件 event.js，然后在子组件中分别引入 event.js</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
</code></pre></div></template>
