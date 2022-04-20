import store from '../store/index'

export const CartApiLocalStorage = {
  key: 'cart',
  set (data) {
    const json = JSON.stringify(data)
    localStorage.setItem(this.key, json)
  },
  get () {
    const json = localStorage.getItem(this.key)
    return json ? JSON.parse(json) : []
  }
}

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
    store.dispatch('upCartListCountById', this.filter(product))
  },
  quantityDown (product = {}) {
    store.dispatch('downCartListCountById', this.filter(product))
  },
  eraseProduct (product = {}) {
    store.dispatch('eraseProductFromCartById', this.filter(product))
  }
}