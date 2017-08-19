<template lang="pug">
  el-menu(theme="dark" mode="horizontal" :default-active="activeIndex" class="navbar")
    el-menu-item(index="1")
      router-link(to='/') HireAway
</template>

<script>
  module.exports = {
    data() {
      return {
        activeIndex: "1"
      }
    }
  }
</script>

<style lang="scss">
  .navbar {
    border-radius: 0 !important;
  }
</style>
