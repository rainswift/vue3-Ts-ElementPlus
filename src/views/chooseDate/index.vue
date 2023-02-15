<template>
  <div>
    <m-chooseDate  :startOptions="startOptions" :endOptions="endOptions"  @startChange="startChange" @endChange="endChange"> </m-chooseDate>  
  </div>
</template>

<script lang="ts" setup>
interface endValue{
    startDate:Date,
    endDate:Date
    
}
let startChange = (val:Date)=>{
   console.log(val)
}
let endChange = (val:endValue)=>{
    console.log(val)
}
let startOptions={
    size:'mini',
    // clearable:false
}
let endOptions={
    size:'mini',
    // clearable:false
}
</script>

<style lang="scss" scoped>

</style>