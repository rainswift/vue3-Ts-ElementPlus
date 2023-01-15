<template>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :router="true"
    >
      <el-menu-item index="/chooseArea">
        <!-- <el-icon-fold></el-icon-fold> -->
        <template #title>省市区选择</template>
      </el-menu-item>
       <el-menu-item index="/trend">
        <template #title>趋势标记</template>
      </el-menu-item>
      <el-menu-item index="/notification">
        <template #title>通知菜单</template>
      </el-menu-item>
      <el-menu-item index="/menu">
        <template #title>菜单</template>
      </el-menu-item>
      
      
  </el-menu>
</template>

<script lang="ts" setup>

  
</script>

<style>

</style>