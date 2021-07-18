import Vue from 'vue'
import Vuex from 'vuex'

import apis from './../apis'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favourites: []
  },
  mutations: {
    setFavourites(state, favourites) {
      state.favourites = [
        ...favourites
      ]
    }
  },
  actions: {
    async fetchFavourites({ commit }) {
      try {
        const response = await apis.getAllFavourites()
        if (response.status !== 200) {
          throw new Error()
        }
        commit('setFavourites', response.data)
      } catch(error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
