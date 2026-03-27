<template>
  <div class="home-container">
    <div class="content-wrapper">
      <!-- 标题区域 -->
      <div class="title-section">
        <h1>导航栏样式展示</h1>
        <p>展示不同风格的导航栏实现效果</p>
      </div>

      <!-- 导航栏展示区域 -->
      <div class="nav-demos">
        <!-- 导航栏1 -->
        <div class="demo-card">
          <h2>导航栏1 - 自适应导航</h2>
          <nav class="nav-style-1">
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
        </div>

        <!-- 导航栏2 -->
        <div class="demo-card">
          <h2>导航栏2 - 3D旋转下拉</h2>
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
        </div>

        <!-- 导航栏3和4 -->
        <div class="demo-row">
          <div class="demo-card">
            <h2>导航栏3 - 下划线动画</h2>
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
          </div>

          <div class="demo-card">
            <h2>导航栏4 - 下拉菜单</h2>
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
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  }
}
</script>
<style scoped>
.home-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 40px 20px;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

/* 标题区域 */
.title-section {
  text-align: center;
  margin-bottom: 10px;
  padding: 10px 0;
}

.title-section h1 {
  font-size: 36px;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
}

.title-section p {
  font-size: 18px;
  color: #666;
}

/* 导航栏展示区域 */
.nav-demos {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.demo-card {
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.demo-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
}

.demo-card h2 {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #f0f0f0;
}

.demo-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

/* 导航栏1样式 */
.nav-style-1 {
  display:flex;
  align-items:center;
  justify-content:space-around;
  color: aqua;
  padding: 0 20px;
  background-color: #000000;
  border-radius: 8px;
  height: 60px;
}

.logo_left {
  font-size:24px;
  font-weight: 600;
  flex:1;
}

.nav_ul {
  flex:1;
  display:flex;
  justify-content:space-between;
  max-width: 200px;
  list-style:none;
}

.nav_ul li {
  font-weight: 300;
  cursor: pointer;
}

.nav_ul li a {
  position:relative;
  text-align: center;
  text-decoration: none;
  color: inherit;
}

.nav_ul li a:hover span {
  width:100%;
  left:0;
}

.nav_ul li a span {
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

/* 导航栏2样式 */
.nav_one {
  display: flex;
  background-color:#808000;
  justify-content:center;
  border-radius: 8px;
  padding: 0;
}

.nav_one li {
  width:120px;
  height: 50px;
  text-align:center;
  line-height:50px;
  border:1px solid red;
  position: relative;
  list-style:none;
  cursor: pointer;
}

.nav_one li:hover .nav_Child {
  transform:rotateX(0deg);
  opacity:1;
}

.nav_Child {
  transition:all .5s;
  transform:rotatex(-90deg);
  transform-origin:left top;
  opacity:0;
  position:absolute;
  left: -40px;
  padding: 0;
}

.nav_Child li {
  cursor:pointer;
  width:120px;
  background:#808000;
  border: none;
}

.nav_Child li:hover {
  background:#808888;
}

/* 导航栏3样式 */
.nav3 {
  width: 100%;
  display: flex;
  padding:10px 0;
  justify-content: space-around;
  border:1px solid #000000;
  border-radius: 8px;
  padding: 20px 0;
}

.nav3_1 li {
  list-style:none;
}

.nav3_1 li a {
  position:relative;
  text-align: center;
  text-decoration: none;
  color: #333;
}

.nav3_1 li a:hover span {
  width:100%;
}

.nav3_1 li a span {
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

/* 导航栏4样式 */
.nav4 li {
  list-style:none;
  position: relative;
}

.nav4 li a {
  display: block;
  text-decoration: none;
  color: #333;
  padding: 0 10px;
}

.nav4_a {
  display:none;
  position: absolute;
  padding-left:0px;
  background: #000000;
  color: #ffffff;
  border-radius: 4px;
  z-index: 100;
  min-width: 100px;
}

.nav4 li:hover .nav4_a {
  display: block;
}

.nav4_a li {
  padding: 8px 12px;
  cursor: pointer;
}

.nav4_a li a {
  color: white;
}

.nav4_a li a:hover {
  background:red;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .demo-row {
    grid-template-columns: 1fr;
  }
  
  .title-section h1 {
    font-size: 28px;
  }
  
  .demo-card {
    padding: 20px;
  }
  
  .nav-style-1 {
    flex-direction: column;
    height: auto;
    padding: 15px;
    gap: 15px;
  }
  
  .nav_ul {
    max-width: none;
    width: 100%;
  }
}
</style>
