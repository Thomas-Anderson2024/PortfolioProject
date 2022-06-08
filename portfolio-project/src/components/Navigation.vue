<template>
<div class="navigation">
<h1>
    Thomas Anderson
</h1>
<button class="pageSelector" value="Home" @click="changeView('Home')">Home</button>
<button class="pageSelector" value="Education" @click="changeView('Education')">Education</button>
<button class="pageSelector" value="Skills" @click="changeView('Skills')">Skills</button>
<button class="pageSelector" value="Extracurriculars" @click="changeView('Extracurriculars')">Extracurriculars</button>
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
export default {
  props: ['view',],
  methods: {
    changeView(value){
      this.$props.view = value
    }
  }
}

</script>