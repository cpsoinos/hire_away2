<template lang="pug">
  el-menu(theme="dark" :default-active="activeIndex" class="sidebar")
    el-submenu(index="1")
      template(slot="title") Events
      el-menu-item(index="2")
        router-link(to='/events') All
      el-menu-item(index="3")
        router-link(to='/events/new') New
    el-submenu(index="2")
      template(slot="title") Venues
      el-menu-item(index="4")
        router-link(to='/venues') All
      el-menu-item(index="5")
        router-link(to='/venues/new') New
    el-submenu(index="3")
      template(slot="title") Contacts
      el-menu-item(index="6")
        router-link(to='/contacts') All
      el-menu-item(index="7")
        router-link(to='/contacts/new') New
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
  .sidebar {
    position: absolute !important;
    width: 260px;
    max-height: 100%;
    height: 100%;
    z-index: 1;
    overflow: hidden;
    border-radius: 0 !important;
    display: block;
    font-weight: 200;
  }
</style>
