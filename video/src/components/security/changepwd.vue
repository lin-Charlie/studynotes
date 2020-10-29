<template>
	<div class="change">
		<backbar></backbar>
		<div class="title">
			<span>修改登录密码</span>
		</div>
		<div class="change-pwd-content">
			<div class="text_area">
				<mt-field v-model="newpassword" placeholder="输入新密码" @blur.native.capture="checknewpwd()"></mt-field>	
				<mt-field type="password" v-model="newpassword2" placeholder="确认新密码"></mt-field>
				<hr style="margin-left: 0.3125rem" />
			</div>
			<p class="tishi">必须是6-20个英文字母、数字或符号(除空格),且字母、数字和标点符号至少包含两种</p>
			<input class="checkbox" type="checkbox">显示密码
		</div>
		<div class="change-pwd-bottom">
			<mt-button type="primary" size="large" @touchstart.native="changepwd()">保存</mt-button>
		</div>
		
	</div>
</template>

<script>
import backbar from '../sub-components/backbar.vue'
import {Toast} from 'mint-ui'
export default {
	data() {
		return {
			newpassword:null,
			newpassword2:null,
			userId:null
		}
	},
	components:{
		backbar,
	},
	mounted() {
		this.checkId()
	},
	methods: {
		checkId(){
			this.userId = JSON.parse(localStorage.getItem('userId'))
			if(this.userId == null){
				Toast('滚去登录')
			}
		},
		checknewpwd(){
			let pwd =  this.$RegExp.test(this.newpassword)
			if(!pwd){
				Toast("密码格式错误")
			}
		},
		changepwd(){
			if(this.newpassword2!==this.newpassword){
				Toast("密码不一致")
				this.newpassword2 = null;
			}
			if(this.userId == null){
				Toast('小伙子不听话')
			}else{
				if(this.newpassword2!==null){
					this.$axios.put(`/vms/user/updatePassword
					?password=${this.newpassword}&userId=${this.userId}`)
					.then((res)=>{
						Toast(res.data.msg)
						// 重新登录
						localStorage.removeItem('userinfo'),
						localStorage.removeItem('userId'),
						setTimeout(()=>{
							this.$router.push('/login')
						},200)
					}).catch((err)=>{
						console.log(err)
					})
				}else{
					Toast("请输入密码")
				}

			}

		}
	},
}
</script>

<style lang="less" scoped>
.change{
	background-color: rgb(255, 255, 255);
	height: 17rem;
}
	.title{
		text-align: center;
		font-size: 16px;
		margin: 0.2rem;	
		padding: 0.2rem;
	}	
	.tishi{
		margin: 0 0.3rem;
		color: #888888;
	}
	.checkbox{
		margin: 0.1rem 0.3rem;
		float: left;
	}
	.change-pwd-content{
		width: 100%;
		height: 7rem;
		.text_area{
			/deep/ .mint-field-core{
				margin: 0.2rem 0;
			}
		}
	}
	.change-pwd-bottom{
		padding: 0 0.3rem;
	}
</style>
