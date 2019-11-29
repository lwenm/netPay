<template>
	<view>
		<view>
			<cu-custom bgImage="https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg" :isBack="true">
				<block slot="backText">返回</block>
				<block slot="content"></block>
			</cu-custom>
		</view>
		<view class="cu-card dynamic" v-for="(item,index) in isCard?7:7" :key="index" @click="getDetail" :class="isCard?'':''">
			<view class="cu-item shadow">
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
						<view class="content flex-sub">
							<view class="text-shadow text-mauve">凯尔-艾欧尼亚</view>
							<view class="text-white   text-sm   ">
								 <view class='cu-tag radius bg-gradual-green'>置顶</view>
								 <view class='cu-tag radius bg-brown' >大宝剑专区</view>
							</view>
						</view>
					</view>
				</view>
				<view class="text-content text-df text-black">
					折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！
				</view>
				<view class="grid flex-sub padding-lr" :class="isCard?'col-4 grid-square':'col-20 grid-square'">
					<view class="bg-img" :class="isCard?'':''" v-for="(item,index) in isCard?7:7" :key="index">
						<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" @click='previewimgs' data-img="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
						 mode="aspectFill"></image>
					</view>
				</view>
				<view class="text-gray padding-lr  ">
					2019-12-23 11:18发布
				</view>
				<view class="padding-sm"  >
					<view class="text-gray radius light  bg-grey flex solid-bottom  justify-between" style="padding:2px;">
						<view class=" ">
							<text class="cuIcon-attentionfill   margin-lr-xs">浏览</text>1249
							<text class="cuIcon-appreciatefill margin-lr-xs">赞</text>398
							<text class="cuIcon-messagefill margin-lr-xs">评论</text>301
						</view>
						<view class="">
							<text class="  text-mauve   margin-lr-xs">查看详情>> </text>
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
				isCard: true,
				arrImg: [
					'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1574944734&di=968165d2137e21d5fd73145689cef219&src=http://desk-fd.zol-img.com.cn/t_s960x600c5/g4/M04/04/03/Cg-4WVQSY5GIXCJfAAgcMfHEIBEAARXwQHY7j8ACBxJ524.jpg',
					'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4029513770,137662880&fm=26&gp=0.jpg',
					'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=287899671,3092315054&fm=26&gp=0.jpg',
					'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3087859370,4025215728&fm=26&gp=0.jpg'
				]
			};
		},
		methods: {
			IsCard(e) {
				this.isCard = e.detail.value
			},
			previewimgs: function(e) {
				var currentImg = e.currentTarget.dataset.img;
				console.log(currentImg);
				wx.previewImage({
					current: currentImg, // 当前显示图片的http链接 String
					urls: this.arrImg // 需要预览的图片http链接列表 Array
				})
			},

			getDetail: function(e) {

				console.log("--------------------------");

			},
		}
	}
</script>

<style>

</style>
