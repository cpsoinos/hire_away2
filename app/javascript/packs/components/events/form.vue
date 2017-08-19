<template lang="pug">
  .main-panel
    .content
      h1 New Event
      el-form(ref="event", v-model="event", label-width="120px")
        el-form-item(label="Event name")
          el-input(v-model="event.name")
        el-select(v-model="event.venue_id", placeholder="Select Venue")
          el-option(v-for="venue in venues", :key="venue.name", :label="venue.name", :value="venue.id")
            span(style="float: left;") {{venue.name}}
            span(style="float: right; color: #8492a6; font-size: 13px") {{venue.city}}
        VenueForm(:event="event")
        el-form-item(label="Duration")
          DateTimePicker
        el-form-item(label="Positions")
          el-checkbox-group(v-model="event")
            el-checkbox(label="Position 1")
            el-checkbox(label="Position 2")
        el-form-item(label-width="120px")
          el-button(type="primary", @click="on_submit") Create
          el-button Cancel
</template>

<script>
  import DateTimePicker from "../shared/date_time_picker"
  import VenueForm from "../venues/form"
  import Vue from "vue"
  import VueResource from"vue-resource"
  Vue.use(VueResource)

  const Event = Vue.resource("events{/id}")
  const Venue = Vue.resource("venues{/id}")

  export default {
    components: {
      DateTimePicker,
      VenueForm
    },
    data() {
      return {
        event: {
          name:       "",
          start_time: "",
          end_time:   "",
          venue_id:   ""
        },
        venues: []
      }
    },
    methods: {
      on_submit() {
        Event.save({}, {event: this.event}).then((response) => {
          this.$router.push('/events/' + response.body.id)
        })
      },
      fetch_venues() {
        Venue.get().then((response) => {
          this.venues = response.body
        })
      }
    },
    mounted() {
      this.fetch_venues()
    }
  }
</script>

<style lang="scss">
</style>
