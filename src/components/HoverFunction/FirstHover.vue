<template>
  <div id="row">
    <div style="display:flex;justify-content: flex-start;">
        <div class="borderRed card card_a">
          <p>盒子翻转1</p>
        </div>
        <div class="borderRed card card_a2">
          <p>盒子翻转2</p>
        </div>
        <div class="borderRed card card_font_1">
          <p>文字翻转1</p>
        </div>
        <div class="borderRed card card_color_a">
          <p>背景+平移1</p>
        </div>
        <div class="borderRed card card_color_b">
          <p>背景+平移2</p>
        </div>
    </div>
 
    <div class="row">
         <!-- 1 -->
          <div class="block">
            <i class="hovicon effect-1 sub-a">1虚线</i>
          </div>
          <!-- 2 -->
          <div class="block">
            <i class="hovicon effect-1 sub-b">2旋转</i>
          </div>
          <!-- 8 -->
          <div class="block">
            <i class="hovicon effect-8">8</i>
          </div>
          <div class="block">
            <i class="hovicon effect-2 effect-9">8</i>
          </div>
    </div>
    
    <div style="display:flex;justify-content: flex-start;">
        <button class="btn btn_1"><span>按钮1</span></button>
        <button class="btn btn_2"><span>按钮2</span></button>
        <button class="btn btn_3 btn_4"><span>按钮3</span></button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FirstHover',
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
<style>
.card {
  text-align: center;
  line-height: 50px;
  width: 100px;
  height: 100px;
  color: white;
  cursor: pointer;
  transition: 1s ease-in-out;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  background: rgba(30, 255, 0, 0.288);
  margin:5px;
}
/* 盒子翻转1 */
.card_a:hover{
  -webkit-transform: rotateY(0.5turn);
  transform: rotateY(0.5turn);
  background: rgb(203, 222, 100);
}
/* 盒子翻转2 */
.card_a2:hover{
  transform:rotate(360deg);
  transition:all 1s
}
/* 文字翻转1 */
.card_font_1:hover p{
  transform:rotate(360deg);
  transition:all 1s
}
/* 背景+平移1 */
.card_color_a:hover{
  box-shadow: inset 0 -100vmax 0 0 #02141e;
  color: #c8e050;
}
.card_color_a:hover p{
   transform:translate(0,-30px);
   transition:0.3s linear;
  box-shadow:inset 0 0 forestgreen;
}
/* 背景+平移2 */
.card_color_b:hover{
  box-shadow: inset 100vmax 0 0 0 #0925c4;
}
.card_color_b:hover p{
   transform:translate(10px,45px);
   transition:0.3s linear;
  box-shadow:inset 0 0 forestgreen;
}

