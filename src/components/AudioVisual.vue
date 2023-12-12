<template>
    <div>
        <p>音频1</p>
        <AVBars
      caps-color="#FFF"
      :bar-color="['#f00', '#ff0', '#0f0']"
      canv-fill-color="#000"
      :caps-height="2"
      src="xumi.mp3"
    ></AVBars>
    <p>音频2</p>
        <AVCircle
      caps-color="#FFF"
      :bar-color="['#f00', '#ff0', '#0f0']"
      canv-fill-color="#000"
      :caps-height="2"
      src="xumi.mp3"
    ></AVCircle>
    </div>
</template>
<script>
import { AVBars } from 'vue-audio-visual'
import { AVCircle } from 'vue-audio-visual'
export default {
    components:{
        AVBars,
        AVCircle
    },
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>
