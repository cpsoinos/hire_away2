import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './app.vue'
import router from './routes.js'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.config.productionTip = false

window.Vue = Vue

document.addEventListener('DOMContentLoaded', () => {
  // const navbar = new Vue(Navbar).$mount('#navbar')
  // const sidebar = new Vue(Sidebar).$mount('#sidebar')
  const node = document.getElementById('app')
  // const Events = Vue.resource('events{/id}')

  new Vue({
    router,
    render: h => h(App, { })
  }).$mount(node);
})
