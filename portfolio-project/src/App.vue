<template>
  <div>
    <navigation/>
    <router-view/>
  </div>
</template>
<script setup>
import navigation from './components/Navigation.vue'
</script>
<style>
@import url('./assets/base.css');
</style>
