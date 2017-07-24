<template lang="pug">
  #app
    Navbar
    Sidebar
    .main-panel
      .content
        Events
</template>

<script>
  import './stylesheets/global.scss'
  import Navbar from './layouts/navbar.vue'
  import Sidebar from './layouts/sidebar.vue'
  import Events from './events/index.vue'

  export default {
    data: function () {
      return {
        message: "Hello Vue!"
      }
    },
    components: {
      Navbar,
      Sidebar,
      Events
    }
  }
</script>

<style lang="scss">
  #app {
    min-height: 100vh;
    position: relative;
  }
  .main-panel {
    background-color: #f4f3ef;
    position: relative;
    max-height: 100%;
    height: 100%;
    min-height: 100%;
    z-index: 2;
    float: right;
    width: calc(100% - 260px);

    .content {
      padding: 30px;
    }
  }
</style>
