import store from "../store/index"

export const CartСhange = {
  cartAdd (product = {}) {
    store.commit('setCartList', product)
    console.log(store.state)
    localStorage.setItem(product.id, product)
  }
}