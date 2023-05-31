<template>
  <div>
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">
    <closedNavbar/>
    <navbar/>
    <router-view></router-view>
  </div>
</template>
<script>
import navbar from './components/navbar.vue'
import closedNavbar from './components/closedNavbar.vue'
export default { components: {navbar, closedNavbar}}
document.title = "Thomas Anderson Portfolio"
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js"></script>
<style>
@import url('./assets/base.css');
</style>
