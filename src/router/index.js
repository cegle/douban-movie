import Vue from 'vue'
import axios from 'axios'
import Router from 'vue-router'
import Index from '../views/Index'
import Search from '../views/Search'
import Detail from '../views/Detail'
import Top250 from '../views/Top250'

Vue.use(Router)
Vue.prototype.$axios = axios

export default new Router({
  routes: [{
    path: '/',
    component: Index
  }, {
    path: '/search/:searchKey',
    component: Search
  }, {
    path: '/detail/:id',
    component: Detail
  }, {
    path: '/top250',
    component: Top250
  }]
})
