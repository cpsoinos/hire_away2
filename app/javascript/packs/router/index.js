import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../components/dashboard/index.vue'
import Event from '../components/events/index.vue';
import EventForm from '../components/events/form.vue';
import EventShow from '../components/events/show.vue';
import Contact from '../components/contacts/index.vue';
import ContactForm from '../components/contacts/form.vue';
import Venue from '../components/venues/index.vue';
import VenueForm from '../components/venues/form.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:      '',
      name:      'Dashboard',
      component: Dashboard
    },
    {
      path:      '/events',
      name:      'Event',
      component: Events
    },
    {
      path:      '/events/new',
      name:      'EventForm',
      component: EventForm
    },
    {
      path:      '/events/:id',
      name:      'EventShow',
      component: EventShow
    },
    {
      path:      '/contacts',
      name:      'Contact',
      component: Contacts
    },
    {
      path:      '/contacts/new',
      name:      'ContactForm',
      component: ContactForm
    },
    {
      path:      '/venues',
      name:      'Venue',
      component: Venues
    },
    {
      path:      '/venues/new',
      name:      'VenueForm',
      component: VenueForm
    },
  ]
})
