<template>
	<view class="uni-tab-bar">
		<!-- 		<view>
			<cu-custom bgImage="https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg">
			</cu-custom>
		</view> -->
		<scroll-view id="tab-bar" class="uni-swiper-tab" scroll-x :scroll-left="scrollLeft">
			<view v-for="(tab, index) in tabBars" :key="tab.id" class="swiper-tab-list" :class="tabIndex == index ? 'active' : ''"
			 :id="tab.id" :data-current="index" @click="tapTab">
				{{ tab.name }}
			</view>
		</scroll-view>
		<swiper :current="tabIndex" class="swiper-box" :duration="300" @change="changeTab">
			<swiper-item v-for="(tab, index1) in newsitems" :key="index1">
				<scroll-view class="list " scroll-y @scrolltolower="loadMore(index1)">
					<block v-for="(newsitem, index2) in tab.data" :key="index2">
						<view class=" " style="height: 195rpx">
							<view class="    ">
								<view class=" margin-top-sm margin-left-sm ">
									<image class="image_ca" mode="" :src="[newsitem.image_url]" />
								</view>
								<view class="" style="height: 100%;">
									<view class="text-cut   text-bold   " style="width:250px;font-size: 14px;">
										{{ newsitem.title }}</view>
									<view class="flex align-center  textbox  ">
										<view class="text-gray  " style="width:250px; height: 42px;  font-size: 10px;">
											{{ newsitem.title }}
										</view>
									</view>
									<view class="   " style="width:280px; margin-top: 2px;  ">
										<view class="flex  justify-around">
											<text class="list_text_view cuIcon-time margin-lr-xs ">{{ newsitem.datetime }}</text>
											<text class="list_text_view cuIcon-attentionfill margin-lr-xs">{{ newsitem.comment_count }}</text>
											<text class="list_text_view cuIcon-appreciatefill margin-lr-xs">{{ newsitem.comment_count }}</text>
										</view>

									</view>
								</view>
							</view>
						</view>
					</block>
					<view class="uni-tab-bar-loading">{{ tab.loadingText }}</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
	import mediaList from '@/components/tab-nvue/mediaList.vue';

	const tpl = {
		data0: {
			datetime: '40分钟前',
			article_type: 0,
			title: '行业峰会频频亮相，开发者反响热烈!',
			image_url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90',
			source: 'DCloud',
			comment_count: 639
		},
		data1: {
			datetime: '一天前',
			article_type: 1,
			title: 'DCloud完成B2轮融资，震撼发布!',
			image_url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90',
			source: 'DCloud',
			comment_count: 11395
		},
		data2: {
			datetime: '一天前',
			article_type: 2,
			title: '中国技术界小奇迹：HBuilder开发者突破200万中国技术界小奇迹：HBuilder开发者突破200万中国技术界小奇迹：HBuilder开发者突破200万',
			image_url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90',
			source: 'DCloud',
			comment_count: 11395
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
			datetime: '5分钟前',
			image_url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90',
			title: '支持使用 npm 安装第三方包，生态更趋丰富',
			source: 'DCloud',
			comment_count: 11
		},
		data4: {
			datetime: '2小时前',
			article_type: 4,
			title: '支持原生小程序自定义组件，更开放、更自由',
			image_url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90',
			source: 'DCloud',
			comment_count: 69
		}
	};

	export default {
		components: {
			mediaList
		},
		data() {
			return {
				scrollLeft: 0,
				isClickChange: false,
				tabIndex: 0,
				newsitems: [],
				tabBars: [{
						name: '最新',
						id: 'guanzhu'
					},
					{
						name: '福利优惠',
						id: 'tuijian'
					},
					{
						name: '微商群',
						id: 'tiyu'
					},
					{
						name: '兼职群',
						id: 'redian'
					},
					{
						name: '美食群',
						id: 'caijing'
					},
					{
						name: '交友群',
						id: 'yule'
					},
					{
						name: '互助群',
						id: 'yule'
					},
					{
						name: '投票群',
						id: 'yule'
					},
					{
						name: '游戏群',
						id: 'yule'
					},
					{
						name: '旅游群',
						id: 'yule'
					},
					{
						name: '红包群',
						id: 'yule'
					},
					{
						name: '其他',
						id: 'yule'
					}
				]
			};
		},
		onLoad() {
			this.newsitems = this.randomfn();
		},
		methods: {
			goDetail(e) {
				uni.navigateTo({
					url: '/pages/template/tabbar/detail/detail?title=' + e.title
				});
			},
			close(index1, index2) {
				uni.showModal({
					content: '是否删除本条信息？',
					success: res => {
						if (res.confirm) {
							this.newsitems[index1].data.splice(index2, 1);
						}
					}
				});
			},
			loadMore(e) {
				setTimeout(() => {
					this.addData(e);
				}, 1200);
			},
			addData(e) {
				if (this.newsitems[e].data.length > 30) {
					this.newsitems[e].loadingText = '没有更多了';
					return;
				}
				for (let i = 1; i <= 10; i++) {
					this.newsitems[e].data.push(tpl['data' + Math.floor(Math.random() * 5)]);
				}
			},
			async changeTab(e) {
				let index = e.target.current;
				if (this.newsitems[index].data.length === 0) {
					this.addData(index);
				}
				if (this.isClickChange) {
					this.tabIndex = index;
					this.isClickChange = false;
					return;
				}
				let tabBar = await this.getElSize('tab-bar'),
					tabBarScrollLeft = tabBar.scrollLeft;
				let width = 0;

				for (let i = 0; i < index; i++) {
					let result = await this.getElSize(this.tabBars[i].id);
					width += result.width;
				}
				let winWidth = uni.getSystemInfoSync().windowWidth,
					nowElement = await this.getElSize(this.tabBars[index].id),
					nowWidth = nowElement.width;
				if (width + nowWidth - tabBarScrollLeft > winWidth) {
					this.scrollLeft = width + nowWidth - winWidth;
				}
				if (width < tabBarScrollLeft) {
					this.scrollLeft = width;
				}
				this.isClickChange = false;
				this.tabIndex = index; //一旦访问data就会出问题
			},
			getElSize(id) {
				//得到元素的size
				return new Promise((res, rej) => {
					uni.createSelectorQuery()
						.select('#' + id)
						.fields({
								size: true,
								scrollOffset: true
							},
							data => {
								res(data);
							}
						)
						.exec();
				});
			},
			async tapTab(e) {
				//点击tab-bar
				let tabIndex = e.target.dataset.current;
				if (this.newsitems[tabIndex].data.length === 0) {
					this.addData(tabIndex);
				}
				if (this.tabIndex === tabIndex) {
					return false;
				} else {
					let tabBar = await this.getElSize('tab-bar'),
						tabBarScrollLeft = tabBar.scrollLeft; //点击的时候记录并设置scrollLeft
					this.scrollLeft = tabBarScrollLeft;
					this.isClickChange = true;
					this.tabIndex = tabIndex;
				}
			},
			randomfn() {
				let ary = [];
				for (let i = 0, length = this.tabBars.length; i < length; i++) {
					let aryItem = {
						loadingText: '加载更多...',
						data: []
					};
					if (i < 1) {
						for (let j = 1; j <= 10; j++) {
							aryItem.data.push(tpl['data' + Math.floor(Math.random() * 5)]);
						}
					}
					ary.push(aryItem);
				}
				return ary;
			}
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

	.image_ca {
		width: 180rpx;
		height: 160rpx;
		float: left;
		margin-right: 20rpx;
		-webkit-border-radius: 32rpx;
		border-radius: 22rpx;
		border-width: 3rpx;
		border-color: #d1d1d1;
		-webkit-box-shadow: 0 0 6px rgba(30, 20, 20, 0.1);
		box-shadow: 0 0 6px rgba(30, 20, 20, 0.1);
	}

	@import "colorui/main.wxss";
	@import "colorui/icon.wxss";


	page {
		height: 100%;
		font-family: Helvetica Neue, Helvetica, sans-serif;
	}

	checkbox-group,
	radio-group {
		display: block;
	}

	:before,
	:after,
	::before,
	::after {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	.minheight {
		min-height: 60px;
	}

	.m_full {
		width: 100%;
		height: 100%;
	}

	.m-block {
		display: block;
	}

	.m_fullwidth {
		width: 100%;
	}

	.m_fullheight {
		height: 100%;
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
 

.textbox{
    overflow:hidden;//一定要写
    text-overflow: ellipsis;//超出省略号
    -webkit-line-clamp: 2;//控制行数
    -webkit-box-orient: vertical;//一定要写
}
 

	.view_section {
		padding-bottom: 2rpx;
		margin-left: 20rpx;
	}

	.view_section.section_actors {
		padding-right: 0px;
	}

	.commentlistitem {
		display: flex;
		margin-bottom: 25px;
	}

	.nav_userlink {
		align-self: flex-start;
	}

	.view_comment {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 5px;
	}

	.comment_text {
		font-size: 13px;
		color: rgb(84, 84, 84);
		line-height: 1.5em;
		margin-bottom: 15px;
	}

	.comment_operate {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 5px;
	}
 

 

	.index_swiper {
		height: 340rpx;
	}

	.detaillikeswp {
		height: 10px;
	}

	.detaillikeswpitem {
		height: 20px;
		width: 60px;
		background: #1AAD19;
	}

 

 

	.index_header {
		justify-content: flex-start;
		min-height: 35px;
	}

	.text_more {
		font-size: 14px;
		color: #1AAD19;
	}

	.index_title {
		font-size: 16px;
		font-weight: 600;
	}

	.navigator_search {
		display: block;
		float: right;
	}

 
	 

	.post_thumb {
		width: 120px;
		height: 72px;
	}

	.view_section.movielist {
		height: 100%;
	}

 

 
 
	.view_sectionlist.movielist {
		height: 100%;
	}

	.view_catpost {
		/* width: 750rpx; */
		margin-left: 1px;
		height: 130rpx;
		overflow: hidden;
	}

	.image_cat_item_title {
		display: -webkit-box;
		font-size: 28rpx;
		height: 80rpx;
		line-height: 40rpx;
		word-break: break-all;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		font-weight: 400 !important;
		letter-spacing: 1px;
		overflow: hidden;
		text-overflow: ellipsis;
		padding-right: 60rpx;
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

	.item_list {
		width: auto;
		margin-right: 23rpx;
		display: inline-block;
		font-size: 30rpx;
		font-family: Helvetica Neue, Helvetica, sans-serif;
		font-weight: 550;
	}

	.item_rank_list {
		width: 250rpx;
		margin-right: 0rpx;
		display: inline-block;
		font-size: 30rpx;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		font-weight: 550;
		text-align: center;
	}
</style>
