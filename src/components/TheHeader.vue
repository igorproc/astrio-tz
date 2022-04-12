<template>
  <nav class="the-header navbar">
    <div class="container">
      <router-link :to="{ name: 'PageMain' }" class="navbar-brand">
        <img src="/images/logo.png" width="100">
      </router-link>
      <router-link class="d-block" :to="{ name: 'PageCart' }">
        <i class="the-header__cart-icon bi bi-bag text-dark">
          <small v-show="cartListLength" class="the-header__cart-bage position-absolute translate-middle badge rounded-pill bg-light text-dark ms-2">
              {{ cartListLength }}
          </small>
        </i>
      </router-link>
    </div>
  </nav>
</template>

<script>
import { CartСhange } from '../plugins/cart'
export default {
  name: 'TheHeader',
  computed: {
    cartListLength: CartСhange.getCartLenght
  }
}
</script>

<style>
.the-header {
  background-color: var(--bs-cyan);
}
.the-header__cart-bage {
  font-style: normal;
}
</style>