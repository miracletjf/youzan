import './components/member_base.css'
import './components/member.css'

import Vue from 'vue'
import VueRouter from 'vue-router'

import member from './components/member.vue'
import address from './components/address.vue'
import address_list from './components/address_list.vue'
import address_form from './components/address_form.vue'


Vue.use(VueRouter);

var routes = [{
  path: '/',
  component: member
},{
  path: '/address',
  component: address,
  children: [{
    path: '',
    component: address_list
  },{
    path: '/address_form',
    component: require('./components/address_form.vue').default
  }]
}]

var router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router
})