<template>
  <aside class="the-aside">
    <ul class="list-group rounded-0">
      <router-link :to="{ name: 'PageMain' }" class="list-group-item">All Brands</router-link>
      <router-link
        v-for="brand in getBrands"
        :key="brand.id"
        :to="{ name: 'PageMain', query: { brand_id: brand.id } }"
        class="list-group-item"
      >
        {{ brand.title }}
      </router-link>
    </ul>
  </aside>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { Api } from '../api/api.js'
export default {
  name: 'TheAside',
  computed: {
    ...mapGetters({
      getBrands: 'getBrands'
    })
  },
  mounted () {
    Api.getBrandsList().then((data) => { 
      if(typeof(data) === 'object') return this.setBrands(data)
    })
  },
  methods: {
    ...mapActions({
      setBrands: 'setBrands'
    })
  }
}
</script>
