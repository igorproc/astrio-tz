<template>
  <div class="layout row">
    <TheHeader class="col-12 h-100 mb-4" />
    <TheAside class="col-2 offset-1" />
    <TheWrapper class="col-8" />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheAside from './components/TheAside.vue'
import TheWrapper from './components/TheWrapper.vue'
export default {
    name: 'App',
    components: { TheHeader, TheAside, TheWrapper }
}
</script>

<style>
* {
  box-sizing: border-box;
}
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>
