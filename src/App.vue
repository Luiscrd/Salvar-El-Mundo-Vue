<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'App',
  components: {
    Header: defineAsyncComponent( () => import('@/modules/shared/components/Header.vue')),
    Footer: defineAsyncComponent( () => import('@/modules/shared/components/Footer.vue')),
  }
}
</script>

<style>
html, body{
  margin: 0;
  padding: 0;
}

body{
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
}

#app{
  position: relative;
}
</style>
