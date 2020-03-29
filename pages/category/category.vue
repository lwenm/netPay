<template>

	<scroll-view scroll-x :scroll-left="scrollLeft" scroll-y @scrolltolower="loadMore">
		<share />
		<view class="bg-img padding-bottom-xl" style="background-image: url('https://fys.hiwangchong.com/uploads/images/20200228/d36fa65ea0adc00f787216517e774710.png');height: 207upx;">

		</view>
		
		<view class="cu-card">
			<view class=" shadow">
				<view class="cu-list grid  radius shadow shadow-lg" :class="['col-' + gridCol,gridBorder?'':'no-border',isCard?'no-card':''  ] ">
					<view class="cu-item" v-for="(item,index) in cuIconList" :key="index" v-if="index<gridCol*3">
						<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]" style="line-height: 0.8; ">
							<!-- 							<view class="cu-tag badge" v-if="item.badge!=0">
							</view> -->
						</view>
						<text style=" font-size: 12px;">{{item.name}}</text>
					</view>
				</view>
			</view>
		</view>

		<view class="marTop">
			<uni-notice-bar class="" :show-icon="true" :scrollable="true" class="text-red" text="切勿重复申请，加群后请勿发违法信息、垃圾链接、小程序、微商广告、群二维码等，客服在线智能管理。" />
		</view>

		<view class="cu-card  shadow shadow-lg article  " :class="isCard?'no-card':''" v-for="(item,index) in cuIconList "
		 :key="index">
			<view class="cu-item shadow" style="margin-bottom: -8px;">
				
				<view class="title margin-top">
					<view class="text-cut">无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。</view>
				</view>

				<view class="content">
					<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg" mode="aspectFill"></image>
					<view class="desc">
						<view class="text-content"> 折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！</view>
						<view>
							<view class="cu-tag bg-red light sm round">正义天使</view>
							<view class="cu-tag bg-green light sm round">史诗</view>
						</view>
					</view>
				</view>

				<view class="   solid-top margin-lr-xs  " style="margin-bottom: -25rpx;">
					<view class="text-gray radius light flex     justify-between" style="  color: #A3A3A3;height: 35px;">
						<view class="flex align-center   ">
							<text class="cuIcon-timefill  text-orange text-content   margin-left-sm margin-lr-xs"></text>2020-03-23 发布
							<text class="cuIcon-attentionfill text-red   text-content margin-right margin-left-sm margin-lr-xs"></text>32 浏览
							<!-- <text class="cuIcon-favorfill  text-olive text-content margin-lr-xs margin-left-sm"></text>12 -->
						</view>
						<view class="flex align-center justify-end" style="height: 100% ; " @click="navTo">
							<text class="    round   text-sm  text-blue  light   margin-lr-xs">申请加入</text>
						</view>
					</view>
				</view>
				
			</view>
			
			<view class="cu-item shadow radius" v-if="index%8==0" style="margin-bottom: -8px;">
				<ad unit-id="adunit-07c798ead64c55f4"></ad>
			</view>
			
		</view>
		
		<view class="cu-load   " :class="1==1?'loading':'over'"></view>
		
	</scroll-view>
