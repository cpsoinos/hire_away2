<template lang="pug">
  .card
    el-card(class="box-card")
      .clearfix(slot="header")
        span(style="line-height: 36px;") Card name
        el-button(style="float: right;" type="primary") Operation button
      .text.item(v-for="o in 4" :key="o")
        | {{'List item ' + o }}
</template>

<script>

</script>

<style lang="scss">
</style>
