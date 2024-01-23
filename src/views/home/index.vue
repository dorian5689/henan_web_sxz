<script setup>
// 复制login/index.vue
// 响应式对象 reactive,之后会有ref
import {reactive} from "vue";
// 之后模版展示数据
const obj = reactive({name:'首页'})
</script>

<template>
  <h1>
    1233333333
    {{obj.name}}
  </h1>

</template>

<style scoped>

</style>