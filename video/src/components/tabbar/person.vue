<template>
	<div id="person">
		<div class="mui-card" @touchstart="toLogin()">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<div class="person_header">
						<div class="person_headerimg">
							<img class="headerimg" src="../../assets/touxiang.png" alt="">
						</div>
						<div class="person_login">{{userinfo||msg}}</div>
					</div>
				</div>
			</div>
		</div>
		<div class="mui-card">
			<div class="mui-card-header">观影历史
					<img class="routerimg" src="../../assets/right.png" alt="">
			</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<ul>
						<li v-for="(item,index) in videoinfo[0]" :key="index"
						class="video_record_img">
							<img class="video-history" :src="item.videoPicServerUrl" alt="">
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					其他
					<img class="routerimg" src="../../assets/right.png" alt="">
				</div>
			</div>
		</div>
		<router-link to="/home/person/setting" tag="div" class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					设置
					<img class="routerimg" src="../../assets/right.png" alt="">
				</div>
			</div>
		</router-link>
	</div>	
</template>

<script>
export default{
	data() {
		return {
			msg:"登录",
			videoinfo:[],
			userinfo:null,
		}
	},
	mounted() {
		this.getStorage(),
		this.getUserInfo()
	},
	methods: {
		toLogin(){
			if(this.userinfo!==null){
				this.$router.push('/home/setting/personinfo')
			}else{
				this.$router.push('/login')
			}
		},
		// 存入观影历史的数组
		getStorage(){
			this.videoinfo.push(JSON.parse(localStorage.getItem('videorecord')));
		},
		getUserInfo(){
			// 登录时存储的用户信息
			if(JSON.parse(localStorage.getItem('userinfo'))){
				this.userinfo = JSON.parse(localStorage.getItem('userinfo')).userName
			}else{
				this.userinfo = null
			}
			// 通过用户名获取userId
			if(this.userinfo!==null){
				// 本地有userId后就不请求了
				let userId = JSON.parse(localStorage.getItem('userId'))
				if(userId==null){
					// 为空请求id
					this.$axios.get(`/vms/user/getByUserName/${this.userinfo}`).then((res)=>{
						localStorage.setItem('userId',JSON.stringify(res.data.data.userId))
					}).catch((err)=>{
						console.log(err)
					})
				}
			}
		}
	},
}
</script>

<style lang="less">
*{
	margin: 0;
	padding: 0;
	list-style: none;
}

#person{
	.person_header{
		height: 2rem;
		width: 100%;
		display: flex;
		// background-color: rgb(167, 157, 157);
		.person_headerimg{
			width: 3rem;
			height: 2rem;
			.headerimg{
				margin:0.2rem 0.4rem;
				width: 1.5rem;
				height: 1.5rem;
				border: 1px solid white;
				border-radius: 50%;
			}
		}
		.person_login{
			margin-top: 0.7rem;
			font-size: 16px;
		}
	}
	ul{
		width: 100%;
		height: 2.4rem;
		overflow: hidden;
		.video_record_img{
			height: 3rem;
			float: left;
			margin-right: 0.2rem;
		}
	}
	.routerimg{
		width: 0.6rem;
		height: 0.6rem;
		position: absolute;
		right: 0.3rem;
		top: 50%;
		margin-top: -0.3rem;
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
	.video-history{
		width: 2rem;
		height: 2.4rem;
	}
}
</style>