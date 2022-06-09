<template>
    <div class="closedNavbar" >
        <img class="logo" src="/android-chrome-512x512.png" @click="menutoggle()">
        <div class="menu" v-if="menuopen == true">
<router-link to="/" class="pageSelector subheader" value="Home" >Home</router-link><br>
<router-link to="education" class="pageSelector subheader" value="Education" >Education</router-link><br>
<router-link to="skills" class="pageSelector subheader" value="Skills" >Skills</router-link><br>
<router-link to="sports" class="pageSelector subheader" value="Sports" >Sports</router-link><br>
<router-link to="work" class="pageSelector subheader" value="Work" >Work</router-link><br>
</div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      menuopen: false,
    }
  },
  methods: {
    menutoggle() {
    this.menuopen = !this.menuopen
}
}}
</script>