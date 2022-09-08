<template>
  <div>
    <div class="mt-grid" v-if="name === 'default'">
      <div :class="'mt-grid-icon ' + 'icon-' + col" v-for="(item, index) in moduleArr" :key="index"
           @click="jumpIcon(item)">
        <img class="mt-grid-icon-img" :src="item.icon" alt="">
        <p class="mt-grid-icon-text">{{ item.menuName }}</p>
      </div>
    </div>

    <div class="mt-grid" v-else-if="name === 'title'">
      <div class="mt-grid-title" v-for="(item, index) in moduleArr" :key="index">
        <div class="mt-grid-title-text">
          <span class="mt-grid-title-text-name">{{ item.menuName }}</span>
        </div>
        <div class="mt-grid-title-box" :style="{padding: Number(col) === 2? '18px 18px 0 18px': 0}"
             v-if="item.children && item.children.length > 0">
          <div :class="'mt-grid-icon ' + 'icon-' + col" v-for="(items, indexs) in item.children"
               :key="indexs" @click="jumpIcon(items)">
            <img class="mt-grid-icon-img" :src="item.icon" alt="">
            <p class="mt-grid-icon-text">{{ item.menuName }}</p>
          </div>
        </div>
        <div class="mt-grid-title-box" v-else>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mt-grid',
  props: {
    name: {
      type: String,
      default: "default"
    },
    col: {
      type: [Number, String],
      default: 4
    },
    data: {
      type: Array,
      default() {
        return [{
          icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
          menuName: "测试模块",
          url: "https://www.baidu.com"
        }, {
          icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
          menuName: "测试模块",
          url: ""
        }, {
          icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
          menuName: "测试模块",
          url: ""
        }, {
          icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
          menuName: "测试模块",
          url: ""
        }, {
          icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
          menuName: "测试模块",
          url: ""
        }]
      }
    }
  },
  data() {
    return {
      moduleArr: []
    };
  },
  created() {
    this.moduleArr = this.data;
  },
  watch: {
    data(newvalue) {
      this.moduleArr = newvalue;
    }
  },
  methods: {
    jumpIcon(item) {
      if (item.type === "diy") {
        this.$emit("click", item)
        return
      }
      if (this.$isEmpty(item.url)) {
        this.$toast("暂未开放")
        return
      }
      window.location.href = item.url;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/mt-grid.scss";
</style>
