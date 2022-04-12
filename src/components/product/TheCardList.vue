<template>
  <div class="the-card-list row mb-5">
    <TheCard
      v-for="product in productList"
      :key="product.id"
      :product="product"
      class="col-4 the-card-list__item"
    />
    <div v-if="!productList.length" class="the-card-list__nodata">
      <span>Нет ничего</span>
    </div>
  </div>
</template>

<script>
import TheCard from "./TheCard.vue";
export default {
  name: "TheCardList",
  props: {
    productList: {
      required: true,
      type: Array
    }
  },
  components: { TheCard }
}
</script>

<style scoped> 
.the-card-list__item {
  margin-right: -1px;
  margin-bottom: -1px;
}
</style>