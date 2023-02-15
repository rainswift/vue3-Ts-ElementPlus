<template>
  <div style="display: flex;">
    <div style="margin-right:20px">
       <el-date-picker
        v-model="startDate"
        type="date"
        :placeholder="startPlaceholder"
        :disabledDate="startDiableDate"
        v-bind="$attrs.startOptions"
      />
    </div>
    <div>
        <el-date-picker
        v-model="endDate"
        type="date"
        :placeholder="endPlaceholder"
         :disabled="endDateDisabled"
         :disabledDate="endDisableDate"
        v-bind="$attrs.endOptions"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref,watch} from 'vue'
let props = defineProps({
    startPlaceholder:{
        type:String,
        default:'请选择开始日期'
    },
   
    endPlaceholder:{
        type:String,
        default:'请选择结束日期'
    },
    disableToday:{
        type:Boolean, 
        default:true
    }
 
})

let startDate = ref<Date | null>(null)
let endDate = ref<Date | null>(null)
let endDateDisabled = ref<boolean>(true)

let startDiableDate = (time:Date)=>{
    if(props.disableToday) return time.getTime() < Date.now() - 1000 * 60 * 60*24
}

let endDisableDate = (time:Date)=>{
   if(startDate.value){
       return time.getTime()<startDate.value.getTime() + 1000 * 60 * 60*24
   }
}


let emits = defineEmits(['startChange','endChange'])


watch(()=> startDate.value, val=>{
    if(!val){
          endDateDisabled.value = true
          endDate.value = null
    }
    else{
        endDateDisabled.value = false
        emits('startChange',val)
    }
})

watch(()=> endDate.value, val=>{
    if(val) {
        emits('endChange',{
            startDate:startDate.value,
            endDate:val
        })
    }
})


</script>

<style lang='scss' scoped>

</style>