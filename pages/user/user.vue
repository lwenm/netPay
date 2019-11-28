<template>
	<view class="content">
		<view>
			<cu-custom bgImage="https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg">
			</cu-custom>
		</view>
			<view class="view_postlist_item" @click="toList" style="height: 170rpx">
			    <view class="view_catpost" >
			          <image class="image_cat_thumb"  mode="aspectFit" :src="[thumb[0].str_value]"/>
			        <text class="image_cat_item_title" >{{title}}</text>
			        <view style="margin-top: 10rpx;" >
			            <text class="list_text_view cuIcon-time margin-lr-xs " >{{posttime}}</text>        
			            <text class="list_text_view cuIcon-messagefill margin-lr-xs">{{commentsNum}}</text>             
			            <text class="list_text_view cuIcon-attentionfill margin-lr-xs">{{views}}</text>
			            <text class="list_text_view cuIcon-appreciatefill margin-lr-xs">{{likes}}</text>
			        </view>
			    </view>
			</view>
			
			<view class="comment-fixed">
			    <view class="comment-respond">
			        <view class="comment-box">
			            <input class="comment-input" type='text' bindinput="cminput" :value="cmtext" :placeholder="cmplaceholder" bindblur="cmloss" :focus="focus" bindfocus="cmfocus" />
			            <button class="comment-button touch-active" formType="submit" bindtap = "sendcm">发送</button>
			            <view class="cmview" bindtap="zanstart">
			                <image :src="zanimg" class="img-plus" mode="scaleToFill"></image>
			                <text class="cmicontext ">赞</text>
			            </view>
			            <button class="cmview" open-type="share" plain='true' type="primary"  style="border:none; margin-top:5rpx; margin-left:15rpx; padding:0px; width:auto; ">
			                <image src='../../static/img/resend.png' class="img-plus" mode="scaleToFill"></image>
			                <text class="cmicontext" style='margin-top:-12rpx;'>转发</text>
			            </button>
			            <view class="cmview" bindtap="share" >
			                <image src="../../static/img/share.png" class="img-plus" mode="scaleToFill"></image>
			                <text class="cmicontext">分享</text>
			            </view>
			        </view>
			    </view>
			    </view>
 
		</view>

			
	</view>
</template>

<script>
import { mapState } from 'vuex';

