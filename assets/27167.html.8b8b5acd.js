import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="proxy-\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#proxy-\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> Proxy \u57FA\u672C\u4F7F\u7528</h1><p>\u56DE\u987E Object.defineProperty \u7F3A\u70B9</p><ul><li>\u6DF1\u5EA6\u76D1\u542C\uFF0C\u9700\u8981\u9012\u5F52\u5230\u5E95\uFF0C\u4E00\u6B21\u6027\u8BA1\u7B97\u91CF\u5927</li><li>\u65E0\u6CD5\u76D1\u542C\u65B0\u589E\u5C5E\u6027/\u5220\u9664\u5C5E\u6027\uFF08Vue.set Vue.delete\uFF09</li><li>\u65E0\u6CD5\u539F\u751F\u76D1\u542C\u6570\u7EC4\uFF0C\u9700\u8981\u7279\u6B8A\u5904\u7406</li></ul><p>Proxy \u57FA\u672C\u4F7F\u7528</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// const data = {</span>
<span class="token comment">//     name: &#39;zhangsan&#39;,</span>
<span class="token comment">//     age: 20</span>
<span class="token comment">// }</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> proxyData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u6539\u8FDB</span>
        <span class="token comment">// \u53EA\u5904\u7406\u672C\u8EAB\uFF08\u975E\u539F\u578B\u7684\uFF09\u5C5E\u6027</span>
        <span class="token keyword">const</span> ownKeys <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">ownKeys</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>ownKeys<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token comment">// \u76D1\u542C</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">const</span> result <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span>
        <span class="token keyword">return</span> result <span class="token comment">// \u8FD4\u56DE\u7ED3\u679C</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> val<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u6539\u8FDB</span>
        <span class="token comment">// \u91CD\u590D\u7684\u6570\u636E\uFF0C\u4E0D\u5904\u7406</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">===</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">const</span> result <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> val<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;set&#39;</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> val<span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;result&#39;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span>
        <span class="token keyword">return</span> result <span class="token comment">// \u662F\u5426\u8BBE\u7F6E\u6210\u529F</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">deleteProperty</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> result <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">deleteProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;delete property&#39;</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;result&#39;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span>
        <span class="token keyword">return</span> result <span class="token comment">// \u662F\u5426\u5220\u9664\u6210\u529F</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// proxyData.age</span>
<span class="token comment">// // get age</span>
<span class="token comment">//</span>
<span class="token comment">// proxyData.age = 30</span>
<span class="token comment">// // set age 30</span>
<span class="token comment">// // result true</span>
<span class="token comment">//</span>
<span class="token comment">// delete proxyData.age</span>
<span class="token comment">// // delete property age</span>
<span class="token comment">// // result true</span>
<span class="token comment">// proxyData.push(&#39;d&#39;)</span>
<span class="token comment">// get push</span>
<span class="token comment">// get length</span>
<span class="token comment">// set 3 d</span>
<span class="token comment">// result true</span>
<span class="token comment">// set length 4</span>
<span class="token comment">// result true</span>
<span class="token comment">// \u6539\u8FDB\u540E</span>
proxyData<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;d&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// get length</span>
<span class="token comment">// set 3 d</span>
<span class="token comment">// result true</span>
</code></pre></div><p>Reflect \u4F5C\u7528</p><ul><li>\u548C Proxy \u80FD\u529B\u4E00\u4E00\u5BF9\u5E94</li><li>\u89C4\u8303\u5316\uFF0C\u6807\u51C6\u5316\uFF0C\u51FD\u6570\u5316</li><li>\u66FF\u4EE3\u6389 Object \u4E0A\u7684\u5DE5\u5177\u51FD\u6570</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">}</span>
<span class="token comment">// \u5224\u65AD a \u5728 obj \u4E2D\u7684\u65B9\u6CD5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span> <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token comment">// \u770B\u8D77\u6765\u66F4\u8212\u670D</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Reflect<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token comment">// \u5220\u9664\u6570\u636E</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">delete</span> obj<span class="token punctuation">.</span>a<span class="token punctuation">)</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Reflect<span class="token punctuation">.</span><span class="token function">deleteProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
obj<span class="token punctuation">.</span>a<span class="token operator">=</span><span class="token number">300</span>
obj<span class="token punctuation">.</span>b<span class="token operator">=</span><span class="token number">400</span>
<span class="token comment">// \u53EF\u4EE5\u66FF\u6362 Object \u51FD\u6570</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// [&quot;a&quot;, &quot;b&quot;]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Reflect<span class="token punctuation">.</span><span class="token function">ownKeys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// [&quot;a&quot;, &quot;b&quot;]</span>
</code></pre></div>`,8);function p(o,e){return t}var u=s(a,[["render",p]]);export{u as default};
