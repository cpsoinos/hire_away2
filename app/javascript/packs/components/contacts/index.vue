<template lang="pug">
  .main-panel
    .content
      .contact-list
        el-table(:data="contacts", border, style="width: 100%")
          el-table-column(prop="last_name" label="Last Name")
          el-table-column(prop="first_name" label="First Name")
          el-table-column(prop="email" label="Email")
          el-table-column(prop="phone" label="Phone")
</template>

<script>
  export default {
    data() {
      return {
        contacts: []
      }
    },

    mounted() {
      return this.contacts = this.fetch_contacts()
    },

    methods: {
      fetch_contacts() {
        this.$resource('contacts').get().then((response) => {
          this.contacts = response.body;
        });
      }
    }
  }
</script>

<style lang="scss">
</style>
