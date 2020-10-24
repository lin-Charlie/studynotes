<template>
	<div>
		<div class="title">
			<p>选择注销原因</p>		
		</div>
			<input type="radio" v-model="checkVal">需要解绑手机
			<br />
			<br />
			<input type="radio" v-model="checkVal">需要解绑邮箱
			<br />
			<br />
			<input type="radio" v-model="checkVal">需要解绑手机微信/淘宝/支付宝/微博/QQ账号
			<br />
			<br />
			<input type="radio" v-model="checkVal">其他账号
			<br />
			<hr />
			<br />
		<div>
			<button>选好了，继续注销</button>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.title{
		text-align: center;
		font-size: 20px;	
	}	
	input{
		float: right;
	}
</style>
