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

    <mt-tag>type: default</mt-tag>
    <br>
    <mt-tag type="primary">type: primary</mt-tag><br>
    <mt-tag type="success">type: success</mt-tag><br>
    <mt-tag type="warning">type: warning</mt-tag><br>
    <mt-tag type="error">type: error</mt-tag><br>

    <mt-tag :inverted="true">type: default</mt-tag><br>
    <mt-tag type="primary" :inverted="true">type: primary</mt-tag><br>
    <mt-tag type="success" :inverted="true">type: success</mt-tag><br>
    <mt-tag type="warning" :inverted="true">type: warning</mt-tag><br>
    <mt-tag type="error" :inverted="true">type: error</mt-tag><br>

    <mt-tag :noBorder="false" :inverted="true">type: default</mt-tag><br>
    <mt-tag type="primary" :noBorder="false" :inverted="true">type: primary</mt-tag><br>
    <mt-tag type="success" :noBorder="false" :inverted="true">type: success</mt-tag><br>
    <mt-tag type="warning" :noBorder="false" :inverted="true">type: warning</mt-tag><br>
    <mt-tag type="error" :noBorder="false" :inverted="true">type: error</mt-tag><br>

    <mt-tag size="small">type: default</mt-tag><br>
    <mt-tag type="primary" size="small">type: primary</mt-tag><br>
    <mt-tag type="success" size="small">type: success</mt-tag><br>
    <mt-tag type="warning" size="small">type: warning</mt-tag><br>
    <mt-tag type="error" size="small">type: error</mt-tag><br>

    <div style="width: 100%">
      <mt-button @click="btnEvent('default')">普通按钮</mt-button>
      <mt-button name="hollow" @click="btnEvent('hollow')">镂空按钮</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'examples',
  data() {
    return {}
  },
  methods: {
    btnEvent(type) {
      alert(type)
    }
  }
}
</script>
