<template>
    <div>
        <div class="introduce">
            <h1 class="video-name">{{videoName}}</h1>
            <div class="detailed-introduction">        
                <p><span>{{isVip}}</span><span>{{videoTime}}</span></p>
                <p><span>{{getScore}}</span><span>{{showNum}}</span></p>
            </div>        
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            videoName:'同桌的你',
            isVip:'会员专享',
            videoTime:'2019年10月21日',
            getScore:'9.5分',
            showNum:'7500万播放',
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
        opacity: 0.5;
        span:nth-of-type(1){
            color: rgb(251,114,153);
        }
        span:nth-of-type(2){
            margin-left: 0.4rem;
        }
    }
}
</style>