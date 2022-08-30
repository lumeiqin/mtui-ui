import mtBox from "./mt-box/index.js";
import mtText from "./mt-text/index.js";
import mtUtils from "./utils/index.js";

const components = [
    mtBox,
    mtText
];

const install = function (Vue, opts = {}) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });

    Vue.prototype.$watermark = mtUtils.watermark;
    Vue.prototype.$CryptoJS = mtUtils.CryptoJS;

    Vue.prototype.$formatDate = mtUtils.formatDate;
    Vue.prototype.$isEmpty = mtUtils.isEmpty;
};

const API = {
    install,
    mtBox,
    mtText
}
export default API;