#row{
  width:100%;
  height: 90dvh;
  background:#000000;
}
.row .block{
  display: inline;
  width:120px;
  height:150px;
}
.hovicon{
  display:inline-block;
  line-height:90px;
  cursor:pointer;
  margin:20px;
  height:90px;
  border-radius:50%;
  text-align:center;
  position:relative;
  text-decoration:none;
  z-index:1;
  color:#be2c2c;
}
.hovicon:after {
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  content: '';
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}
.hovicon:before {
  speak: none;
  font-size: 48px;
  line-height: 90px;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  display: block;
  -webkit-font-smoothing: antialiased;
}
/* 1 */
.hovicon.effect-1 {
  width: 92px;
  height: 92px;
  box-shadow: 0 0 0 4px white;
}
.hovicon.effect-1.sub-a {
  -webkit-transition: box-shadow 0.2s;
  -moz-transition: box-shadow 0.2s;
  transition: box-shadow 0.2s;
}
.hovicon.effect-1:before {
  line-height: 92px;
}
.hovicon.effect-1:after {
  top: -4px;
  left: -4px;
  padding: 0;
  z-index: 10;
  border: 4px dashed #fff;
}
.hovicon.effect-1:hover {
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  color: #fff;
}
.hovicon.effect-1:hover i {
  color: #fff;
}
/* 2 */
.hovicon.effect-1.sub-b:hover {
  -webkit-transition: box-shadow 0.2s;
  -moz-transition: box-shadow 0.2s;
  transition: box-shadow 0.2s;
}
.hovicon.effect-1.sub-b:hover:after {
  -webkit-animation: spinAround 9s linear infinite;
  -moz-animation: spinAround 9s linear infinite;
  animation: spinAround 9s linear infinite;
}
@-webkit-keyframes spinAround {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
@-moz-keyframes spinAround {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}
@keyframes spinAround {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* 8 */
.hovicon.effect-8 {
  background: rgba(255, 255, 255, 0.441);
  -webkit-transition: -webkit-transform ease-out 0.1s, background 0.2s;
  -moz-transition: -moz-transform ease-out 0.1s, background 0.2s;
  transition: transform ease-out 0.1s, background 0.2s;
  
  width:92px;
  height:92px;
}

.hovicon.effect-8:after {
  top: 0;
  left: 0;
  padding: 0;
  z-index: -1;
  box-shadow: 0 0 0 2px rgba(248, 246, 246, 0.895);
  opacity: 0;
  -webkit-transform: scale(0.9);
  -moz-transform: scale(0.9);
  -ms-transform: scale(0.9);
  transform: scale(0.9);
}
.hovicon.effect-8:hover {
  background: rgba(255, 255, 255, 0.05);
  -webkit-transform: scale(0.93);
  -moz-transform: scale(0.93);
  -ms-transform: scale(0.93);
  transform: scale(0.93);
  color: #fff;
}

.hovicon.effect-8:hover i {
  color: #fff;
}

.hovicon.effect-8:hover:after {
  -webkit-animation: sonarEffect 1.3s ease-out 75ms;
  -moz-animation: sonarEffect 1.3s ease-out 75ms;
  animation: sonarEffect 1.3s ease-out 75ms;
}
@-webkit-keyframes sonarEffect {
  0% {
    opacity: 0.3;
  }
  40% {
    opacity: 0.5;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1), 0 0 10px 10px #3851bc, 0 0 0 10px rgba(255, 255, 255, 0.5);
  }
  100% {
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1), 0 0 10px 10px #3851bc, 0 0 0 10px rgba(255, 255, 255, 0.5);
    -webkit-transform: scale(1.5);
    opacity: 0;
  }
}
@-moz-keyframes sonarEffect {
  0% {
    opacity: 0.3;
  }
  40% {
    opacity: 0.5;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1), 0 0 10px 10px #3851bc, 0 0 0 10px rgba(255, 255, 255, 0.5);
  }
  100% {
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1), 0 0 10px 10px #3851bc, 0 0 0 10px rgba(255, 255, 255, 0.5);
    -moz-transform: scale(1.5);
    opacity: 0;
  }
}
@keyframes sonarEffect {
  0% {
    opacity: 0.3;
  }
  40% {
    opacity: 0.5;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1), 0 0 10px 10px #3851bc, 0 0 0 10px rgba(255, 255, 255, 0.5);
  }
  100% {
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1), 0 0 10px 10px #3851bc, 0 0 0 10px rgba(255, 255, 255, 0.5);
    transform: scale(1.5);
    opacity: 0;
  }
}

