import Vue from 'vue'
import App from './App.vue'

// 样式导入
import "../components/css/index.scss";
import mtUtils from "../components/lib/utils/index";
Vue.prototype.$watermark = mtUtils.watermark;
Vue.prototype.$toast = mtUtils.toast;
Vue.prototype.$formatDate = mtUtils.formatDate;
Vue.prototype.$isEmpty = mtUtils.isEmpty;

// examples页面使用需全局导入组件
import mtBox from "../components/lib/mt-box/index.js"

Vue.component("mtBox", mtBox)
Vue.use(mtBox)

import mtText from "../components/lib/mt-text/index.js"

Vue.component("mtText", mtText)
Vue.use(mtText)

import mtButton from "../components/lib/mt-button/index.js"

Vue.component("mtButton", mtButton)
Vue.use(mtButton)

import mtTag from "../components/lib/mt-tag/index.js"

Vue.component("mtTag", mtTag)
Vue.use(mtTag)

import mtGrid from "../components/lib/mt-grid/index.js"

Vue.component("mtGrid", mtGrid)
Vue.use(mtGrid)


Vue.config.productionTip = false
new Vue({
    render: h => h(App),
}).$mount('#app')
