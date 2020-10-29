<template>
    <div>
        <mt-header :title="tittle">
            <router-link to="/" slot="left" @touchstart.native="routerBack($event)">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props:["tittle"],
    methods: {
        routerBack(e){
              e.preventDefault();
            this.$router.go(-1)
        }
    },
}
</script>
<style lang="less" scoped>
.mint-header{
    background-color: rgb(140,152,204);
    /deep/ .mint-header-title{
        font-size: 16px;
    }
}
</style>