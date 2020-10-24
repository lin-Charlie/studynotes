<template>
    <div>
        <div class="video">
            <!-- <h5>这是id为：{{id}}的视频</h5> -->
            <sidebar @speed = 'changeVideoSpeed' v-show="flag"></sidebar>
            <!-- 顶部栏 -->
            <mt-header title="同桌的你">
                <router-link to="/" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
            <!-- 视频主体 -->
            <video preload="auto" ref="video"
            src="../../assets/mp4/38.mp4"></video>
            <!-- 视频控制条 -->
            <div class="video-control">
                <!-- 播放按钮 -->
                <img class="video-control-play" 
                @touchstart.stop="videoplay" 
                src="../../assets/play.png">
                <!-- 时长展示 -->
                <div class="video-showtime1">
                    <span>00:00</span>
                </div>
                <div class="video-showtime2">
                    <span>00:00</span>
                </div>
                <!-- 进度条  -->
                <div class="video-progress-box">
                    <div class="video-progress-lan"></div>
                    <div class="video-progress-bar"></div>
                    <div class="video-progress-icon">
                        <img class="video-progress-circle" src="../../assets/circle.png">
                    </div>
                </div>
            </div>
            <!-- 底部功能栏--弹幕，倍数 -->
            <div class="video-bottom">
                <img class="video-danmu" src="../../assets/danmu.png" alt="">
                <div class="volume-box">
                    <img class="volume-icon" src="../../assets/volume.png" alt="">
                    <div class="volume-progress">
                        <div class="volume-progress-bar"></div>
                        <div class="volume-progress-icon">
                            <img class="volume-circle" src="../../assets/circle.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="video-select">
                    <span>英语</span>
                    <span @touchstart="showsidebar()">倍数</span>
                    <span>蓝光</span>
                    <span>选集</span>
                </div>
                <div class="video-screen" @touchstart.stop="fullScreen()">
                    <!-- <img class="video-screen-btn" src="../../assets/screen.png" alt=""> -->
                </div>
            </div>
        </div>
        <div class="video-other">
            <introduce></introduce>
            <div class="video-item-name">
                <p>相关</p>
            </div>
            <videoitem></videoitem>
        </div>
    </div>
