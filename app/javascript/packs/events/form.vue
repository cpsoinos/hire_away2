<template lang="pug">
  el-form(ref='form', :model='form', label-width='120px')
    el-form-item(label='Event name')
      el-input(v-model='form.name')
    el-form-item(label='Duration')
      DateTimePicker
    el-form-item(label='Positions')
      el-checkbox-group(v-model='form.resource')
        el-checkbox(label='Position 1')
        el-checkbox(label='Position 2')
    el-form-item(label-width='120px')
      el-button(type='primary', @click='onSubmit') Create
      el-button Cancel
</template>

<script>
  import DateTimePicker from '../shared/date_time_picker'

  export default {
    components: {
      DateTimePicker
    },
    data() {
      return {
        form: {
          name: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style lang="scss">
</style>
