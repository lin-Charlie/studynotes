<template>
	<div class="person-data">
		<backbar :tittle="name"></backbar>
		<div class="person-data-content">
			<div class="person-headerimg">
				<div class="headerimg-tittle">
					<span>头像</span>
				</div>
				<div class="headerimg-pic">
					<img src="../../assets/touxiang.png" alt="">
				</div>
			</div>
			<mt-field label="昵称" v-model="nickName" placeholder="用户昵称"></mt-field>	
			<mt-field label="性别" v-model="sex" placeholder="完善性别信息"></mt-field>	
			<mt-field label="生日" v-model="birthday" placeholder="完善生日信息"></mt-field>	
			<mt-field label="个人简介" v-model="personalized" placeholder="还差一句简介,有趣的灵魂就会被发现喔~">
			</mt-field>	
		</div>
		<div class="save">
			<mt-button type="primary" size="large" @touchstart.native="update()">保存</mt-button>	
		</div>
		<router-view></router-view>	
	</div>
</template>

<script>
import backbar from '../sub-components/backbar.vue'
import {Toast} from 'mint-ui'
export default{
	data() {
		return {
			name:"个人资料",
			nickName:null,
			sex:null,
			birthday:null,
			personalized:null,
			userId:null,
		}
	},
	mounted() {
		this.userId = JSON.parse(localStorage.getItem('userId'));
		this.getUserInfo()
	},
	components:{
		backbar,
	},
	methods: {
		getUserInfo(){
			this.$axios.get(`/vms/user/getById/${this.userId}`)
			.then((res)=>{
				// 获取信息并显示
				let info = res.data.data
				console.log(res.data.data.sex)
				this.birthday = info.birthday
				this.personalized = info.personalized
				if(info.sex == 0){
					this.sex = "女"
				}else{
					if(info.sex == 1){
						this.sex = "男"
					}
				}
				this.nickName = info.nickName
			}).catch((err)=>{
				console.log(err)
			})
		},
		update(){
			if(this.sex == '女'){
				this.sex = 0
			}else{
				this.sex = 1
			}
			this.$axios.put('/vms/user/updateById',{
				"birthday":this.birthday,
				"nickName":this.nickName,
				"personalized": this.personalized,
				"sex": this.sex,
				"userId": this.userId,
			}).then((res)=>{
				Toast(res.data.msg)
				this.$router.go(-1)
			}).catch((err)=>{
				console.log(err)
			})
		}
	},
}
</script>

<style lang="less" scoped="scoped">
.person-data-content{
	width: 100%;
	height: 10rem;
	.person-headerimg{
		height: 2.6rem;
		width: 100%;
		background-color: rgb(255,255,255);
		display: flex;
		padding: 0 0.26rem;
		.headerimg-tittle{
			height: 100%;
			width: 2.6rem;
			span{
				line-height: 2.6rem;
				font-size: 16px;
			}
		}
		.headerimg-pic{
			width: 2.6rem;
			img{
				margin-top: 0.2rem;
				margin-left: 0.6rem;
				border: 1px solid white;
				border-radius: 50%;
				width: 80%;
			}
		}
	}
	/deep/ .mint-field-core{
		margin-bottom: 0;
		margin: 0.3rem 0;
		border: none;
	}
}
</style>
