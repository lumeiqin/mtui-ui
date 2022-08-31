# Button 按钮

***
***

### 基本用法

<div style="width: 200px; margin: 30px 0">
<mt-button>普通按钮</mt-button>
</div>

```html

<mt-button>普通按钮</mt-button>
```

### 镂空按钮

<div style="width: 200px; margin: 30px 0">
<mt-button name="hollow">镂空按钮</mt-button>
</div>

```html

<mt-button name="hollow">镂空按钮</mt-button>
```

### Props

| 参数 | 是否必要 | 默认值     |        类型     |    说明  |
|-------|--------------|---------|---------------|-------------------|
| name      | false | default |    String      | 按钮类型，可选值为 default hollow  |
| disabled      | false | false   | Boolean      | 是否禁用  |
| loading      | false | false   | Boolean      | 名称前是否带 loading 图标  |
| height      | false | 42px    | String      | 按钮高度  |
| color      | false | #3490fc | String      | 按钮主题色  |
| radius      |false | 4px     | String      | 按钮圆角  |
| fontsize      | false | 15px    | String      | 按钮字体大小  |
| noBorder      | false | false   | Boolean      | 是否显示边框，只用于name="hollow"  |

### Slots

|插槽名     |    默认值     |    说明     |
|----------|--------------|---------|
|-    |-    |标签内容|

### Events

| 事件 | 说明 | 回调参数 |
|----------|--------------|---------|
|click | 点击按钮时触发 | -  |

### name参数说明

|name    |说明|
|----------|--------------|
|default|    普通按钮|
|hollow    |镂空按钮|
