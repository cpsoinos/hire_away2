<template lang="pug">
  .block
    span
    el-date-picker(:model='value3', type='datetimerange', placeholder='Select time range')
</template>

<script>
  export default {
    data() {
      return {
        value3: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value4: ''
      };
    }
  };
</script>

<style lang="scss">
</style>
