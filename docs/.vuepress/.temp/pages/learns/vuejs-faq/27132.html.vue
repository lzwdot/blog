<template><h1 id="双向数据绑定-v-model-的实现原理" tabindex="-1"><a class="header-anchor" href="#双向数据绑定-v-model-的实现原理" aria-hidden="true">#</a> 双向数据绑定 v-model 的实现原理</h1>
<p>大概</p>
<ul>
<li>input 元素的 value = this.name</li>
<li>绑定 input 事件 this.name = $event.target.value</li>
<li>data 更新触发 re-render</li>
</ul>
<p>/archives/26879</p>
</template>
