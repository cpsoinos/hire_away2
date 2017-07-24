import Events from './events/index.vue'
import Card from './events/card.vue'

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('events')
  const props = JSON.parse(node.getAttribute('data'))

  new Vue({
    render: h => h(Events, { props })
  }).$mount(node);
})
