import { defineClientAppEnhance } from '@vuepress/client'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

// 监控
import * as fundebug from "fundebug-javascript";
import fundebugVue from "fundebug-vue";
fundebug.apikey = "7f066c99228ca076b3eaed18791d7966a36e205f61c9762c7f803015a9454ace"


export default defineClientAppEnhance(({ app, router, siteData }) => {
    // 使用 Element UI Vuejs 3.x 版本
    app.use(ElementPlus) 
    
    // 监控
    fundebugVue(fundebug, app);

    // 路由切换事件处理
    router.beforeEach((to, from, next) => {
        // console.log("切换路由", to.fullPath, from.fullPath);

        // 触发百度的pv统计
        if (typeof _hmt != "undefined") {
            if (to.path) {
                _hmt.push(["_trackPageview", to.fullPath]);
                // console.log("百度统计", to.fullPath);
            }
        }

        // 继续执行
        next();
    });
})