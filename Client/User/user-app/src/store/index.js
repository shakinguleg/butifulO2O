import Vue from 'vue'
import Vuex from 'vuex'
import doorService from '../views/detailPage/doorService/store'
import serveItem from '../views/detailPage/serveItem/store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    doorService,
    serveItem
  }
})
