<template>
	<div class="jieshao">
		<div class="information">
			<span class="span">个人资料</span>
		</div>
		<hr />
		<div class="TouXiang">
			<div class="touxiang">头像</div>
			<img :src="require('../../assets/touxiang.png')" art=""/>	 
		</div>
		<br />	
		<br />
		<br />
		<mt-field label="昵称" placeholder="用户昵称" v-model="username"></mt-field>	
		<mt-field label="性别" placeholder="完善性别信息" v-model="sex"></mt-field>	
		<mt-field label="生日" placeholder="完善生日信息" v-model="birthday"></mt-field>	
		<mt-field label="个人简介" placeholder="还差一句简介,有趣的灵魂就会被发现喔~" v-model="introduce"></mt-field>	
		<div class="null"></div>
		<div class="save">
		<router-link to="*/">
			<div class="savebtn">保存</div>
		</router-link>		
		</div>
		<router-view></router-view>	
	</div>
</template>

<script>
	
</script>

<style lang="less">
	.jieshao{
		.information{
			text-align: center;
			height: 1.875rem;
		}
		.save{
			height: 6.25rem;
			background-color: beige;
			.savebtn{
				width: 100%;
				text-align: center;
				font-size: 24px;
			}
		}
		.TouXiang{
				height: 0.625rem;
				img{
				width: 4.375rem;
				float: left;
				border-radius: 100%;	
			   }
			.touxiang{
				margin: 1.25rem;
				float: left;
				}
		}
		.null{
			width: 100%;
			height: 16.25rem;
		}
}	
</style>
