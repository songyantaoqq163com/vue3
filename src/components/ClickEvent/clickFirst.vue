<template>
  <div id="app">
    <div>
        <p>点击事件1</p>
        <el-switch
            v-model="value1"
            active-text="打开"
            inactive-text="收起">
            </el-switch>
        <div :class="{value01:value1,value02:!value1}">{{value1?'打开':'收起'}}</div>
    </div>
  </div>
</template>
  <script>
    export default {
       data() {
          return {
            value1:false,
            }
      },
       methods: {
      }
   }
  </script>
  <style scope="true">
  .value01{
    width:100px;
    height:50px;
    background:yellow;
    transition:all 0.25s linear;
  }
  .value02{
    width:200px;
    height:100px;
    background:red;
    transition:all 0.2s linear;
  }
</style>
