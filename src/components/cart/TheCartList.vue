<template>
  <div class="the-cart-list container">
    <ul class="the-cart-list__list list">
        <TheCart
          v-for="cartSection in cartList"
          :key="cartSection"
          :cartSection = "cartSection"
          class="list__item list-group-item"
        />
    </ul>
    <div v-if="!cartList.length" class="the-cart-list__nodata">
      <span>Вы ещё ничего не выбрали</span>
    </div>
    <div v-else class="the-cart-list__checkout d-flex flex-column align-items-end">
      <div class="the-cart-list__checkout-amount">
        <span class="fw-bold">Subtotal:</span>
        <span class="fw-bold">{{ getSubtotal() }}</span>
      </div>
      <button type="button" class="btn btn-primary btn-lg px-5">Checkout</button>
    </div>
  </div>
</template>

<script>
import { Formated } from '@/plugins/formated'
import { CartApi } from '../../plugins/cart'
import TheCart from './TheCart.vue'
export default {
  name: 'TheCartList',
  props: {
    cartList: {
      required: true,
      type: Array
    }
  },
  methods: {
    getSubtotal () {
      const subtotal = CartApi.getSubtotalPrice(this.cartList)
      return Formated.formatedAmount('USD',subtotal)
    }
  },
  components: { TheCart }
}
</script>
