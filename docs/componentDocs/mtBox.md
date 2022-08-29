# Box 容器



#### 基本用法
<mt-box>山有木兮木有枝，心悦君兮君不知。</mt-box>

```html
<mt-box>山有木兮木有枝，心悦君兮君不知。</mt-box>
```


#### 上下边框
<mt-box border="true">山有木兮木有枝，心悦君兮君不知。</mt-box>

```html
<mt-box border="true">山有木兮木有枝，心悦君兮君不知。</mt-box>
```


#### 容器中内容居中
<mt-box center="true">
<p>山有木兮木有枝，心悦君兮君不知。</p>
</mt-box>

```html
<mt-box center="true">
<p>山有木兮木有枝，心悦君兮君不知。</p>
</mt-box>
```


#### 自定义背景
<mt-box bg="#e7f1f5" border="true">山有木兮木有枝，心悦君兮君不知。</mt-box>

```html
<mt-box bg="#e7f1f5" border="true">山有木兮木有枝，心悦君兮君不知。</mt-box>
```


#### 翻转容器
<mt-box :flip="true">山有木兮木有枝，心悦君兮君不知。</mt-box>

```html
<mt-box :flip="true">山有木兮木有枝，心悦君兮君不知。</mt-box>
```

### Props
| 参数          | 是否必要         | 默认值        | 类型                  | 说明                |
|----------|--------------|---------|------------------|-------------------|
| bg          | false |  #fff      | String              | 背景色，参考background
| padding     | false |  30rpx          | String              | 容器的padding
| flip        |  false | false           | Boolean, String     | 是否翻转
| center      | false |  false          | Boolean, String     | 内容是否居中
| border      | false | false           | Boolean, String     | 是否显示上下边框

### Slots

|插槽名     |    默认值     |    说明     |
|----------|--------------|---------|
|-    |-    |标签内容|
