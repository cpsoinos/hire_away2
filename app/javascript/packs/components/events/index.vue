<template lang="pug">
  .events
    md-layout(md-gutter)
      md-layout(md-flex="33" v-for="event in events")
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


  }
</script>

<style lang="scss">
</style>
