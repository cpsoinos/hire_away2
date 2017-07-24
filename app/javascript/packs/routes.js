import App from './app.vue'
import Event from './events/index.vue';
import EventForm from './events/form.vue';
// import Contact from './contacts/index.vue';
// import Venue from './venues/index.vue';

export const routes = [
  { path: '', component: App },
  { path: '/events', component: Event },
  { path: '/events/new', component: EventForm },
];
