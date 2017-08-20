<template lang="pug">
  .phone-viewport
    md-toolbar
      md-button(class="md-icon-button" @click="toggleLeftSidenav")
        md-icon menu
      h2.md-title HireAway

    md-sidenav.main-sidebar.md-left.md-fixed.md-theme-default(ref="leftSidenav" @open="open('Left')" @close="close('Left')")
      md-toolbar
        .md-toolbar-container
          h3.md-title Sidenav content

      md-list
        md-list-item
          md-icon event
          span(@click="toggleLeftSidenav")
            router-link(to='/events') Events
        md-list-item
          md-icon location_on
          span(@click="toggleLeftSidenav")
            router-link(to='/venues') Venues
        md-list-item
          md-icon contacts
          span(@click="toggleLeftSidenav")
            router-link(to='/contacts') Contacts
</template>

<script>
  export default {
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
</style>
