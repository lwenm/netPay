<template>
	<view style="width: 100%;height: 100%;"> 
 
		<view class="  dynamic"     :class=" no-card"  >
			<view class="cu-item  ">
				<view class="padding menu-avatar flex justify-between align-center ">
					<view class=" flex justify-start align-center ">
						<view class="cu-avatar round xl " style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg);">
							<view class="cu-tag badge" :class="1==1?'cuIcon-female bg-pink':'cuIcon-male bg-blue'"></view>
						</view>
						<view class="content flex-sub margin-lr-xs ">
							<view class="  text-mauve">凯尔-艾欧尼亚</view>
							<view class="text-white   text-sm   ">
								<!-- <view class='m-icon-person cu-tag radius light bg-orange'>未认证</view> -->
								<view class='cu-tag radius   light bg-cyan' @click="toLogin" >未认证</view>
							</view>
						</view>
					</view>
					<view class="  text-lg lg  margin-right-xs">
						<text class="cuIcon-settingsfill text-lg lg text-orange  "></text>
					</view>
				</view>
			</view>
		</view>
		
		<view class="cu-list grid card-menu shadow-lg" :class="['col-4',gridBorder?'':'no-border']" >
			<view class="cu-item" v-for="(item,index) in cuIconList" :key="index" v-if="index<gridCol*2">
				<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]" style="line-height: 1.4;">
					<view class="cu-tag badge" v-if="item.badge!=0"  >
						
					</view>
				</view>
				<text>{{item.name}}</text>
			</view>
		</view>
		
		<view class="cu-list menu shadow-lg  " :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']" style="margin-bottom: 30rpx;">
			
			<view class="cu-item" :class="menuArrow?'arrow':''">
				<view class="">
					<text class="cuIcon-circlefill text-grey"></text>
					<text class="text-grey margin-left-sm">我的发布</text>
				</view>
			</view>
			
			<view class="cu-item" :class="menuArrow?'arrow':''">
				<view class=" "  >
					<text class="cuIcon-btn text-olive"></text>
					<text class="text-grey margin-left-sm">点赞评论</text>
				</view>
			</view>
			<view class="cu-item" :class="menuArrow?'arrow':''">
				<view class=" " hover-class="none"   open-type="redirect">
					<text class="cuIcon-discoverfill text-orange"></text>
					<text class="text-grey margin-left-sm">我的收藏</text>
				</view>
			</view>
			<view class="cu-item" :class="menuArrow?'arrow':''">
				<view class="">
					<text class="cuIcon-circlefill text-grey"></text>
					<text class="text-grey margin-left-sm">联系客服</text>
				</view>
			</view>
			<view class="cu-item" :class="menuArrow?'arrow':''">
				<view class=" ">
					<text class="cuIcon-emojiflashfill text-pink"></text>
					<text class="text-grey margin-left-sm">粉丝</text>
				</view>
				<view class="action">
					<view class="cu-avatar-group">
						<view class="cu-avatar round sm" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
						<view class="cu-avatar round sm" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg);"></view>
						<view class="cu-avatar round sm" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg);"></view>
						<view class="cu-avatar round sm" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg);"></view>
					</view>
					<text class="text-grey text-sm">4 人</text>
				</view>
			</view>
 
			<view class="cu-item" :class="menuArrow?'arrow':''">
				<view class=" ">
					<text class="cuIcon-tagfill text-red  margin-right-xs"></text>
					<text class="text-grey margin-left-sm">小程序定制</text>
				</view>
				<view class="action">
					<view class="cu-tag round bg-orange light">音乐</view>
					<view class="cu-tag round bg-olive light">电影</view>
					<view class="cu-tag round bg-blue light">旅行</view>
				</view>
			</view>
 
			<view class="cu-item">
				<view class="  padding-tb-sm">
					<view>
						<text class="cuIcon-clothesfill text-blue margin-right-xs"></text>关于</view>
				</view>
				<view class="action">
					<switch class="switch-sex" @change="SwitchSex" :class="skin?'checked':''" :checked="skin?true:false"></switch>
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
				],
				cuIconList: [ {
					cuIcon: 'discoverfill',
					color: 'purple',
					badge: 0,
					name: '人气'
				}, {
					cuIcon: 'questionfill',
					color: 'mauve',
					badge: 0,
					name: '点赞'
				}, {
					cuIcon: 'commandfill',
					color: 'purple',
					badge: 0,
					name: '私信'
				}, {
					cuIcon: 'servicefill',
					color: 'mauve',
					badge: 0,
					name: '我的关注'
				}],
				modalName: null,
				gridCol: 3,
				gridBorder: false,
				menuBorder: true,
				menuArrow: true,
				menuCard: true,
				skin: false,
				listTouchStart: 0,
				listTouchDirection: null,
			};
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
					url: '../detail/detail',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});

			},
			
			toLogin: function() {
				uni.navigateTo({
					url: '../login/login',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}

		}
	}
</script>

<style>
/* 隐藏滚动条 */
::-webkit-scrollbar{
width: 0;
height: 0;
color: transparent;
}
</style>
