<template>
    <div>
        <ul class="video-item">
            <router-link :to="'/home/video/' + item.id" tag="li" class='video' v-for="(item,index) in videoInfo" :key="index">
                <img :src="item.url" alt="">
                <p class="videoinfo">{{item.name}}</p>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
        data(){
        return{
            videoInfo:[
                {id:'1',name:"妖精的尾巴",url:require('../../assets/video.png')},
                {id:'2',name:"妖精的尾巴",url:require('../../assets/video.png')},
                {id:'3',name:"妖精的尾巴",url:require('../../assets/video.png')},
                {id:'4',name:"妖精的尾巴",url:require('../../assets/video.png')},
                {id:'5',name:"妖精的尾巴",url:require('../../assets/video.png')},
                {id:'6',name:"妖精的尾巴",url:require('../../assets/video.png')},
                {id:'7',name:"妖精的尾巴",url:require('../../assets/video.png')},
                {id:'8',name:"妖精的尾巴",url:require('../../assets/video.png')},
            ],
            category:["精选","电视剧","电影","动画","动漫","短视频","体育","精选",
            "电视剧","电影","动画","动漫","短视频","体育"]
        }
    },
}
</script>

<style lang="less" scoped>
.video-item{
    box-sizing: border-box;
    padding: 0 5px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    list-style: none;
    .video{
        width: 49%;
        display:inline-block;
        img{
            width: 100%;
        }
        .videoinfo{
            margin: 0.2rem 0;
            font-size: 12px;
            opacity: 0.7;
        }
    }
}
</style>