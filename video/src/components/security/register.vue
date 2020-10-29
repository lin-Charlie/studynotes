<template>
	<div class="register">
		<div class="register-header">
			<h1>用户注册</h1>
		</div>
		<mt-field label="用户名" placeholder="请输入用户名" v-model="username" @blur.native.capture="checkname()"></mt-field>
		<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password1"></mt-field>
		<mt-field label="确认密码" placeholder="请确认密码" type="password" v-model="password2"  @blur.native.capture="checkpwd()"></mt-field>
		<mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
		<div class="zhuce">
			<mt-button type="primary" size="large" @touchstart.native="register()">注册</mt-button>
		</div>	
	</div>
</template>

<script>
import {Toast} from 'mint-ui'
export default{
	data(){  
		return{
			username:null,
			password1:null,
			password2:null,
			email:null,
			data:{},
			toastInstance:null
		}
	},
	methods:{
		// 检查用户名是否存在
		checkname(){
			this.$axios.get(`/vms/user/getByUserName/${this.username}`)
			.then((res)=>{
				if(res.data.msg == "成功"){
					Toast("用户名存在")
					this.username = null;
				}
			}).catch((err)=>{
				console.log(err)
			})
		},
		// 检查密码是否一致
		checkpwd(){
			if(this.password1!==this.password2){
				this.password2=null;
				Toast("密码不一致")
			}
		},
		register(){
			let data = this.$RegExp.test(this.username)
			// 验证用户名
			if(data){
				let pwd = this.$RegExp.test(this.password1)
				// 验证密码
				if(pwd&&this.password2!==null){
					// 验证邮箱
					this.$axios.get(`/vms/user/existEmail/${this.email}`).then((res)=>{
						if(res.data){
							// 注册
							this.$axios.post('/vms/user/register',{
								userName:this.username,
								password:this.password1,
								email:this.email
							}).then((res)=>{
								Toast(res.data.msg)
								this.$router.push('/login')
							}).catch((res)=>{
								console.log(res)
							})
						}else{
							Toast("邮箱无法使用或错误")
						}
					}).catch((err)=>{
						console.log(err)
					})
				}else{
					Toast("密码格式错误（数字+英文字母）")
				}
			}else{
				Toast('用户名格式错误')
			}
		}
	}
}
</script>

<style lang="less" scoped>
.register{
	background-color: rgb(255, 255, 255);
	.register-header{
		padding: 0.3rem;
		h1{
			text-align: center;
		}
	}
	.mint-cell{
		padding: 0.3rem;
		/deep/.mint-cell-wrapper{
			padding: 0;
		}
	}
}

/deep/.mint-field-core{
	margin: 0;
}
.zhuce{
	margin-top: 1.25rem;
	padding: 0.3rem;
	text-align: center;
}
</style>
