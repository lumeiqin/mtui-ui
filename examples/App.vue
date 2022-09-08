<template>
  <div>
    <mt-box bg="#e7f1f5" border="true">
      <mt-text>
        金城留旬浃，兀兀醉歌舞。
        出门览民风，惨惨愁肺腑。
        去年夏秋旱，七月黍穟吐。
        一昔营幕来，天明但平土。
      </mt-text>
    </mt-box>

    <mt-tag type="primary">type: primary</mt-tag>
    <mt-tag type="primary" :inverted="true">type: primary</mt-tag>
    <mt-tag type="primary" :noBorder="false" :inverted="true">type: primary</mt-tag>
    <mt-tag type="primary" size="small">type: primary</mt-tag>

    <div style="width: 100%">
      <mt-button @click="btnEvent('default')">普通按钮</mt-button>
      <mt-button name="hollow" @click="btnEvent('hollow')">镂空按钮</mt-button>
    </div>

    <mt-grid :col="2"></mt-grid>
    <mt-grid :col="3"></mt-grid>
    <mt-grid :col="4"></mt-grid>
    <mt-grid :col="5"></mt-grid>

    <mt-grid name="title" :col="2" :data="title2" @click="jump"></mt-grid>
    <mt-grid name="title" :col="3" :data="title3" @click="jump"></mt-grid>
    <mt-grid name="title" :col="4" :data="title4" @click="jump"></mt-grid>
    <mt-grid name="title" :col="5" :data="title5" @click="jump"></mt-grid>
    <mt-grid name="title" :data="titleDiy">
      <div style="padding: 2.67vw">
        协议资料
      </div>
    </mt-grid>
  </div>
</template>

<script>
export default {
  name: 'examples',
  data() {
    return {
      title2: [{
        icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
        menuName: "测试模块2",
        children: [{
          icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
          menuName: "测试模块",
          url: ""
        }, {
          icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
          menuName: "diy模块",
          type: "diy",
          url: ""
        }],
        url: ""
      }],
      title3: [{
        icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
        menuName: "测试模块3",
        children: [{
          icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
          menuName: "测试模块",
          url: ""
        }, {
          icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
          menuName: "diy模块",
          type: "diy",
          url: ""
        }, {
          icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
          menuName: "测试模块",
          url: ""
        }],
        url: ""
      }],
      title4: [{
        icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
        menuName: "测试模块4",
        children: [{
          icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
          menuName: "测试模块",
          url: ""
        }, {
          icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
          menuName: "diy模块",
          type: "diy",
          url: ""
        }, {
          icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
          menuName: "测试模块",
          url: ""
        }, {
          icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
          menuName: "测试模块",
          url: ""
        }],
        url: ""
      }],
      title5: [{
        icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
        menuName: "测试模块5",
        children: [{
          icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
          menuName: "测试模块",
          url: ""
        }, {
          icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
          menuName: "diy模块",
          type: "diy",
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
        }],
        url: ""
      }],
      titleDiy: [{
        icon: "https://t11.baidu.com/it/u=2446819114,1498509809&fm=58",
        menuName: "测试模块",
        type: "diy",
        url: ""
      }]
    }
  },
  methods: {
    btnEvent(type) {
      alert(type)
    },
    jump(item) {
      alert(JSON.stringify(item))
    }
  }
}
</script>
