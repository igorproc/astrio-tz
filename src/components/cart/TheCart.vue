<template>
  <div class="the-cart">
    <img :src="cartSection.product.image" class="the-cart__img">
    <span>{{ cartSection.product.title }}</span>
    <span>{{ formatedPrice() }}</span>
    <div class="the-cart__quantity-menu d-flex flex-column w-50">
      <span class="the-cart__quantity-menu-count ">{{ cartSection.count }}</span>
      <div class="btn-group" role="group">
        <button
          @click="upQuantity()"
          type="button"
          class="btn btn-secondary"
        >
          +
        </button>
        <button
          @click="downQuantity()"
          :disabled="!downPosibly"
          type="button"
          class="btn btn-secondary"
          :class="downPosibly ? 'btn_active' : 'btn_non-active'"
        >
          -
        </button>
      </div>
    </div>
    <span class="">{{ amountPrice() }}</span>
    <i @click="erase" class="the-cart__erase bi bi-eraser"></i>
  </div>
</template>

<script>
import { CartApi } from '../../plugins/cart'
import { Formated } from '../../plugins/formated'
export default {
  name: 'TheCart',
  data () {
    return {
      downPosibly: true
    }
  },
  props: {
    cartSection: {
      required: true,
      type: Object
    }
  },
  mounted () {
    this.formatedPrice(),
    this.amountPrice()
  },
  methods: {
    formatedPrice () {
      return Formated.formatedPrice(this.cartSection.product.regular_price)
    },
    amountPrice () {
      if (this.cartSection.count <= 1) this.downPosibly = false
      else this.downPosibly = true

      const amount = this.cartSection.product.regular_price.value * this.cartSection.count
      return Formated.formatedPrice({ currency: this.cartSection.product.regular_price.currency, value: amount })
    },
    upQuantity () {
      CartApi.quantityAdd(this.cartSection.product)
    },
    downQuantity () {
      CartApi.quantityDown(this.cartSection.product)
    },
    erase () {
      CartApi.eraseProduct(this.cartSection.product)
    }
  }
}
</script>

<style scoped>
.the-cart {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr 1fr 1fr;
  align-items: center;
  text-align: center;
}
.the-cart__img {
  padding: .1rem;
  width: 9rem;
  border: 1px solid gray;
  border-radius: 6px;
}
.the-cart__erase {
  cursor: pointer;
}
.btn_active {
  opacity: 1;
  }
.btn_non-active {
  opacity: 0.5;
  }
</style>