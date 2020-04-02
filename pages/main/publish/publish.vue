<template>
	<view class="bg-white">
		<view class="padding     light">
			<view class=" bg-cyan padding-sm  radius light " style="font-size: 13px;">
				<text class="text-gray">免责申明：平台发布的所有信息只负责发布，展示，与平台本身无法，平台不负任何责任。</text>
			</view>
		</view>
<ad unit-id="adunit-06fdd2f28c6ed0c3"></ad>
		<view class="flex     justify-center align-center">
			<view class="solids-top  lenghtSL"> </view> <view class="margin-lr-xl text-shadow text-olive text-bold">微圈发布</view><view class="solids-top lenghtSL"></view>
		</view>

		<view class=" " @click="toPuhlishWxBlog">
			<view class="cu-list grid radius shadow shadow-lg" :class="['col-' + gridCol,gridBorder?'':'no-border']">
				<view class="cu-item" v-for="(item,index) in cuIconList" :key="index" v-if="index<gridCol*4">
					<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]" style="line-height: 0.8; ">
						<view class="cu-tag badge" v-if="item.badge!=0">
			
						</view>
					</view>
					<text style=" font-size: 12px;">{{item.name}}</text>
				</view>
			</view>
<!-- 			<view class="flex  justify-center">
				<view>微圈发布</view>
			</view> -->
		</view>

		<view class="flex  margin-top    justify-center align-center">
			<view class="solids-top  lenghtSL" ></view> <view class="margin-lr-xl text-shadow text-olive text-bold">微群发布</view><view class="solids-top lenghtSL"></view>
		</view>
		<view class=" " @click="toPuhlishWxGroup">
			<view class="cu-list grid radius shadow shadow-lg" :class="['col-' + gridCol,gridBorder?'':'no-border']">
				<view class="cu-item" v-for="(item,index) in cuIconList" :key="index" v-if="index<gridCol*4">
					<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]" style="line-height: 0.8; ">
						<view class="cu-tag badge" v-if="item.badge!=0">
			
						</view>
					</view>
					<text style=" font-size: 12px;">{{item.name}}</text>
				</view>
			</view>
<!-- 			<view class="flex  justify-center">
				<view>微群发布</view>
			</view> -->
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				cuIconList: [{
						cuIcon: 'shopfill',
						color: 'yellow',
						badge: 0,
						name: '微商发布'
					}, {
						cuIcon: 'commandfill',
						color: 'olive',
						badge: 22,
						name: '营销推广'
					}, {
						cuIcon: 'sponsorfill',
						color: 'blue',
						badge: 0,
						name: '优惠福利'
					}, {
						cuIcon: 'group_fill',
						color: 'purple',
						badge: 0,
						name: '兼职招聘'
					},

					{
						cuIcon: 'discoverfill',
						color: 'purple',
						badge: 0,
						name: '交友旅游'
					}, {
						cuIcon: 'emojiflashfill',
						color: 'mauve',
						badge: 0,
						name: '美食分享'
					}, {
						cuIcon: 'homefill',
						color: 'purple',
						badge: 0,
						name: '房产信息'
					}, {
						cuIcon: 'servicefill',
						color: 'mauve',
						badge: 0,
						name: '商业交流'
					},{
						cuIcon: 'cardboardfill',
						color: 'red',
						badge: 120,
						name: '其他'
					}, 
				],
				modalName: null,
				gridCol: 4,
				gridBorder: false
			}
		},
		onShow() {
			
			
			// // 在页面中定义插屏广告
			// let interstitialAd = null
			
			// // 在页面onLoad回调事件中创建插屏广告实例
			// if (wx.createInterstitialAd) {
			//   interstitialAd = wx.createInterstitialAd({
			//     adUnitId: 'adunit-1b9075e101fae0dc'
			//   })
			//   interstitialAd.onLoad(() => {})
			//   interstitialAd.onError((err) => {})
			//   interstitialAd.onClose(() => {})
			// }
			
			// // 在适合的场景显示插屏广告
			// if (interstitialAd) {
			//   interstitialAd.show().catch((err) => {
			//     console.error(err)
			//   })
			// }
		},
		methods: {

			toPuhlishWxBlog() {
				// console.log("------------------")
				uni.navigateTo({
					url: '../../blog/publish/publish',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});

			},

			toPuhlishWxGroup() {
				// console.log("------------------")
				uni.navigateTo({
					url: '../../category/publish/publish',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});

			}

		}
	}
</script>

 


<style>
.lenghtSL{
	
	height: 0.8rpx;
	width: 180rpx;
	
}
</style>
