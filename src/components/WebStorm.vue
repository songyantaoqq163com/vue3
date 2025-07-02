
<template>
 <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="Vue3" name="first">
        <h3>Pinia 是一个现代化的状态管理库</h3>
        <ol>
            <li>npm install pinia</li>
            <li>State(状态)用于存储应用的状态数据，类似于data,State必须是一个函数，返回一个对象或者原始值来初始化状态</li>
            <li>Getter(获取器)类似于computed属性，基于State的衍生数据，用于计算或处理状态以得到新的值</li>
            <li>Action(动作)用于定义操作方法，可以修改状态或执行异步操作</li>
            <li>pinia优势 1、简单易用，提供了更简单 更直观的API,避免了Vuex中的复杂概念，2、SSR,TypeScript,DevTools支持</li>
        </ol>
    </el-tab-pane>
    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
  </el-tabs>
</template>
  <script setup>
  import {ref} from 'vue'
  const activeName=ref('first')
  </script>
  <style scoped>
.demo-tabs{
    height: 500px;
    border:1px solid gray;
}
</style>