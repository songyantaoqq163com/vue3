<template>
    <div class="audio-visual-container">
        <h2>音频播放器</h2>
        
        <!-- 音频1 -->
        <div class="audio-section">
            <h3>音频上传</h3>
            <el-upload v-model:file-list="fileList" class="upload-demo" ref="uploadRef"
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" :auto-upload="false">
                <template #trigger>
                    <el-button type="primary">上传音频</el-button>
                </template>
                <template #tip>
                    <div class="el-upload__tip">
                        支持音频文件上传
                    </div>
                </template>
            </el-upload>
            <div v-for="item in fileList" :key="item.name" class="uploaded-audio">
                <AVBars caps-color="#FFF" :bar-color="['#f00', '#ff0', '#0f0']" canv-fill-color="#000" :caps-height="2"
                    :src="item.name"></AVBars>
            </div>
        </div>

        <!-- 音频案例 -->
        <div class="audio-section">
            <h3>音频可视化案例</h3>
            <div class="visualization-grid">
                <div class="visualization-item">
                    <h4>柱状可视化</h4>
                    <div class="visualization-container">
                        <AVBars caps-color="#FFF" :bar-color="['#f00', '#ff0', '#0f0']" :width="400" canv-fill-color="#000"
                            :caps-height="2" src="zj.mp3"></AVBars>
                    </div>
                    <div class="player-controls">
                        <el-button type="primary" size="small" @click="playAudio('zj.mp3')">播放</el-button>
                        <el-button size="small" @click="pauseAudio('zj.mp3')">暂停</el-button>
                    </div>
                </div>
                
                <div class="visualization-item">
                    <h4>圆形可视化</h4>
                    <div class="visualization-container">
                        <AVCircle caps-color="#FFF" :bar-color="['#f00', '#ff0', '#0f0']" canv-fill-color="#000" :caps-height="2"
                            src="xumi.mp3"></AVCircle>
                    </div>
                    <div class="player-controls">
                        <el-button type="primary" size="small" @click="playAudio('xumi.mp3')">播放</el-button>
                        <el-button size="small" @click="pauseAudio('xumi.mp3')">暂停</el-button>
                    </div>
                </div>
            </div>
        </div>

        <!-- 带歌词的音频播放器 -->
        <div class="audio-section">
            <h3>带歌词的音频播放器</h3>
            <div class="lyric-player">
                <div class="player-header">
                    <h4>寻屿 - 立花·凉太</h4>
                </div>
                <div class="player-body">
                    <div class="visualization-large">
                        <AVBars caps-color="#FFF" :bar-color="['#409eff', '#67c23a', '#e6a23c']" :width="600" canv-fill-color="#1a1a2e"
                            :caps-height="3" src="立花·凉太 - 寻屿.mp3" ref="mainPlayer"></AVBars>
                    </div>
                    <div class="lyric-display">
                        <div class="lyric-content">
                            <div 
                                v-for="(line, index) in lyrics" 
                                :key="index"
                                :class="{ 'active': currentLyricIndex === index }"
                                class="lyric-line"
                            >
                                {{ line.text }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="player-footer">
                    <el-slider 
                        v-model="currentTime" 
                        :min="0" 
                        :max="duration" 
                        @input="seekAudio"
                    ></el-slider>
                    <div class="time-display">
                        <span>{{ formatTime(currentTime) }}</span>
                        <span>{{ formatTime(duration) }}</span>
                    </div>
                    <div class="control-buttons">
                        <el-button type="primary" @click="togglePlay">{{ isPlaying ? '暂停' : '播放' }}</el-button>
                        <el-button @click="stopAudio">停止</el-button>
                    </div>
                </div>
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
            fileList: [],
            isPlaying: false,
            currentTime: 0,
            duration: 0,
            currentLyricIndex: -1,
            audio: null,
            lyrics: [
                { time: 0, text: '寻屿 - 立花·凉太' },
                { time: 3, text: '在茫茫人海中寻找你的踪迹' },
                { time: 8, text: '每一个角落都留下我的足迹' },
                { time: 13, text: '风吹过脸颊带着你的气息' },
                { time: 18, text: '仿佛你就在我身边从未远离' },
                { time: 23, text: '夜色渐浓星星闪烁在天际' },
                { time: 28, text: '我在这座城市里独自寻觅' },
                { time: 33, text: '每一盏灯火都像是你的眼睛' },
                { time: 38, text: '指引我走向那未知的归期' },
                { time: 43, text: '寻寻觅觅多少个四季' },
                { time: 48, text: '只为找到那心中的岛屿' },
                { time: 53, text: '那里有你温暖的笑容' },
                { time: 58, text: '和我们曾经许下的约定' },
                { time: 63, text: '寻寻觅觅穿越风雨' },
                { time: 68, text: '只为到达那梦中的岛屿' },
                { time: 73, text: '那里有我们的故事' },
                { time: 78, text: '和永远不会褪色的记忆' }
            ]
        }
    },
    mounted() {
        // 创建音频对象
        this.audio = new Audio('立花·凉太 - 寻屿.mp3')
        this.audio.addEventListener('timeupdate', this.updateTime)
        this.audio.addEventListener('loadedmetadata', () => {
            this.duration = this.audio.duration
        })
        this.audio.addEventListener('ended', () => {
            this.isPlaying = false
            this.currentTime = 0
            this.currentLyricIndex = -1
        })
    },
    beforeUnmount() {
        // 清理音频事件监听
        if (this.audio) {
            this.audio.removeEventListener('timeupdate', this.updateTime)
            this.audio.pause()
            this.audio = null
        }
    },
    methods: {
        playAudio(src) {
            // 简单的播放控制（实际项目中可能需要更复杂的音频管理）
            console.log('播放音频:', src)
        },
        pauseAudio(src) {
            console.log('暂停音频:', src)
        },
        togglePlay() {
            if (this.isPlaying) {
                this.audio.pause()
            } else {
                this.audio.play()
            }
            this.isPlaying = !this.isPlaying
        },
        stopAudio() {
            this.audio.pause()
            this.audio.currentTime = 0
            this.isPlaying = false
            this.currentTime = 0
            this.currentLyricIndex = -1
        },
        seekAudio() {
            this.audio.currentTime = this.currentTime
        },
        updateTime() {
            this.currentTime = this.audio.currentTime
            this.updateLyric()
        },
        updateLyric() {
            for (let i = this.lyrics.length - 1; i >= 0; i--) {
                if (this.currentTime >= this.lyrics[i].time) {
                    this.currentLyricIndex = i
                    break
                }
            }
        },
        formatTime(seconds) {
            const mins = Math.floor(seconds / 60)
            const secs = Math.floor(seconds % 60)
            return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
        }
    }
}
</script>
<style scoped>
.audio-visual-container {
    padding: 20px;
    background: #f5f7fa;
    min-height: 100vh;
}

