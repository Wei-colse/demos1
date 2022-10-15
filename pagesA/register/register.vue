<template>
	<view>
		<view class="title-box">
			<uni-title title1="注册" title2="朝夕" text1="VIP学院可获取对应课程的视频源码"></uni-title>
		</view>
		<form :action="registerOtions" class="formBox">
			<view class="item">
				<view class="label">昵称</view>
				<input v-model="registerOtions.name" type="text" placeholder="请输入昵称">
			</view>
			<view class="item">
				<view class="label">账号</view>
				<input v-model="registerOtions.accNumber" type="text" placeholder="请输入账号">
			</view>
			<view class="item">
				<view class="label">手机号</view>
				<input v-model="registerOtions.cellPhone" type="text" placeholder="请输入手机号">
			</view>
			<view class="item">
				<view class="label">性别</view>
				<picker @change="getSex" :value="sex" :range="array">
					<view class="uni-input">{{array[sex]}}</view>
				</picker>
			</view>
			<view class="item">
				<view class="label">密码</view>
				<input v-model="registerOtions.pasNumber" password="true" type="text" placeholder="请输入密码">
			</view>
			<view class="item">
				<view class="label">验证码</view>
				<input v-model="registerOtions.imgCode" type="text" placeholder="请输入验证码">
				<image :src="'https://test.zhaoxiedu.net/api/login/CreateValidateCode/?t='+imgCode" mode="" @click="getImgCode"></image>
			</view>
			<view class="item">
				<button type="primary" @click="sbumit">注册</button>
			</view>
			<view class="item">
				<view class="tip-text">
					<text @click="goRegister">已有账号,我要登录</text>
				</view>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				registerOtions:{
					name:"",
					accNumber:"",
					pasNumber:"",
					cellPhone:"",
					sex:0,
					imgCode:""
				},
				sex:0,
				array:["男","女"],
				imgCode:+ new Date()
			}
		},
		methods: {
			getImgCode(){
				this.imgCode = +new Date()
			},
			goRegister(){
				uni.navigateTo({
					url:"/pagesA/login/login"
				})
			},
			getSex(index){
				this.sex = index.detail.value
			},
			sbumit(){
				let msg = "";
				let m = this.registerOtions;
				// if(!m.imgCode || m.imgCode.length != 4) msg = "请输入正确格式的验证码"
				// if(!m.pasNumber || m.pasNumber.length < 6) msg = "请输入正确格式的密码"
				// if(!m.accNumber || m.accNumber.length != 4) msg = "请输入正确格式的账号"
				m.sex = this.array[this.sex]
				for(let s in m){
					if(!m[s]){
						msg = "信息不完整"
					}
				}
				if(!msg){
					// 进入注册接口
					uni.showToast({
						title:"注册成功",
						duration:2000
					})
					uni.switchTab({
						url:"/pages/home/home"
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
