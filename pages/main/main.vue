<template>
	<view class="content">
		<view>
			<cu-custom bgImage="https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg">

			</cu-custom>
		</view>

		<swiper class="card-swiper" :class="dotStyle ? 'square-dot' : 'round-dot'" :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="5000" duration="500" @change="cardSwiper" indicator-color="#8799a3"
		 indicator-active-color="#0081ff">
			<swiper-item v-for="(item, index) in swiperList" :key="index" :class="cardCur == index ? 'cur' : ''">
				<view class="swiper-item">
					<image :src="item.url" mode="aspectFill" v-if="item.type == 'image'"></image>
					<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type == 'video'"></video>
				</view>
			</swiper-item>
		</swiper>

		<view class="cu-list grid" :class="['col-' + gridCol,gridBorder?'':'no-border']">
			<view class="cu-item" v-for="(item,index) in cuIconList" :key="index" v-if="index<gridCol*2">
				<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]">
					<view class="cu-tag badge" v-if="item.badge!=0">
						<block v-if="item.badge!=1">{{item.badge>99?'99+':item.badge}}</block>
					</view>
				</view>
				<text>{{item.name}}</text>
			</view>
		</view>
		
					<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-orange "></text> 消息列表
			</view>
		</view>
		<view class="cu-list menu-avatar">
			<view class="cu-item">
				<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
				<view class="content">
					<view class="text-grey">凯尔</view>
					<view class="text-gray text-sm flex">
						<view class="text-cut">
							<text class="cuIcon-infofill text-red  margin-right-xs"></text>
							我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。
						</view> </view>
				</view>
				<view class="action">
					<view class="text-grey text-xs">22:20</view>
					<view class="cu-tag round bg-grey sm">5</view>
				</view>
			</view>
			<view class="cu-item">
				<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png);">
					<view class="cu-tag badge">99+</view>
				</view>
				<view class="content">
					<view class="text-grey">
						<view class="text-cut">瓦洛兰之盾-塔里克</view>
						<view class="cu-tag round bg-orange sm">战士</view>
					</view>
					<view class="text-gray text-sm flex">
						<view class="text-cut">
							塔里克是保护者星灵，用超乎寻常的力量守护着符文之地的生命、仁爱以及万物之美。塔里克由于渎职而被放逐，离开了祖国德玛西亚，前去攀登巨神峰寻找救赎，但他找到的却是来自星界的更高层的召唤。现在的塔里克与古代巨神族的神力相融合，以瓦洛兰之盾的身份，永不疲倦地警惕着阴险狡诈的虚空腐化之力。
						</view>
					</view>
				</view>
				<view class="action">
					<view class="text-grey text-xs">22:20</view>
					<view class="cuIcon-notice_forbid_fill text-gray"></view>
				</view>
			</view>
			<view class="cu-item ">
				<view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></view>
				<view class="content">
					<view class="text-pink"><view class="text-cut">莫甘娜</view></view>
					<view class="text-gray text-sm flex"> <view class="text-cut">凯尔，你被自己的光芒变的盲目！</view></view>
				</view>
				<view class="action">
					<view class="text-grey text-xs">22:20</view>
					<view class="cu-tag round bg-red sm">5</view>
				</view>
			</view>
			<view class="cu-item grayscale">
				<view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg);"></view>
				<view class="content">
					<view><view class="text-cut">伊泽瑞尔</view>
						<view class="cu-tag round bg-orange sm">断开连接...</view>
					</view>
					<view class="text-gray text-sm flex"> <view class="text-cut"> 等我回来一个打十个</view></view>
				</view>
				<view class="action">
					<view class="text-grey text-xs">22:20</view>
					<view class="cu-tag round bg-red sm">5</view>
				</view>
			</view>
			<view class="cu-item cur">
				<view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg);">
					<view class="cu-tag badge"></view>
				</view>
				<view class="content">
					<view>
						<view class="text-cut">瓦罗兰大陆-睡衣守护者-新手保护营</view>
						<view class="cu-tag round bg-orange sm">6人</view>
					</view>
					<view class="text-gray text-sm flex">
						<view class="text-cut"> 伊泽瑞尔：<text class="cuIcon-locationfill text-orange margin-right-xs"></text> 传送中...</view></view>
				</view>
				<view class="action">
					<view class="text-grey text-xs">22:20</view>
					<view class="cuIcon-notice_forbid_fill text-gray"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';

	export default {
		data() {
			return {
				cardCur: 0,
				swiperList: [{
						id: 0,
						type: 'image',
						url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
					},
					{
						id: 1,
						type: 'image',
						url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg'
					},
					{
						id: 2,
						type: 'image',
						url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
					},
					{
						id: 3,
						type: 'image',
						url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
					},
					{
						id: 4,
						type: 'image',
						url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
					},
					{
						id: 5,
						type: 'image',
						url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
					},
					{
						id: 6,
						type: 'image',
						url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
					}
				],
				dotStyle: true,
				towerStart: 0,
				direction: '',
				cuIconList: [{
					cuIcon: 'cardboardfill',
					color: 'red',
					badge: 120,
					name: 'VR'
				}, {
					cuIcon: 'recordfill',
					color: 'orange',
					badge: 1,
					name: '录像'
				}, {
					cuIcon: 'picfill',
					color: 'yellow',
					badge: 0,
					name: '图像'
				}, {
					cuIcon: 'noticefill',
					color: 'olive',
					badge: 22,
					name: '通知'
				}, {
					cuIcon: 'upstagefill',
					color: 'cyan',
					badge: 0,
					name: '排行榜'
				}, {
					cuIcon: 'clothesfill',
					color: 'blue',
					badge: 0,
					name: '皮肤'
				}, {
					cuIcon: 'discoverfill',
					color: 'purple',
					badge: 0,
					name: '发现'
				}, {
					cuIcon: 'questionfill',
					color: 'mauve',
					badge: 0,
					name: '帮助'
				}, {
					cuIcon: 'commandfill',
					color: 'purple',
					badge: 0,
					name: '问答'
				}, {
					cuIcon: 'brandfill',
					color: 'mauve',
					badge: 0,
					name: '版权'
				}],
				modalName: null,
				gridCol: 5,
				gridBorder: false,
				menuBorder: false,
				menuArrow: false,
				menuCard: false,
				skin: false,
				listTouchStart: 0,
				listTouchDirection: null,
			};
		},
		computed: mapState(['forcedLogin', 'hasLogin', 'userName']),

		methods: {
			DotStyle(e) {
				this.dotStyle = e.detail.value;
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current;
			},
			// towerSwiper
			// 初始化towerSwiper
			TowerSwiper(name) {
				let list = this[name];
				for (let i = 0; i < list.length; i++) {
					list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2));
					list[i].mLeft = i - parseInt(list.length / 2);
				}
				this.swiperList = list;
			},

			// towerSwiper触摸开始
			TowerStart(e) {
				this.towerStart = e.touches[0].pageX;
			},

			// towerSwiper计算方向
			TowerMove(e) {
				this.direction = e.touches[0].pageX - this.towerStart > 0 ? 'right' : 'left';
			},

			// towerSwiper计算滚动
			TowerEnd(e) {
				let direction = this.direction;
				let list = this.swiperList;
				if (direction == 'right') {
					let mLeft = list[0].mLeft;
					let zIndex = list[0].zIndex;
					for (let i = 1; i < this.swiperList.length; i++) {
						this.swiperList[i - 1].mLeft = this.swiperList[i].mLeft;
						this.swiperList[i - 1].zIndex = this.swiperList[i].zIndex;
					}
					this.swiperList[list.length - 1].mLeft = mLeft;
					this.swiperList[list.length - 1].zIndex = zIndex;
				} else {
					let mLeft = list[list.length - 1].mLeft;
					let zIndex = list[list.length - 1].zIndex;
					for (let i = this.swiperList.length - 1; i > 0; i--) {
						this.swiperList[i].mLeft = this.swiperList[i - 1].mLeft;
						this.swiperList[i].zIndex = this.swiperList[i - 1].zIndex;
					}
					this.swiperList[0].mLeft = mLeft;
					this.swiperList[0].zIndex = zIndex;
				}
				this.direction = '';
				this.swiperList = this.swiperList;
			}
		},
		onLoad() {
			this.TowerSwiper('swiperList');
			// 初始化towerSwiper 传已有的数组名即可
			if (!this.hasLogin) {
				uni.showModal({
					title: '未登录',
					content: '您未登录，需要登录后才能继续',
					/**
					 * 如果需要强制登录，不显示取消按钮
					 */
					showCancel: !this.forcedLogin,
					success: res => {
						if (res.confirm) {
							/**
							 * 如果需要强制登录，使用reLaunch方式
							 */
							if (this.forcedLogin) {
								uni.reLaunch({
									url: '../login/login'
								});
							} else {
								uni.navigateTo({
									url: '../login/login'
								});
							}
						}
					}
				});
			}
		}
	};
</script>

<style>
	.tower-swiper .tower-item {
		transform: scale(calc(0.5 + var(--index) / 10));
		margin-left: calc(var(--left) * 100upx - 150upx);
		z-index: var(--index);
	}

	.hello {
		display: flex;
		flex: 1;
		flex-direction: column;
	}

	.fixed {
		position: fixed;
		z-index: 99;
	}

	.title {
		color: #8f8f94;
		margin-top: 50upx;
	}

	.ul {
		font-size: 30upx;
		color: #8f8f94;
		margin-top: 50upx;
	}

	.ul>view {
		line-height: 50upx;
	}
</style>
