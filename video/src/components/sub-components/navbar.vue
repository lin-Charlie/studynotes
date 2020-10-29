<template>
    <div>
        <div class="nav">
            <ul class="ul-video category1" ref="ulcategory">
                <router-link :to="'/home/category/'+item.name" tag="li" v-for="(item,index) in category" :key="index">
                    <span class="categoryInfo">{{item.name}}</span>
                </router-link>
            </ul>
            <ul class="ul-video category2" ref="ulcategory2">
                <router-link :to="'/home/category/'+item.name" tag="li" v-for="(item,index) in category" :key="index">
                    <span class="categoryInfo">{{item.name}}</span>
                </router-link>
            </ul>
            <div class="img-video-category" @click="changeUl"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            category:["精选","电影","动画","动漫","短视频","体育","精选",
            "电视剧","电影","动画","动漫","短视频","体育","电视剧"],
            html:null,
        }
    },
    mounted() {
        this.getVideoTag()
    },
    methods: {
        changeUl(){
            // console.log(this)
            if(this.flag!=true){
                this.$refs.ulcategory.style.display='none'
                this.$refs.ulcategory2.style.display='block'
                this.flag = !this.flag
            }else{
                this.$refs.ulcategory.style.display='block'
                this.$refs.ulcategory2.style.display='none'
                this.flag = !this.flag
            }
        },
        getVideoTag(){
            this.$axios.get('/vms/dict/list').then((res)=>{
                this.category = res.data.data
            }).catch((err)=>{
                console.log(err)
            })
        }
    },
}
</script>

<style lang="less" scoped>
// 两个ul的公共样式
.ul-video{
    // margin-top: 0.5rem;
    list-style: none;
    padding-left:0.3rem;
    overflow: hidden;
    // height: 1.6rem;
    width: 100%;
    li{
        display:inline-block;
        float: left;
        // margin-left: 20px;
        margin-right:0.3rem;
        width: 1.2rem;
        height: 1rem;
        .categoryInfo{
            line-height: 1rem;
            white-space: nowrap;
            // margin: 0 auto;
            font-size: 16px;
            color: white;
        }
    }
}

.nav{
    background-color: rgb(140,152,204);
    // position: fixed;
    margin-top: -0.1rem;
    width: 100%;
    display: flex;
    .category1{
        height: 1rem;
        display: block;
    }
    .category2{
        display: none;
    }
    .img-video-category{
        // position: fixed;
        position: relative;
        top: 0.1rem;
        right: 0.3rem;
        width: 0.8rem;
        height: 0.8rem;
        background-image: url(../../assets/kuozhan.png);
        background-size: contain;
    }
}
</style>