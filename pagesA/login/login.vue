<template>
	<view>
		<view class="title-box">
			<uni-title title1="登录" title2="朝夕" text1="视频课资源下载"></uni-title>
		</view>
		<form action="formOptions" class="formBox">
			<view class="item">
				<view class="label">账号</view>
				<input v-model="formOptions.name" type="text" placeholder="请输入账号">
			</view>
			<view class="item">
				<view class="label">密码</view>
				<input v-model="formOptions.password" password="true" type="text" placeholder="请输入密码">
			</view>
			<view class="item">
				<view class="label">验证码</view>
				<input v-model="formOptions.imgCode" type="text" placeholder="请输入验证码">
				<image :src="'https://test.zhaoxiedu.net/api/login/CreateValidateCode/?t='+imgCode" mode="" @click="getImgCode"></image>
			</view>
			<view class="item">
				<button type="primary" @click="sbumit">登录</button>
			</view>
			<view class="item">
				<view class="tip-text">
					<text @click="goRegister">暂无账号,我要注册</text>
				</view>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// imgUrl:"https://test.zhaoxiedu.net/api/login/CreateValidateCode/?t="+ imgCode
				imgCode:+new Date(),
				formOptions:{
					name:"",
					password:"",
					imgCode:""
				}
			}
		},
		methods: {
			getImgCode(){
				this.imgCode = +new Date()
			},
			goRegister(){
				uni.navigateTo({
					url:"/pagesA/register/register"
				})
			},
			sbumit(){
				let msg = "";
				let m = this.formOptions;
				if(!m.imgCode || m.imgCode.length != 4) msg = "请输入正确格式的验证码"
				if(!m.password || m.password.length < 6) msg = "请输入正确格式的密码"
				if(!m.name || m.name.length != 4) msg = "请输入正确格式的账号"

				if(!msg){
					// 进入请求->发送提示
					uni.showToast({
						title:"登录成功",
						duration:2000
					})
					uni.setStorage({
						key:"token",
						data:this.formOptions.name,
						success:function(){
							uni.switchTab({
								url:"/pages/index/index"
							})
						}
					})
				}else{
					uni.showToast({
						title:msg,
						duration:2000
					})
				}
			}
		}
	}
</script>

<style scoped>
/* #ifdef APP-PLUS */
.title-box{
	padding-top:30px;
}
/* #endif */
.item{
	height:50px;
	display:flex;
	flex-direction: row;
	align-items:center;
	padding:0 10px;
	border-top:2px solid #efefef;
}
.item image{
	width:100px;
	height:40px;
}
.item input{
	flex:1;
}
.item button{
	width:100%;
	margin:20px 0;
}
.label{
	width:100px;
}
.tip-text{
	width:100%;
	text-align: right;
	color:#39dc0c;
}
.tip-text text{
	text-decoration: underline;
}
</style>
