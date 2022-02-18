import{h as a}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const n={},p=a(`<h1 id="css\u5C5E\u6027white-space\u3001word-wrap\u548Cword-break" tabindex="-1"><a class="header-anchor" href="#css\u5C5E\u6027white-space\u3001word-wrap\u548Cword-break" aria-hidden="true">#</a> css\u5C5E\u6027white-space\u3001word-wrap\u548Cword-break</h1><p>\u6709\u65F6\u4F1A\u7528\u5230\u6587\u672C\u6362\u884C\uFF0C\u4F46\u65B0\u589E\u4E86css3\u7684\u5C5E\u6027\uFF0C\u5BFC\u81F4\u50BB\u50BB\u5206\u4E0D\u6E05\u695A\uFF0C\u603B\u7ED3\u4E0Bwhite-space\u3001word-wrap\u548Cword-break\u4F7F\u7528</p><h3 id="white-space" tabindex="-1"><a class="header-anchor" href="#white-space" aria-hidden="true">#</a> white-space</h3><p>\u5982\u4F55\u5904\u7406\u6587\u672C\u4E2D\u7684\u7A7A\u767D\u7B26\uFF08\u6BD4\u5982\u7A7A\u683C\u548C\u6362\u884C\u7B26\uFF09\u3002</p><blockquote><p>\u5E38\u7528:normal | nowrap</p></blockquote><ul><li>normal \u9ED8\u8BA4\u3002\u7A7A\u767D\u4F1A\u88AB\u6D4F\u89C8\u5668\u5FFD\u7565\u3002</li><li>nowrap \u6587\u672C\u4E0D\u4F1A\u6362\u884C\uFF0C\u6587\u672C\u4F1A\u5728\u5728\u540C\u4E00\u884C\u4E0A\u7EE7\u7EED\uFF0C\u76F4\u5230\u9047\u5230\u6807\u7B7E\u4E3A\u6B62\u3002</li></ul><p>\u5E38\u7528\u573A\u666F\uFF1A\u5355\u884C\u6587\u672C\u6EA2\u51FA\u4F7F\u7528\u7701\u7565\u53F7\u4EE3\u66FF</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">.</span>css<span class="token punctuation">{</span>
    text<span class="token operator">-</span>overflow<span class="token operator">:</span>ellipsis<span class="token punctuation">;</span>
    white<span class="token operator">-</span>space<span class="token operator">:</span>nowrap<span class="token punctuation">;</span>
    <span class="token literal-property property">overflow</span><span class="token operator">:</span>hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre></div><p>\u5173\u4E8E\u591A\u884C\u6587\u672C\u6EA2\u51FA\u4F7F\u7528\u7701\u7565\u53F7\u4EE3\u66FF\uFF0C\u5219\u5229\u7528-webkit-line-clamp\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">.</span>css<span class="token punctuation">{</span>
    <span class="token literal-property property">overflow</span><span class="token operator">:</span> hidden<span class="token punctuation">;</span>
    text<span class="token operator">-</span>overflow<span class="token operator">:</span> ellipsis<span class="token punctuation">;</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token operator">-</span>webkit<span class="token operator">-</span>box<span class="token punctuation">;</span>
    <span class="token operator">-</span>webkit<span class="token operator">-</span>line<span class="token operator">-</span>clamp<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token operator">-</span>webkit<span class="token operator">-</span>box<span class="token operator">-</span>orient<span class="token operator">:</span> vertical<span class="token punctuation">;</span>
    <span class="token comment">/*\u82F1\u6587\u5F3A\u5236\u6362\u884C*/</span>
    word<span class="token operator">-</span>wrap<span class="token operator">:</span><span class="token keyword">break</span><span class="token operator">-</span>word<span class="token punctuation">;</span>
    word<span class="token operator">-</span><span class="token keyword">break</span><span class="token operator">:</span><span class="token keyword">break</span><span class="token operator">-</span>all<span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre></div><p>\u603B\u7ED3\uFF1Awhite-space\u7528\u6765\u8BBE\u7F6ECJK(\u4E2D\u6587\u3001\u65E5\u6587\u3001\u97E9\u6587)\u6587\u672C\u662F\u5426\u4E0D\u6298\u884C\uFF0C\u5B9E\u9645\u4E2D\u5927\u591A\u662F\u8981\u7528white-space:nowrap\u6765\u8BA9\u6587\u672C\u4E0D\u6298\u884C\u3002</p><h3 id="word-wrap" tabindex="-1"><a class="header-anchor" href="#word-wrap" aria-hidden="true">#</a> word-wrap</h3><p>css3\u5C5E\u6027\uFF0C\u5141\u8BB8\u957F\u5355\u8BCD\u6216 URL \u5730\u5740\u6362\u884C\u5230\u4E0B\u4E00\u884C\u3002</p><blockquote><p>\u5E38\u7528:normal | break-word</p></blockquote><ul><li>normal \u53EA\u5728\u5141\u8BB8\u7684\u65AD\u5B57\u70B9\u6362\u884C\uFF08\u6D4F\u89C8\u5668\u4FDD\u6301\u9ED8\u8BA4\u5904\u7406\uFF09\u3002</li><li>break-word \u5728\u957F\u5355\u8BCD\u6216 URL \u5730\u5740\u5185\u90E8\u8FDB\u884C\u6362\u884C\u3002</li></ul><p>\u603B\u7ED3\uFF1Aword-wrap\u7528\u6765\u8BBE\u7F6E\u975ECJK\u6587\u672C\u662F\u5426\u6298\u884C\uFF08\u56E0\u4E3ACJK\u6587\u672C\u4F1A\u81EA\u52A8\u6298\u884C\uFF09\uFF0C\u5982\u679C\u7A7A\u95F4\u8DB3\u591F\uFF0C\u4E0D\u4F1A\u5BF9\u5355\u8BCD\u5185\u90E8\u8FDB\u884C\u622A\u65AD</p><h3 id="word-break" tabindex="-1"><a class="header-anchor" href="#word-break" aria-hidden="true">#</a> word-break</h3><p>css3\u5C5E\u6027\uFF0C\u89C4\u5B9A\u81EA\u52A8\u6362\u884C\u7684\u5904\u7406\u65B9\u6CD5\u3002</p><blockquote><p>\u5E38\u7528:normal | break-all | keep-all</p></blockquote><ul><li>normal \u4F7F\u7528\u6D4F\u89C8\u5668\u9ED8\u8BA4\u7684\u6362\u884C\u89C4\u5219\u3002</li><li>break-all \u5141\u8BB8\u5728\u5355\u8BCD\u5185\u6362\u884C\u3002</li><li>keep-all \u53EA\u80FD\u5728\u534A\u89D2\u7A7A\u683C\u6216\u8FDE\u5B57\u7B26\u5904\u6362\u884C\u3002</li></ul><p>\u603B\u7ED3\uFF1Aword-break\u7528\u6765\u8BBE\u7F6E\u975ECJK\u6587\u672C\u662F\u5426\u6298\u884C\uFF0C\u53EF\u4EE5\u4F7F\u7528break-all\u5BF9\u5355\u8BCD\u5185\u90E8\u8FDB\u884C\u6298\u884C</p><blockquote><p>PS:\u5982\u679C\u7528\u4E86white-space\u4E3Anowrap\uFF0C\u8BBE\u7F6E\u5176\u4ED6\u7684\u5F3A\u5236\u6298\u884C\uFF08word-break\uFF09\u662F\u4E0D\u8D77\u4F5C\u7528\u7684\uFF0C\u8981\u5C06white-space\u8BBE\u7F6E\u4E3Anormal</p></blockquote>`,22);function e(o,r){return p}var c=s(n,[["render",e]]);export{c as default};
