<template>
    <div>
        <div class="nav">
            <ul class="ul-video category1" ref="ulcategory">
                <router-link :to="'/home/category/'+item" tag="li" v-for="(item,index) in category" :key="index">
                    <span class="categoryInfo">{{item}}</span>
                </router-link>
            </ul>
            <ul class="ul-video category2" ref="ulcategory2">
                <router-link :to="'/home/category/'+item" tag="li" v-for="(item,index) in category" :key="index" @touchstart="toVideoCategory($event)">
                    <span class="categoryInfo">{{item}}</span>
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
            category:["精选","电视剧","电影","动画","动漫","短视频","体育","精选",
            "电视剧","电影","动画","动漫","短视频","体育"],
            html:null,
        }
    },
    methods: {
        toVideoCategory(e){
            this.html = e.path[0].innerHTML;
        },
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
            
        }
    },
}
</script>

<style lang="less" scoped>
// 两个ul的公共样式
.ul-video{
    // margin-top: 0.5rem;
    list-style: none;
    padding: 0 0.3rem;
    overflow: hidden;
    // height: 1.6rem;
    width: 90%;
    li{
        display:inline-block;
        float: left;
        // margin-left: 20px;
        margin: 0 0.3rem;
        margin-top: 0.1rem;
        width: 1rem;
        height: 0.8rem;
        .categoryInfo{
            white-space: nowrap;
            // margin: 0 auto;
            font-size: 15px;
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
        height: 0.7rem;
        display: block;
    }
    .category2{
        display: none;
    }
    .img-video-category{
        // position: fixed;
        position: relative;
        top: 0.3rem;
        right: 0.3rem;
        width: 0.8rem;
        height: 0.8rem;
        background-image: url(../../assets/kuozhan.png);
        background-size: contain;
    }
}
</style>