<template>
	<view class="bg-white content flex align-center">
		<view class="bg-white  flex align-end" style="height: 35%;">
			<image src="../../../static/img/wx.png" class="shadow" style="height: 42px;width: 48px;" mode="aspectFit"></image>
		</view>
		<view class="text-center text-bold margin-top-sm">
			微信授权
		</view>
		<view class="text-gray padding-xl text-center  text-sm">
			为了给您提供更好的服务，需要您进行微信授权，系统将获取您的微信头像和昵称
		</view>
		<view class="margin-top-lg">
			<button class="bg-blue cu-btn shadow  round lg " open-type="getUserInfo" @getuserinfo="getUserInfo"><text class=" text-df">授权登录</text></button>
		</view>



	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		
		...mapMutations(['login','setUserHead','setSex']),...mapMutations(['login','setUserHead','setSex']),
		data() {
			return {

			}
		},
		methods: {
			...mapMutations(['login','setUserHead','setSex']),
			getUserInfo: function(e) {
				var userData;
				uni.showLoading();
			
				wx.login({
					
					success: (loginCode) => {
						let param = {
							code : loginCode.code
						}
						uni.getUserInfo({
							
							provider: 'weixin',
							success: (resInfo) => {
								userData = JSON.parse(resInfo.rawData);
								console.log(resInfo);
								var that = this ;
								uni.request({
									method: "POST",
									dataType: "JSON",
									url: this.websiteUrl+"/api/wx/appuser/"+this.appId+"/login",
									data: param,
									success: (res) => {
										console.log(res) //获取openid
										wx.setStorageSync('nickName', userData.nickName);
										wx.setStorageSync('userHead', userData.avatarUrl);
										wx.setStorageSync('sex', userData.gender);
										this.setSex(userData.gender);
										this.login(userData.nickName);
										this.setUserHead(userData.avatarUrl);
										wx.navigateBack();
									}
								});
							}
						});

					}
				})
				setTimeout(function() {
					uni.hideLoading();
				}, 500);
			},
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex: 1;
		flex-direction: column;

	}
</style>
