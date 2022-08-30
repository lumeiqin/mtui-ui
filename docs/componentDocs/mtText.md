# Text 文字

***
***

### 基本用法

<div style="margin: 30px 0">
<mt-text>出门览民风，惨惨愁肺腑。</mt-text>
</div>

```html

<mt-text>出门览民风，惨惨愁肺腑。</mt-text>
```

### title - 主标题

<div style="margin: 30px 0">
<mt-text type="title">出门览民风，惨惨愁肺腑。</mt-text>
</div>

```html

<mt-text type="title">出门览民风，惨惨愁肺腑。</mt-text>
```

### subtitle - 副标题

<div style="margin: 30px 0">
<mt-text type="subtitle">出门览民风，惨惨愁肺腑。</mt-text>
</div>

```html

<mt-text type="subtitle">出门览民风，惨惨愁肺腑。</mt-text>
```

### paragraph - 段落

<div style="margin: 30px 0">
<mt-text type="paragraph">出门览民风，惨惨愁肺腑。</mt-text>
</div>

```html

<mt-text type="paragraph">出门览民风，惨惨愁肺腑。</mt-text>
```

### DIY 文字

<div style="margin: 30px 0">
<mt-text type="diy" fw="900" color="red" lh="50px" size="20px">出门览民风，惨惨愁肺腑。</mt-text>
</div>

```html

<mt-text type="diy" fw="900" color="red" lh="50px" size="20px">出门览民风，惨惨愁肺腑。</mt-text>
```

### Props

| 参数    | 是否必要         | 默认值    | 类型            | 说明                |
|-------|--------------|--------|---------------|-------------------|
| type  | false | normal | String        | 段落类型：title、subtitle、paragraph、normal、diy
| size  | false | 4.27vw | String        | 字体大小
| lh    |  false | 8vw    | String        | 字体行高
| fw    | false | 400    | Number, String | 字体粗细
| color | false | #252525      | String | 字体颜色

### Slots

|插槽名     |    默认值     |    说明     |
|----------|--------------|---------|
|-    |-    |标签内容|
