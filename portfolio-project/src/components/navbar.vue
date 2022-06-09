<template>
<div class="navbar">
<div class="navContent translateable">
<router-link to="/" class="pageSelector subheader" value="Home" >Home -</router-link>
<router-link to="education" class="pageSelector subheader" value="Education" >Education -</router-link>
<router-link to="skills" class="pageSelector subheader" value="Skills" >Skills -</router-link>
<router-link to="sports" class="pageSelector subheader" value="Sports" >Sports -</router-link>
<router-link to="work" class="pageSelector subheader" value="Work" >Work -</router-link>
</div>   
</div>
</template>
<style scoped>
.navbar{
    background-color:var(--primary-blue);
    width: 40vw; 
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;

}
.navContent{
     display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    font-family: 'Source Code Pro', monospace;   
    color: white;
    padding-right: 3rem;
    height: 100vh;
}
.content{
    width: 40vw; 
    height: 100vh;
    position: absolute;
    right: 0;
    top: 0;
    color: black;
}
.header{
  font-size: var(--h1);
  font-weight: bolder;
}
.subheader{
  padding-right: 4rem;
}
</style>
<script>
import { useRouter, useRoute } from 'vue-router';

export default {
name: 'navbar',
setup() {
    const router = useRouter();
    const route = useRoute();    
    return { router, route, };
    },   
  }
</script>