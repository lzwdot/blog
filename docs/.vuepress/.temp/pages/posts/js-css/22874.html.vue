<template><h1 id="domcontentloaded与load的区别" tabindex="-1"><a class="header-anchor" href="#domcontentloaded与load的区别" aria-hidden="true">#</a> DOMContentLoaded与load的区别</h1>
<p>DOMContentLoaded：当文档中没有脚本时，浏览器解析完文档便能触发 DOMContentLoaded 事件；如果文档中包含脚本，则脚本会阻塞文档的解析，而脚本需要等位于脚本前面的css加载完才能执行。在任何情况下，DOMContentLoaded 的触发不需要等待图片等其他资源加载完成。</p>
<p>load：页面上所有的资源（图片，音频，视频等）被加载以后才会触发load事件，简单来说，页面的load事件会在DOMContentLoaded被触发之后才触发。</p>
<p>可以看看这篇文章，解释的更为清楚：</p>
<p><a href="https://www.cnblogs.com/caizhenbo/p/6679478.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/caizhenbo/p/6679478.html<OutboundLink/></a></p>
</template>
