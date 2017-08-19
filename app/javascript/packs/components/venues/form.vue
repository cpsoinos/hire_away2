<template lang="pug">
  .main-panel
    .content
      h1 New Venue
      //- vue-google-autocomplete(
        id="map"
        placeholder="Search for an address"
        @placechanged="get_address_data"
        style="width: 100%;"
        )
      //- el-form(ref='venue', v-model='venue', label-width='120px')
        el-form-item(label='Venue name')
          el-input(v-gmaps-searchbox:venue.name.website.formatted_address.geometry=vm v-model.lazy='venue')
        el-form-item(label='Address')
          el-input(v-model.lazy='venue.address_1')
          el-input(v-model.lazy='venue.address_2')
        el-form-item(label='City')
          el-input(v-model.lazy='venue.city')
        el-form-item(label='State')
          el-input(v-model.lazy='venue.state')
        el-form-item(label='Zip')
          el-input(v-model.lazy='venue.zip')
        el-form-item(label-width='120px')
          el-button(type='primary', @click='on_submit') Create
          el-button Cancel

      form(novalidate @submit.stop.prevent="submit")
        md-input-container
          label Initial value
          md-input(v-model="initialValue")

        md-input-container
          label Autocomplete (with fetch)
          md-input(v-model="autocompleteValue" :fetch="fetchFunction")

        md-input-container
          label With label
          md-input(placeholder="My nice placeholder")

        md-input-container(md-inline)
          label Inline field
          md-input

        md-input-container
          label Number
          md-input(type="number")

        md-input-container
          label Textarea
          md-textarea

        md-input-container
          label Disabled
          md-input(disabled)

        md-input-container(md-clearable)
          label Clearable
          md-input(v-model="initialValue")
</template>

<script>
  // import VueGoogleAutocomplete from 'vue-google-autocomplete'

  // const resource = Vue.resource('venues{/id}')

  export default {
    components: {
      // VueGoogleAutocomplete
    },
    props: {
      event
    },
    data() {
      return {
        venue: {
          name:         '',
          address_1:    '',
          address_2:    '',
          city:         '',
          state:        '',
          zip:          ''
        },
      }
    },
    methods: {
      get_address_data: function (address_data, place_result_data) {
        this.venue.address_1 = address_data.street_number + ' ' + address_data.route
        this.venue.address_2 = ''
        this.venue.city = address_data.locality
        this.venue.state = address_data.administrative_area_level_1
        this.venue.zip = address_data.postal_code
      },
      on_submit: function () {
        resource.save({}, {venue: this.venue}).then((response) => {
          this.$parent.$parent.fetch_venues()
          this.event.venue_id = response.body.id
        })
      },
    }
  }
</script>

<style lang="scss">
</style>
