# Tag 标签

***
***

### 基本用法

<div style="margin: 30px 0">
<mt-tag style="margin-right: 20px">type: default</mt-tag>
<mt-tag style="margin-right: 20px" type="primary">type: primary</mt-tag>
<mt-tag style="margin-right: 20px" type="success">type: success</mt-tag>
<mt-tag style="margin-right: 20px" type="warning">type: warning</mt-tag>
<mt-tag style="margin-right: 20px" type="error">type: error</mt-tag>
</div>

```html
<mt-tag>type: default</mt-tag>
<mt-tag type="primary">type: primary</mt-tag>
<mt-tag type="success">type: success</mt-tag>
<mt-tag type="warning">type: warning</mt-tag>
<mt-tag type="error">type: error</mt-tag>
```


### 无背景标签

<div style="margin: 30px 0">
<mt-tag style="margin-right: 20px" :inverted="true">type: default</mt-tag>
<mt-tag style="margin-right: 20px" type="primary" :inverted="true">type: primary</mt-tag>
<mt-tag style="margin-right: 20px" type="success" :inverted="true">type: success</mt-tag>
<mt-tag style="margin-right: 20px" type="warning" :inverted="true">type: warning</mt-tag>
<mt-tag style="margin-right: 20px" type="error" :inverted="true">type: error</mt-tag>
</div>

```html
<mt-tag :inverted="true">type: default</mt-tag>
<mt-tag type="primary" :inverted="true">type: primary</mt-tag>
<mt-tag type="success" :inverted="true">type: success</mt-tag>
<mt-tag type="warning" :inverted="true">type: warning</mt-tag>
<mt-tag type="error" :inverted="true">type: error</mt-tag>
```


### 带边框标签

<div style="margin: 30px 0">
<mt-tag style="margin-right: 20px" :noBorder="false" :inverted="true">type: default</mt-tag>
<mt-tag style="margin-right: 20px" type="primary" :noBorder="false" :inverted="true">type: primary</mt-tag>
<mt-tag style="margin-right: 20px" type="success" :noBorder="false" :inverted="true">type: success</mt-tag>
<mt-tag style="margin-right: 20px" type="warning" :noBorder="false" :inverted="true">type: warning</mt-tag>
<mt-tag style="margin-right: 20px" type="error" :noBorder="false" :inverted="true">type: error</mt-tag>
</div>

```html
<mt-tag :noBorder="false" :inverted="true">type: default</mt-tag>
<mt-tag type="primary" :noBorder="false" :inverted="true">type: primary</mt-tag>
<mt-tag type="success" :noBorder="false" :inverted="true">type: success</mt-tag>
<mt-tag type="warning" :noBorder="false" :inverted="true">type: warning</mt-tag>
<mt-tag type="error" :noBorder="false" :inverted="true">type: error</mt-tag>
```


### 小标签

<div style="margin: 30px 0">
<mt-tag style="margin-right: 20px" size="small">type: default</mt-tag>
<mt-tag style="margin-right: 20px" type="primary" size="small">type: primary</mt-tag>
<mt-tag style="margin-right: 20px" type="success" size="small">type: success</mt-tag>
<mt-tag style="margin-right: 20px" type="warning" size="small">type: warning</mt-tag>
<mt-tag style="margin-right: 20px" type="error" size="small">type: error</mt-tag>
</div>

```html
<mt-tag size="small">type: default</mt-tag>
<mt-tag type="primary" size="small">type: primary</mt-tag>
<mt-tag type="success" size="small">type: success</mt-tag>
<mt-tag type="warning" size="small">type: warning</mt-tag>
<mt-tag type="error" size="small">type: error</mt-tag>
```



### Props

| 参数    | 默认值    | 类型    | 说明                                                                            |
|-------|--------------|---------------|-------------------------------------------------------------------------------|
| type    | default    | String    | 标签类型，可选值为 `default（灰色）` `primary（蓝色）` `success（绿色）` ` warning（黄色）` ` error（红色）` | 
| inverted    | false    | Boolean    | 是否无需背景颜色，为 true 时，背景颜色将变为文字的字体颜色                                              | 
| noBorder    | true    | Boolean    | 是否显示边框，需要与inverted搭配使用                                                        | 
| size    | normal    | String    | 标签大小，可选值为 `normal` `small`                                                      | 

### Slots

| 插槽名    | 默认值    | 说明|
|--------------|---------------|-------------------|
| -    | -    | 标签内容| 