export default {
	data() {
		return {
			    zannum: 0,
			item: [],
			vcomment: [],
			commentlist: [],
			thispath: 'pages/detail/detail',
			cid: 0,
			hiddenmodalput: true,
			zanimg: '../../static/img/zanoff.png',
			replaycoid: '',
			replaycontent: '',
			likelist: [],
			createdtime: '1分钟前',
			replytxt: '说点什么吧...',
			cmplaceholder: '说点什么吧...',
			focus: false,
			cmtext: '',
			replyauthor: true,
			qrcode_temp: '',
			posttime:'2019-06-07 08:18',
			cid: '119',
			title: '冰点还原精灵永久激活版(支持WIN10) 免费版冰点还原精灵永久激活版(支持WIN10) 免费版冰点还原精灵永久激活版(支持WIN10) 免费版冰点还原精灵永久激活版(支持WIN10) 免费版',
			created: '1559817180',
			commentsNum: '2',
			views: '151',
			likes: '1',
			thumb: [
				{
					str_value: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}
			]
			
			 
		};
	},
	computed: mapState(['forcedLogin', 'hasLogin', 'userName']),

	methods: {
		toList: function(e){
			
			uni.navigateTo({
				url: '../blog/list/list',
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
			
		}
/* 		// DotStyle(e) {
		// 	this.dotStyle = e.detail.value;
		// },
		// // cardSwiper
		// cardSwiper(e) {
		// 	this.cardCur = e.detail.current;
		// },
		// // towerSwiper
		// // 初始化towerSwiper
		// TowerSwiper(name) {
		// 	let list = this[name];
		// 	for (let i = 0; i < list.length; i++) {
		// 		list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2));
		// 		list[i].mLeft = i - parseInt(list.length / 2);
		// 	}
		// 	this.swiperList = list;
		// },

		// // towerSwiper触摸开始
		// TowerStart(e) {
		// 	this.towerStart = e.touches[0].pageX;
		// },

		// // towerSwiper计算方向
		// TowerMove(e) {
		// 	this.direction = e.touches[0].pageX - this.towerStart > 0 ? 'right' : 'left';
		// }, */

 
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

.ul > view {
	line-height: 50upx;
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
.UCenter-bg .gif-wave{
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 99;
  mix-blend-mode: screen;  
  height: 100rpx;   
}
map,.mapBox{
  left: 0;
  z-index: 99;
  mix-blend-mode: screen;  
  height: 100rpx;   
}
map,.mapBox{
  width: 750rpx;
  height: 300rpx;
}
/*公告CSS*/
.Gonggao{
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
.meiDate{
  margin: 0 0 10px 10px;
}

.item_list{
  width: auto;
  margin-right: 23rpx;
  display: inline-block;
  font-size: 30rpx;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 550;
}

.active{
  font-size: 34rpx;
  padding-bottom: 12rpx;
  border-bottom: 6rpx solid rgb(167, 1, 1);
  background: #fff;
  color: rgb(167, 1, 1);
}
@import "colorui/main.wxss";
@import "colorui/icon.wxss";
/* 基础样式 */
view,
scroll-view,
swiper,
swiper-item,
icon,
text,
progress,
button,
checkbox-group,
checkbox,
form,
input,
label,
picker,
radio-group,
radio,
slider,
switch,
action-sheet,
action-sheet-item,
action-sheet-cancel,
modal,
toast,
loading,
navigator,
audio,
image,
video,
map,
canvas {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
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

.detail_like_btn {
  border-radius: 50%;
  width: 70px;
  align-self: flex-end;
  order: 1;
  display: flex;
  height: 70px;
  background-color: rgb(255, 255, 255);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100;
  float: right;
  box-shadow: 0px 0px 3px 3px rgba(171, 171, 171, 0.8);
  -ms-box-shadow: 0px 0px 3px 3px rgba(171, 171, 171, 0.8);
  -o-box-shadow: 0px 0px 3px 3px rgba(171, 171, 171, 0.8);
  -moz-box-shadow: 0px 0px 3px 3px rgba(171, 171, 171, 0.8);
  -webkit-box-shadow: 0px 0px 3px 3px rgba(171, 171, 171, 0.8);
}

.text_title {
  margin-right: 100px;
  font-size: 24px;
  font-family: Helvetica Neue, Helvetica, sans-serif;
  font-weight: 600;
  margin-bottom: 10px;
  border-left-width: 8rpx;
  border-left-style: solid;
  border-left-color: #a70101;
  padding-left: 20rpx;
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

.commentlikebtn {
  width: 14px;
  height: 14px;
}

.commentreplybtn {
  width: 16px;
  height: 16px;
}

.listitem_creattime {
  font-size: 12px;
  color: rgb(186, 186, 186);
  margin-right: 2px;
}

.text_section_title {
  font-weight: 600;
  margin-bottom: 20px;
  padding-left: 20rpx;
  border-left-width: 8rpx;
  border-left-style: solid;
  border-left-color: #a70101;
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
.post_title {
  margin-top: 10px;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  align-self: flex-start;
  width: 100%;
  padding-left: 10px;
  padding-top: 10px;
  color: rgb(66, 66, 66);
}
.navigator_item {
  height: calc(100% - 30rpx);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: rgb(122, 122, 122);
  background-position: 50% 0%;
  margin: 15rpx 0rpx 15rpx 20rpx;
  border-radius: 10rpx;
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
.view_section.section_movies {
  padding-right: 0px;
}
.text_more.margin-right {
  margin-right: 20px;
}
.post_view {
  display: flex;
  padding-right: 10px;
  justify-content: flex-start;
  flex-flow: row nowrap;
}
.post_title_sub {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
}
.post_thumb {
  width: 120px;
  height: 72px;
}
.view_section.movielist {
  height: 100%;
}
.view_postlist_item {
  padding: 10px;
  border-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: rgb(153, 153, 153);
  border-bottom-style: none;
  border-top-style: none;
  border-right-style: none;
  border-left-style: none;
}
.stat_list_item {
  padding: 8px;
  border-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: rgb(196, 196, 196);
  border-top-style: none;
  border-right-style: none;
  border-left-style: none;
}
.image_cat_thumb {
width:188rpx;
height:125rpx;
float:left;
margin-right:20rpx;
-webkit-border-radius:32rpx;
border-radius:22rpx;
border-width:3rpx;
border-color:#d1d1d1;
-webkit-box-shadow:0 0 6px rgba(30, 20, 20, 0.1);
box-shadow:0 0 6px rgba(30, 20, 20, 0.1);

}
.image_cat_box {
  margin-top: 15rpx;
  width: 66rpx;
  height: 100rpx;
  float: left;
}
.rank_cat_box {
  margin-top: 35rpx;
  width: 66rpx;
  height: 100rpx;
  float: left;
  font-size: 48rpx;
  text-align: center;
  color: #636262;
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
  -webkit-line-clamp:2;
  font-weight: 400 !important;
  letter-spacing: 1px;
  overflow: hidden;
  text-overflow:ellipsis;
  padding-right: 60rpx;
}
.nav_postlist_item {
  border-style: none none solid;
  border-bottom-width: 0px;
  border-bottom-color: rgba(170, 170, 170, 1);
}
.nav_cat_item {
  height: auto;
  border-radius: 30rpx;
  font-size: 26rpx;
  color: #ffffff;
  font-weight: 500rpx;
  width: auto;
  padding: 5rpx 10rpx;
  line-height: 22px; /*垂直居中*/
  text-align: center;
}
.list_img_view {
  width: 24rpx;
  height: 24rpx;
  margin-left: 20rpx;
  vertical-align: middle;
}
.listpg_first_img {
  width: 24rpx;
  height: 24rpx;
  margin-left: 0rpx;
  vertical-align: middle;
}
.list_text_view {
  color: #959595;
  margin-left: 5rpx;
  font-size: 22rpx;
  line-height: 1.0;
  font-weight: normal;
  text-align: center;
}
.replay_view {
  background: #f7f7f7;
  padding: 10rpx;
  margin-right: 20rpx;
}
.replay_text {
  display: flex;
  align-items: center;
  font-size: 26rpx;
  font-weight: normal;
  outline: none;
  color: #000000;
  margin: 0rpx 0;
  margin-left: 20rpx;
}
.classify {
  display: flex;
  position: relative;
}
.classify .classify_catetory {
  width: 200rpx;
  position: relative;
  z-index: 1;
  border-right:  rgba(170, 170, 170, 1);
  border-right-style: solid;
  border-right-width: 2rpx;
}
.classify .classify_catetory .name {
  text-align: center;
  height: 100rpx;
  line-height: 100rpx;
  font-size: 28rpx;
  color: #666;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.scroll_box{
  width: 100%;
  overflow: hidden;
  padding: 30rpx 10rpx 20rpx;
  background: #fff;
  }
.scroll_box .scroll-view_x {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  border: 0 solid #ffffff;
  }
.item_list{
  width: auto;
  margin-right: 23rpx;
  display: inline-block;
  font-size: 30rpx;
  font-family: Helvetica Neue, Helvetica, sans-serif;
  font-weight: 550;
}
.item_rank_list{
  width: 250rpx;
  margin-right: 0rpx;
  display: inline-block;
  font-size: 30rpx;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 550;
  text-align: center;
}
.active{
  font-size: 34rpx;
  padding-bottom: 12rpx;
  border-bottom: 6rpx solid rgb(167, 1, 1);
  background: #fff;
  color: rgb(167, 1, 1);
}
.classify .classify_catetory .active {
  border-left: 6rpx solid #ff6a3c;
  background: #fff;
  color: #ff6a3c;
}
@import "colorui/main.wxss";
@import "colorui/icon.wxss";
/* 基础样式 */
view,
scroll-view,
swiper,
swiper-item,
icon,
text,
progress,
button,
checkbox-group,
checkbox,
form,
input,
label,
picker,
radio-group,
radio,
slider,
switch,
action-sheet,
action-sheet-item,
action-sheet-cancel,
modal,
toast,
loading,
navigator,
audio,
image,
video,
map,
canvas {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
page {
  height: 100%;
  font-family: -apple-system-font, Helvetica Neue, Helvetica, sans-serif;
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

.detail_like_btn {
  border-radius: 50%;
  width: 70px;
  align-self: flex-end;
  order: 1;
  display: flex;
  height: 70px;
  background-color: rgb(255, 255, 255);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100;
  float: right;
  box-shadow: 0px 0px 3px 3px rgba(171, 171, 171, 0.8);
  -ms-box-shadow: 0px 0px 3px 3px rgba(171, 171, 171, 0.8);
  -o-box-shadow: 0px 0px 3px 3px rgba(171, 171, 171, 0.8);
  -moz-box-shadow: 0px 0px 3px 3px rgba(171, 171, 171, 0.8);
  -webkit-box-shadow: 0px 0px 3px 3px rgba(171, 171, 171, 0.8);
}

.text_title {
  margin-right: 100px;
  font-size: 24px;
  font-family: "andale mono";
  font-weight: 600;
  margin-bottom: 10px;
  border-left-width: 8rpx;
  border-left-style: solid;
  border-left-color: #a70101;
  padding-left: 20rpx;
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

.commentlikebtn {
  width: 14px;
  height: 14px;
}

.commentreplybtn {
  width: 16px;
  height: 16px;
}

.listitem_creattime {
  font-size: 12px;
  color: rgb(186, 186, 186);
  margin-right: 2px;
}

.text_section_title {
  font-weight: 600;
  margin-bottom: 20px;
  padding-left: 20rpx;
  border-left-width: 8rpx;
  border-left-style: solid;
  border-left-color: #a70101;
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
.post_title {
  margin-top: 10px;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  align-self: flex-start;
  width: 100%;
  padding-left: 10px;
  padding-top: 10px;
  color: rgb(66, 66, 66);
}
.navigator_item {
  height: calc(100% - 30rpx);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: rgb(122, 122, 122);
  background-position: 50% 0%;
  margin: 15rpx 0rpx 15rpx 20rpx;
  border-radius: 10rpx;
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
.view_section.section_movies {
  padding-right: 0px;
}
.text_more.margin-right {
  margin-right: 20px;
}
.post_view {
  display: flex;
  padding-right: 10px;
  justify-content: flex-start;
  flex-flow: row nowrap;
}
.post_title_sub {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
}
.post_thumb {
  width: 120px;
  height: 72px;
}
.view_section.movielist {
  height: 100%;
}
.view_postlist_item {
  padding: 10px;
  border-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: rgb(153, 153, 153);
  border-bottom-style: none;
  border-top-style: none;
  border-right-style: none;
  border-left-style: none;
}
.stat_list_item {
  padding: 8px;
  border-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: rgb(196, 196, 196);
  border-top-style: none;
  border-right-style: none;
  border-left-style: none;
}
.image_cat_thumb {
width: 145rpx;
height: 130rpx;
float: left;
margin-right: 20rpx;
border-radius: 10rpx;
border-width: 2rpx;
border-color: #d1d1d1;
box-shadow: 0 0 6px rgba(30, 20, 20, 0.1);
}
.image_cat_box {
  margin-top: 15rpx;
  width: 66rpx;
  height: 100rpx;
  float: left;
}
.rank_cat_box {
  margin-top: 35rpx;
  width: 66rpx;
  height: 100rpx;
  float: left;
  font-size: 48rpx;
  text-align: center;
  color: #636262;
}
.view_sectionlist.movielist {
  height: 100%;
}
.view_catpost {
  width: 750rpx;
  margin-left: 1px;
  height: 130rpx;
  overflow: hidden;
}
.image_cat_item_title {
  display: -webkit-box;
  font-size: 30rpx;
  height: 80rpx;
  line-height: 40rpx;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp:2;
  font-weight: 400 !important;
  letter-spacing: 1px;
  overflow: hidden;
  text-overflow:ellipsis;
  padding-right: 60rpx;
}
.nav_postlist_item {
  border-style: none none solid;
  border-bottom-width: 0px;
  border-bottom-color: rgba(170, 170, 170, 1);
}
.nav_cat_item {
  height: auto;
  border-radius: 30rpx;
  font-size: 26rpx;
  color: #ffffff;
  font-weight: 500rpx;
  width: auto;
  padding: 5rpx 10rpx;
  line-height: 22px; /*垂直居中*/
  text-align: center;
}
.list_img_view {
  width: 24rpx;
  height: 24rpx;
  margin-left: 20rpx;
  vertical-align: middle;
}
.listpg_first_img {
  width: 24rpx;
  height: 24rpx;
  margin-left: 0rpx;
  vertical-align: middle;
}
.list_text_view {
  color: #959595;
  margin-left: 5rpx;
  font-size: 22rpx;
  line-height: 1.0;
  font-weight: normal;
  text-align: center;
}
.replay_view {
  background: #f7f7f7;
  padding: 10rpx;
  margin-right: 20rpx;
}
.replay_text {
  display: flex;
  align-items: center;
  font-size: 26rpx;
  font-weight: normal;
  outline: none;
  color: #000000;
  margin: 0rpx 0;
  margin-left: 20rpx;
}
.classify {
  display: flex;
  position: relative;
}
.classify .classify_catetory {
  width: 200rpx;
  position: relative;
  z-index: 1;
  border-right:  rgba(170, 170, 170, 1);
  border-right-style: solid;
  border-right-width: 2rpx;
}
.classify .classify_catetory .name {
  text-align: center;
  height: 100rpx;
  line-height: 100rpx;
  font-size: 28rpx;
  color: #666;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.scroll_box{
  width: 100%;
  overflow: hidden;
  padding: 30rpx 10rpx 20rpx;
  background: #fff;
  }
.scroll_box .scroll-view_x {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  border: 0 solid #ffffff;
  }
.item_list{
  width: auto;
  margin-right: 23rpx;
  display: inline-block;
  font-size: 30rpx;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 550;
}
.item_rank_list{
  width: 250rpx;
  margin-right: 0rpx;
  display: inline-block;
  font-size: 30rpx;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 550;
  text-align: center;
}
.active{
  font-size: 34rpx;
  padding-bottom: 12rpx;
  border-bottom: 6rpx solid rgb(167, 1, 1);
  background: #fff;
  color: rgb(167, 1, 1);
}
.classify .classify_catetory .active {
  border-left: 6rpx solid #ff6a3c;
  background: #fff;
  color: #ff6a3c;
}
.classify .classify_detail {
  position: relative;
  /* z-index: 999; */
  background: #fff;
  padding: 3rpx;
  padding-bottom: 50rpx;
}
.classify .classify_detail .title {
  font-size: 30rpx;
  color: #333;
  margin-left: 25rpx;
}
.classify .classify_detail .children {
  display: flex;
  flex-wrap: wrap;
  margin: 0rpx 0rpx;
}
.classify .classify_detail .child_image {
  width: 60px;
  height: 60px;
}
.classify .classify_detail .child_name {
  font-size: 36rpx;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 400rpx;
}
.classify .classify_detail .children_item {
  height: 100rpx;
  width: 400rpx;
  text-align: left;
}
.footerview {
  padding-top: 30rpx;
  padding-bottom: 30rpx;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 24rpx;
  font-family: Microsoft YaHei;
  color: #999999;
}
.footerviewwebsite {
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 24rpx;
  font-family: Microsoft YaHei;
  color: #999999;
}
.detaillikeview {
  text-align: left;
  line-height: 30rpx;
  color: #0000fe !important;
  margin: 20rpx 0 20rpx;
}
.detaillikeimg {
  border-radius: 50%;
  height: 70rpx;
  width: 70rpx;
}
.top_search {
  padding: 20rpx 0rpx;
  background: #fff;
}
.search_read_only {
  align-items: center;
  display: flex;
  margin: 0 auto;
  width: 95%;
}
.search_read_only .search_content {
  display: flex;
  align-items: center;
  border-top-right-radius: 100rpx;
  border-bottom-right-radius: 100rpx;
  color: rgb(53, 53, 53);
  background: #efefef;
  padding: 0 2rpx;
  height: 55rpx;
  margin: 0 auto;
  font-size: 26rpx;
  width: 100%;
}
.search_icon {
  background: #EFEFEF;
  height: 55rpx;
  width: 55rpx;
  border-top-left-radius: 100rpx;
  border-bottom-left-radius: 100rpx;
}
.search_read_only .search_content .search_input {
  font-size: 26rpx;
  width: 100%;
}
.cut_text {
  display: -webkit-box;
  -webkit-line-clamp:2;
  overflow: hidden;
  white-space: nowrap;
  text-overflow:ellipsis;
}
.comment-fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0 0 6px rgba(30, 20, 20, 0.1);
  z-index: 100;
  /*margin-bottom:2rpx; */
}
.comment-respond {
  margin-top: 2rpx;
}
.comment-input {
  background-color: #f5f7f7;
  margin-top: 12rpx;
  margin-left: 12rpx;
  padding: 2rpx 3rpx 2rpx 10rpx;
  padding-left: 24rpx;
  font-size: 14px;
  height: 60rpx;
  width: 300rpx;
  text-align: left;
  /* border: 1px solid #296fd0; */
  border-radius: 20px;
}
.comment-box {
  padding: 8rpx 4rpx;
  display: flex;
  justify-content: center;
}
.comment-button {
  width: 140rpx;
  margin-top: 12rpx;
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  height: 60rpx;
  border-radius: 20px;
  text-align: center;
  padding: 0 2px !important;
  font-size: 14px;
  background-color: rgb(3, 173, 0);
  color: #ffffff;
}
.img-plus {
  width: 48rpx !important;
  height: 48rpx !important;
}
.cmview {
display: flex;
flex-direction: column;
font-size: 24rpx;
align-items: center;
width: 78rpx;
}
.cmicontext {
  margin-top: 5rpx;
  font-size: 24rpx;
  color: rgb(114, 114, 114);
  align-content: left;
}
.canvas-box{
  width: 100%;
  position: fixed;
  left: 0;
  top: 999999rpx;
}
.share-image {
  width: 600rpx;
  height: 888rpx;
  margin: 0 75rpx;
  border: 1px solid black;
}
.sharetext {
  margin-top: 36rpx;
  width: 100%;
  max-height: 100rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36rpx;
  color: rgb(173, 25, 25);
}
.sharebtn {
  width: 48rpx !important;
  height: 48rpx !important;
  border: none !important;
}
.table {
  border: 5px solid rebeccapurple;
  border-right: 0;
  border-bottom: 0;
  width: 100%;
}
.tr {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.th, .td {
  padding: 10px;
  border-bottom: 1px solid #dadada;
  border-right: 1px solid #dadada;
  text-align: center;
  width: 100%;
}
.th {
  font-weight: 400;
  background-color: #dadada;
}

</style>
