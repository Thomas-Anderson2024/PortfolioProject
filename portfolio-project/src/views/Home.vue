<template>
    <main class="home content translateable">
        <h1 class="contentText">Hello, My 
        <span class="typed-text">{{ typeValue2 }}</span>
         Is<br>
        <span class="typed-text">{{ typeValue }}</span>
        <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
        </h1>
        <h3 class="contentText">I am Staten Island Technical Highschool <br>student and prospective architect</h3>
    </main>
</template>
<script>
    export default{
        data: () =>{
          return {
              typeValue: '',
              typeValue2: '',
              typeStatus: false,
              typeArray: ['Thomas Anderson', 'Tanderson0876'],
              typeArray2: ['Name', 'Gmail'],
              typingSpeed: 150,
              erasingSpeed: 100,
              newTextDelay: 2000,
              textArrayIndex: 0,
              charIndex: 0,
          }
        },
        methods:{
            typeText(){
                if(this.charIndex < this.typeArray[this.textArrayIndex].length){
                    if(!this.typeStatus)
                    this.typeStatus = true;

                    this.typeValue += this.typeArray[this.textArrayIndex].charAt(this.charIndex); 
                    this.typeValue2 += this.typeArray2[this.textArrayIndex].charAt(this.charIndex);
                    this.charIndex += 1;

                    setTimeout(this.typeText, this.typingSpeed)
                }
                else{
                    this.typeStatus = false;
                    setTimeout(this.eraseText, this.newTextDelay);
                }
            },
            eraseText(){
                if(this.charIndex > 0){
                    if(!this.typeStatus)
                    this.typeStatus = true;

                    this.typeValue = this.typeArray[this.textArrayIndex].substring(0, this.charIndex - 1);
                    this.typeValue2 = this.typeArray2[this.textArrayIndex].substring(0, this.charIndex - 1);
                    this.charIndex -= 1;
                    setTimeout(this.eraseText, this.erasingSpeed);
                }
                else {
                    this.typeStatus = false;
                    this.textArrayIndex += 1;
                    if(this.textArrayIndex >= this.typeArray.length)
                    this.textArrayIndex = 0;

                    setTimeout(this.typeText, this.typingSpeed - 1000);
                }
            },
        },
        created(){
            setTimeout(this.typeText, this.newTextDelay + 200)
        }
        }
</script>
<style scoped>
.content{
    align-items: center;
}
.typed-text{
    font-size: var(--h1);
}
.cursor{
    display: inline-block;
    margin-left: 1rem;
    background-color: black;
    animation: cursorBlink 1s infinite;
    width: .25rem;
}
.cursor.typing{
    animation: none;
}
@keyframes cursorBlink {
    49%{ background-color: black; }
    50%{ background-color: transparent; }
    99%{ background-color: black; }
}
</style>