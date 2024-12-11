<template>
  <div id="row">
    <div class="borderRed card">
      <p>翻转1</p>
    </div>
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
  position: relative;
  width: 100px;
  height: 100px;
  color: white;
  cursor: pointer;
  transition: 1s ease-in-out;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  background: red;
}

.card:hover {
  -webkit-transform: rotateY(0.5turn);
  transform: rotateY(0.5turn);
  background: rgb(203, 222, 100);
}


#row{
  float:left;
  width:100%;
  background:#000000;
}
#row .block{
  float:left;
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
.hovicon.effect-1.small {
  width: 45px;
  height: 45px;
}
.hovicon.effect-1.mini {
  width: 30px;
  height: 30px;
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
  background: rgba(255, 255, 255, 0.1);
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
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
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

</style>
