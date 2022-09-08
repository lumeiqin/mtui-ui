# Grid 宫格

***
***

### 基本用法 - 两列

<div style="margin: 30px 0">
<mt-grid :col="2" :data='[{
        icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
        menuName: "测试模块",
        url: "https://www.baidu.com"
      }, {
        icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
        menuName: "测试模块",
        url: ""
      }]'></mt-grid>
</div>

```html

<mt-grid :col="2" :data='[{
        icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
        menuName: "测试模块",
        url: "https://www.baidu.com"
      }, {
        icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
        menuName: "测试模块",
        url: ""
      }]'></mt-grid>
```

### 基本用法 - 三列

<div style="margin: 30px 0">
<mt-grid :col="3" :data='[{
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
      }]'></mt-grid>
</div>

```html

<mt-grid :col="3" :data='[{
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
      }]'></mt-grid>
```

### 基本用法 - 四列

<div style="margin: 30px 0">
<mt-grid :data='[{
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
      }]'></mt-grid>
</div>

```html

<mt-grid :data='[{
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
      }]'></mt-grid>
```

### 基本用法 - 五列

<div style="margin: 30px 0">
<mt-grid :col="5"></mt-grid>
</div>

```html

<mt-grid :col="5"></mt-grid>
```

### 分类用法 - 两列

<div style="margin: 30px 0">
<mt-grid name="title" :col="2" :data='[{
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
      }]'></mt-grid>
</div>

```html

<mt-grid name="title" :col="2" :data='[{
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
      }]'></mt-grid>
```

### 分类用法 - 三列

<div style="margin: 30px 0">
<mt-grid name="title" :col="3" :data='[{
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
      }]'></mt-grid>
</div>

```html

<mt-grid name="title" :col="3" :data='[{
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
      }]'></mt-grid>
```

### 分类用法 - 四列

<div style="margin: 30px 0">
<mt-grid name="title" :data='[{
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
      }]'></mt-grid>
</div>

```html

<mt-grid name="title" :data='[{
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
      }]'></mt-grid>
```

### 分类用法 - 五列

<div style="margin: 30px 0">
<mt-grid name="title" :col="5" :data='[{
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
      }]'></mt-grid>
</div>

```html

<mt-grid name="title" :col="5" :data='[{
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
      }]'></mt-grid>
```

### 自定义内容

<div style="margin: 30px 0">
<mt-grid name="title" :data='[{
        icon: "https://t11.baidu.com/it/u=2446819114,1498509809&fm=58",
        menuName: "测试模块",
        type: "diy",
        url: ""
      }]'>
      <div style="padding: 2.67vw">
        协议资料
      </div>
    </mt-grid>
</div>

```html

<mt-grid name="title" :data='[{
        icon: "https://t11.baidu.com/it/u=2446819114,1498509809&fm=58",
        menuName: "测试模块",
        type: "diy",
        url: ""
      }]'>
    <div style="padding: 2.67vw">
        协议资料
    </div>
</mt-grid>
```

### Props

| 参数    | 是否必要          | 默认值      | 类型             | 说明               |
|-------|---------------|----------|----------------|------------------|
| name     | false         | default  | String         |显示类型，可选值为 `default` `title` |
| col      | false| 4    | Number, String |    每行的列数|
| data     |true|-| Array[Objcet]  |九宫格数据 数据解析|

### Slots

|插槽名     |    默认值     |    说明     |
|----------|--------------|---------|
|-    |-    |分栏内容|

### Events

| 事件    |说明|回调参数 |
|-------|-------|-------|
| click |当type=diy，点击时触发 |item：当前模块 |

### data参数说明

| name                                       | 说明                                          |
|--------------------------------------------|---------------------------------------------|
| icon                                       | 模块图片                                        |
| menuName                                   | 模块标题                                        |
| url                                        | 模块跳转路径，vue2: window.location.href, uniapp: uni.navigateTo |
| type| 模块类型（可不写），当type=diy时不进行跳转，触发自定义方法click      |
| children                                   | 参考data                                      |
