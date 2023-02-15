<template>
  <div>
    <m-chooseCity @changeCity="changeCity" @changeProvince="changeProvince"> </m-chooseCity>  
  </div>
</template>

<script lang="ts" setup>
let changeCity=(val:string)=>{
    console.log(val)
}
let changeProvince=(val:string)=>{
    console.log(val)
}

</script>

<style lang="scss" scoped>

</style>