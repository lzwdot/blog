import{h as n}from"./app.4ca8afde.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var a="/blog/assets/react-20220127114343.6c0e2282.png",t="/blog/assets/react-20220127113413.b217e576.png";const p={},o=n(`<h1 id="redux-\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#redux-\u7684\u4F7F\u7528" aria-hidden="true">#</a> Redux \u7684\u4F7F\u7528</h1><p>\u77E5\u8BC6\u70B9</p><ul><li>\u57FA\u672C\u6982\u5FF5</li><li>\u5355\u9879\u6570\u636E\u6D41</li><li>react-redux</li><li>\u5F02\u6B65 action</li><li>\u4E2D\u95F4\u4EF6</li></ul><h2 id="\u57FA\u672C\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u6982\u5FF5" aria-hidden="true">#</a> \u57FA\u672C\u6982\u5FF5</h2><ul><li>store state</li><li>action</li><li>reducer</li></ul><p>\u5B98\u7F51\u4F8B\u5B50</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux&#39;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u8FD9\u662F\u4E00\u4E2A reducer\uFF0C\u5F62\u5F0F\u4E3A (state, action) =&gt; state \u7684\u7EAF\u51FD\u6570\u3002
 * \u63CF\u8FF0\u4E86 action \u5982\u4F55\u628A state \u8F6C\u53D8\u6210\u4E0B\u4E00\u4E2A state\u3002
 *
 * state \u7684\u5F62\u5F0F\u53D6\u51B3\u4E8E\u4F60\uFF0C\u53EF\u4EE5\u662F\u57FA\u672C\u7C7B\u578B\u3001\u6570\u7EC4\u3001\u5BF9\u8C61\u3001
 * \u751A\u81F3\u662F Immutable.js \u751F\u6210\u7684\u6570\u636E\u7ED3\u6784\u3002\u60DF\u4E00\u7684\u8981\u70B9\u662F
 * \u5F53 state \u53D8\u5316\u65F6\u9700\u8981\u8FD4\u56DE\u5168\u65B0\u7684\u5BF9\u8C61\uFF0C\u800C\u4E0D\u662F\u4FEE\u6539\u4F20\u5165\u7684\u53C2\u6570\u3002
 *
 * \u4E0B\u9762\u4F8B\u5B50\u4F7F\u7528 \`switch\` \u8BED\u53E5\u548C\u5B57\u7B26\u4E32\u6765\u505A\u5224\u65AD\uFF0C\u4F46\u4F60\u53EF\u4EE5\u5199\u5E2E\u52A9\u7C7B(helper)
 * \u6839\u636E\u4E0D\u540C\u7684\u7EA6\u5B9A\uFF08\u5982\u65B9\u6CD5\u6620\u5C04\uFF09\u6765\u5224\u65AD\uFF0C\u53EA\u8981\u9002\u7528\u4F60\u7684\u9879\u76EE\u5373\u53EF\u3002
 */</span>
<span class="token keyword">function</span> <span class="token function">counter</span><span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token string">&#39;INCREMENT&#39;</span><span class="token operator">:</span>
    <span class="token keyword">return</span> state <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token string">&#39;DECREMENT&#39;</span><span class="token operator">:</span>
    <span class="token keyword">return</span> state <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">default</span><span class="token operator">:</span>
    <span class="token keyword">return</span> state<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u521B\u5EFA Redux store \u6765\u5B58\u653E\u5E94\u7528\u7684\u72B6\u6001\u3002</span>
<span class="token comment">// API \u662F { subscribe, dispatch, getState }\u3002</span>
<span class="token keyword">let</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>counter<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u53EF\u4EE5\u624B\u52A8\u8BA2\u9605\u66F4\u65B0\uFF0C\u4E5F\u53EF\u4EE5\u4E8B\u4EF6\u7ED1\u5B9A\u5230\u89C6\u56FE\u5C42\u3002</span>
store<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u6539\u53D8\u5185\u90E8 state \u60DF\u4E00\u65B9\u6CD5\u662F dispatch \u4E00\u4E2A action\u3002</span>
<span class="token comment">// action \u53EF\u4EE5\u88AB\u5E8F\u5217\u5316\uFF0C\u7528\u65E5\u8BB0\u8BB0\u5F55\u548C\u50A8\u5B58\u4E0B\u6765\uFF0C\u540E\u671F\u8FD8\u53EF\u4EE5\u4EE5\u56DE\u653E\u7684\u65B9\u5F0F\u6267\u884C</span>
store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;INCREMENT&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1</span>
store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;INCREMENT&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2</span>
store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;DECREMENT&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1</span>
</code></pre></div><blockquote><p>\u57FA\u672C\u4F8B\u5B50\uFF1Ahttps://redux.js.org/introduction/getting-started#basic-example</p></blockquote><h2 id="\u5355\u9879\u6570\u636E\u6D41\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u5355\u9879\u6570\u636E\u6D41\u6982\u8FF0" aria-hidden="true">#</a> \u5355\u9879\u6570\u636E\u6D41\u6982\u8FF0</h2><ul><li>dispatch(action)</li><li>reducer -&gt; newState</li><li>subscribe \u89E6\u53D1\u901A\u77E5</li></ul><p><img src="`+a+`" alt="react"></p><h2 id="react-redux" tabindex="-1"><a class="header-anchor" href="#react-redux" aria-hidden="true">#</a> react-redux</h2><ul><li><code>&lt;Provider&gt;</code></li><li>connect</li><li>mapStateToProps mapDispatchToProps</li></ul><p>\u7B80\u5355\u793A\u4F8B</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>Provider<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>createStore<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux&#39;</span>
<span class="token keyword">import</span> todoApp <span class="token keyword">from</span> <span class="token string">&#39;./reducers&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./components/App&#39;</span>

<span class="token keyword">let</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>todoApp<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Provider store<span class="token operator">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>App<span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Provider<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>\u5B8C\u6574\u4EE3\u7801\uFF1Ahttps://github.com/reduxjs/redux/tree/master/examples/todos/src</p></blockquote><h2 id="\u5F02\u6B65-action" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65-action" aria-hidden="true">#</a> \u5F02\u6B65 action</h2><p>\u540C\u6B65 action</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u540C\u6B65 action</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">addTodo</span> <span class="token operator">=</span> <span class="token parameter">text</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8FD4\u56DE action \u5BF9\u8C61</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;ADD_TODO&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> nextTodoId<span class="token operator">++</span><span class="token punctuation">,</span>
    text
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5F02\u6B65 action\uFF0C\u5FC5\u987B\u914D\u5408 redux-thunk \u7B49\u4E2D\u95F4\u4EF6\uFF0C\u5E38\u7528\u7684\u6709</p><ul><li>redux-thunk</li><li>redux-promise</li><li>redux-saga</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>createStore<span class="token punctuation">,</span>applyMiddleware<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux&#39;</span>
<span class="token keyword">import</span> thunk <span class="token keyword">from</span> <span class="token string">&quot;redux-thunk&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> rootReducer <span class="token keyword">from</span> <span class="token string">&#39;./reducers&#39;</span>

<span class="token comment">// \u5F02\u6B65 action\uFF0C\u9700\u8981\u5F15\u5165\u4E2D\u95F4\u4EF6 redux-thunk</span>
<span class="token keyword">let</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>rootReducer<span class="token punctuation">,</span><span class="token function">applyMiddleware</span><span class="token punctuation">(</span>thunk<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//-----------------</span>

<span class="token comment">// \u5F02\u6B65 action</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">addTodoAsync</span> <span class="token operator">=</span> <span class="token parameter">text</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8FD4\u56DE\u51FD\u6570\uFF0C\u5176\u4E2D\u6709 dispatch \u53C2\u6570</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">dispatch</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token comment">// ajax \u5F02\u6B65\u83B7\u53D6\u6570\u636E</span>
    <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
      <span class="token comment">// \u6267\u884C\u5F02\u6B65 action</span>
      <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">addTodo</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u4E2D\u95F4\u4EF6\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u95F4\u4EF6\u539F\u7406" aria-hidden="true">#</a> \u4E2D\u95F4\u4EF6\u539F\u7406</h2><p>\u5728 dispatch \u4E2D\u52A0\u4E2D\u95F4\u4EF6</p><p><img src="`+t+`" alt="react"></p><p>\u4F8B\u5B50</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>createStore<span class="token punctuation">,</span>applyMiddleware<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux&#39;</span>
<span class="token keyword">import</span> thunk <span class="token keyword">from</span> <span class="token string">&quot;redux-thunk&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> rootReducer <span class="token keyword">from</span> <span class="token string">&#39;./reducers&#39;</span>

<span class="token keyword">const</span> logger <span class="token operator">=</span> <span class="token function">createLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u5F02\u6B65 action\uFF0C\u9700\u8981\u5F15\u5165\u4E2D\u95F4\u4EF6 redux-thunk</span>
<span class="token keyword">let</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>rootReducer<span class="token punctuation">,</span><span class="token function">applyMiddleware</span><span class="token punctuation">(</span>thunk<span class="token punctuation">,</span>logger<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//-----------------------------</span>

<span class="token comment">// \u81EA\u5DF1\u4FEE\u6539 dispatch\uFF0C\u589E\u52A0 logger</span>
<span class="token keyword">let</span> next <span class="token operator">=</span> store<span class="token punctuation">.</span>dispatch
store<span class="token punctuation">.</span><span class="token function-variable function">dispatch</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">dispatchAndLog</span><span class="token punctuation">(</span><span class="token parameter">action</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;dispatching&#39;</span><span class="token punctuation">,</span>action<span class="token punctuation">)</span>
  <span class="token function">next</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;next state&#39;</span><span class="token punctuation">,</span>store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,27);function e(c,l){return o}var k=s(p,[["render",e]]);export{k as default};
