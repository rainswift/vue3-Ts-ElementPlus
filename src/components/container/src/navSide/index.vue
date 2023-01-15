<template>
  <!-- <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :router="true"
    >
      <el-menu-item index="/chooseArea">
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
      
      
  </el-menu> -->
  <m-menu :data="data" router :defaultActive="$router.path"></m-menu>
</template>

<script lang="ts" setup>
let data = [
  {
    name: "省市区选择",
    icon: "document",
    index: "/chooseArea",
  },
  {
    name: "趋势标记",
    icon: "document",
    index: "/trend",
  },
  {
    name: "通知菜单",
    icon: "document",
    index: "/notification",
  },
    {
    name: "导航菜单",
    icon: "document",
    index: "/menu",
  },
];
</script>

<style>
</style>