<template>
	<view>
		<image class="banner-img" src="../../static/images/h4.jpg" mode="widthFix"></image>
		<view class="courseBox">
			<view 
				class="courseList"
				v-for="(item,index) in bodyDate" 
				:key="index"
				>
				<text class="courseList_title">{{item.text}}</text>
				<view class="courseList_contentBox">
					<image :src="item.img" mode="widthFix"></image>
					<view class="courseList_content">
						<text>{{item.people}}</text>
						<navigator :url="`/pagesB/piblicView/piblicView?url=${item.url}&title=${item.text}`"><button class="btns" size="mini">查看详情</button></navigator>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { bodyDate } from '@/common/js/home.js';
	export default {
		data() {
			return {
				bodyDate:[]
			}
		},
		onLoad(){
			this.bodyDate = bodyDate.data ?? ""
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.banner-img{
	width:100%;
}
.courseBox{
}
.courseList{
	padding:10px;
	text-align:center;
}
.courseList_title{
	width:100%;
}
.courseList_contentBox{
	display:flex;
	flex-direction: row;
	width:100%;
	margin-top:5px;
}
.courseList_contentBox image{
	width:45%;
}
.courseList_content{
	flex:1;
	display:flex;
	flex-direction: column;
	justify-content: space-between;
}
.courseList_content text{
	font-size:12px;
	text-align: center;
}
.btns{
	color:#fff;
	background:rgb(238,159,32);
	border-color:rgb(238,159,32);
}
</style>
