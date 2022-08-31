import mtButton from "./src/mt-button.vue";

mtButton.install = function (Vue) {
    Vue.component(mtButton.name, mtButton);
};

export default mtButton;
