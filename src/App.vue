<template>
  <div>
    <nav class="app_nav">
      <div class="app_logo_left">首页</div>
      <ul class='app_nav_ul'>
        <li>
          <a>首页<span></span></a>
        </li>
        <li>
          <a>作品 <span></span></a>
        </li>
        <li>
          <a>简介 <span></span></a>
        </li>
        <li>设置</li>
      </ul>
    </nav>
    <el-row>
      <el-col :span="4" class="borderrightcolor">

        <div class="app_left">
          <ul v-for="item in data" :key="item.index">
            <span class="cursor">{{item.label}}</span>
            <li v-for="c in item.children" :key="c.index">
              <span class="cursor" @click="handleNodeClick(c)"  :class="{'fontRed': c.active}">{{c.label}}</span>
            </li>
          </ul>
        </div>
        <!-- <el-tree :data="data" :props="defaultProps" accordion @node-click="handleNodeClick">
        </el-tree> -->
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      selectedItem:null,
      curTrue:false,
      data: [{
        label: '首页',
        children:[{
          label:'导航栏',
          router:'/home'
        }]
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
      },{
        label:'其他事件',
        children:[
            {
            label:'点击事件',
            router:'/ClickFirst'
          },{
            label:'前端风云',
            router:'/WebStorm'
          },{
            label:'导出图片/发送邮件',
            router:'/ProductionReport'
          }
        ]
      }
    ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick(data) {
      if(!data.children){
        // this.data.forEach(e=>{
        //   e.active=false
        //   if(e.label==data.label){
        //     e.active=true
        //   }
        //   if(e?.children&&e.children.length>0){
        //     console.log(888,e?.children)
        //         e?.children.forEach(ee=>{
        //           ee.active=false
        //           if(ee.label==data.label){
        //             ee.active=true
        //           }
        //         })
        //   }
          
        // })
      console.log(2222,this.data)
        // data['active']=true
        
        var data1=this.updateItemRecurs(this.data,data.label)
        this.data=data1
        this.$router.push(data.router)
      }
    },
    updateItemRecurs(array,label){
      console.log(5,array,label)
      return array.map(item=>{
        item.active=false
        if(item.label==label){
          return {...item,active:true}
        }
        if(item?.children&&item.children.length){
          return {
            ...item,
            children:this.updateItemRecurs(item.children,label)
          }
        }
        return item

      })
    }
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background: #f5f7fa;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 顶部导航栏样式 */
.app_nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  height: 60px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  z-index: 100;
}

.app_logo_left {
  font-size: 24px;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.app_nav_ul {
  display: flex;
  gap: 40px;
  list-style: none;
}

.app_nav_ul li {
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.app_nav_ul li:hover {
  transform: translateY(-2px);
}

.app_nav_ul li a {
  position: relative;
  text-decoration: none;
  color: inherit;
  padding: 5px 0;
}

.app_nav_ul li a:hover span {
  width: 100%;
}

.app_nav_ul li a span {
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #fff;
  transition: width 0.3s ease;
  border-radius: 1px;
}

/* 主内容区域 */
.el-row {
  flex: 1;
  display: flex;
  min-height: calc(100vh - 60px);
}

/* 左侧边栏样式 */
.borderrightcolor {
  background: white;
  border-right: 1px solid #e4e7ed;
  height: calc(100vh - 60px);
  overflow-y: auto;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.app_left {
  padding: 20px 0;
}

.app_left ul {
  list-style: none;
  padding: 0;
}

.app_left .cursor {
  display: block;
  padding: 12px 20px;
  font-weight: 600;
  color: #303133;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
}

.app_left .cursor:hover {
  background: #ecf5ff;
  color: #409eff;
  border-left-color: #409eff;
  transform: translateX(5px);
}

.app_left li {
  list-style: none;
}

.app_left li .cursor {
  padding-left: 40px;
  font-weight: normal;
  color: #606266;
  font-size: 14px;
}

.app_left li .cursor:hover {
  background: #f5f7fa;
  color: #409eff;
  border-left-color: #409eff;
}

.app_left li .fontRed {
  color: #409eff;
  font-weight: 500;
  background: #ecf5ff;
  border-left-color: #409eff;
}

/* 主内容区域 */
.el-col:nth-child(2) {
  padding: 10px;
  background: #f5f7fa;
  height: calc(100vh - 60px);
  overflow-y: auto;
}

/* 音频和画布样式 */
audio {
  grid-row: 2!important;
}

canvas {
  grid-row: 1!important;
}

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>
