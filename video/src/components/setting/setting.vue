<template>
    <div>
		<div class="back">
			<backbar :tittle="name"></backbar>
		</div>
		<div class="setting-content">
		<h1>账户</h1>
			<div @touchstart ="personInfo()" class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						个人资料
					<img class="routerimg" src="../../assets/right.png" alt="">
					</div>
				</div>
			</div>
			<router-link to="/home/setting/agreement" tag="div" class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						用户协议
					<img class="routerimg" src="../../assets/right.png" alt="">
					</div>
				</div>
			</router-link>
		<h1>安全</h1>
			<div @touchstart ="accountSecu()" class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						账号安全中心
						<img class="routerimg" src="../../assets/right.png" alt="">
					</div>
				</div>
			</div>
		<h1>版本</h1>
			<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						APP版本号
					</div>
				</div>
			</div>
		</div>
		<div class="setting-bottom">
			<mt-button type="danger" size="large" @touchstart.native="tuichu()">退出登录</mt-button>
		</div>
    </div>
</template>
<script>
import backbar from '../sub-components/backbar.vue'
import {Toast} from 'mint-ui'
export default {
	data() {
		return {
			name:"设置",
			userId:null
		}
	},
	components:{
		backbar,
	},
	mounted() {
		this.userId = JSON.parse(localStorage.getItem('userId'))
	},
	methods: {
		personInfo(){
			if(this.userId == null){
				Toast('请先登录')
			}else{
				this.$router.push('/home/setting/personinfo')
			}
		},
		accountSecu(){
			if(this.userId == null){
				Toast('请先登录')
			}else{
				this.$router.push('/home/setting/account')
			}
		},
		tuichu(){
			localStorage.removeItem('userinfo'),
			localStorage.removeItem('userId'),
			setTimeout(()=>{
				this.$router.push('/home')
			},200)
		}
	},
}
</script>

<style lang="less" scoped>
*{
	padding: 0;
	margin: 0;
}
.routerimg{
	width: 0.6rem;
	height: 0.6rem;
	position: absolute;
	right: 0.3rem;
	top: 50%;
	margin-top: -0.3rem;
}
.setting-content{
	width: 100%;
	height: 10rem;
	font-size: 16px;
	h1{
		padding: 0 0.3rem;
		font-size: 16px;
	}
	h1:nth-of-type(1){
		margin-top: 0.27rem;
	}
}
.setting-bottom{
	padding: 0 0.2rem;
}
	/deep/ .mui-card {
		// font-size: 0.37333rem;
		position: relative;
		overflow: hidden;
		margin: 0.26667rem;
		border-radius: 0.05333rem;
		background-color: #fff;
		background-clip: padding-box;
		box-shadow: 0 0.02667rem 0.05333rem rgba(0,0,0,.3);
		.mui-card-header {
			// font-size: 0.45333rem;
			padding: 0.5rem 0.8rem;
			border-radius: 0.05333rem 0.05333rem 0 0;
		}
		.mui-card-content {
			font-size: 0.37333rem;
			position: relative;
			.mui-card-content-inner {
				position: relative;
				padding: 0.4rem;
			}
		}
	}

</style>


