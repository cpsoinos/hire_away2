/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

// console.log('Hello World from Webpacker')

import Vue from 'vue'
import ElementUI from 'element-ui'
import enLocale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-default/index.css'
import _ from 'lodash'
import App from './app.vue'

// import './utilities/vue_compiler'

import Navbar from './layouts/navbar.vue'
import Sidebar from './layouts/sidebar.vue'
import './stylesheets/global.scss'

Vue.use(ElementUI, { locale: enLocale.default })
window.Vue = Vue

Vue.config.devtools = true
Vue.config.debug = true
Vue.config.silence = false

document.addEventListener('DOMContentLoaded', () => {
  // const navbar = new Vue(Navbar).$mount('#navbar')
  // const sidebar = new Vue(Sidebar).$mount('#sidebar')
  const node = document.getElementById('app')
  const props = JSON.parse(node.getAttribute('data'))

  new Vue({
    render: h => h(App, { props })
  }).$mount('#app');
})
