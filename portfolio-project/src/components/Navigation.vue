<template>
<div class="navigation">
<h1>
    Thomas Anderson
</h1>
<router-link to="/">Home</router-link>
<router-link to="/home">Home</router-link>
<router-link to="/home">Home</router-link>
</div>   
</template>
<style scoped>
.navigation{
    background-color:var(--primary-blue);
    width: 40vw; 
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Source Code Pro', monospace;   
    color: white;
}
router-link{
    font-size: var(--h2);
}
.content{
    width: 40vw; 
    height: 100vh;
    position: absolute;
    right: 0;
    top: 0;
    color: black;
}
</style>
<script>
import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    return {router, route, }
  },
}
</script>