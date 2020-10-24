<template>
	<div id="person">
		<div class="person_top"> 
			<router-link to="/information">
				<img :src="require('../../assets/touxiang.png')" art=""/>
			</router-link>	
			<div class="person_name">
				<router-link to="/information">
					<div>用户名</div>
				</router-link>
			</div>
			<router-view></router-view>			
		</div>
		<br />
			<span class="span1">观看历史</span>
			<span class="span2">更多</span>	
		<br />
		<br />
		<div class="watch_artice">
			
		</div>
		<br />
		其他
		<br />
		<br />
		<div class="person_set">
		<router-link to="/">
			<button class="set_btn">设置</button>
		</router-link>
		</div>
	</div>	
</template>

<script>
</script>

<style lang="less">
	.person_top{
		background-color:darkgray;
	}
	.person_top img{
		margin: 2.1875rem 18.75rem 0.625rem 1.875rem;
		width: 5rem;
		border-radius: 100%;
	}
	.person_name{
		font-size:16px;
		float:right;
		margin-right: 11.875rem;
		margin-top: -4.375rem;
	} 
	a{
		text-decoration: none;
		color: black;
	}
	.watch_artice{
		width: 100%;
		height: 9.375rem;
		.div1{
			width: 50%;
			height: 100%;
			background-color: darkgray;
			float: left;
		}
		.div2{
			width: 50%;
			height: 100%;
			background-color:darkolivegreen;
			float: right;
		}
	}
	.span2{
		float: right;
	}
	.set_btn{
		width:100%;
		height: 1.875rem;
	}
	.watch_artice img{
		width: 100%;
		height: 9.375rem;
	}
</style>