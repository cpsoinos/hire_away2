<template lang="pug">
  .events
    el-row
      el-col(:span="8")
        Card
      el-col(:span="8")
        Card
      el-col(:span="8")
        Card
</template>

<script>
  import Card from './card'

  export default {
    name: 'index',
    components: {
      Card
    }
  }
</script>

<style lang="scss">
</style>
