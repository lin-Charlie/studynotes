<template>
    <div>
        <div class="all">
		<div class="log">
			账号密码登录
		</div>
		<div class="user">
			<input type="text" name="username" class="username" v-model="username" value="" placeholder="请输入账号"/>
			<input type="password" name="password" class="password" v-model="password" placeholder="请输入密码"/>
		</div>
		<div class="denglu">
			<button @touchstart="tologin()">登录</button>
		</div>
		<div class="zhuce">
			<a href="" id="left">忘记密码</a>
			<a href="" id="right" @touchstart="toregister()">用户注册</a>
		</div>
	</div>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
	data() {
		return {
			username:null,
			password:null,
		}
	},
	mounted() {
        this.$el.nextSibling.style.visibility="hidden";
	},
	methods: {
		tologin(){
			if(this.password!==null&&this.username!==null){
				// 隐藏底部
				this.$el.nextSibling.style.visibility="visible";
				// 调用登录接口
					this.$axios({
						url:`/login`,
						data:{userName:this.username,password:this.password},
						method:"post"
					}).then((res)=>{
						if(res.data.msg == "登录成功！"){
							// 请求返回的用户信息保存到localstorage
							localStorage.setItem('userinfo',res.config.data)
							this.$router.push('/home')
						}else{
							Toast(res.data.data.msg)
						}
					}).catch((err)=>{
						console.log(err)
					})
			}else{
				Toast("用户名不能为空")
			}
		},
		toregister(){
			this.$router.push('/register')
		}
	},
}
</script>

<style lang="less" scoped>
*{
	margin: 0;
	padding: 0;
}
.all{
	width: 100%;
	height: 100%;
}

.log{
	width: 100%;
	height: 150px;
	text-align: center;
	line-height: 200px;
	font-size: 30px;
}
.user{
	width: 100%;
}
input{
	text-align: center;
	width: 80%;
	height: 30px;
	border-radius: 20px;
	margin: 20px 10%;
}
.denglu{
	width: 100%;
	height: 40px;
}
.denglu button{
	width: 80%;
	height: 100%;
	margin: 10px 10%;
	background-color: dodgerblue;
	border-radius: 10px;
}
.other{
	margin-top: 50px;
	text-align: center;
}

.zhuce{
	width: 100%;
}
.zhuce #left{
	position: absolute;
	bottom: 3rem;
	left: 10%;
}
.zhuce #right{
	position: absolute;
	bottom: 3rem;
	right: 10%;
}
.zhuce a{
	text-decoration: none;
	color: dodgerblue;
}
/deep/ .mint-tabbar{
	display: none;
}
</style>

