<template>
	<div>
		<backbar></backbar>
		<div class="title">
			<p>选择注销原因</p>		
		</div>
		<div class="cancel-content">
			<mt-checklist
			align="right"
			v-model="value"
			:options="options">
			</mt-checklist>
		</div>		
		<div class="cancel-bottom">
			<mt-button type="danger" size="large" @touchstart.native="cancelUser()">注销</mt-button>
		</div>
	</div>
</template>

<script>
import backbar from '../sub-components/backbar.vue'
import {Toast} from 'mint-ui'
export default {
	data() {
		return {
			options:['111','222','333'],
			length:3,
			value:[]
		}
	},
	components:{
		backbar,
	},
	methods: {
		cancelUser(){
			let userId = JSON.parse(localStorage.getItem('userId'))
			let userinfo = JSON.parse(localStorage.getItem('userinfo'))
			this.$axios.delete(`/vms/user/delById?
			id=${userId}&password=${userinfo.password}&userName=${userinfo.userName}`)
			.then((res)=>{
				console.log(res)
				Toast(res.data.msg)
				localStorage.removeItem('userinfo'),
				localStorage.removeItem('userId'),
				setTimeout(()=>{
					this.$router.push('/home')
				},200)
			}).catch((err)=>{
				console.log(err)
			})
		}
	},
}
</script>

<style lang="less" scoped>
	.title{
		text-align: center;
		height: 2rem;
		line-height: 2rem;
		font-size:20px;	
	}
	.cancel-content{
		width: 100%;
		padding: 0 0.3rem;
	}
	.cancel-bottom{
		margin-top: 0.4rem;
		width: 100%;
		padding: 0 0.3rem;
	}
</style>
