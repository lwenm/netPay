<template>
	<view class="">
		<view>
			<cu-custom bgImage="https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg">
			</cu-custom>
		</view>
				<share />
		<view class="cu-bar search bg-white">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="搜索图片、文章、视频"
				 confirm-type="search"></input>
			</view>
			<view class="action">
				<button class="cu-btn bg-green shadow-blur round">搜索</button>
			</view>
		</view>
		<swiper class="card-swiper" :class="dotStyle ? 'square-dot' : 'round-dot'" :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="6000" duration="500" @change="cardSwiper" indicator-color="#8799a3"
		 indicator-active-color="#0081ff">
			<swiper-item v-for="(item, index) in swiperList" :key="index" :class="cardCur == index ? 'cur' : ''">
				<view class="swiper-item">
					<image :src="item.url" mode="aspectFill" v-if="item.type == 'image'"></image>
					<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type == 'video'"></video>
				</view>
			</swiper-item>
		</swiper>

		<view class="cu-list grid" :class="['col-' + gridCol,gridBorder?'':'no-border']" >
			<view class="cu-item" v-for="(item,index) in cuIconList" :key="index" v-if="index<gridCol*2">
				<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]" style="line-height: 1;">
					<view class="cu-tag badge" v-if="item.badge!=0"  >
						
					</view>
				</view>
				<text>{{item.name}}</text>
			</view>
		</view>

		<view class="cu-card dynamic shadow shadow-lg" v-for="(item,index) in isCard?7:7" :key="index" @click="getDetail" :class="isCard?'':''">
			<view class="cu-item shadow">
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
						<view class="content flex-sub">
							<view class="text-shadow text-mauve">凯尔-艾欧尼亚</view>
							<view class="text-white   text-sm   ">
								<view class='cu-tag radius light sm bg-orange'>置顶</view>
								<view class='cu-tag radius  light sm bg-cyan'>大宝剑专区</view>
							</view>
						</view>
					</view>
				</view>
				<view class="text-content text-df text-black">
					想做兼职的看过来，宝妈、学生、待业、上班
					、老板、微商朋友都可以，手机兼职时间自由，
					多劳多得，日赚30--300💰 
					                            
				</view>
				<view class="grid flex-sub padding-lr" :class="isCard?'col-4 grid-square':'col-20 grid-square'">
					<view class="bg-img" :class="isCard?'':''" v-for="(item,index) in isCard?4:4" :key="index">
						<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" @click='previewimgs' data-img="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
						 mode="aspectFill"></image>
					</view>
				</view>
				<view class="text-gray padding-lr  " style="margin-top: 20rpx;font-size: 14px;">
					2019-12-23 11:18
				</view>
				<view class="padding-sm  solid-top">
					<view class="text-gray radius light flex     justify-between" style="  color: #A3A3A3;">
						<view class=" ">
							<text class="cuIcon-attentionfill   margin-lr-xs"></text>1249
							<text class="cuIcon-appreciatefill margin-lr-xs"></text>398
							<text class="cuIcon-messagefill margin-lr-xs"></text>301
						</view>
						<view class="">
							<text class="  text-mauve   margin-lr-xs" @click="navTo">详情>></text>
						</view>
		
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';

	import uniNoticeBar from "../../components/uni-notice-bar/uni-notice-bar.vue"
	import uniIcon from "../../components/uni-icon/uni-icon.vue"
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import share from "@/components/share.vue"
	const recorderManager = uni.getRecorderManager();
	const innerAudioContext = uni.createInnerAudioContext();

	innerAudioContext.autoplay = true;

	export default {
		components: {
			uniNoticeBar,
			uniIcon,
			uniPopup,
			share
		},

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
					name: '最新'
				}, {
					cuIcon: 'hotfill',
					color: 'orange',
					badge: 1,
					name: '最热'
				}, {
					cuIcon: 'picfill',
					color: 'yellow',
					badge: 0,
					name: '安卓区'
				}, {
					cuIcon: 'noticefill',
					color: 'olive',
					badge: 22,
					name: '苹果区'
				}, {
					cuIcon: 'upstagefill',
					color: 'cyan',
					badge: 0,
					name: '排行榜'
				}, {
					cuIcon: 'circlefill',
					color: 'blue',
					badge: 0,
					name: '综合区'
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
					cuIcon: 'servicefill',
					color: 'mauve',
					badge: 0,
					name: '客服'
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
				isCard: true,
				arrImg: [
					'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1574944734&di=968165d2137e21d5fd73145689cef219&src=http://desk-fd.zol-img.com.cn/t_s960x600c5/g4/M04/04/03/Cg-4WVQSY5GIXCJfAAgcMfHEIBEAARXwQHY7j8ACBxJ524.jpg',
					'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4029513770,137662880&fm=26&gp=0.jpg',
					'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=287899671,3092315054&fm=26&gp=0.jpg',
					'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3087859370,4025215728&fm=26&gp=0.jpg'
				]
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
			
			},
			
			navTo: function(e) {
				console.log("------------------")
				uni.navigateTo({
					url: '../blog/detail/detail',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			
			},
			toDetail: function() {
			
			}
		},
		// onLoad() {
		// 	this.TowerSwiper('swiperList');
		// 	// 初始化towerSwiper 传已有的数组名即可
		// 	if (!this.hasLogin) {
		// 		uni.showModal({
		// 			title: '未登录',
		// 			content: '您未登录，需要登录后才能继续',
		// 			/**
		// 			 * 如果需要强制登录，不显示取消按钮
		// 			 */
		// 			showCancel: !this.forcedLogin,
		// 			success: res => {
		// 				if (res.confirm) {
		// 					/**
		// 					 * 如果需要强制登录，使用reLaunch方式
		// 					 */
		// 					if (this.forcedLogin) {
		// 						uni.reLaunch({
		// 							url: '../login/login'
		// 						});
		// 					} else {
		// 						uni.navigateTo({
		// 							url: '../login/login'
		// 						});
		// 					}
		// 				}
		// 			}
		// 		});
		// }
		// }
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
