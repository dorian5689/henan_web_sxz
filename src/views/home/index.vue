<script setup>
// 复制login/index.vue
// 响应式对象 reactive,之后会有ref
import {reactive} from "vue";
import {useRouter} from "vue-router";

import NavMeun from "./navMeun.vue";
// 之后模版展示数据
const  router = useRouter()
const obj = reactive({name:'首页'})
const  goBack =()=>{
  router.push('/login') // 跳转到登录
}
</script>

<template>
  <div id="module">
    <el-container>
      <NavMeun></NavMeun>
      <!-- 左侧导航-->
    <!--<el-aside width="200px">Aside</el-aside>-->
      <el-container>
        <!--右侧头部-->
        <el-header >
           <el-button type="primary" class="exit" @click="goBack"> 退出</el-button>
         </el-header>
        <!--右侧主体-->
        <el-main>666666</el-main>
      </el-container>
    </el-container>
  </div>

</template>

<style scoped>

</style>