<template>
  <div>
    <m-chooseTime :startOptions="startOptions" :endOptions="endOptions" @startChange="startChange" @endChange="endChange"> </m-chooseTime>  
  </div>
</template>

<script lang="ts" setup>
interface endValue{
    startTime:String,
    endTime:String
}
let startChange = (val:string)=>{
 console.log(val)
}
let endChange = (val:endValue)=>{
    console.log(val)
}
let startOptions={
    size:'mini',
    clearable:false
}
let endOptions={
    size:'mini',
    clearable:false
}
</script>

<style lang="scss" scoped>

</style>