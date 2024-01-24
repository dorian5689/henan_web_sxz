<script setup>
import {reactive} from "vue";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const  items = reactive([
  {name:"首页",icon:Document,url:'/index'},
  {name:"电量监控",icon:Location,url:'/index2'},
  {name:"统计分析",icon:Setting,url:'/index3'},
])
</script>

<template>
    <!-- 左侧导航-->
    <el-aside width="300px"></el-aside>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo">
        <el-sub-menu index="v.url" v-for="v in items" :key="v.url">
          <template #title>
            <el-icon><component :is="v.icon"></component></el-icon>
            <span>{{v.name}}</span>
          </template>
          </el-sub-menu>

      </el-menu>

</template>

<style scoped>

</style>