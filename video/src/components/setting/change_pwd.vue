<template>
	<div>
		<div class="title">
			<span>设置登录密码</span>
		</div>
		
		<br />
		<div class="text_area">
			<mt-field placeholder="输入新密码"></mt-field>	
			<mt-field placeholder="确认新密码"></mt-field>
			<hr style="margin-left: 0.625rem;" />
		</div>
			<p class="tishi">必须是6-20个英文字母、数字或符号(除空格),且字母、数字和标点符号至少包含两种)</p>
		<input class="checkbox" type="checkbox" v-model="checkVal">显示密码
		<br />
		<button>下一步</button>
	</div>
</template>

<script>
</script>

<style>
	.title{
		text-align: center;
		font-size: 20px;	
	}	
	.tishi{
		margin-left: 0.625rem;
		color: #888888;
	}

	button{
		width: 100%;
		height: 2.5rem;
		background-color:#77DDFF;
	}
	.checkbox{
		float: left;
	}
</style>
