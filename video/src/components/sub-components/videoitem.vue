<template>
    <div>
        <ul class="video-item">
<!-- 根据Vue2.0官方文档关于父子组件通讯的原则，父组件通过prop传递数据给子组件，
子组件触发事件给父组件。但父组件想在子组件上监听自己的click的话，需要加上native修饰符。
所以如果在想要在router-link上添加事件的话需要@click.native这样写 -->
            <router-link :to="'/home/video/' + item.videoId" tag="li" class='video' 
            v-for="(item,index) in videoInfo" :key="index"
            @click.native="setStorage(item)">
                <img :src="item.videoPicServerUrl" alt="">
                <p class="videoinfo">{{item.videoName}}</p>
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
            
            // videorecord:[]
        }
    },
    props:['video'],
    methods: {
        setStorage(info){
            const video = JSON.parse(localStorage.getItem('videorecord'))||[]
            video.push(info)
            if(video[0]==null){
                this.video.splice(0,1)
            }
            localStorage.setItem('videorecord',JSON.stringify(video))
        },
    },
    watch: {
        video(val){
            this.videoInfo = val
            console.log(this.videoInfo)
        }
    },
}
</script>

<style lang="less" scoped>
.video-item{
    box-sizing: border-box;
    padding: 0 0.3rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    list-style: none;
    .video{
        width: 48%;
        display:inline-block;
        img{
            width: 100%;
            height: 5rem;
        }
        .videoinfo{
            margin-bottom: 0.3rem;
            font-size: 12px;
            opacity: 0.7;
        }
    }
}
</style>