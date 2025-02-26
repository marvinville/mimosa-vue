import Vue from 'vue'
import VueMeteorTracker from 'vue-meteor-tracker'   // here!
Vue.use(VueMeteorTracker)                           // here!

import App from './App.vue'

Meteor.startup(() => {
  new Vue({
    el: '#app',
    ...App,
  })
})