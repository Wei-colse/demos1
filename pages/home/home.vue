<template>
	<view class="content">
		<swiper 
		:indicator-dots="true" 
		:autoplay="true" 
		:interval="3000" 
		:duration="1000"
		indicator-color="rgba(255,255,255,0.5)"
		indicator-active-color="#fff"
		>
			<swiper-item v-for="(item,index) in list" :key="index">
				<view class="swiper-item">
					<image :src="item.img" mode="scaleToFill">
				</view>
			</swiper-item>
		</swiper>
		<uni-title @getTitle="getTitle($event)" title1="朝夕名师" title2="在线直播" text1="直播互动学习,感受技术韵律" text2=""></uni-title>
		<view class="publicBox">
			<view 
				class="publicList"
				v-for="(item,index) in bodyDate" 
				:key="index"
				@click="setPublic(item.url,item.text)">
				<image :src="item.img" mode=""></image>
				<text>{{item.text}}</text>
				<text>{{item.people}}</text>
				<text>{{item.jiag}}</text>
			</view>
		</view>
		<uni-title title1="加入" title2="朝夕" text1="让每个人的职业生涯不留遗憾" text2=""></uni-title>
		<view class="recruitSmallBox">
			<view 
				class="recruitSmallList"
				v-for="(item,index) in bodyDate"
				:key="index"
				@click="setPublic(item.url,item.text)">
				<image :src="item.img" mode=""></image>
				<view class="recruitSmall_textBox">
					<text class="recruitSmall_textTitle">{{item.text}}</text>
					<text>{{item.people}}</text>
				</view>
			</view>
		</view>
		<uni-title title1="合作" title2="伙伴" text1="" text2=""></uni-title>
		<view class="buddyBox">
			<view class="buddyList" v-for="(item,index) in 12" :key="index"></view>
		</view>
	</view>
</template>

<script>
	import { imgUrlList , bodyDate } from '@/common/js/home.js';
	export default {
		data() {
			return {
				list:[],
				bodyDate:[]
			}
		},
		onLoad(){
			this.list = imgUrlList.data ?? ""
			this.bodyDate = bodyDate.data ?? ""
		},
		methods: {
			getTitle(text){
				console.log(text)
			},
			setPublic(url,title){
				uni.navigateTo({
					url:`/pagesB/piblicView/piblicView?url=${url}&title=${title}`
				})
			}
		}
	}
</script>

<style scoped>
@import "../../common/css/home.css";
</style>
