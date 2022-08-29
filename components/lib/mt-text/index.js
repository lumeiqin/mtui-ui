import mtText from "./src/mt-text.vue";

mtText.install = function(Vue) {
    Vue.component(mtText.name, mtText);
};

export default mtText;
