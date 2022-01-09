<template>
  <div>
    <m-choose-area @change="changeArea"></m-choose-area>
  </div>
</template>

<script lang='ts' setup>
let changeArea = (val: any) => {
  console.log(val)
}
</script>

<style lang='scss' scoped>
</style>