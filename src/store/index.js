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
    },
    upCartListCountById (state, id) {
      state.cartList[id].count += 1
    },
    downCartListCountById (state, id) {
      state.cartList[id].count -= 1
    },
    eraseProductFromCartById (state, id) {
      state.cartList.splice(id, 1)
    }
  },
  actions: {
    setBrands ({ commit }, payload) {
      commit('setBrands', payload)
    },
    setCartList ({ commit }, payload) {
      commit('setCartList', payload)
    },
    upCartListCountById ({ commit }) {
      commit('upCartListCountById')
    },
    downCartListCountById ({ commit }) {
      commit('downCartListCountById')
    },
    eraseProductFromCartById ({ commit }) {
      commit('eraseProductFromCartById')
    }
  }
})
