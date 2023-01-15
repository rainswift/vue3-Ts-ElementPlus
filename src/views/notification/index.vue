<template>
  <div>
      <m-notification :value="21">
        <template #default>
            <m-list :list="list" @clickItem="clickItem" @clickAction="clickAction"   :actions="actions"></m-list>
        </template>
      </m-notification> 
      <!-- <m-notification :value="21" :max="10" ></m-notification> 
      <m-notification :value="21" :isDot="true"></m-notification> 
      <m-notification :icon="'ChatRound'" :value="21"></m-notification>  -->
  </div>
</template>

<script lang="ts" setup>
import {list,actions} from "./data"
let clickItem = (val:any) =>{
    console.log(val);
    
}
let clickAction = (val:any) =>{
    console.log(val);
    
}
</script>

<style lang="scss" scoped>

</style>