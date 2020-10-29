<template>
    <div>
        <backbar :tittle="name"></backbar>
        <navbar></navbar>
        <div class="content"></div>
        <videoitem :video= catevideoinfo></videoitem>
        <morebtn @touchstart.native="more()"></morebtn>
        <div class="bottom"></div>
    </div>
</template>
<script>
import navbar from '../sub-components/navbar.vue'
import backbar from '../sub-components/backbar.vue'
import videoitem from '../sub-components/videoitem.vue'
import morebtn from '../sub-components/morebtn.vue'

export default {
    data() {
        return {
            name:"频道分类",
            catevideoinfo:[],
            // 页数
            index:1,
        }
    },
    props:['info'],
    components:{
        navbar,
        backbar,
        videoitem,
        morebtn,
    },
    mounted() {
        this.getCateVideo(this.info,this.index)
    },

    methods: {
        // 分页展示
        more(){
            this.index += 1
            this.getCateVideo(this.info,this.index)
        },
        getCateVideo(tag,index){
            this.$axios.get('/vms/video/getVideoByTags?index='+index+'&tags='+tag)
            .then((res)=>{
                this.catevideoinfo = this.catevideoinfo.concat(res.data.data)
            }).catch((err)=>{
                console.log(err)
            })
        }
    },
    // 监听分类导航变化发起请求，不然不会发起请求
    watch: {
        info(val){
            // 初始化，不然会有上次的视频数据
            this.index = 1
            this.catevideoinfo = []
            this.getCateVideo(val,this.index)
        }
    },
}
</script>
<style lang="less" scoped>
.content{
    height: 0.3rem;
}
.bottom{
    height: 1.5rem;
}
</style>