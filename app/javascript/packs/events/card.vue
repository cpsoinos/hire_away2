<template lang="pug">
  .card
    el-card(class="box-card")
      .clearfix(slot="header")
        h4 {{this.event.name}}
        p {{this.event.start_time}} - {{this.event.end_time}}
      .text.item(v-for="position in this.event.positions" :key="position")
        | {{position.name}}
</template>

<script>
  export default {
    name: 'card',
    props: [
      "event"
    ],
  }
</script>

<style lang="scss">
  .card-header {
    line-height: 36px;
    font-weight: bold;
  }
</style>
