<template>
  <div>
    <el-row>
      <el-col :span="4" class="borderrightcolor">
        <el-tree :data="data" :props="defaultProps" accordion @node-click="handleNodeClick">
        </el-tree>
      </el-col>
      <el-col :span="20" class="paddingleft">
        <router-view></router-view>
      </el-col>
    </el-row>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
    return {
      data: [{
        label: '首页',
        router:'/home'
      }, {
        label: 'Echarts绘图',
        children: [{
          label: '3DEcharts',
          router:'/echartsform'
        }, {
          label: 'DataV',
          router:'/dataVone'
        }]
      }, {
        label: '播放器',
        children: [{
          label: '音乐播放器',
          router:'/AudioVisual'
        }]
      },{
        label:'hover样式',
        children:[{
          label:'悬停功能',
          router:'/FirstHover'
        },{
          label:'悬停图片',
          router:'/SecondHover'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick(data) {
      if(!data.children){
        console.log(71,data,this.$router);
        this.$router.push(data.router)
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  border:1px solid #2c3e50;
  height: calc(100vh - 20px);
  background:#fff;
  color:#000;
}
audio{
    grid-row: 2!important;
}
canvas{
    grid-row:1!important
}
</style>
