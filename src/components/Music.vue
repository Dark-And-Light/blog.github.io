<template>
    <div class="music">
        <h3>音乐</h3>
        <div class="musicBox">
            <div class="musicAvatar">
                <img src="../assets/images/img_row1.jpg">
               <span class="msk"></span>
            </div>
            <audio ref="audio" @timeupdate="timeupdate" @ended="onEnded" @canplay="onCanplay">
                <source src="../assets/audio/芒种.mp3" type="audio/mpeg" ref="sour">
                Your browser does not support the audio tag.
            </audio>
            <!-- 自定义audio样式 -->
            <div class="audioBox">
                <h4>芒种</h4>
                <div class="barBox" 
                @mousedown="getProgress($event)">
                    <div class="line"></div>
                    <div class="dot" :style="dot"></div>
                </div>
                <p class="time">{{time}}/{{duration}}</p>
                <div class="control">
                    <i class="el-icon-d-arrow-left"></i>
                    <i :class="[off?'el-icon-video-pause':'el-icon-video-play']"
                    @click="playAudio"></i>
                    <i class="el-icon-d-arrow-right"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            off:false,
            time:"00:00",
            duration:"00:00",
            dot:{
                left:''
            }
        }
    },
    created() {
        
    },
    methods: {
        playAudio(){
            let audio = this.$refs.audio
            console.log(audio.paused)
            console.log(audio.duration);
            console.log(audio.currentTime)
            this.off = audio.paused
            if(audio.paused){
                audio.play()
            }else(
                audio.pause()
            )
        },
        timeupdate(){
            this.time = this.transTime(parseInt(this.$refs.audio.currentTime))
            this.duration = this.transTime(this.$refs.audio.duration)
            this.dot.left = (this.$refs.audio.currentTime/this.$refs.audio.duration)*100+'%';
        },
        onEnded(){//播放结束
            this.dot.left = 0;
        },
        onCanplay(){
            //获取audio音频文件总时长 并设置到界面并解决出现 NAN 的问题
            this.duration = this.transTime(this.$refs.audio.duration);
        },
        //时间转换
        transTime(value) {
            let time = "";
            let h = parseInt(value / 3600);
            value %= 3600;
            let m = parseInt(value / 60);
            let s = parseInt(value % 60);
            if (h > 0) {
                time = this.formatTime(h + ":" + m + ":" + s);
            } else {
                time = this.formatTime(m + ":" + s);
            }
            return time;
        },
        //时间格式化
        formatTime(value) {
        let time = "";
        let s = value.split(':');
        let i = 0;
        for (; i < s.length - 1; i++) {
            time += s[i].length == 1 ? ("0" + s[i]) : s[i];
            time += ":";
        }
        time += s[i].length == 1 ? ("0" + s[i]) : s[i];
        return time;
        },
        //点击移动更新进度
        getProgress(e){
            console.log(e.offsetX)
        }
    },
    computed: {

    },
}
</script>
<style>
.music{
    padding: 20px;
    background: white;
    border-radius: 4px;
}
.music h3{
    border-bottom: 1px solid #cccccc;
    line-height: 40px;
    height: 40px;
    width: 100%;
    margin-bottom: 10px;
}
.music h3::after{
    display: block;
    content: '';
    width: 40px;
    background: #000;
    height: 2px;
    transition: all ease 2s;
}
.music h3:hover:after{
    display: block;
    content: '';
    width: 80px;
    background: #000;
    height: 2px;
}
.musicBox{
    position: relative;
}
.musicAvatar{
    width: 206px;
    height: 205px;
    position: relative;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
}
.musicAvatar img{
    width: 130px;
    height: 130px;
    margin: 34px;
}
.msk{
    position: absolute;
    background: url('../assets/images/music.png') no-repeat;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
}
.audioBox{
  
}
.audioBox h4{
    width: 100%;
    text-align: center;
    padding:10px 0 10px;
}
.barBox{
    width: 100%;
    height: 20px;
    position: relative;
    background: white;
    cursor:pointer;
}
.line{
    width: 100%;
    height: 2px;
    background: red;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.dot{
    position: absolute;
    height: 10px;
    background: #000;
    width: 10px;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
}
.control{
    font-size: 30px;
    display: flex;
    justify-content: space-around;
}
.time{
    text-align: center;
    padding-bottom: 10px;
}
</style>