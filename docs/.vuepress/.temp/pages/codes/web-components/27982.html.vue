<template><h1 id="web-components-示例" tabindex="-1"><a class="header-anchor" href="#web-components-示例" aria-hidden="true">#</a> Web Components 示例</h1>
<HtmlDemo>
<div class="language-html ext-html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 自定义组件使用 image,name,email 类似 vue 的值绑定 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>user-card</span> 
<span class="token attr-name">image</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//semantic-ui.com/./images/avatar2/large/kristy.png<span class="token punctuation">"</span></span> 
<span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>User Name<span class="token punctuation">"</span></span>
<span class="token attr-name">email</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>yourmail@some-email.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>user-card</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 类似 vue template模板 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userCardTemplate<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Follow John<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 样式写在这里面可以保持私有 类似 vue 中的 scope --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
        <span class="token selector">:host</span> <span class="token punctuation">{</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 450px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 180px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #d4d4d4<span class="token punctuation">;</span>
            <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #d5d5d5<span class="token punctuation">;</span>
            <span class="token property">box-shadow</span><span class="token punctuation">:</span> 1px 1px 5px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
            <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
            <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">'Poppins'</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.image</span> <span class="token punctuation">{</span>
            <span class="token property">flex</span><span class="token punctuation">:</span> 0 0 auto<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 160px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 160px<span class="token punctuation">;</span>
            <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.container</span> <span class="token punctuation">{</span>
            <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 160px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.container>.name</span> <span class="token punctuation">{</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
            <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>
            <span class="token property">line-height</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.container>.email</span> <span class="token punctuation">{</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
            <span class="token property">opacity</span><span class="token punctuation">:</span> 0.75<span class="token punctuation">;</span>
            <span class="token property">line-height</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.container>.button</span> <span class="token punctuation">{</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 10px 25px<span class="token punctuation">;</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
            <span class="token property">text-transform</span><span class="token punctuation">:</span> uppercase<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">class</span> <span class="token class-name">UserCard</span> <span class="token keyword">extends</span> <span class="token class-name">HTMLElement</span> <span class="token punctuation">{</span>
        <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

            <span class="token comment">// js 传统写法    </span>
            <span class="token comment">// var image = document.createElement('img');</span>
            <span class="token comment">// image.src = 'https://semantic-ui.com/./images/avatar2/large/kristy.png';</span>
            <span class="token comment">// image.classList.add('image');</span>

            <span class="token comment">// var container = document.createElement('div');</span>
            <span class="token comment">// container.classList.add('container');</span>

            <span class="token comment">// var name = document.createElement('p');</span>
            <span class="token comment">// name.classList.add('name');</span>
            <span class="token comment">// name.innerText = 'User Name';</span>

            <span class="token comment">// var email = document.createElement('p');</span>
            <span class="token comment">// email.classList.add('email');</span>
            <span class="token comment">// email.innerText = 'yourmail@some-email.com';</span>

            <span class="token comment">// var button = document.createElement('button');</span>
            <span class="token comment">// button.classList.add('button');</span>
            <span class="token comment">// button.innerText = 'Follow';</span>

            <span class="token comment">// container.append(name, email, button);</span>
            <span class="token comment">// this.append(image, container);</span>

            <span class="token comment">// shadow 主要保证功能或者样式的私有，而不用担心污染其他功能或者样式。</span>
            <span class="token keyword">const</span> shadow <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">attachShadow</span><span class="token punctuation">(</span><span class="token punctuation">{</span> mode<span class="token operator">:</span> <span class="token string">'closed'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//使用 closed 无法通过this.shadowRoot获取</span>

            <span class="token comment">// 获取 template</span>
            <span class="token keyword">const</span> userCardTemplate <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'userCardTemplate'</span><span class="token punctuation">)</span>

            <span class="token comment">// clone template 内容 这个模板可能还要留给其他实例使用</span>
            <span class="token keyword">const</span> content <span class="token operator">=</span> userCardTemplate<span class="token punctuation">.</span>content<span class="token punctuation">.</span><span class="token function">cloneNode</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>

            <span class="token comment">// 类似 vue prop 接收值，并赋值</span>
            content<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'img'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'src'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">'image'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            content<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.container>.name'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            content<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.container>.email'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">'email'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 内容添加到 shadow dom 中</span>
            shadow<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 注册自定义组件</span>
    window<span class="token punctuation">.</span>customElements<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">'user-card'</span><span class="token punctuation">,</span> UserCard<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div></HtmlDemo></template>