</template>
<script>
	import share from "@/components/share.vue";
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue';
	import uniSection from '@/components/uni-section/uni-section.vue';

	const tpl = {
		data0: {
			datetime: '2019-12-23 11:18',
			article_type: 0,
			title: '行业峰会频频亮相，开发者反响热烈!',
			image_url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90',
			source: 'DCloud',
			comment_count: 639
		},
		data1: {
			datetime: '2019-12-23 11:18',
			article_type: 1,
			title: 'DCloud完成B2轮融资，震撼发布!',
			image_url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90',
			source: 'DCloud',
			comment_count: 395
		},
		data2: {
			datetime: '2019-12-23 11:18',
			article_type: 2,
			title: '中国技术界小奇迹：HBuilder开发者突破200万 行业峰会频频亮相，开发者反响热烈!中国技术界小奇迹：HBuilder开发者突破200万',
			image_url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90',
			source: 'DCloud',
			comment_count: 395
		},
		data3: {
			article_type: 3,
			image_list: [{
					url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90',
					width: 563,
					height: 316
				},
				{
					url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90',
					width: 641,
					height: 360
				},
				{
					url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90',
					width: 640,
					height: 360
				}
			],
			datetime: '2019-12-23 11:18',
			image_url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90',
			title: '支持使用 npm 安装第三方包，生态更趋丰富',
			source: 'DCloud',
			comment_count: 11
		},
		data4: {
			datetime: '2019-12-23 11:18',
			article_type: 4,
			title: '支持原生小程序',
			image_url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90',
			source: 'DCloud',
			comment_count: 69
		}
	};

	export default {
		
		components: {
			uniNoticeBar,
			uniSection,
			share
		},

		data() {
			return {
				gridCol: 5,
				gridBorder: false,
				isCard: false,
				TabCur: 0,
				scrollLeft: 0,
				isClickChange: false,
				tabIndex: 0,
				newsitems: [],
				cuIconList2: [{
					cuIcon: 'cardboardfill',
					color: 'red',
					badge: 120,
					name: '最新'
				}, {
					cuIcon: 'hotfill',
					color: 'orange',
					badge: 1,
					name: '福利群'
				}, {
					cuIcon: 'shopfill',
					color: 'yellow',
					badge: 0,
					name: '微商群'
				}, {
					cuIcon: 'commandfill',
					color: 'olive',
					badge: 22,
					name: '兼职群'
				}, {
					cuIcon: 'sponsorfill',
					color: 'green',
					badge: 0,
					name: '餐饮美食'
				}, {
					cuIcon: 'group_fill',
					color: 'cyan',
					badge: 0,
					name: '兼职招聘'
				}],
				cuIconList: [{
					cuIcon: 'cardboardfill',
					color: 'red',
					badge: 120,
					name: '最新群'
				}, {
					cuIcon: 'hotfill',
					color: 'orange',
					badge: 1,
					name: '福利优惠'
				}, {
					cuIcon: 'homefill',
					color: 'pink',
					badge: 0,
					name: '房产信息'
				}, {
					cuIcon: 'commandfill',
					color: 'olive',
					badge: 22,
					name: '兼职招聘'
				}, {
					cuIcon: 'emojiflashfill',
					color: 'green',
					badge: 0,
					name: '餐饮美食'
				}, {
					cuIcon: 'formfill',
					color: 'blue',
					badge: 0,
					name: '学习交流'
				}, {
					cuIcon: 'colorlens',
					color: 'cyan',
					badge: 0,
					name: '兴趣爱好'
				}, {
					cuIcon: 'group_fill',
					color: 'olive',
					badge: 0,
					name: '同城交友'
				}, {
					cuIcon: 'shopfill',
					color: 'yellow',
					badge: 0,
					name: '代购微商'
				}, {
					cuIcon: 'sponsorfill',
					color: 'grey',
					badge: 0,
					name: '商业交流'
				}, {
					cuIcon: 'locationfill',
					color: 'olive',
					badge: 0,
					name: '生活服务'
				}, {
					cuIcon: 'servicefill',
					color: 'blue',
					badge: 0,
					name: '在线客服'
				}]
			};
		},

		onLoad() {

		},
		methods: {
			goTop() {
				uni.pageScrollTo({
					scrollTop: 0
				})
			},
			loadMore: function() {
				setTimeout(() => {
					for (var i = 0; i < this.cuIconList2.length; i++) {
						this.cuIconList.push(this.cuIconList2[i])
					}
				}, 1200);
			},
			onReachBottom: function() {
				setTimeout(() => {
					for (var i = 0; i < this.cuIconList2.length; i++) {
						this.cuIconList.push(this.cuIconList2[i])
					}
				}, 1200);
			},
		}
	};
</script>

<style>
	.uni-tab-bar-loading {
		text-align: center;
		font-size: 28upx;
		color: #999;
	}

	page {
		background-color: #f4f5f6;
		height: 100%;
		font-size: 28upx;
		line-height: 1.8;
	}

	.image_ca {
		width: 180rpx;
		height: 150rpx;
		float: left;
		margin-right: 20rpx;
		-webkit-border-radius: 32rpx;
		border-radius: 22rpx;
		border-width: 3rpx;
		border-color: #d1d1d1;
		-webkit-box-shadow: 0 0 6px rgba(30, 20, 20, 0.1);
		box-shadow: 0 0 6px rgba(30, 20, 20, 0.1);
	}

	.detail_info {
		padding: 20rpx;
		padding-bottom: 5rpx;
		display: block;
		justify-content: flex-end;
		border-style: none none solid;
		border-width: 1px;
		border-color: rgb(196, 196, 196);
	}

	.textbox {
		width: 250px;
		height: 34px;
		overflow: hidden; //一定要写
		text-overflow: ellipsis; //超出省略号
		-webkit-line-clamp: 2; //控制行数
		-webkit-box-orient: vertical; //一定要写
	}

	.index_swiper {
		height: 340rpx;
	}

	.view_catpost {
		/* width: 750rpx; */
		margin-left: 1px;
		height: 130rpx;
		overflow: hidden;
	}

	.nav_postlist_item {
		border-style: none none solid;
		border-bottom-width: 0px;
		border-bottom-color: rgba(170, 170, 170, 1);
	}

	.list_text_view {
		color: #959595;
		margin-left: 5rpx;
		font-size: 22rpx;
		line-height: 1.0;
		font-weight: normal;
		text-align: center;
	}

	.swiper-tab-list1 {
		font-size: 14px;
		width: 70px;
		display: inline-block;
		text-align: center;
	}

	.marTop {
		margin-top: 7px;
		margin-bottom: -8px;
	}
</style>
