<template>
  <div class="mt-box" :style="{backgroundColor: bg, padding: padding, borderRadius: radius}"
       :class="{'mt-box--flip': flip, 'mt-box--border': border}">
    <div class="mt-box-main" :class="{'mt-box--center': center}">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "mt-box",
  props: {
    bg: {
      type: String,
      default: "#ffffff"
    },
    padding: {
      type: String,
      default: "4vw"
    },
    flip: {
      type: [Boolean, String],
      default: false
    },
    center: {
      type: [Boolean, String],
      default: false
    },
    border: {
      type: [Boolean, String],
      default: false
    },
    radius: {
      type: String,
      default: "1vw"
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/mt-box.scss";
</style>
