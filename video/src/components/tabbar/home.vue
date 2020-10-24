<template>
  <div class="hello">
    <!-- <div class="mui-input-row mui-search">
      <input type="search" class="mui-input-clear" placeholder="妖精的尾巴">
    </div> -->
    <div class="header">
        <div class="header-serch" >
            <input type="text" placeholder="妖精的尾巴">
            <img src="../../assets/serch.png" alt="">
        </div>   
    </div>
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
export default {
    data(){
        return{
            flag:false,
        }
    },
    components:{
        videoitem,
        navbar,
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
    .header{
        z-index: 99;
        background-color: rgb(140,152,204);
        padding: 0.3rem 0.3rem;
        height: 1.5rem;
        width: 100%;
        .header-serch{
            height: 1rem;
            width: 98%;
            margin: 0 auto;
            // border: 1px solid;
            input{
                height: 1rem;
                width: 98%;
                font-size: 13px;
                margin-bottom: 0;
                background-color:rgb(220, 220, 220);
                border-top-left-radius: 0.5rem;
                border-top-right-radius: 0.5rem;
                border-bottom-right-radius: 0.5rem;
                border-bottom-left-radius: 0.5rem;
            }
            img{
                position: absolute;
                top: 0.5rem;
                right: 1rem;
                width: 0.6rem;
                height: 0.6rem;
                opacity: 0.5;
            }
        }
    }
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