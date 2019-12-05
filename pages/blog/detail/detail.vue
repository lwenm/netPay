<template>
	<view>
		<!-- 		<view>
			<cu-custom bgImage="https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg" :isBack="true">
				<block slot="backText">返回</block>
				<block slot="content"></block>
			</cu-custom>
		</view> -->
		<view class="cu-card dynamic" :class="'no-card'">
			<view class="cu-item shadow  ">
				<view class="cu-list menu-avatar    ">
					<view class="cu-item ">
						<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
						<view class="content flex-sub">
							<view class="text-shadow text-bold text-mauve">凯尔-艾欧尼亚</view>
							<view class="text-white  ">
								<view class='cu-tag radius sm light bg-orange' style="margin-left: 0px;">置顶</view>
								<view class='cu-tag radius sm light bg-cyan'>大宝剑专区</view>
							</view>
						</view>
						<view class="cu-btn cuIcon-favorfill round bg-blue  light   bottom-border sm margin-right">
							已关注
						</view>
					</view>

				</view>

				<view class="text-content">
					折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！
				</view>
				<view class="grid flex-sub justify-center radius">
					<view v-for="(item,index) in isCard?1:7" :key="index">
						<image class="radius" style="width: 360px;" src="http://img5.imgtn.bdimg.com/it/u=2440548410,4261041145&fm=26&gp=0.jpg"
						 mode="widthFix"></image>
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
					<view class="" >
						<text class="cuIcon-message  text-mauve   margin-lr-xs" @click="navTo">评论</text>
					</view>
				</view>

				<view class="cu-list menu-avatar radius comment solids-top">
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
		<view class="cu-bar foot input " style="width: 100%; padding-right: 0px; ">
			<view class="flex justify-between" style="width: 100%; ">
				<view class="flex justify-between text-center">
					<view class="  btn-wid myheight flex align-center justify-center noMargin">
						<text class="cuIcon-forward text-blue " style="font-size: 33rpx;">分享</text>
					</view>
					<view class="solid-left">
				
					</view>
					<view class="   btn-wid myheight  flex align-center justify-center  noMargin">
						<text class="cuIcon-favor text-blue  " style="font-size: 33rpx;">收藏</text>
					</view>
					<view class="solid-left ">
					</view>
					<view class="myheight btn-wid   flex align-center justify-center   ">
						<text class="cuIcon-appreciate text-blue " style="font-size: 33rpx; "><text class="">赞</text></text>
					</view>
				</view>
				<view class="myheight   flex align-center  justify-center    text-center  light bg-orange" style="width: 180px;   " @click="showModal()">
					<text class=" cuIcon-message  text-blue    " style="font-size: 33rpx; " >评论</text>
				</view>
			</view>
			
		</view>

		<view catchtouchmove="return" class="cu-modal" :class="modalName=='Modal'?'show':''" :style="[{bottom:InputBottom+'px'}]">
			<view class="cu-dialog" catchtouchmove="return" >
				<view class="cu-bar  justify-end " style="min-height: 20px;">
					<view class="content">评论</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="cu-form-group " catchtouchmove="return"  >
					<textarea style=" text-align: left;" class="" maxlength="-1"   @input="InputFocus"
					 placeholder="说点什么吧..."></textarea>
				</view>
				<view class="cu-bar  " style="min-height: 35px;">
					<view class="action margin-0 flex-sub text-green  " @tap="hideModal">取消</view>
					<view class="action margin-0 flex-sub  solid-left" @tap="hideModal">发表</view>
				</view>
			</view>
		</view>

	</view>
</template>


<script>
	export default {
		data() {
			return {
				isCard: false,
				modalName: null,
				InputBottom: 0
			};
		},
		methods: {
			showModal(e) {
				this.modalName = 'Modal'
			},
			hideModal(e) {
				this.modalName = null
			},
			InputFocus(e) {
				this.InputBottom = e.detail.height + 120
				console.log(e.detail.height)
			},
			InputBlur(e) {
				this.InputBottom = 0
			}
		}
	}
</script>

<style>
	.img {
		width: 100%;
	}

	.uni-image {

		width: 350;
	}

	.myheight {

		height: 54px;
		
	}
	.btn-wid{
		width: 65px;
	}
	
	.noMargin {
	    margin-left: 0px;
		margin-right: 0px;
	}
</style>
