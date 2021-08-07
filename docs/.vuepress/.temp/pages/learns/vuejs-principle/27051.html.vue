<template><h1 id="vue-模板编译" tabindex="-1"><a class="header-anchor" href="#vue-模板编译" aria-hidden="true">#</a> Vue 模板编译</h1>
<p>with 语法</p>
<ul>
<li>前置知识：JS 的 with 语法</li>
<li>vue template complier 将模板编译为 render 函数</li>
<li>执行 render 函数生成 vnode</li>
</ul>
<p>with 语法，不推荐使用</p>
<ul>
<li>改变 {} 内自由变量的查找规则，当做 obj 的属性来查找</li>
<li>如果找不到匹配的 obj 属性，就会报错</li>
<li>with 要慎用，它打破了作用域规则，易读性变差</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>a<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>a<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>b<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>c<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
<span class="token comment">// 使用 with，能改变 {} 内自由变量的查找方式</span>
<span class="token comment">// 将 {} 内自由变量，当做 obj 的属性来查找</span>
<span class="token keyword">with</span> <span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment">// 报错</span>
<span class="token punctuation">}</span> 
</code></pre></div><p>模板编译</p>
<ul>
<li>模板不是 html，有指令，插值，JS 表达式，能实现判断，循环</li>
<li>html 是标签语言，只有 JS 才能实现判断，循环（图灵完备的）</li>
<li>因此，模板一定是转换成某种 JS 代码，即编译模板</li>
</ul>
<p>代码演示，需要引入 vue-template-compiler</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> compiler <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'vue-template-compiler'</span><span class="token punctuation">)</span>
<span class="token comment">// 插值</span>
<span class="token comment">// const template = `&lt;p>{{message}}&lt;/p>`</span>
<span class="token comment">// with(this){return createElement('p',[createTextVNode(toString(message))])}</span>
<span class="token comment">// h -> vnode</span>
<span class="token comment">// createElement -> vnode</span>
<span class="token comment">// 表达式</span>
<span class="token comment">// const template = `&lt;p>{{flag ? message : 'no message found'}}&lt;/p>`</span>
<span class="token comment">// with(this){return _c('p',[_v(_s(flag ? message : 'no message found'))])}</span>
<span class="token comment">// 属性和动态属性</span>
<span class="token comment">// const template = `</span>
<span class="token comment">//     &lt;div id="div1" class="container"></span>
<span class="token comment">//         &lt;img :src="imgUrl"/></span>
<span class="token comment">//     &lt;/div></span>
<span class="token comment">// `</span>
<span class="token comment">// with(this){return _c('div',</span>
<span class="token comment">//      {staticClass:"container",attrs:{"id":"div1"}},</span>
<span class="token comment">//      [</span>
<span class="token comment">//          _c('img',{attrs:{"src":imgUrl}})])}</span>
<span class="token comment">// 条件</span>
<span class="token comment">// const template = `</span>
<span class="token comment">//     &lt;div></span>
<span class="token comment">//         &lt;p v-if="flag === 'a'">A&lt;/p></span>
<span class="token comment">//         &lt;p v-else>B&lt;/p></span>
<span class="token comment">//     &lt;/div></span>
<span class="token comment">// `</span>
<span class="token comment">// with(this){return _c('div',[(flag === 'a')?_c('p',[_v("A")]):_c('p',[_v("B")])])}</span>
<span class="token comment">// 循环</span>
<span class="token comment">// const template = `</span>
<span class="token comment">//     &lt;ul></span>
<span class="token comment">//         &lt;li v-for="item in list" :key="item.id">{{item.title}}&lt;/li></span>
<span class="token comment">//     &lt;/ul></span>
<span class="token comment">// `</span>
<span class="token comment">// with(this){return _c('ul',_l((list),function(item){return _c('li',{key:item.id},[_v(_s(item.title))])}),0)}</span>
<span class="token comment">// 事件</span>
<span class="token comment">// const template = `</span>
<span class="token comment">//     &lt;button @click="clickHandler">submit&lt;/button></span>
<span class="token comment">// `</span>
<span class="token comment">// with(this){return _c('button',{on:{"click":clickHandler}},[_v("submit")])}</span>
<span class="token comment">// v-model</span>
<span class="token comment">// const template = `&lt;input type="text" v-model="name">`</span>
<span class="token comment">// 主要看 input 事件</span>
<span class="token comment">// with(this){return _c('input',{directives:[{name:"model",rawName:"v-model",value:(name),expression:"name"}],attrs:{"type":"text"},domProps:{"value":(name)},on:{"input":function($event){if($event.target.composing)return;name=$event.target.value}}})}</span>
<span class="token comment">// render 函数</span>
<span class="token comment">// 返回 vnode</span>
<span class="token comment">// patch</span>
<span class="token comment">// 编译</span>
<span class="token keyword">const</span> res <span class="token operator">=</span> compiler<span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span>template<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>render<span class="token punctuation">)</span>
<span class="token comment">// ---------------分割线--------------</span>
<span class="token comment">// // 从 vue 源码中找到缩写函数的含义</span>
<span class="token comment">// function installRenderHelpers (target) {</span>
<span class="token comment">//     target._o = markOnce;</span>
<span class="token comment">//     target._n = toNumber;</span>
<span class="token comment">//     target._s = toString;</span>
<span class="token comment">//     target._l = renderList;</span>
<span class="token comment">//     target._t = renderSlot;</span>
<span class="token comment">//     target._q = looseEqual;</span>
<span class="token comment">//     target._i = looseIndexOf;</span>
<span class="token comment">//     target._m = renderStatic;</span>
<span class="token comment">//     target._f = resolveFilter;</span>
<span class="token comment">//     target._k = checkKeyCodes;</span>
<span class="token comment">//     target._b = bindObjectProps;</span>
<span class="token comment">//     target._v = createTextVNode;</span>
<span class="token comment">//     target._e = createEmptyVNode;</span>
<span class="token comment">//     target._u = resolveScopedSlots;</span>
<span class="token comment">//     target._g = bindObjectListeners;</span>
<span class="token comment">//     target._d = bindDynamicKeys;</span>
<span class="token comment">//     target._p = prependModifier;</span>
<span class="token comment">// } </span>
</code></pre></div><ul>
<li>模板编译为 render 函数，执行 render 函数返回 vnode</li>
<li>基于 vnode 再执行 patch 和 diff</li>
<li>使用 webpack vue-loader，会在开发环境下编译模板（重要）</li>
</ul>
</template>
