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
import 'element-ui/lib/theme-default/index.css'
import Navbar from './layouts/navbar.vue'

Vue.use(ElementUI)

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('navbar'))
  const navbar = new Vue(Navbar).$mount('navbar')

  console.log(navbar)
})
