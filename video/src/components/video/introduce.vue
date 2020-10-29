<template>
    <div>
        <div class="introduce">
            <h1 class="video-name">{{videoName}}</h1>
            <div class="detailed-introduction">        
                <p><span class="introduce-video">简介：</span><span>{{described}}</span></p>
                <p><span>{{getScore}}分</span><span class="time">上映时间：{{videoTime}}</span></p>
            </div>        
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            videoName:'同桌的你',
            videoTime:'2019年10月21日',
            getScore:'9.5分',
            described:'',
        }
    },
    props:['info'],
    // 监测父组件数据变化，否则字符串方法无法使用
    watch: {
        info:function(val){
            this.videoName = val.videoName
            this.videoTime = val.gmtCreate.substring(0,10)
            this.getScore = val.score
            this.described = val.described
        }
    },
}
</script>
<style lang="less" scoped>
*{
    margin: 0;
}
.introduce{
    padding: 0 0.2rem;
    margin-top: 0.2rem;
    .video-name{
        font-size: 16px;
        font-family: "宋体";
    }
    .detailed-introduction{
        margin-top: 0.2rem;
        .introduce-video{
            color: black;
            opacity: 1;
        }
        span:nth-of-type(2){
            opacity: 0.5;
            color: rgb(251,114,153);
        }
        .time{
            margin-left: 0.1rem !important;
            color: black !important;
        }       
    }
}
</style>