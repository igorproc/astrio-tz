<template>
  <section class="page-main" :brandId="brandId">
    <TheCardList :productList="productList" />
  </section>
</template>

<script>
import TheCardList from '../components/product/TheCardList.vue'
import { Api } from '../api/api'
export default {
    name: "PageMain",
    components: { TheCardList },
    data () {
      return {
        productList: []
      }
    },
    props: {
      brandId: {
        required: false,
        type: String
      }
    },
    mounted () { this.setProductList() },
    updated () { this.setProductList() },
    methods: {
      async setProductList () {
        if (!this.brandId) this.productList = await Api.getProductList()
        else this.productList = await Api.getProductById(this.brandId)
      }
    }
}
</script>
