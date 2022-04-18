import store from '../store/index'

export const CartApi = {
  getCartLenght () {
    let total = 0
    store.getters.getCartList.forEach(element => {
      total += element.count
    })
    return total
  },
  getSubtotalPrice () {
    let total = 0
    store.getters.getCartList.forEach(el => {
      total += el.count * el.product.regular_price.value
    })
    return total.toFixed(2)
  },
  filter (product = {}) {
    return store.getters.getCartList.findIndex(el => el.product.id === product.id)
  },
  cartAdd (product = {}) {
    if (this.filter(product) === -1) store.dispatch('updateCartList', { product, count: 1 })
    else store.dispatch('upCartListCountById', this.filter(product))
  },
  quantityAdd (product = {}) {
    store.commit('upCartListCountById', this.filter(product))
  },
  quantityDown (product = {}) {
    store.commit('downCartListCountById', this.filter(product))
  },
  eraseProduct (product = {}) {
    store.dispatch('eraseProductFromCartById', this.filter(product))
  }
}