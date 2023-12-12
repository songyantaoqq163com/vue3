<template>
    <div>
        <p>1112233</p>
        <AVBars
      caps-color="#FFF"
      :bar-color="['#f00', '#ff0', '#0f0']"
      canv-fill-color="#000"
      :caps-height="2"
      src="xumi.mp3"
    ></AVBars>
    </div>
</template>
<script>
import { AVBars } from 'vue-audio-visual'
// import AVBars from 'vue-audio-visual/dist/types/src/components/AVBars.vue';
export default {
    components:{
        AVBars,
    },
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>
