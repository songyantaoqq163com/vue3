<template>
  <div id="app">
    <div class="borderRed card">
      <p>翻转1</p>
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
</style>
