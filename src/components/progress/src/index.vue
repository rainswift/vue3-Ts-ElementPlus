<template>
  <div>
      <el-progress v-bind="$attrs" :percentage="p"  />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue-demi"

let props = defineProps({
  percentage:{
    type:Number,
    default:0
  },
  isAnimation:{
    type:Boolean,
    default:false
  },
  time:{
    type:Number,
    default:0
  }
})
let p= ref(0)
onMounted(() => {
  if(props.isAnimation){
    let t = Math.ceil(props.time/props.percentage)
    let timer = setInterval(()=>{
      p.value+=1
      if(p.value>=props.percentage){
        p.value = props.percentage
        clearInterval(timer)
      }
    },t)
  }else{
     p.value = props.percentage
  }
})
</script>

<style lang='scss' scoped>

</style>