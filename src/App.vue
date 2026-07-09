<template>
  <div>
    <nav class="app_nav">
      <div class="app_logo_left">系统管理</div>
      <ul class='app_nav_ul'>
        <li @click="navigateTo('/home')">
          <a>首页<span></span></a>
        </li>
        <li @click="navigateTo('/AudioVisual')">
          <a>播放器 <span></span></a>
        </li>
        <li @click="navigateTo('/ProductionReport')">
          <a>报告 <span></span></a>
        </li>
        <li>设置</li>
      </ul>
    </nav>
    <el-row>
      <el-col :span="collapsed ? 2 : 4" class="borderrightcolor">
        <!-- <div class="sidebar-header">
          <el-button 
            type="text" 
            @click="toggleCollapse"
            class="collapse-btn"
          >
            <i :class="collapsed ? 'el-icon-arrow-right' : 'el-icon-arrow-left'"></i>
          </el-button>
        </div> -->
        <div class="app_left">
          <ul v-for="(item, index) in data" :key="index">
            <li class="menu-item">
              <div 
                class="menu-header cursor"
                @click="toggleMenu(index)"
              >
                <i :class="item.icon" v-if="!collapsed"></i>
                <span v-if="!collapsed">{{item.label}}</span>
                <i :class="item.expanded ? 'el-icon-arrow-up' : 'el-icon-arrow-down'" class="menu-arrow"></i>
              </div>
              <ul v-if="item.expanded" class="sub-menu">
                <li v-for="(c, cIndex) in item.children" :key="cIndex">
                  <span 
                    class="cursor sub-menu-item" 
                    @click="handleNodeClick(c)"  
                    :class="{'fontRed': c.active}"
                  >
                    <i :class="c.icon" v-if="!collapsed"></i>
                    <span v-if="!collapsed">{{c.label}}</span>
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="collapsed ? 22 : 20">
        <!-- 面包屑导航 -->
        <div class="breadcrumb-container">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item @click="navigateTo('/home')">首页</el-breadcrumb-item>
            <el-breadcrumb-item 
              v-for="(item, index) in breadcrumbList" 
              :key="index"
              :to="{ path: item.router }"
            >
              {{ item.label }}
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
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
      collapsed: false,
      data: [{
        label: '首页',
        icon: 'el-icon-s-home',
        expanded: true,
        children:[{
          label:'导航栏',
          icon: 'el-icon-menu',
          router:'/home'
        }]
      }, {
        label: 'Echarts绘图',
        icon: 'el-icon-data-line',
        expanded: false,
        children: [{
          label: '3DEcharts',
          icon: 'el-icon-data-analysis',
          router:'/echartsform'
        }, {
          label: 'DataV',
          icon: 'el-icon-pie-chart',
          router:'/dataVone'
        }]
      }, {
        label: '播放器',
        icon: 'el-icon-video-play',
        expanded: false,
        children: [{
          label: '音乐播放器',
          icon: 'el-icon-headset',
          router:'/AudioVisual'
        }]
      },{
        label:'交互功能',
        icon: 'el-icon-s-operation',
        expanded: false,
        children:[{
          label:'悬停功能',
          icon: 'el-icon-position',
          router:'/FirstHover'
        },{
          label:'悬停图片',
          icon: 'el-icon-picture',
          router:'/SecondHover'
        },{
          label:'点击事件',
          icon: 'el-icon-s-flag',
          router:'/ClickFirst'
        },{
          label:'前端风云',
          icon: 'el-icon-s-marketing',
          router:'/WebStorm'
        }]
      },{
        label:'报告管理',
        icon: 'el-icon-document',
        expanded: false,
        children:[{
          label:'导出图片/发送邮件',
          icon: 'el-icon-download',
          router:'/ProductionReport'
        }]
      }
    ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  computed: {
    breadcrumbList() {
      const currentPath = this.$route.path
      const breadcrumb = []
      
      // 遍历菜单数据，找到当前路径对应的菜单项
      this.data.forEach(menu => {
        if (menu.children) {
          menu.children.forEach(subMenu => {
            if (subMenu.router === currentPath) {
              // 添加父菜单
              breadcrumb.push({
                label: menu.label,
                router: '#' // 父菜单没有路由，点击时展开/收起
              })
              // 添加子菜单
              breadcrumb.push({
                label: subMenu.label,
                router: subMenu.router
              })
            }
          })
        }
      })
      
      return breadcrumb
    }
  },
  methods: {
    toggleCollapse() {
      this.collapsed = !this.collapsed
    },
    toggleMenu(index) {
      this.data[index].expanded = !this.data[index].expanded
    },
    handleNodeClick(data) {
      if(!data.children){
        // 重置所有菜单项的激活状态
        this.resetMenuActiveState()
        
        // 设置当前菜单项为激活状态
        this.setMenuActive(data.label)
        
        // 导航到对应路由
        this.$router.push(data.router)
      }
    },
    resetMenuActiveState() {
      this.data.forEach(item => {
        if (item.children) {
          item.children.forEach(child => {
            child.active = false
          })
        }
      })
    },
    setMenuActive(label) {
      this.data.forEach(item => {
        if (item.children) {
          item.children.forEach(child => {
            if (child.label === label) {
              child.active = true
            }
          })
        }
      })
    },
    navigateTo(router) {
      this.$router.push(router)
    }
  }
}
</script>

