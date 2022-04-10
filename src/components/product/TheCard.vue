<template>
  <div class="card rounded-0 the-card">
    <img :src="product?.image" class="card-img-top ratio ratio-1x1" alt="">
    <div class="card-body">
      <h5 class="card-title">{{ product?.title }}</h5>
      <p class="card-text">{{ brandTitle }}</p>
      <div class="the-card__info d-flex justify-content-between">
        <span>{{ formatedPrice() }}</span>
        <i :onclick="addToCart" class="the-card__info-add bi bi-bag-plus-fill" />
      </div>
    </div>
  </div>
</template>

<script>
import { Formated } from '../../plugins/formated'
import { Api } from '../../api/api'
import { CartСhange } from '../../plugins/cart'
export default {
  name: 'TheCard',
  props: {
    product: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      brandTitle: ''
    }
  },
  mounted () {
    this.setBrandTitle()
  },
  methods: {
    async setBrandTitle () {
      const brand = await Api.getBrandById(this.product.id)
      this.brandTitle = typeof brand === 'object' ? brand.title : ''
    },
    formatedPrice () {
      return Formated.formatedPrice(this.product.regular_price)
    },
    addToCart () {
      return CartСhange.cartAdd(this.product)
    }
  }
}
</script>

<style scoped>
.the-card__info-add {
  cursor: pointer;
}
</style>