import { createStore } from 'vuex'

export default createStore({
  state: {
    brands: [],
    cartList: []
  },
  getters: {
    getBrands (state) {
      return state.brands
    },
    getCartList (state) {
      return state.cartList
    }
  },
  mutations: {
    setBrands (state, payload) {
      state.brands = payload
    },
    setCartList (state, payload) {
      state.cartList.push(payload)
    }
  },
  actions: {
    setBrands ({ commit }, payload) {
      commit('setBrands', payload)
    },
    setCartList ({ commit }, payload) {
      commit('setCartList', payload)
    }
  }
})
