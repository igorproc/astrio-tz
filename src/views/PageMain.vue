<template>
  <section class="page-main">
    <TheCardList :productList="productList" />
  </section>
</template>

<script>
import TheCardList from '../components/product/TheCardList.vue'
import { Api } from '../api/api';
export default {
    name: "PageMain",
    components: { TheCardList },
    data () {
      return {
        productList: []
      }
    },
    mounted () {
      this.setProductList(),
      this.getQuerys()
    },
    methods: {
      async setProductList () {
        this.productList = await Api.getProductList()
      },
      getQuerys () {
        console.log(this.$route.query.brand_id)
      }
    }
}
</script>
