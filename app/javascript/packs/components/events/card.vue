<template lang="pug">
  .card
    md-card
      md-card-media
        img(src="https://static.pexels.com/photos/59523/pexels-photo-59523.jpeg")
      md-card-header
        .md-title
          router-link(:to="event_path(event)") {{event.name}}
        .md-subhead {{this.event.start_time}} - {{this.event.end_time}}
      md-card-content
        p(v-for="position in this.event.positions")
          | {{position.name}}
      md-card-actions
        md-button Action
        md-button Action
</template>

<script>
  export default {
    name: 'card',
    props: [
      "event"
    ],

    methods: {
      event_path(event) {
        return `/events/${event.id}`
      }
    }

  }
</script>

<style lang="scss">
  .card-header {
    line-height: 36px;
    font-weight: bold;
  }
</style>
