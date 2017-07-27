// This is where it all goes :)
import Vue from 'vue'
import App from './components/App.vue'

Vue.config.productionTip = false

new Vue({
  el: '#application-container',
  template: '<App/>',
  components: { App }
})
