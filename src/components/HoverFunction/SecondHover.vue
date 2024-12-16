<template>
  <div id="app">
    <p>图片1</p>
    <div class="image_container">
      <img src="../../assets/16pc1.jpeg" />
    </div>
    <p>棱镜1</p>
    <figure>
      <div class="figure_div">
        <span>正面ME</span>
        <span>反面Flo</span>
    </div>
    </figure>
   
  </div>
</template>
  <script>
    export default {
        name:'SecondHover',//图片hover
       data() {
          return {
            }
      },
       methods: {
      }
   }
  </script>
  <style scoped>
  /* 图片1 */
.image_container{
  width: 250px;
  height: 140px;
  overflow: hidden;
}
.image_container img{
  width: 250px;
}
.image_container img:hover{
  transform:scale(2);
  transition:all 0.3s ease;
}
/* 棱镜 */
figure{
  width: 200px;
  height: 60px;
  cursor:pointer;
  perspective:500px;
}
.figure_div{
  height:100%;
  transform-style:preserve-3d;
  transition:0.25s;
}
figure:hover .figure_div{
  transform:rotateX(-90deg)
}
.figure_div span{
  width:100%;
  height: 100%;
  position:absolute;
  box-sizing:border-box;
  border:5px solid #eb2d2d;
  line-height: 50px;
  font-size: 17pt;
  text-align: center;
  text-transform: uppercase;
}
.figure_div span:nth-child(1) {
  color: #150303;
  transform: translate3d(0, 0, 30px);
}

.figure_div span:nth-child(2) {
  color: #737f39;
  background: #fff;
  transform: rotateX(90deg) translate3d(0, 0, 30px);
}
</style>
