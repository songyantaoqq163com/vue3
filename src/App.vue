<template>
  <div>
    <el-row>
      <el-col :span="4">
        <el-tree :data="data" :props="defaultProps" accordion @node-click="handleNodeClick">
        </el-tree>
        <el-button type="primary" disabled>Primary</el-button>
        <img alt="Vue logo" src="./assets/logo.png">
      </el-col>
      <el-col :span="20">
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
        label: '一级 1',
        children: [{
          label: '首页',
          router:'/home'
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          router:'/home?1'
        }, {
          label: '二级 2-2',
          router:'/home?2'
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '音乐播放器',
          router:'/AudioVisual'
        }, {
          label: '二级 3-2',
          router:'/AudioVisual?1'
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
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
  border:1px solid #2c3e50;
  height: calc(100vh - 20px);
}
</style>
