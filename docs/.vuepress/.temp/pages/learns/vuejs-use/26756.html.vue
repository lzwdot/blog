<template><h1 id="vue-事件" tabindex="-1"><a class="header-anchor" href="#vue-事件" aria-hidden="true">#</a> Vue 事件</h1>
<p>如何传递event 参数，自定义参数，【观察】事件被绑定到哪里？</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span>num<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"increment1"</span><span class="token operator">></span><span class="token operator">+</span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
        <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"increment2(2, $event)"</span><span class="token operator">></span><span class="token operator">+</span><span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            num<span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    methods<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">increment1</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// eslint-disable-next-line</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'event'</span><span class="token punctuation">,</span> event<span class="token punctuation">,</span> event<span class="token punctuation">.</span><span class="token class-name">__proto__</span><span class="token punctuation">.</span>constructor<span class="token punctuation">)</span> <span class="token comment">// 是原生的 event 对象</span>
            <span class="token comment">// eslint-disable-next-line</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">)</span>
            <span class="token comment">// eslint-disable-next-line</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>currentTarget<span class="token punctuation">)</span> <span class="token comment">// 注意，事件是被注册到当前元素的，和 React 不一样</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>num<span class="token operator">++</span>
            <span class="token comment">// 1. event 是原生的</span>
            <span class="token comment">// 2. 事件被挂载到当前元素</span>
            <span class="token comment">// 和 DOM 事件一样</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">increment2</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// eslint-disable-next-line</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token operator">+</span> val
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">loadHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// do some thing</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'load'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>loadHandler<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//【注意】用 vue 绑定的事件，组建销毁时会自动被解绑</span>
        <span class="token comment">// 自己绑定的事件，需要自己销毁！！！</span>
        window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'load'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>loadHandler<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre></div><p>事件修饰符</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 阻止单击事件继续传播 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>a v<span class="token operator">-</span>on<span class="token operator">:</span>click<span class="token punctuation">.</span>stop<span class="token operator">=</span><span class="token string">"doThis"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 提交事件不再重载页面 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>form v<span class="token operator">-</span>on<span class="token operator">:</span>submit<span class="token punctuation">.</span>prevent<span class="token operator">=</span><span class="token string">"onSubmit"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 修饰符可以串联 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>a v<span class="token operator">-</span>on<span class="token operator">:</span>click<span class="token punctuation">.</span>stop<span class="token punctuation">.</span>prevent<span class="token operator">=</span><span class="token string">"doThat"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 只有修饰符 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>form v<span class="token operator">-</span>on<span class="token operator">:</span>submit<span class="token punctuation">.</span>prevent<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 添加事件监听器时使用事件捕获模式 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>div v<span class="token operator">-</span>on<span class="token operator">:</span>click<span class="token punctuation">.</span>capture<span class="token operator">=</span><span class="token string">"doThis"</span><span class="token operator">></span><span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 只当在 event<span class="token punctuation">.</span>target 是当前元素自身时触发处理函数 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 即事件不是从内部元素触发的 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>div v<span class="token operator">-</span>on<span class="token operator">:</span>click<span class="token punctuation">.</span>self<span class="token operator">=</span><span class="token string">"doThat"</span><span class="token operator">></span><span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre></div><p>按键修饰符</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 即使 Alt 或 Shift 被一同按下时也会触发 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>button v<span class="token operator">-</span>on<span class="token operator">:</span>click<span class="token punctuation">.</span>ctrl<span class="token operator">=</span><span class="token string">"onClick"</span><span class="token operator">></span><span class="token constant">A</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 有且只有 Ctrl 被按下的时候才触发 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>button v<span class="token operator">-</span>on<span class="token operator">:</span>click<span class="token punctuation">.</span>ctrl<span class="token punctuation">.</span>exact<span class="token operator">=</span><span class="token string">"onCtrlClick"</span><span class="token operator">></span><span class="token constant">A</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 没有任何系统修饰符被按下的时候才触发 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>button v<span class="token operator">-</span>on<span class="token operator">:</span>click<span class="token punctuation">.</span>exact<span class="token operator">=</span><span class="token string">"onClick"</span><span class="token operator">></span><span class="token constant">A</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
</code></pre></div></template>
