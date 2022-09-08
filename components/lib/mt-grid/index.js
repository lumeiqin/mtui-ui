import mtGrid from "./src/mt-grid.vue";

mtGrid.install = function(Vue) {
    Vue.component(mtGrid.name, mtGrid);
};

export default mtGrid;
