<template>
  <div style="width:200px">
    <m-menu :data="data1" background-color="red"></m-menu>

    <m-infinite-menu :data="data2"> </m-infinite-menu>  
  </div>
</template>

<script lang='ts' setup>
let data1 = [
    {
        name:'导航1',
        index:'1',
        icon:'document',
    },
    {
        name:'导航2',
        index:'2',
        icon:'document',
        children:[
            {
                name:'导航2-1',
                index:'21',
                icon:'document',
            },
        ]
    }
]
let data2 = [
    {
        name:'导航1',
        index:'1',
        icon:'document',
    },
    {
        name:'导航2',
        index:'2',
        icon:'document',
        children:[
            {
                name:'导航2-1',
                index:'21',
                icon:'document',
                children:[
                    {
                        name:'导航2-1-1',
                        index:'211',
                        icon:'document',
                    },
                ]
            },
        ]
    }
]
</script>

<style lang='scss' scoped>
</style>