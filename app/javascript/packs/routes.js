import Dashboard from './dashboard/index.vue'
import Event from './events/index.vue';
import EventForm from './events/form.vue';
import Contact from './contacts/index.vue';
import ContactForm from './contacts/form.vue';
import Venue from './venues/index.vue';
import VenueForm from './venues/form.vue';

export const routes = [
  { path: '', component: Dashboard },
  { path: '/events', component: Event },
  { path: '/events/new', component: EventForm },
  { path: '/contacts', component: Contact },
  { path: '/contacts/new', component: ContactForm },
  { path: '/venues', component: Venue },
  { path: '/venues/new', component: VenueForm },
];
