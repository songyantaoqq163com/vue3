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
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  border:1px solid #2c3e50;
  height: calc(100vh - 20px);
  background:#fff;
  color:#000; */
}
audio{
    grid-row: 2!important;
}
canvas{
    grid-row:1!important
}
.cursor:hover{
  color: red;
}
</style>
