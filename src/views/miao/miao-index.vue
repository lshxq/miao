<template lang="pug">
.miao-index-main(ref='mainPanelRef')
  miao-panel(v-if='size' :size='size')
  template(v-else) 初始化size失败
</template>

<script>
import MiaoPanel from './miao-panel.vue'

export default {
  components: {
    MiaoPanel
  },

  data() {
    return {
      size: false
    }
  },

  mounted() {
    const panel = this.$refs.mainPanelRef
    const height = panel.offsetHeight
    const width = panel.offsetWidth

    this.size = {
      width,
      height
    }
  }
}
</script>

<style lang="sass" scoped>
.miao-index-main
  width: calc(100%)
  height: calc(100%)
  
</style>