<template>
  <section class="page-cart">
    <TheCartList :cartList=getCartList />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import TheCartList from '../components/cart/TheCartList.vue'
export default {
    name: "PageCart",
    computed: {
      ...mapGetters([
        'getCartList'
      ])
    },
    components: { TheCartList }
}
</script>

<style>

</style>