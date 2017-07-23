<template lang="pug">
  .hello_test
    | hi this is a test
    p.goodbye bai nao {{name}}
</template>

<script>
  module.exports = {
    name: 'hello_test',
    data() {
      return {
        name: 'hello thar'
      }
    }
  }
</script>

<style lang="scss">
</style>
