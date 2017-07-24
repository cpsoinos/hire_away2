<template lang="pug">
  .events
    el-row
      el-col(:span="8")
        Card
      el-col(:span="8")
        Card
      el-col(:span="8")
        Card
    el-row
      EventForm
</template>

<script>
  import Card from './card'
  import EventForm from './form'

  export default {
    name: 'index',
    components: {
      Card,
      EventForm
    }
  }
</script>

<style lang="scss">
</style>
