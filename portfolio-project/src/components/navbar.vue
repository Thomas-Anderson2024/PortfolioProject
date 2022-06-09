<template>
<div class="navbar">
<div class="navContent translateable">
<router-link to="/" class="pageSelector subheader" value="Home" >Home -</router-link><br>
<router-link to="education" class="pageSelector subheader" value="Education" >Education -</router-link><br>
<router-link to="skills" class="pageSelector subheader" value="Skills" >Skills -</router-link><br>
<router-link to="sports" class="pageSelector subheader" value="Sports" >Sports -</router-link><br>
<router-link to="work" class="pageSelector subheader" value="Work" >Work -</router-link><br>
</div>   
</div>
</template>
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