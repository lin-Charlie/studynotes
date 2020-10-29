<template>
  <div class="hello">
    <serchbar @touchstart.native ="toSerch()"></serchbar>
    <navbar></navbar>
    <div class="content">
        <div class="recommended-video">
            <img src="//liangcang-material.alicdn.com/prod/upload/de75bc40df364eadaa009ac7525524ee.jpg?x-oss-process=image/resize,w_750/format,webp/interlace,1">
        </div>
        <div class="videoname">
            <h1>视频总览</h1>
        </div>
        <videoitem :video = videoInfo></videoitem>
        <morebtn @touchstart.native="more()"></morebtn>
    </div>
    
  </div>
</template>
<script>
import videoitem from '../sub-components/videoitem.vue'
import navbar from '../sub-components/navbar.vue'
import serchbar from '../sub-components/serchbar.vue'
import morebtn from '../sub-components/morebtn.vue'
export default {
    data(){
        return{
            flag:false,
            videoInfo:[],
            index:1
        }
    },
    components:{
        videoitem,
        navbar,
        serchbar,
        morebtn,
    },
    mounted() {
        this.getVideoUrl(this.index)
    },
    methods: {
        toSerch(){
            this.$router.push('/home/serch')
        },
        // 分页展示
        more(){
            this.index += this.index
            this.getVideoUrl(this.index)
        },
        // 获取视频信息
        async getVideoUrl(index){
            if(!this.flag){
                const {data} =await this.$axios({
                    url:'/vms/video/vedioList?index='+index,
                    method:'get'
                });
                this.videoInfo = this.videoInfo.concat(data.data)
            }
        },
    },
}
</script>


<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
}
.hello{
    margin-bottom: 1.5rem;
    .content{
        // margin-top: 5rem;
        .recommended-video{
            margin: 0.3rem 0.3rem;
            width: 9.4rem;
            img{
                width: 100%;
            }
        }
        .videoname{
            padding-bottom:0.2rem;
            padding-left: 0.2rem;
            h1{
                font-size: 15px;
            }
        }
    }


}
</style>