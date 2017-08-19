<template lang="pug">
  .main-panel
    .content
      .event
        el-row(:gutter="20")
          el-col(:span="4")
            el-card(class="box-card", :body-style="{ padding: '0px' }")
              img(src="https://static.pexels.com/photos/59523/pexels-photo-59523.jpeg" class="image")
              div(style="padding: 14px;")
                h4 {{this.event.venue.name}}
                p {{this.event.venue.address_1}}
                p(v-if="this.event.venue.address_2") {{this.event.venue.address_2}}
                p {{this.event.venue.city}}, {{this.event.venue.state}} {{this.event.venue.zip}}
          el-col(:span="20")
            el-card(class="box-card")
              .clearfix(slot="header")
                h1 {{this.event.name}}
              .text.item
                h4 {{this.event.start_time}} - {{this.event.end_time}}
</template>

<script>
  export default {
    name: 'event',

    data() {
      return {
        event: {}
      }
    },

    mounted() {
      this.fetch_event()
    },

    methods: {
      fetch_event() {
        this.$resource("events{/id}").get({ id: this.$route.params.id }).then((response) => {
          this.event = response.body
        })
      }
    }
  }
</script>

<style lang="scss">
  .card-header {
    line-height: 36px;
    font-weight: bold;
  }
  .image {
    width: 100%;
    display: block;
  }
</style>
