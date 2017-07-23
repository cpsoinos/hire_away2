<template lang="pug">
  el-menu(theme="dark" mode="horizontal" :default-active="activeIndex" class="el-menu-demo")
    el-menu-item(index="1") Test One
</template>

<script>
  module.exports = {
    data() {
      return {
        activeIndex: 1
      }
    }
  }
</script>

<style lang="scss">
</style>
