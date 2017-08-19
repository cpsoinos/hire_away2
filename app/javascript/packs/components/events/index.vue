<template lang="pug">
  .main-panel
    .content
      el-row
        el-col(:span="8" v-for="event in events", :key="event")
          router-link(:to="event_path(event)")
            Card(:event="event")
</template>

<script>
  import Vue from 'vue'
  import VueResource from'vue-resource'
  Vue.use(VueResource)

  const resource = Vue.resource('events{/id}')
  import Card from './card'

  export default {
    name: 'index',
    components: {
      Card,
    },

    data() {
      return {
        events: []
      }
    },

    mounted() {
      resource.get().then((response) => {
        this.events = response.body
      })
    },

    methods: {
      event_path(event) {
        return `/events/${event.id}`
      }
    }
  }
</script>

<style lang="scss">
</style>
