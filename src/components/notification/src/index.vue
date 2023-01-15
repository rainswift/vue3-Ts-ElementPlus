<template>
  <div>
    <el-popover
    placement="bottom"
    :width="300"
    trigger="click"
    popper-class="com-popper"
  >
    <template #default>
        <slot></slot>    
    </template>
    <template #reference>
        <el-badge :value="value" class="item" :max="max" :is-dot="isDot">
            <component :is="`el-icon-${toLine(icon)}`"></component>
        </el-badge>
    </template>
  </el-popover>

      
  </div>
</template>

<script lang="ts" setup>
import {toLine} from "../../../utils"
let props = defineProps({
    icon:{
        type:String,
        default:"Bell"

    },
    value:{
        type:[String,Number],
        default:"66"
    },
    max:{
        type:Number,
    },
    // 是否显示小圆点
    isDot:{
        type:Boolean,
        default:false
    },
})
</script>

<style lang="scss" scoped>
svg{
 width: 1em; height: 1em; 
}
</style>