</template>
<script>
import sidebar from '../sub-components/sidebar.vue'
import introduce from './introduce.vue'
import videoitem from '../sub-components/videoitem.vue'
export default {
    data() {
        return {
            // 定时器
            timer:null,
            // 播放时间
            cTime:'', 
            // 总时长
            zTime:'',
            state:false,
            // 初始视频音量
            volumenum:'',
            // 倍数显示标志
            flag:false,
            // 全屏标志
            fullscr:false
        }
    },
    components:{
        sidebar,
        introduce,
        videoitem,
    },
    props:["id"],
    mounted() {
        this.init();
        this.changeProgressBar(this.volumenum,this.$volumebar,this.$volumeicon);
        // this.getVideoTime();
        if(!this.state){
            // 获取时长
            this.$video.addEventListener('canplay',(event)=>{
                // console.log(event.target.duration)
                let time = event.target.duration;
                time = this.formatTime(time);
                this.$durationTime.innerHTML = time
            })
            this.$video.removeEventListener('canplay',()=>{})
            // 监听点击事件--改变视频进度和进度条样式
            this.$progressbox.addEventListener('touchstart',(e)=>{
                this.touchVideoFunction(e);
            })
            // 监听移动事件
            this.$icon.addEventListener('touchmove',(e)=>{
                this.touchVideoFunction(e);
            })
            // 监听音量点击事件
            this.$volume.addEventListener('touchstart',(e)=>{
                this.touchVoluneFunction(e);
            })
            // 监听音量移动事件
            this.$volumeicon.addEventListener('touchmove',(e)=>{
                this.touchVoluneFunction(e);
            })
            // console.log(this.volumenum)
        }
    },

    methods: {
        // 初始化函数
        init(){
            this.$video = this.$el.getElementsByTagName('video')[0];
            this.$durationTime = this.$el.getElementsByClassName('video-showtime2')[0].children[0]
            this.$durationTime2 = this.$el.getElementsByClassName('video-showtime1')[0].children[0]
            this.$videocontrol = this.$el.getElementsByClassName('video-control')[0]
            this.$progressbox = this.$el.getElementsByClassName('video-progress-box')[0]
            this.$videobar = this.$el.getElementsByClassName('video-progress-bar')[0]
            this.$icon = this.$el.getElementsByClassName('video-progress-circle')[0]
            // 音量
            this.$volume = this.$el.getElementsByClassName('volume-progress')[0]
            this.$volumebar = this.$el.getElementsByClassName('volume-progress-bar')[0]
            this.$volumeicon = this.$el.getElementsByClassName('volume-circle')[0]
            // 初始化音量
            this.$video.volume = 0.5
            this.volumenum = this.$video.volume*100-12;
            // 全屏
            this.$fullscreen = this.$el.children[0]
            // 视频页面下半部分
            this.$vother = this.$el.getElementsByClassName('video-other')[0]
        },
        // 视频进度触发函数
        touchVideoFunction(e){
            let x  = e.touches[0].clientX;
            let left = this.$progressbox.getBoundingClientRect().left;
            let width = this.$progressbox.getBoundingClientRect().width
            let per = (x-left)/width*100
            if(per<0){
                per = 0
            }
            if(per>100){
                per = 100
            }
            // 改变进度条样式
            this.changeProgressBar(per,this.$videobar,this.$icon)
            // 改变视频进度
            this.changeVideoProgress(per)            
        },
        // 音量修改触发函数
        touchVoluneFunction(e){
            let x  = e.touches[0].clientX;
            let left = this.$volume.getBoundingClientRect().left;
            let width = this.$volume.getBoundingClientRect().width
            let per = (x-left)/width*100
            if(per<0){
                per = 0
            }
            if(per>=88){
                per = 88
            }
            // 修改进度条
            this.changeProgressBar(per,this.$volumebar,this.$volumeicon)
            // 修改音量
            this.changeVolume(per)
        },
        // 格式化时间
        formatTime(time){
            let hour = parseInt(time / 60) 
            let min  = parseInt(time / 60 % 60)
            let second = parseInt(time % 60)
            hour = hour < 10 ? `0${hour}` : `${hour}`
            min = min < 10 ? `0${min}` : `${min}`
            second = second < 10 ? `0${second}` : `${second}`
            let res = hour === "00" ? `${min}:${second}` : `${hour}:${min}:${second}`
            return res
        },
        // 播放/暂停
        videoplay(){
            if(this.$video.paused){
                this.$video.play();
                // console.log(t.getBoundingClientRect().width)
                this.getVideoProgress();
            }else{
                this.$video.pause();
                this.clearTime()
            }
        },
        // 修改当前视频时间点
        getVideoProgress(){
            let cTimecopy = '';
            this.timer = setInterval(()=>{
                this.cTime = this.$video.currentTime;
                // 解决数据不上传到data
                cTimecopy = this.formatTime(this.cTime);
                this.$durationTime2.innerHTML = cTimecopy
            },50)
        },
        // 清除定时器
        clearTime(){
            clearInterval(this.timer)
        },
        // 获取进度条移动百分比
        getPercent(){
            let percent = this.$video.currentTime/this.$video.duration*100;
            this.changeProgressBar(percent,this.$videobar,this.$icon)
        },
        // 修改进度条
        changeProgressBar(perData,element1,element2){
            let percentbar = perData+0.3
            element1.style.width = `${percentbar}%`
            element2.style.left = `${perData}%`
        },
        // 修改视频进度
        changeVideoProgress(perData){
            let perTime = parseInt(perData)/100
            let time = perTime*this.$video.duration
            this.$video.currentTime = parseInt(time)
            this.getVideoProgress()
            this.$video.play()
        },
        // 修改视频音量
        changeVolume(percent){
            let num = parseInt(percent)/100
            this.$video.volume = num
        },
        // 修改视频速度
        changeVideoSpeed(speedNum){
            console.log(speedNum)
            this.$video.playbackRate = speedNum;
            this.showsidebar()
        },
        // 显示倍速栏
        showsidebar(){
            if(!this.flag){
                this.$videocontrol.style.opacity = 0
            }else{
                this.$videocontrol.style.opacity = 1
            }
            this.flag = !this.flag
        },
        // 显示全屏
        fullScreen(){
            if(!this.fullscr){
                this.$el.nextSibling.style.visibility = 'hidden'
                this.$vother.style.visibility = 'hidden'
                // this.$el.nextSibling.style.display = 'none'
                let videowidth = this.$fullscreen.offsetWidth
                let videoheight = this.$fullscreen.offsetHeight

                let screenwidth = screen.availWidth
                let bottomHeight = this.$el.nextSibling.offsetHeight
                let screenheight = screen.availHeight

                let transheight = screenheight/2-(videoheight/2)
                let X = screenheight/videowidth
                let Y = screenwidth/videoheight
                console.log(videowidth,videoheight,screenwidth,screenheight,bottomHeight,transheight,X,Y)
                this.$fullscreen.style.cssText = `transform: translateY(${transheight}px) rotateZ(90deg) scale(${X},${Y})`
                this.fullscr = !this.fullscr
            }else{
                this.$fullscreen.style.cssText = ""
                this.fullscr = !this.fullscr

                setTimeout(()=>{
                    this.$el.nextSibling.style.visibility = 'visible'
                    this.$vother.style.visibility = 'visible'
                },100)

            }


        }
    },
    watch: {
        cTime(){
            this.getPercent();
        }
    },

}
</script>

