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
