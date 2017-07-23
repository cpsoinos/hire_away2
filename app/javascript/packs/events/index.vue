<template lang="pug">
  .events
    el-row
      el-col(:span="4")
        card
      el-col(:span="4")
        card
      el-col(:span="4")
        card
</template>

<script>
  const card = require('packs/events/card')

  module.exports = {
    name: 'index',
    components: [
      "card"
    ]
  }
</script>

<style lang="scss">
</style>
