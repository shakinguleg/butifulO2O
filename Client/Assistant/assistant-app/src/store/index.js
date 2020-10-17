import Vue from 'vue'
import Vuex from 'vuex'

import enter from '../views/enter/store/enter';
import serveItem from '../views/detailPages/serverItem/store'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    enter,
    serveItem
  }
})