.hovicon.effect-2{
  width: 92px;
  height: 92px;
  /* box-shadow: 0 0 0 4px 3851bc; */
}
.hovicon.effect-2:before {
  line-height: 92px;
}
.hovicon.effect-2:after {
  top: -4px;
  left: -4px;
  padding: 0;
  z-index: 10;
  border: 4px dashed #3851bc;
}
/* 按钮效果 */
button{
  margin: 20px;
}
.btn{
  width: 130px;
  height: 40px;
  color: #fff;
  background: transparent;
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),7px 7px 20px 0px rgba(0,0,0,.1),4px 4px 5px 0px rgba(0,0,0,.1);/*边框*/
  transition:all 0.3s ease;
  cursor:pointer;
  border-radius:5px;
  padding:10px 25px;
  position:relative;
	display:inline-block;
}
.btn_1{
  background:rgb(0,172,238);
	background:linear-gradient(0deg,rgba(0,172,238,1) 0%,rgba(2,126,251,1) 100%);
	width:130px;
	height:40px;
	line-height:42px;
	padding:0;
	border:none;
}
.btn_1 span {
	position:relative;
	display:block;
	width:100%;
	height:100%;
}
.btn_1:before,.btn_1:after {
	position:absolute;
	content:"";
	right:0;
	top:0;
	background:rgba(2,126,251,1);
	transition:all 0.3s ease;
}
.btn_1:before {
	height:0%;
	width:2px;
}
.btn_1:after {
	width:0%;
	height:2px;
}
.btn_1:hover {
	background:transparent;
	box-shadow:none;
}
.btn_1:hover:before {
	height:100%;
}
.btn_1:hover:after {
	width:100%;
}
.btn_1 span:hover {
	color:rgba(2,126,251,1);
}
.btn_1 span:before,.btn_1 span:after {
	position:absolute;
	content:"";
	left:0;
	bottom:0;
	background:rgba(2,126,251,1);
	transition:all 0.3s ease;
}
.btn_1 span:before {
	width:2px;
	height:0%;
}
.btn_1 span:after {
	width:0%;
	height:2px;
}
.btn_1 span:hover:before {
	height:100%;
}
.btn_1 span:hover:after {
	width:100%;
}

.btn_2 {
	background-color:#f0ecfc;
	background-image:linear-gradient(315deg,#f0ecfc 0%,#c797eb 74%);
	line-height:42px;
	padding:0;
	border:none;
}
.btn_2 span {
	position:relative;
	display:block;
	width:100%;
	height:100%;
}
.btn_2:before,.btn_2:after {
	position:absolute;
	content:"";
	right:0;
	bottom:0;
	background:#c797eb;
  transition:all 0.3s ease;
}
.btn_2:before {
	height:0%;
	width:2px;
}
.btn_2:after {
	width:0%;
	height:2px;
}
.btn_2:hover:before {
	height:100%;
}
.btn_2:hover:after {
	width:100%;
}
.btn_2:hover {
	background:transparent;
}
.btn_2 span:hover {
	color:#c797eb;
}
.btn_2 span:before,.btn_2 span:after {
	position:absolute;
	content:"";
	left:0;
	top:0;
	background:#c797eb;
  transition:all 0.3s ease;
}
.btn_2 span:before {
	width:2px;
	height:0%;
}
.btn_2 span:after {
	height:2px;
	width:0%;
}
.btn_2 span:hover:before {
	height:100%;
}
.btn_2 span:hover:after {
	width:100%;
}

.btn_3{
  box-shadow:inset 0 0 0 4px #c994bd;
  color:#c994bd;
  -webkit-transition:color 0.25s 0.125s;
  transition:color 0.25s 0.125s;
  position:relative;
}
.btn_3::before,.btn_3::after{
  border:0 solid transparent;
  box-sizing:border-box;
  content:'';
  position:absolute;
  width:0;
}
.btn_3::before{
  top:0;
  right:0;
}
.btn_3::after{
  left:0;
  bottom:0;
}
.btn_3::after{
  border-top-width:4px;
  border-left-width:4px;
}
.btn_3::before{
  border-bottom-width:4px;
  border-right-width:4px;
}
.btn_3:hover::before,.btn_3:hover::after{
  border-color:#90f183;
  -webkit-transition:border-color 0s,height 0.25s,width 0.25s;
  transition:border-color 0s,height 0.25s,width 0.25s;
  width:100%;
  height:100%;
}
.btn_3:hover::before{
  -webkit-transition-delay:0s,0s,0.25s;
  transition-delay:0s,0s,0.25s;
}
.btn_3:hover::after{
  -webkit-transition-delay:0.5s,0.5s,0.75s;
  transition-delay:0.5s,0.5s,0.75s
}
.btn_4{
  border: none;
  cursor:pointer;
  line-height: 1.5;
  padding:1em 2em;
  letter-spacing:0.05rem;
}
.btn_4:focus{
  outline:2px dotted #55d7dc
}

</style>
