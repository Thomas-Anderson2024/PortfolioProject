<template>
    <main class="home content translateable">
        <h1 class="contentText" v-html="paper">Hello, My Name Is <br> Thomas Anderson</h1>
        <h3 class="contentText">I am Staten Island Technical Highschool <br>student and prospective architect</h3>
    </main>
</template>
<script>
export default {
    data(){
        return{
            titleText:"Thomas Anderson",
            paper:'',
            timer:null
        }
    },
    mounted(){
        this.printer()
    },
    methods:{
        printer(){
            this,stopper()
            let i = -1
             this.timer = setInterval(()=>{
                 i++
                 const x = i%this.titleText.length
                 this
             })
             //https://miro.medium.com/max/1400/1*Mo_SVwjgG0d0GoQSkMQl0w.png
        }
    }
}
</script>
<style scoped>
.content{
    align-items: center;
} 
</style>