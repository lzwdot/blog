<template><h1 id="vue-虚拟-dom-核心-diff-算法" tabindex="-1"><a class="header-anchor" href="#vue-虚拟-dom-核心-diff-算法" aria-hidden="true">#</a> Vue 虚拟 DOM 核心 diff 算法</h1>
<p>diff 算法概述</p>
<ul>
<li>diff 即对比，是一个广泛的概念，如 linux diff 命令，git diff 等</li>
<li>两个 js 对象也可以做 diff，如：<a href="https://github.com/cujojs/jiff" target="_blank" rel="noopener noreferrer">https://github.com/cujojs/jiff<OutboundLink/></a></li>
<li>两颗树做 diff，如这里的 vdom diff</li>
</ul>
<p><img src="@source/learns/vuejs-principle/images/938785213.png" alt=""></p>
<p>树 diff 的时间复杂度 O(n^3)</p>
<ul>
<li>第一，遍历 tree1；第二，遍历 tree2</li>
<li>第三，排序</li>
<li>1000 个节点，需要计算 1 亿次，算法不可用</li>
</ul>
<p>优化时间复杂度到 O(n)，采用的措施</p>
<ul>
<li>只比较同一层级，不跨级比较</li>
<li>tag 不相同，则直接删除重建，不再深度比较</li>
<li>tag 和 key，两者都相同，则认为相同节点，不再深度比较</li>
</ul>
<p><img src="@source/learns/vuejs-principle/images/1591454408.png" alt=""><br>
<img src="@source/learns/vuejs-principle/images/3283063539.png" alt=""></p>
</template>
