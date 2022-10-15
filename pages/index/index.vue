<template>
	<view class="content" >
		<image class="banner-img" src="../../static/images/h11.jpg" mode="widthFix"></image>
		<view class="top-box" v-if="!token">
			<text>您尚未登录,点我</text>
			<text @click="goLogin">登录</text>
		</view>
		<view class="top-box" v-else>
			<text>欢迎您</text>
		</view>
		<uni-title title1="VIP" title2="资源下载" text1="VIP学院可以获取对应课程的视频源码" text2=""></uni-title>
		<view class="couersesBox">
			<view class="couerses-One" @click="goCouerse" v-for="(item,index) in typeOne" :key="index">
				<image :src="item.img" mode=""></image>
				<text>{{item.text}}</text>
			</view>
		</view>
		<uni-title title1="配套" title2="资源下载" text1="VIP学员可获取的配套学习资料" text2=""></uni-title>
		<view class="couersesBox">
			<view class="couerses-One" @click="goCouerse" v-for="(item,index) in typeTwo" :key="index">
				<image :src="item.img" mode=""></image>
				<text>{{item.text}}</text>
			</view>
		</view>
		<uni-title title1="视频课" title2="资源下载" text1="独立的小额课视频资源" text2=""></uni-title>
		<view class="couersesBox">
			<view class="couerses-One" @click="goCouerse" v-for="(item,index) in typeThr" :key="index">
				<image :src="item.img" mode=""></image>
				<text>{{item.text}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import { couerses } from '@/common/js/index.js';
	export default {
		data() {
			return {
				couersesData:[],
				typeOne:[],
				typeTwo:[],
				typeThr:[],
				token:""
			}
		},
		onLoad() {
			this.couersesData = couerses.data
			this.typeOne=this.couersesData.filter((m) => m.type == 1)
			this.typeTwo=this.couersesData.filter((m) => m.type == 2)
			this.typeThr=this.couersesData.filter((m) => m.type == 3)
			uni.getStorage({
				key:"token",
				success:(res)=>{
					this.token = res.data
				}
			})
		},
		methods: {
			goCouerse(){
				if(this.token){
					//跳转到登录
				}else{
					uni.showModal({
						title:"提示",
						content:"VIP课程需要登录查看",
						success:(res)=>{
							if(res.confirm){
								// 进入登录页
								this.goLogin()
							}else if(res.cancel){
								
							}
						}
					})
				}
			},
			goLogin(){
				uni.navigateTo({
					url:"/pagesA/login/login"
				})
			}
		}
	}
</script>

<style scoped>
@import "../../common/css/index.css";
</style>
