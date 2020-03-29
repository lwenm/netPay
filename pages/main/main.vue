<template>
	<scroll-view scroll-y>
		<view>
			<view class="">
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

				<swiper class="card-swiper bg-white " :class="dotStyle ? 'square-dot' : 'round-dot'" :circular="true" :autoplay="true"
				 interval="6000" duration="500" @change="cardSwiper" indicator-color="#8799a3" indicator-active-color="#4adfdf">
					<swiper-item v-for="(item, index) in swiperList" :key="index" :class="cardCur == index ? 'cur' : ''">
						<view class="swiper-item">
							<image :src="item.url" mode="aspectFill" v-if="item.type == 'image'"></image>
							<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type == 'video'"></video>
						</view>
					</swiper-item>
				</swiper>

				<view class=" bg-white shadow-blur   padding  solids-top   radius margin-lr-xs " style="margin-top: -6px; margin-bottom: 2.5px;">
					<view class="   flex justify-start">
						<view>
							<text class="cuIcon-calendar margin-right-sm text-olive"> 发帖:</text><text class=" text-sm">3245</text>
						</view>
						<view>
							<text class="cuIcon-attention margin-left-xl margin-right-sm text-orange"> 浏览:</text><text class="text-sm ">43672</text>
						</view>
					</view>
					<view ><text class="cuIcon-album text-olive">每日一句：</text><text class="text-sm">玉辇西归已至今，古原风景自沈沈。御沟流水长芳草，宫树落花空夕阴。蝴蝶翅翻残露滴，子规声尽野烟深。路人不记当年事，台殿寂寥山影侵</text></view>
				</view>
				<!-- 				<view class="grid col-2  solids-bottom solids-top">
					<view class="">
						<view class="bg-gradual-blue margin-lr-xs padding-sm radius text-center  ">
							<view class="text-lg">发布</view>
						</view>
					</view>
					<view class="">
						<view class="bg-gradual-pink margin-lr-xs padding-sm radius text-center  ">
							<view class="text-lg">入驻</view>
						</view>
					</view>
				</view> -->

				<scroll-view scroll-x class=" bg-white nav text-center solids-bottom radius " scroll-with-animation :scroll-left="scrollLeft"
				 style="margin-bottom: -15px;">
					<view class="cu-item" v-for="(item, index) in cuIconList" :key="index" :class="index==TabCur?'text-red text-bold':'text-cyan'"
					 @tap="tabSelect" :data-id="index">
						<text :class="['cuIcon-' + item.cuIcon]"></text> {{item.name}}
					</view>
				</scroll-view>

				<!--<view class="cu-list grid radius shadow shadow-lg" :class="['col-' + gridCol,gridBorder?'':'no-border']">
					<view class="cu-item" v-for="(item,index) in cuIconList" :key="index" v-if="index<gridCol*2">
						<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]" style="line-height: 0.8; ">
							<view class="cu-tag badge" v-if="item.badge!=0">

							</view>
						</view>
						<text style=" font-size: 12px;">{{item.name}}</text>
					</view>
				</view> -->

				<view class="cu-card dynamic shadow shadow-lg radius   " v-for="(item,index) in articList " :key="index" @click="getDetail"
				 :class="isCard?'':''">
					<view class="cu-item shadow" style="margin-bottom: -8px;">
						<view class="cu-list menu-avatar">
							<view class="cu-item">
								<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
								<view class="content flex-sub">
									<view class="text-shadow  text-mauve">{{item.nickName}}</view>
									<view class="text-white   text-sm   ">
										<view class='cu-tag radius light sm bg-orange ' style="margin-left: 0px;">{{item.isTop==1?"置顶":"普通"}}</view>
										<view class='cu-tag radius  light sm bg-cyan'>大宝剑专区</view>
									</view>
								</view>
							</view>
						</view>
						<view class="text-content text-df text-black">{{item.title}}</view>
						<view class="grid flex-sub padding-lr" :class="isCard?'col-4 grid-square':'col-20 grid-square'" >
							<view class="bg-img" :class="isCard?'':''" v-for="(subItem,indexs) in (item.imgs)" :key="indexs" v-if="indexs<4">
								<image :src="subItem" @click='previewimgs' :data-img="subItem" mode="aspectFill"> </image>
							</view>
						</view>
						<view class="text-gray padding-lr  text-sm" style="margin-top: 20rpx; ">
							{{item.datetime}} 发布
						</view>
						<view class="   solid-top">
							<view class="text-gray radius light flex     justify-between" style="  color: #A3A3A3;height: 45px;">
								<view class="flex align-center   ">
									<text class="cuIcon-attentionfill  text-orange text-content   margin-left-sm margin-lr-xs"></text>{{item.browsingTimes}}
									<text class="cuIcon-likefill text-red   text-content margin-left-sm margin-lr-xs"></text>{{item.thumbsUp}}
									<text class="cuIcon-favorfill  text-olive text-content margin-lr-xs margin-left-sm"></text>{{item.comment_count}}
								</view>
								<view class="flex align-center justify-end" style="height: 100% ;width: 80px;" @click="navTo">
									<text class="text-mauve  text-sm light  margin-lr-xs">详情>></text>
								</view>
							</view>
						</view>
					</view>
					<view class="cu-item shadow radius" v-if="index%8==0" style="margin-bottom: -8px;" >
						<ad unit-id="adunit-07c798ead64c55f4"></ad>
					</view>

				</view>
				<view class="cu-load   " :class="1==1?'loading':'over'"></view>
			</view>

		</view>
	</scroll-view>

