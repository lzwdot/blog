<template><h1 id="为何在-v-for-中用-key" tabindex="-1"><a class="header-anchor" href="#为何在-v-for-中用-key" aria-hidden="true">#</a> 为何在 v-for 中用 key</h1>
<p>原因</p>
<ul>
<li>必须用 key，且不能是 index 和 random</li>
<li>diff 算法中通过 tag 和 key 来判断，是否是 sameNode</li>
<li>减少渲染次数，提升渲染性能</li>
</ul>
</template>
