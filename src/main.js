import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