</template>

<script>
	import {
		mapState
	} from 'vuex';


	import share from "@/components/share.vue"
	const recorderManager = uni.getRecorderManager();
	const innerAudioContext = uni.createInnerAudioContext();

	innerAudioContext.autoplay = true;

	export default {
		components: {
			share
		},

		data() {
			return {
				current_cat: 0,
				current_position: 'mid_99999999',
				scrollLeft: 0,
				cardCur: 0,
				TabCur: 0,
				swipelistMS: [{
						"name": "最近发布",
						"slug": "最近发布",
						"type": "category",
						"description": "提供最新网站源码下载，方便大家的学习",
						"mid": "99999999"
					},
					{
						"name": "资源分享",
						"slug": "xia",
						"type": "category",
						"description": "提供最新网站源码下载，方便大家的学习",
						"mid": "2"
					},
					{
						"name": "技术交流",
						"slug": "share",
						"type": "category",
						"description": "分享一些自己的学习心得，一些技术之间的交流",
						"mid": "14"
					},
					{
						"name": "JSP源码",
						"slug": "jspcode",
						"type": "category",
						"description": null,
						"mid": "33"
					},
					{
						"name": "毕业设计",
						"slug": "bysj",
						"type": "category",
						"description": "分享一些IT的毕业设计源码和论文",
						"mid": "35"
					},
					{
						"name": "其他源码",
						"slug": "othercode",
						"type": "category",
						"description": null,
						"mid": "36"
					},
					{
						"name": "精品课程",
						"slug": "video",
						"type": "category",
						"description": "分享一些其他编程之类的视频",
						"mid": "41"
					},
					{
						"name": "JAVA源码",
						"slug": "javacode",
						"type": "category",
						"description": "分享一些java的源码",
						"mid": "45"
					}
				], //文章分类
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
				articList: [{
						datetime: "2019-12-23 11:18",
						article_type: "1",
						isTop: 1,
						nickName: "凯尔-艾欧尼亚",
						title: "想做兼职的看过来，宝妈、学生、待业、上班、老板、微商朋友都可以，手机兼职时间自由，多劳多得，日赚30--300💰",
						headImg: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
						comment_count: "639",
						thumbsUp: "312",
						browsingTimes: "2345",
						imgs: [
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg",
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg",
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg",
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",

						]
					},
					{
						datetime: "2019-12-23 11:18",
						article_type: "1",
						isTop: 1,
						nickName: "凯尔-艾欧尼亚",
						title: "想做兼职的看过来，宝妈、学生、待业、上班、老板、微商朋友都可以，手机兼职时间自由，多劳多得，日赚30--300💰",
						headImg: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
						comment_count: "639",
						thumbsUp: "312",
						browsingTimes: "2345",
						imgs: [
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg",
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg",
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg",
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
						]
					}, {
						datetime: "2019-12-23 11:18",
						article_type: "1",
						isTop: 1,
						nickName: "凯尔-艾欧尼亚",
						title: "想做兼职的看过来，宝妈、学生、待业、上班、老板、微商朋友都可以，手机兼职时间自由，多劳多得，日赚30--300💰",
						headImg: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
						comment_count: "639",
						thumbsUp: "312",
						browsingTimes: "2345",
						imgs: [
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg",
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg",
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg",
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg",

						]
					}, {
						datetime: "2019-12-23 11:18",
						article_type: "1",
						isTop: 1,
						nickName: "凯尔-艾欧尼亚",
						title: "想做兼职的看过来，宝妈、学生、待业、上班、老板、微商朋友都可以，手机兼职时间自由，多劳多得，日赚30--300💰",
						headImg: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
						comment_count: "639",
						thumbsUp: "312",
						browsingTimes: "2345",
						imgs: [
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg",
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg",
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg",
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg",

						]
					}, {
						datetime: "2019-12-23 11:18",
						article_type: "1",
						isTop: 1,
						nickName: "凯尔-艾欧尼亚",
						title: "想做兼职的看过来，宝妈、学生、待业、上班、老板、微商朋友都可以，手机兼职时间自由，多劳多得，日赚30--300💰",
						headImg: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
						comment_count: "639",
						thumbsUp: "312",
						browsingTimes: "2345",
						imgs: [
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg",
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg",
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg",
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg",

						]
					}, {
						datetime: "2019-12-23 11:18",
						article_type: "1",
						isTop: 1,
						nickName: "凯尔-艾欧尼亚",
						title: "想做兼职的看过来，宝妈、学生、待业、上班、老板、微商朋友都可以，手机兼职时间自由，多劳多得，日赚30--300💰",
						headImg: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
						comment_count: "639",
						thumbsUp: "312",
						browsingTimes: "2345",
						imgs: [
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg",
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg",
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg",
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg",

						]
					}, {
						datetime: "2019-12-23 11:18",
						article_type: "1",
						isTop: 1,
						nickName: "凯尔-艾欧尼亚",
						title: "想做兼职的看过来，宝妈、学生、待业、上班、老板、微商朋友都可以，手机兼职时间自由，多劳多得，日赚30--300💰",
						headImg: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
						comment_count: "639",
						thumbsUp: "312",
						browsingTimes: "2345",
						imgs: [
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg",
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg",
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg",
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg",
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
						]
					}, {
						datetime: "2019-12-23 11:18",
						article_type: "1",
						isTop: 1,
						nickName: "凯尔-艾欧尼亚",
						title: "想做兼职的看过来，宝妈、学生、待业、上班、老板、微商朋友都可以，手机兼职时间自由，多劳多得，日赚30--300💰",
						headImg: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
						comment_count: "639",
						thumbsUp: "312",
						browsingTimes: "2345",
						imgs: [
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg",
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg",
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg",
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg",
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
						]
					}, {
						datetime: "2019-12-23 11:18",
						article_type: "1",
						isTop: 1,
						nickName: "凯尔-艾欧尼亚",
						title: "想做兼职的看过来，宝妈、学生、待业、上班、老板、微商朋友都可以，手机兼职时间自由，多劳多得，日赚30--300💰",
						headImg: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
						comment_count: "639",
						thumbsUp: "312",
						browsingTimes: "2345",
						imgs: [
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg",
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg",
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg",
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg",
							"https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg",
						]
					},

				],
				articList2: [{
					datetime: "2019-12-23 11:18",
					article_type: "1",
					isTop: 1,
					nickName: "莫甘娜-艾欧尼亚",
					title: "想做兼职的看过来，宝妈、学生、待业、上班、老板、微商朋友都可以，手机兼职时间自由，多劳多得，日赚30--300💰",
					headImg: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
					comment_count: "639",
					thumbsUp: "312",
					browsingTimes: "2345",
					imgs: [
						"https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg",
						"https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg",
						"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
						"https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg",

					]
				}, {
					datetime: "2019-12-23 11:18",
					article_type: "1",
					isTop: 1,
					nickName: "莫甘娜-艾欧尼亚",
					title: "想做兼职的看过来，宝妈、学生、待业、上班、老板、微商朋友都可以，手机兼职时间自由，多劳多得，日赚30--300💰",
					headImg: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
					comment_count: "639",
					thumbsUp: "312",
					browsingTimes: "2345",
					imgs: [
						"https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg",
						"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
						"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
						"https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg",

					]
				}, {
					datetime: "2019-12-23 11:18",
					article_type: "1",
					isTop: 1,
					nickName: "莫甘娜-艾欧尼亚",
					title: "想做兼职的看过来，宝妈、学生、待业、上班、老板、微商朋友都可以，手机兼职时间自由，多劳多得，日赚30--300💰",
					headImg: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
					comment_count: "639",
					thumbsUp: "312",
					browsingTimes: "2345",
					imgs: [
						"https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg",
						"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
						"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
						"https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg",
						"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
					]
				}],
				dotStyle: true,
				towerStart: 0,
				direction: '',
				cuIconList: [{
						cuIcon: 'cardboardfill',
						color: 'red',
						badge: 120,
						name: '推荐'
					}, {
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
					}
				],
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
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 80
			},
			goTop() {
				uni.pageScrollTo({
					scrollTop: 0
				})
			},
			DotStyle(e) {
				this.dotStyle = e.detail.value;
			},
			// cardSwiper 
			cardSwiper(e) {
				this.cardCur = e.detail.current;
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
		onReachBottom: function() {
			setTimeout(() => {
				for (var i = 0; i < this.articList2.length; i++) {
					this.articList.push(this.articList2[i])
				}
			}, 1200);
		},
		// onPageScroll: function (e) {
		//     console.log(e)

		//   }
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
	.content {
		display: flex;
		flex: 1;
		flex-direction: column;
		/* background-color: #efeff4; */
		/* padding: 20upx; */
	}



	.title {
		color: #8f8f94;
		margin-top: 50upx;
	}


	.UCenter-bg {
		background-image: url(https://www.hiai.top/yuan/public/img/162435914.jpg);
		background-size: cover;
		height: 400rpx;
		display: flex;
		justify-content: center;
		padding-top: 40rpx;
		overflow: hidden;
		position: relative;
		flex-direction: column;
		align-items: center;
		color: #fff;
		font-weight: 300;
		text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
	}

	.UCenter-bg text {
		opacity: 0.8;
	}

	.UCenter-bg image {
		width: 200rpx;
		height: 200rpx;
	}

	.UCenter-bg .gif-wave {
		position: absolute;
		width: 100%;
		bottom: 0;
		left: 0;
		z-index: 99;
		mix-blend-mode: screen;
		height: 100rpx;
	}

	map,
	.mapBox {
		left: 0;
		z-index: 99;
		mix-blend-mode: screen;
		height: 100rpx;
	}

	map,
	.mapBox {
		width: 750rpx;
		height: 300rpx;
	}

	/*公告CSS*/
	.Gonggao {
		border-top: 1rpx solid #ddd;
	}

	.swiper_container {
		height: 55rpx;
		width: 80vw;
		line-height: 55rpx;
	}

	.swiper_item {
		font-size: 25rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		letter-spacing: 2px;
	}

	/*公告CSS*/
	.meiDate {
		margin: 0 0 10px 10px;
	}
</style>
