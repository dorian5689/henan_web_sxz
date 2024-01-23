<script setup>
// 响应式对象 reactive,之后会有ref
import {reactive} from "vue";
// 之后模版展示数据
const obj = reactive({name:'登录'})
</script>

<template>
  {{obj.name}}

</template>

<style scoped>

</style>