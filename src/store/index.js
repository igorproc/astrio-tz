import { CartApiLocalStorage } from '@/plugins/cart'
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
    initCartList (state) {
      state.cartList = CartApiLocalStorage.get()
    },
    setBrands (state, payload) {
      state.brands = payload
    },
    updateCartList (state, payload) {
      state.cartList.push(payload)
      CartApiLocalStorage.set(state.cartList)
    },
    upCartListCountById (state, id) {
      state.cartList[id].count += 1
      CartApiLocalStorage.set(state.cartList)
    },
    downCartListCountById (state, id) {
      state.cartList[id].count -= 1
      CartApiLocalStorage.set(state.cartList)
    },
    eraseProductFromCartById (state, id) {
      state.cartList.splice(id, 1)
      CartApiLocalStorage.set(state.cartList)
    }
  },
  actions: {
    initCartList ({ commit }) {
      commit('initCartList')
    },
    setBrands ({ commit }, payload) {
      commit('setBrands', payload)
    },
    updateCartList ({ commit }, payload) {
      commit('updateCartList', payload)
    },
    upCartListCountById ({ commit }, id) {
      commit('upCartListCountById', id)
    },
    downCartListCountById ({ commit }, id) {
      commit('downCartListCountById', id)
    },
    eraseProductFromCartById ({ commit }) {
      commit('eraseProductFromCartById')
    }
  }
})
