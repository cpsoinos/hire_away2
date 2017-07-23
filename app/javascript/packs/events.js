import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// import Index from './events/index.vue'
// import Navbar from './layouts/navbar.vue'
// import Card from './events/card.vue'

Vue.use(ElementUI)

module.exports = {
  navbar: require('./layouts/navbar.vue'),
  index: require('./events/index.vue')
}


document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('navbar'))
  const navbar = new Vue(Navbar).$mount('navbar')

  document.body.appendChild(document.createElement('index'))
  const index = new Vue(Index).$mount('index')
  // const card = new Vue(Card).$mount('card')

})
