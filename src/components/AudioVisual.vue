<template>
    <div>
        <p>音频1</p>
        <el-upload v-model:file-list="fileList" class="upload-demo" ref="uploadRef"
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" :auto-upload="false">
            <template #trigger>
                <el-button type="primary">上传音频</el-button>
            </template>
            <template #tip>
                <div class="el-upload__tip">
                    jpg/png files with a size less than 500kb
                </div>
            </template>
        </el-upload>
        <span v-for="item in fileList" :key="item.index">
            <AVBars caps-color="#FFF" :bar-color="['#f00', '#ff0', '#0f0']" canv-fill-color="#000" :caps-height="2"
                :src="item.name"></AVBars>
        </span>
        <p>音频案例</p>
        <div class="disflex">
            <div class="disgrid borderRed" style="width:500px;">
                <AVBars caps-color="#FFF" :bar-color="['#f00', '#ff0', '#0f0']" :width="500" canv-fill-color="#000"
                    :caps-height="2" src="zj.mp3"></AVBars>
            </div>
            <div class="disgrid borderRed" style="width:500px;">
                <AVCircle caps-color="#FFF" :bar-color="['#f00', '#ff0', '#0f0']" canv-fill-color="#000" :caps-height="2"
                    src="xumi.mp3"></AVCircle>
            </div>
        </div>

    </div>
</template>
<script>
import { AVBars } from 'vue-audio-visual'
import { AVCircle } from 'vue-audio-visual'
export default {
    components: {
        AVBars,
        AVCircle
    },
    data() {
        return {
            fileList: []
        }
    },
    methods: {
    }
}
</script>
<style scoped></style>
