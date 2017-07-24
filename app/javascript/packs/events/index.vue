<template lang="pug">
  .main-panel
    .content
      el-row
        el-col(:span="8" v-for="event in events", :key="event")
          Card(:event="event")
</template>

<script>
  import Card from './card'
  import User from '../../models/event/mapper'
  // import { DataStore } from 'js-data'
  // import { HttpAdapter } from 'js-data-http'
  //
  // const store = new DataStore();
  // const httpAdapter = new HttpAdapter();

  export default {
    name: 'index',
    components: {
      Card
    },
    data() {
      return {
        events: [
          { name: "event 1" },
          { name: "event 2" }
        ]
      }
    },
    mounted() {
      debugger
    }
  }




</script>

<style lang="scss">
</style>
