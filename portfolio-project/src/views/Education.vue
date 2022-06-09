<template>
    <main class="education content translateable">
    
    <h2 class="header">Current School:</h2>
            <div class="listItem">
       <h3>-</h3>  <img class="schoolImage" src="https://operoo.com/wp-content/uploads/2020/08/SITHSseal_MED_CLR_WHT-1-600x600-1.png"><h3> Staten Island Technical High School</h3>
    </div>
    <h4 class="gradDate">- Days Until Graduation: {{Final_Result}}</h4>
    <h2 class="header">Prospective Schools:</h2>
    <div class="listItem">
       <h3>-</h3>  <img class="schoolImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Cornell_University_seal.svg/1200px-Cornell_University_seal.svg.png"><h3> Cornell University</h3>
    </div>
    <div class="listItem">
       <h3>-</h3>  <img class="schoolImage" src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Princeton_seal.svg"><h3> Princeton University</h3>
    </div>
    <div class="listItem">
       <h3>-</h3>  <img class="schoolImage" src="https://brand.rice.edu/sites/g/files/bxs2591/files/2019-08/190308_Rice_Mechanical_Brand_Standards_Logos-2.png"><h3> Rice University</h3>
    </div>
    </main>
</template>
<script setup>
const one_day = 1000 * 60 * 60 * 24
const present_date = new Date();
const graduation_date = new Date('6/22/2024')
var Result = Math.round(graduation_date.getTime() - present_date.getTime()) / (one_day);
var Final_Result = Result.toFixed(0)
</script>