h2 {
    font-size: 24px;
    color: #333;
    margin-bottom: 30px;
    text-align: center;
}

.audio-section {
    background: white;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

h3 {
    font-size: 18px;
    color: #606266;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e4e7ed;
}

h4 {
    font-size: 16px;
    color: #909399;
    margin-bottom: 10px;
}

.uploaded-audio {
    margin-top: 10px;
}

.visualization-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.visualization-item {
    text-align: center;
}

.visualization-container {
    margin: 10px 0;
}

.player-controls {
    margin-top: 10px;
}

.lyric-player {
    background: #1a1a2e;
    border-radius: 8px;
    padding: 20px;
    color: white;
}

.player-header {
    text-align: center;
    margin-bottom: 20px;
}

.player-header h4 {
    color: #fff;
    font-size: 18px;
}

.player-body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    align-items: center;
    margin-bottom: 20px;
}

.visualization-large {
    display: flex;
    justify-content: center;
}

.lyric-display {
    height: 200px;
    overflow-y: auto;
    border: 1px solid #333;
    border-radius: 4px;
    padding: 10px;
    background: rgba(0, 0, 0, 0.3);
}

.lyric-content {
    text-align: center;
}

.lyric-line {
    padding: 8px 0;
    color: #ccc;
    font-size: 14px;
    transition: all 0.3s ease;
}

.lyric-line.active {
    color: #409eff;
    font-size: 16px;
    font-weight: bold;
    transform: scale(1.05);
}

.player-footer {
    border-top: 1px solid #333;
    padding-top: 15px;
}

.time-display {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #ccc;
    margin: 10px 0;
}

.control-buttons {
    display: flex;
    gap: 10px;
    justify-content: center;
}

/* 滚动条样式 */
.lyric-display::-webkit-scrollbar {
    width: 6px;
}

.lyric-display::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
}

.lyric-display::-webkit-scrollbar-thumb {
    background: #409eff;
    border-radius: 3px;
}
</style>