<style>
.demo-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
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
    position: relative;
}

.sidebar-header {
    padding: 10px;
    border-bottom: 1px solid #e4e7ed;
    text-align: center;
}

.collapse-btn {
    font-size: 16px;
    color: #606266;
    transition: all 0.3s ease;
}

.collapse-btn:hover {
    color: #409eff;
}

.app_left {
    padding: 10px 0;
}

.app_left ul {
    list-style: none;
    padding: 0;
}

.menu-item {
    margin-bottom: 5px;
}

.menu-header {
    display: flex;
    align-items: center;
    padding: 12px 20px;
    font-weight: 600;
    color: #303133;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    border-left: 3px solid transparent;
    position: relative;
}

.menu-header:hover {
    background: #ecf5ff;
    color: #409eff;
    border-left-color: #409eff;
}

.menu-header i {
    margin-right: 10px;
    font-size: 16px;
}

.menu-arrow {
    position: absolute;
    right: 15px;
    transition: transform 0.3s ease;
    font-size: 12px;
}

.sub-menu {
    list-style: none;
    padding: 0;
    margin: 0;
    overflow: hidden;
    transition: all 0.3s ease;
}

.sub-menu-item {
    display: flex;
    align-items: center;
    padding: 10px 20px 10px 40px;
    font-weight: normal;
    color: #606266;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    border-left: 3px solid transparent;
}

.sub-menu-item:hover {
    background: #f5f7fa;
    color: #409eff;
    border-left-color: #409eff;
    transform: translateX(5px);
}

.sub-menu-item i {
    margin-right: 10px;
    font-size: 14px;
}

.fontRed {
    color: #409eff;
    font-weight: 500;
    background: #ecf5ff;
    border-left-color: #409eff;
}

/* 折叠状态样式 */
.borderrightcolor.collapsed .menu-header span,
.borderrightcolor.collapsed .sub-menu-item span {
    display: none;
}

.borderrightcolor.collapsed .menu-header i,
.borderrightcolor.collapsed .sub-menu-item i {
    margin-right: 0;
}

.borderrightcolor.collapsed .sub-menu-item {
    padding-left: 20px;
    justify-content: center;
}

/* 面包屑样式 */
.breadcrumb-container {
  background: white;
  padding: 10px 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  position: fixed;
  top: 13px;
}

.el-breadcrumb {
  font-size: 14px;
}

.el-breadcrumb__item:last-child .el-breadcrumb__inner {
  color: #606266;
  font-weight: normal;
}

.el-breadcrumb__item:not(:last-child) .el-breadcrumb__inner {
  color: #409eff;
}

.el-breadcrumb__item:not(:last-child) .el-breadcrumb__inner:hover {
  color: #66b1ff;
  text-decoration: underline;
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
