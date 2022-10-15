<template>
	<view class="uniTitleBox" @click="getTitle">
		<view class="titleBox">
			<text>{{title1}}</text>
			<text class="title2">{{title2}}</text>
		</view>
		<view class="textBox">
			<text>{{text1}}</text>
			<text>{{text2}}</text>
		</view>
	</view>
</template>

<script>
	export default{
		name:"uni-title",
		data(){
			return{
				
			}
		},
		props:{
			title1:String,
			title2:String,
			text1:String,
			text2:String
		},
		methods:{
			getTitle(e){
				this.$emit("getTitle",this.title1+this.title2)
			}
		}
	}
</script>

<style>
	.uniTitleBox{
		margin:10px auto;
	}
	.titleBox,.textBox{
		text-align:center;
	}
	.titleBox{
		font-size:20px;
		font-weight:600;
		text-shadow:2px 2px 2px rgb(98 98 98 / 52%);
	}
	.title2{
		color:#eb7c06;
	}
	.textBox{
		color:#999;
		line-height: 30px;
	}
</style>