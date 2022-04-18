<template>
  <section class="page-main" :brandId="brandId">
    <TheCardList :productList="brandId ? setFilterProductList(brandId) : productList" />
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
    methods: {
      async setProductList () {
        this.productList = await Api.getProductList()
      },
      setFilterProductList (brandId) {
        return this.productList.filter(el => el.id === parseInt(brandId))
      }
    }
}
</script>
