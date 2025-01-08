<template>
  <div id="app">
    <!-- 导航栏1 -->
    <p>导航栏1-nav自适应导航</p>
    <nav>
      <div class="logo_left">名称</div>
      <ul class='nav_ul'>
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
     <!-- 导航栏2 -->
    <p>导航栏2</p>
    <ul class="nav_one">
      <li>
        <a>一级导航</a>
        <ul class="nav_Child">
          <li>导航1</li>
          <li>导航2</li>
        </ul>
      </li>
      <li>二级导航</li>
      <li>三级导航</li>
      <li>四级导航</li>
    </ul>

    <div style="display: flex; justify-content: space-around;">
      <!-- 导航效果1 -->
      <p>导航栏3</p>
      <ul class="nav3 nav3_1">
        <li>
            <a>首页<span></span></a>
          </li>
          <li>
            <a>作品 <span></span></a>
          </li>
          <li>
            <a>简介 <span></span></a>
          </li>
        </ul>
      <!-- 导航下拉框 -->
      <p>导航栏4</p>
      <ul class="nav3 nav4">
          <li><a>栏目1</a>
            <ul class="nav4_a">
              <li><a>菜单1</a></li>
              <li><a>菜单2</a></li>
              <li><a>菜单3</a></li>
            </ul>
          </li>
          <li>栏目2</li>
          <li>栏目3</li>
          <li>栏目4</li>
        </ul>
    </div>
   
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  created(){
   
  },
  methods: {
  }
}
</script>
<style>
/* 导航栏1 */
  nav{
    display:flex;
    align-items:center;
    justify-content:space-around;
    color: aqua;
    padding: 0 20px;
    background-color: #000000;
  }
  .logo_left{
    font-size:24px;
    font-weight: 600;
    flex:1;
  }
  .nav_ul{
    flex:1;
    display:flex;
    justify-content:space-between;
    max-width: 200px;
  }
  .nav_ul li{
    list-style:none;
    font-weight: 300;
  }
  .nav_ul li a{
    position:relative;
    text-align: center;
  }
  .nav_ul li a:hover span{
    width:100%;
    left:0;
  }
  .nav_ul li a span{
    position: absolute;
    bottom:-5px;
    left:0;
    right: 0;
    width:0;
    height:2px;
    background:#ff0000;
    transition:.5s;
    border-radius:50px;
  }
  /* 导航栏2 */
  .nav_one{
    display: flex;
    margin: 15px auto 0;
    background-color:#808000;
    justify-content:center;
  }
  .nav_one li{
    width:120px;
    height: 50px;
    text-align:center;
    line-height:50px;
    border:1px solid red;
    position: relative;
  }
  .nav_one li:hover .nav_Child{
    transform:rotateX(0deg);
    opacity:1;
  }
  .nav_Child{
    transition:all .5s;
    transform:rotatex(-90deg);
    /* top-从上开始 */
    transform-origin:left top;
    opacity:0;
    position:absolute;
    left: -40px;
  }
  .nav_Child li{
    cursor:pointer;
    width:120px;
    background:#808000;
  }
  .nav_Child li:hover{
    background:#808888;
  }

  /* nav3 */
  .nav3{
    width: 500px;
    display: flex;
    padding:10px 0;
    justify-content: space-around;
    border:1px solid #000000;
  }
  .nav3_1 li a{
    position:relative;
    text-align: center;
  }
  .nav3_1 li a:hover span{
    width:100%;
  }
  .nav3_1 li a span{
    margin:auto;/*去掉，横条方向变更*/
    position: absolute;
    bottom:-5px;
    left:0;
    right: 0;
    width:0;
    height:2px;
    background:#ff0000;
    transition:.5s;
    border-radius:50px;
  }
  /* 导航栏4 */
  .nav4 li a{
    display: block;
  }
  .nav4_a{
    display:none;
    position: absolute;
    padding-left:0px;
    background: #000000;
    color: #ffffff;
  }
  .nav4 li:hover .nav4_a{
    display: block;
  }
  .nav4_a li a:hover{
    background:red;
  }
</style>
