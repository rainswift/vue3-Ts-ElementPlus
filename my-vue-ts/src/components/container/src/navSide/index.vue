<template>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="collapse"
    >
      <el-menu-item index="2">
        <!-- <el-icon-fold></el-icon-fold> -->
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon><document /></el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
  let props = defineProps<{
    collapse: boolean
  }>()
</script>

<style>

</style>