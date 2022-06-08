<template>
  <div>
    <navigation/>
    <home v-if="view == 'home'"/>
    <education v-if="view == 'Education'"/>
  </div>
</template>
<script>
import navigation from './components/Navigation.vue'
import home from './components/Home.vue'
import education from './components/Education.vue'
 
export default {
 components: {
  navigation,
  home,
  education,
 },
 data() {
   return {
     view:"home"
   }
 }
}
</script>
<style>
@import url('./assets/base.css');
</style>
