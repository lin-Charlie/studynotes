<template>
    <div>
        <div class="all">
			<backbar :tittle="name"></backbar>
			<div class="a1">
				<b>账户与安全</b>
			</div>
			<div class="tex">
				<a href="">密保</a>
				<div class="next">
				</div>
				<div class="decoration">	
					
				</div>
			</div>
			
			<router-link to="/home/security/changepwd" tag="div" class="tex">
				<a href="">密码修改</a>
				<div class="next">
				</div>
				<div class="decoration">
					
				</div>
			</router-link>
			<div class="tex">
				<a href="">账号绑定</a>
				<div class="next">
				</div>
				<div class="decoration">
					
				</div>
			</div>
			<router-link to="/home/security/bind" tag="div"  class="tex">
				<a href="">账号注销</a>
				<div class="next">
				</div>
				<div class="decoration">
					
				</div>
			</router-link>
        </div>
    </div>
</template>
<script>
import backbar from '../sub-components/backbar.vue'
export default {
	data() {
		return {
			name:"账号安全"
		}
	},
	components:{
		backbar,
	}
}
</script>

<style type="text/css" scoped>
*{
	margin: 0;
	padding: 0;
}
.all{
	position: relative;
	width: 100%;
	height: 100%;
}
.a1{
	text-align: center;
	padding: 30px;
	font-size: 30px;
}
.renturn{
	width: 10px;
	height: 10px;
	border-bottom: 2px solid black;
	border-right: 2px solid black;
	transform: rotate(135deg);
	position: absolute;
	top: 20px;
}
a{
	text-decoration: none;
	color: black;
	font-weight: bold;
}
.tex{
	width: 90%;
	height: 50px;
	font-size: 16px;
	padding-left: 10%;
	position: relative;
	margin: 20px 0;
}
.decoration{
	border-bottom: 1px solid black;
}
.next{
	width: 6px;
	height: 6px;
	border-bottom: 2px solid black;
	border-right: 2px solid black;
	transform: rotate(-45deg);
	position: absolute;
	right: 20px;
	top: 0px;
}
</style>
