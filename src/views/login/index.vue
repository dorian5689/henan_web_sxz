<template>
  <!--登录-->
  <div class="login">
    <!--登录内容-->
    <div class="login-content">
      <!--相关模块/相关样式-->
      <div class="login-item  login-box">
        <i>
          <!--字体图标,可以使用element-plus-->
          <el-icon>
            <HelpFilled></HelpFilled>
            <Tools></Tools>
            <Grid></Grid>
            <TrendCharts></TrendCharts>
          </el-icon>
        </i>
        <p>软件平台</p>
      </div>

    </div>
  </div>
</template>

<script setup>
import {ref, reactive} from "vue"
import {HelpFilled,Tools,Grid,TrendCharts} from '@element-plus/icons-vue'

</script>


<!-- 这里是大于3.2
<script setup>
// 响应式对象 reactive,defineComponent 对整个对象更好的类型提示,TS
import {ref,reactive} from "vue";
// ref  怎么用 对象
// const n = ref(0) // const n 为只读属性
let n = ref(0) // 本质  const n = reactive({value:0})
// 不要要包含到 state中
const obj = reactive({id: 1}) // 响应式数据对象
const arr = reactive([
  {title: '标题', id: 1},
  {title: '标题', id: 2},
  {title: '标题', id: 3},
])

// 没有state
// 数字点击加1 双方一块加
const add = () => {
  // 数字相加
  obj.id+=1;
  n.value++; // ref n 为只包含value 属性
  // arr.push({
  //   title: '标题',
  //   id: arr.length + 1
  // }
  // )
}
// 不需要返回了
</script>

<template>
  <h1>
{{ obj.id }}==={{n}}
  </h1>
  <ul>
<li v-for="(v,i) in arr" :key="v.id">{{ v.title }}
</li>
  </ul>
  <el-button type="primary" @click="add">添加数据</el-button>

</template>

<style scoped>

</style>
-->

<!-- 这里是小于3.2 没有setup

<script >
// 响应式对象 reactive,defineComponent 对整个对象更好的类型提示,TS
import {reactive,defineComponent} from "vue";
export  default defineComponent({
  setup(){
// 创建响应式数据对象
const state = reactive({
  id:1,
  arr:[
  {title:'标题',id:1},
  {title:'标题',id:2},
  {title:'标题',id:3},
  ]
});
const  add=()=>{
  state.arr.push({title: '标题',
  id:state.arr.length+1})
}
// 创建后返回
//setup函数中将响应式数据对象return出去供template使用
// 返回对象和函数,....可扩展运算符
return {...state,
add
};


  }
})
</script>

<template>
  <h1>
{{id}}
  </h1>
  <ul>
<li v-for="(v,i) in arr":key="v.id">{{v.title}}
</li>
  </ul>
  <el-button type="primary" @click="add">添加数据</el-button>

</template>

<style scoped>

</style>

-->
<script setup>
</script>