<style lang="less" scoped>
.font-dpr(@font-size) { 
    font-size: @font-size; 
    [data-dpr="2"] & { font-size: @font-size * 2;} 
    [data-dpr="3"] & { font-size: @font-size * 3;}
}
*{
    .font-dpr(8px)
}

.video-center(){
    // color: white;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.video{
    width: 10rem;
    height: 6.5rem;
    position: relative;
    .mint-header{
        background-color: black;
        height: 0.7rem;
        /deep/ .mint-header-button{
            height: 0.7rem;
            /deep/ .mint-button{
                height: 100%;
                /deep/ .mintui{
                .font-dpr(8px)
                }
            }
        }
        /deep/ .mint-header-title{
            margin: 0 auto;
            height: 0.7rem;
            line-height: 0.7rem;
        }
    }
    video{
    width: 10rem;
    height: 5.04rem;
    }
    .video-control{ 
        position: relative;
        // top: 15rem;
        top: -1.3rem;
        height: 1.25rem;
        width: 100%;
        // background-color: black;
        .video-control-play{
            position: absolute;
            width: 0.4rem;
            height: 0.4rem;
            left: 0.3rem;
            top: 50%;
            transform: translateY(-50%);
        }
        .video-showtime1{
            .video-center();
            color: white;
            left: 1.6rem;
            span{
                .font-dpr(7px)
            }
        }
        .video-showtime2{
            .video-center();
            color: white;
            right: 0.5rem;
            span{
                .font-dpr(7px)
            }
        }
        .video-progress-box{
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            left:2.8rem;
            height: 0.5rem;
            width: 5.4rem;
            .video-progress-lan{
               .video-center();
                width: 100%;
                height: 0.05rem;
                left: 0.05rem;
                background-color: white;             
            }
            .video-progress-bar{
               .video-center();
                width: 0%;
                height: 0.05rem;
                background-color: rgb(104,177,227);
                // display: inline-block;
                // vertical-align: middle;
            }
            .video-progress-icon{
                .video-center();
                width: 100%;
                height: 0.5rem;
                .video-progress-circle{
                    .video-center();
                    width: 0.4rem;
                    height: 0.4rem;
                    left:0%
                }
            }
            
        }
    }
    .video-bottom{
        position: relative;
        top: -1.5rem;
        width: 100%;
        height: 0.9rem;
        background-color: black;
        .video-danmu{
            .video-center();
            width: 0.5rem;
            left: 0.2rem;
        }
        .volume-box{
            .video-center();
            position: relative;
            left: 1.5rem;
            padding: 0.25rem;
            width: 4rem;
            height: 0.8rem;
            .volume-icon{
                .video-center();
                width: 0.5rem;
            }
            .volume-progress{
                position: absolute;
                .video-center();
                left: 0.9rem;
                width: 2rem;
                height: 0.1rem;
                border-radius: 1rem/0.1rem;
                background-color: white;
                .volume-progress-bar{
                    .video-center();
                    // left: 1.6rem;
                    width: 10%;
                    height: 100%;
                    // border-radius: 3rem/0.4rem;
                    background-color: rgb(104,177,227);
                }
                .volume-progress-icon{
                    .video-center();
                    width: 100%;
                    height: 0.4rem;
                    .volume-circle{
                        .video-center();
                        width: 0.4rem;
                        left: 0%;
                    }
                }

            }
        }
        .video-select{
            .video-center();
            color: white;
            right: 1.8rem;
            span{
                .font-dpr(7px);
                margin-left: 0.2rem;
            }
        }
        .video-screen{
            .video-center();
            width: 0.5rem;
            height: 0.5rem;
            right: 0.3rem;
            background-image: url(../../assets/screen.png);
            background-size: contain;
        }
    }
}
.video-other{
    .video-item-name{
    // color: black;
    margin-top: 0.2rem;
        p{
            font-size: 16px;
            margin: 0;
            padding: 0 0.2rem;
            font-weight: bolder;
            color: black;
        }
    }
}

</style>