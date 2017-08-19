import Vue from 'vue'
import Navbar from './components/layouts/navbar'
import App from './app.vue'
import router from './router'

// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.css'
//
// Vue.use(VueMaterial)

// import store from './store/index'
// import { sync } from 'vuex-router-sync'

// sync(store, router)

Vue.use(VueRouter);
Vue.use(VueResource);
window.Vue = Vue

Vue.config.productionTip = false
//
// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   store,
//   // template: '<app/>',
//   components: { App }
// })


document.addEventListener('DOMContentLoaded', () => {
  // const navbar = new Vue(Navbar).$mount('#navbar')
  // const sidebar = new Vue(Sidebar).$mount('#sidebar')
  const node = document.getElementById('app')
  // const props = JSON.parse(node.getAttribute('data'))
  const router = new VueRouter({
    routes
  });

  const Event = Vue.resource('events{/id}')

  new Vue({
    router,
    render: h => h(App, { props })
  }).$mount(node);
})
