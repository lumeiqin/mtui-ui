import mtTag from "./src/mt-tag.vue";

mtTag.install = function(Vue) {
    Vue.component(mtTag.name, mtTag);
};

export default mtTag;
