<template>
    <div>
        <serchbar></serchbar>
        <div class="serch-history">
            <h1>历史搜索</h1>
            <div class="serch-list">
                <ul>
                    <li v-for="(item,index) in serchlist" :key="index">
                        <span>{{item}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import serchbar from '../sub-components/serchbar.vue'
export default {
    data() {
        return {
            serchlist:["同桌的你","那些年我们一起追过的女孩","致青春","你的名字","天气之子"]
        }
    },
    components:{
        serchbar,
    }
}
</script>
<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
}
.serch-history{
    padding: 0.2rem;
    h1{
        font-size: 16px;
    }
    .serch-list{
        ul{
            list-style: none;
            margin-top: 0.2rem;
            li{
                font-size: 14px;
                margin: 0.1rem;
                background-color: rgb(215,215,215);
                opacity: 0.5;
                border-radius: 1rem/0.8rem;
                float: left;
                span{
                    padding: 0.1rem;
                }
            }
        }
    }
}
</style>