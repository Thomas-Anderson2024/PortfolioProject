<template>
    <div class="closedNavbar" >
        <div class="alwaysonscreenholder" @click="menutoggle()">
        <img class="logo" src="/android-chrome-512x512.png" alt="siteLogo - White capital letter T and A on blue background">
        <h4 class="subtleHint" v-if="menuopen == false">Click the Logo To Explore More</h4>
        </div>
        <div class="menu" v-if="menuopen == true" >
<router-link  to="/" class="pageSelector subheader" value="Home" @click="menutoggle()">Home</router-link><br>
<router-link to="education" class="pageSelector subheader" value="Education" @click="menutoggle()">Education</router-link><br>
<router-link to="skills" class="pageSelector subheader" value="Skills" @click="menutoggle()">Skills</router-link><br>
<router-link to="sports" class="pageSelector subheader" value="Sports" @click="menutoggle()">Sports</router-link><br>
<router-link to="work" class="pageSelector subheader" value="Work" @click="menutoggle()">Work</router-link><br>
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
},
}
</script>
<style scoped>
.menu{
  padding-bottom: 5rem;
}
.pageSelector::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: rgb(255, 255, 255);
  transform: scaleX(0);
  transition: transform 0.3s ease;
  transform-origin: top right;
  margin-bottom: 1.5rem;
}

</style>