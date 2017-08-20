<template lang="pug">
  #app
    Sidebar
    .page-content
      router-view
</template>

<script>

  import Sidebar from './components/layouts/sidebar.vue'
  import Events from './components/events/index.vue'
  import Venues from './components/venues/index.vue'
  import Contacts from './components/contacts/index.vue'

  export default {
    components: {
      Sidebar,
      Events,
      Venues,
      Contacts
    }
  }
</script>

<style lang="scss">
  body {
    background-color: #f4f3ef;
  }
  .page-content {
    padding: 1rem;
  }
//   #app {
//     min-height: 100vh;
//     position: relative;
//   }
//   .main-panel {
//     position: relative;
//     z-index: 2;
//     float: right;
//     width: calc(100% - 260px);
//
//     .content {
//       padding: 30px;
//     }
//   }
</style>
