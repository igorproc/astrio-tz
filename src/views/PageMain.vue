<template>
  <section class="page-main">
    <TheCardList :productList="productList" />
  </section>
</template>

<script>
import TheCardList from "../components/product/TheCardList.vue";
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
      this.setProductList()
    },
    methods: {
      async setProductList () {
        this.productList = await Api.getProductList()
      }
    }
}
</script>
