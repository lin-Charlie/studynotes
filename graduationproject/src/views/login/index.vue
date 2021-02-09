<template>
    <div class="login">
        <div class="login_tittle">
            <span class="tittle">惠民农业土壤信息采集系统</span><br>
            <span class="product">智慧农业+科技引领发展</span>
        </div>
        <div class="wrap">
            <div class="login_box" @keydown.enter="logintest()">
                <h1>用户登录</h1>
                <el-form ref="ruleForm" :rules="rules" :model="loginInfo" label-width="80px">
                    <el-form-item prop="username">
                        <el-input v-model="loginInfo.username" placeholder="请输入用户名"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input v-model="loginInfo.password" placeholder="请输入密码" type="password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" style="width:96%;height:40px;background-color: rgba(2,88,137,0.8);" 
                        round @click="logintest()">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import {login2,getRouter} from "@/api/login/index.js"
export default {
    data(){
        return{
            loginInfo:{
                username:null,
                password:null
            },
            rules:{
                username:[{required:true,message:" ",trigger:"blur"}],
                password:[{required:true,message:" ",trigger:"blur"}]
            },
            meuns:{
                navs:[
                {
                    cdjc: "协同调度",
                    cdmc: "协同调度",
                    child: [
                    {
                        cdjc: "下发指令",
                        cdmc: "下发指令",
                        child: [],
                        fjcd: "a6f9c71e-a0cd-439d-91bb-de5d0daf3191",
                        gnmc: "查看",
                        id: 33,
                        ljdz: "/index/dispatch/send",
                        sfyx: 1,
                        wybzm: "9722d096-8e9c-4ec4-89ee-5e4a3bcc5b3c"
                    },{
                        cdjc: "待办指令",
                        cdmc: "待办指令",
                        child: [],
                        fjcd: "a6f9c71e-a0cd-439d-91bb-de5d0daf3191",
                        gnmc: "查看",
                        id: 33,
                        ljdz: "/index/dispatch/todo",
                        sfyx: 1,
                        wybzm: "9722d096-8e9c-4ec4-89ee-5e4a3bcc5b3c"
                    },{
                        cdjc: "已完成",
                        cdmc: "已完成",
                        child: [],
                        fjcd: "a6f9c71e-a0cd-439d-91bb-de5d0daf3191",
                        gnmc: "查看",
                        id: 33,
                        ljdz: "/index/dispatch/done",
                        sfyx: 1,
                        wybzm: "9722d096-8e9c-4ec4-89ee-5e4a3bcc5b3c"
                    }
                    ],
                    fjcd: "03fab886-8e08-4d30-95ff-427ddb1e2721",
                    gnmc: "查看",
                    id: 24,
                    ljdz: "/index/dispatch",
                    sfyx: 1,
                    wybzm: "a6f9c71e-a0cd-439d-91bb-de5d0daf3191"
                },
                {
                    cdjc: "参数设置",
                    cdmc: "参数设置",
                    child: [
                    {
                        cdjc: "数据字典",
                        cdmc: "数据字典",
                        child: [],
                        fjcd: "f2b723d5-304e-4611-a39e-43f8d6785b3f",
                        gnmc: "查看",
                        id: 40,
                        ljdz: "/index/setting/dataDictionary",
                        sfyx: 1,
                        wybzm: "23f5a91a-1d3b-4145-82a8-8fbc321d62f2"
                    }
                    ],
                    fjcd: "03fab886-8e08-4d30-95ff-427ddb1e2721",
                    gnmc: "查看",
                    id: 25,
                    ljdz: "/index/setting",
                    sfyx: 1,
                    wybzm: "f2b723d5-304e-4611-a39e-43f8d6785b3f"
                }]
            }
        }
    },
    methods:{
        async logintest(){
            try{
                let {data} = await login2(this.loginInfo)
                if(data.code==200){
                    this.$message.success('登陆成功')
                    sessionStorage.userInfo  = JSON.stringify(data.data)
                    this.getRouterData(data.data.meun_id)
                }else{
                    this.$message.error('账号或密码错误');
                }
            }catch(error){
                console.log(error)
            }
        },
        async getRouterData(info){
            try{
                let {data} = await getRouter(info)
                if(data.code==200){
                    sessionStorage.navs = JSON.stringify(data.data)
                    this.$router.push({ path: "/commanage" });
                }
            }catch(error){
                console.log(error)
            }
        }
    },
}
</script>

<style lang="scss" scoped>
@mixin center{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.login{
    height: 100%;
    background-color: rgb(2,40,70);
    background: url('~@/assets/logo.png') no-repeat;
    background-size:cover;
    .login_tittle{
        @include center;
        top: 8%;
        left: 18%;
        padding: 0.01rem;
        .tittle{
            font-size: 50px;
            color: #fff;
            font-weight: bolder;
            font-family: "NSimSun";
            display: flex;
            align-items: center;
            &::before{
                display: block;
                content: "";
                width: 0.24rem;
                height: 0.24rem;
                background: url('~@/assets/logo.png') no-repeat;
                background-size:cover;
            }
        }
        .product{
            display: inline-block;
            width: 100%;
            font-size: 30px;
            color: #fff;
            text-align: center;
        }
    }
    .wrap{
        @include center;
        // padding: 2%;
        left: 80%;
        top: 70%;
        width: 2rem;
        height: 2.5rem;
        box-sizing: content-box;
        border: 8px solid rgb(108,238,249);
        border-radius: 12px;
        .login_box{
            @include center;
            width: 96%;
            height: 96%;
            background-color: rgba(2,88,137,0.3);
            h1{
                text-align: center;
                margin-top: 14%;
                color: beige;
            }
            /deep/.el-form{
                position: absolute;
                left: 38%;
                top: 50%;
                transform: translate(-50%,-50%);
                .el-input__inner{
                    width: 1.6rem;
                    height: 40px;
                    background-color: rgba(7,86,142,0.7);
                    color: #fff; 
                    margin-bottom: 0.1rem;
                }
                .el-input__inner::-webkit-input-placeholder { 
                    /* WebKit browsers */ 
                    color: #fff; 
                }
            }
        }
    }
}
</style>