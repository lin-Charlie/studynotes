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
        <videoitem></videoitem>
    </div>
    
  </div>
</template>

<script>
import videoitem from '../sub-components/videoitem.vue'
import navbar from '../sub-components/navbar.vue'
import serchbar from '../sub-components/serchbar.vue'
export default {
    data(){
        return{
            flag:false,
        }
    },
    components:{
        videoitem,
        navbar,
        serchbar,
    },
    methods: {
        toSerch(){
            this.$router.push('/home/serch')
        }
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
            margin: 0.5rem auto;
            width: 80%;
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