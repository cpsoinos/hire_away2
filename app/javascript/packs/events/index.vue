<template lang="pug">
  .main-panel
    .content
      el-row
        el-col(:span="8" v-for="event in events", :key="event")
          Card(:event="event")
</template>

<script>
  import Card from './card'

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
