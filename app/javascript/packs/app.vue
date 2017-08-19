<template lang="pug">
  #app
    | hi
    Navbar
    Sidebar
    router-view
</template>

<script>

  import Navbar from './components/layouts/navbar.vue'
  import Sidebar from './components/layouts/sidebar.vue'
  import Events from './components/events/index.vue'

  export default {
    components: {
      Navbar,
      Sidebar,
      Events
    }
  }
</script>

<style lang="scss">
  body {
    background-color: #f4f3ef;
  }
  #app {
    min-height: 100vh;
    position: relative;
  }
  .main-panel {
    position: relative;
    z-index: 2;
    float: right;
    width: calc(100% - 260px);

    .content {
      padding: 30px;
    }
  }
</style>
