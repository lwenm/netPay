<template>
	<view>
		<view>
			<cu-custom bgImage="https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg" :isBack="true">
				<block slot="backText">返回</block>
				<block slot="content"></block>
			</cu-custom>
		</view>
		<view class="cu-card dynamic" :class="isCard?'no-card':'no-card'">
			<view class="cu-item shadow">
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
						<view class="content flex-sub">
							<view class="text-shadow text-mauve">凯尔-艾欧尼亚</view>
							<view class="text-white  ">
								<view class='cu-tag radius sm light bg-orange' style="margin-left: 0px;">置顶</view>
								<view class='cu-tag radius sm light bg-cyan'>大宝剑专区</view>
							</view>
						</view>
					</view>
				</view>
				<view class="text-content">
					折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！
				</view>
				<view class="grid flex-sub justify-center radius">
					<view v-for="(item,index) in isCard?1:7" :key="index">
						<image class="radius" style="width: 360px;" src="http://img5.imgtn.bdimg.com/it/u=2440548410,4261041145&fm=26&gp=0.jpg"	 mode="widthFix"></image>
					</view>
				</view>
				<view class="padding-sm">
				</view>
				<view class="padding-sm flex justify-between solid-top">
					<view class="text-gray radius light flex     justify-start" style="  color: #A3A3A3;">
						<text class="cuIcon-attentionfill   margin-lr-xs">1249</text>
						<text class="cuIcon-appreciatefill margin-lr-xs">398</text>
						<text class="cuIcon-messagefill margin-lr-xs">301</text>
					</view>
					<view class="">
						<text class="cuIcon-message  text-mauve   margin-lr-xs" @click="navTo">评论</text>
					</view>
				</view>

				<view class="cu-list menu-avatar comment solids-top">
					<view class="cu-item">
						<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></view>
						<view class="content">
							<view class="text-grey">莫甘娜</view>
							<view class="text-gray text-content text-df">
								凯尔，你被自己的光芒变的盲目。
							</view>
							<view class="bg-grey padding-sm radius margin-top-sm  text-sm">
								<view class="flex">
									<view>凯尔：</view>
									<view class="flex-sub">妹妹，你在帮他们给黑暗找借口吗?</view>
								</view>
							</view>
							<view class="margin-top-sm flex justify-between">
								<view class="text-gray text-df">2018年12月4日</view>
								<view>
									<text class="cuIcon-appreciatefill text-red"></text>
									<text class="cuIcon-messagefill text-gray margin-left-sm"></text>
								</view>
							</view>
						</view>
					</view>

					<view class="cu-item">
						<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
						<view class="content">
							<view class="text-grey">凯尔</view>
							<view class="text-gray text-content text-df">
								妹妹，如果不是为了飞翔，我们要这翅膀有什么用?
							</view>
							<view class="bg-grey padding-sm radius margin-top-sm  text-sm">
								<view class="flex">
									<view>莫甘娜：</view>
									<view class="flex-sub">如果不能立足于大地，要这双脚又有何用?</view>
								</view>
							</view>
							<view class="margin-top-sm flex justify-between">
								<view class="text-gray text-df">2018年12月4日</view>
								<view>
									<text class="cuIcon-appreciate text-gray"></text>
									<text class="cuIcon-messagefill text-gray margin-left-sm"></text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isCard: false
			};
		},
		methods: {

		}
	}
</script>

<style>
	.img {
		width: 100%;
	}
	
	.uni-image{
		
		width: 350;
	}
</style>
