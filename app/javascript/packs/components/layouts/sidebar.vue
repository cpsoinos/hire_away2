<template lang="pug">
  .phone-viewport
    md-toolbar
      md-button(class="md-icon-button" @click="toggleLeftSidenav")
        md-icon menu
      h2.md-title My App
    md-button.md-raised.md-accent(@click="toggleRightSidenav") Toggle right
    p Open console to see the events

    md-sidenav.md-left(ref="leftSidenav" @open="open('Left')" @close="close('Left')")
      md-toolbar.md-large
        .md-toolbar-container
          h3.md-title Sidenav content

      p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis iusto!

    md-sidenav.md-right(ref="rightSidenav" @open="open('Right')" @close="close('Right')")
      md-toolbar
        .md-toolbar-container
          h3.md-title Sidenav content

      md-button.md-raised.md-accent(@click="closeRightSidenav") Close
  //- el-menu(theme="dark" :default-active="activeIndex" class="sidebar")
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
    },

    methods: {
      toggleLeftSidenav() {
        this.$refs.leftSidenav.toggle();
      },
      toggleRightSidenav() {
        this.$refs.rightSidenav.toggle();
      },
      closeRightSidenav() {
        this.$refs.rightSidenav.close();
      },
      open(ref) {
        console.log('Opened: ' + ref);
      },
      close(ref) {
        console.log('Closed: ' + ref);
      }
    }

  }
</script>

<style lang="scss">
  .sidebar {
    position: absolute !important;
    width: 260px;
    height: calc(100% - 60px);
    z-index: 1;
    overflow: hidden;
    border-radius: 0 !important;
    display: block;
    font-weight: 200;
  }
</style>
