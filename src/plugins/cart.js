import store from "../store/index"
 
export const CartApi = {
  getCartLenght () {
    let total = 0
    store.getters.getCartList.forEach(element => {
      total += element.count
    })
    return total
  },
  getSubtotalPrice (cartList = []) {
    let total = 0
    cartList.forEach(el => {
      total += el.count * el.product.regular_price.value
    })
    return total.toFixed(2)
  },
  getter () {
    return store.getters.getCartList
  },
  filter (product = {}) {
    return this.getter().findIndex(el => el.product.id === product.id)
  },
  cartAdd (product = {}) { 
    if (this.filter(product) === -1) store.commit('setCartList', { product, count: 1 })
    else store.commit('upCartListCountById', this.filter(product))
  },
  quantityAdd (product = {}) {
    store.commit('upCartListCountById', this.filter(product))
  },
  quantityDown (product = {}) {
    store.commit('downCartListCountById', this.filter(product))
  },
  eraseProduct (product = {}) {
    store.commit('eraseProductFromCartById', this.filter(product))
  }
}