<template>
	<view>

		<view class="share-popup">
			
			<view class="button-view">
				<button class="text-img" open-type="share">
					<view class="buttom-view">
						<image class="share-img" src="../static/icos/share.png" mode="" style="box-sizing: initial;"></image>
						<view class="text"> </view>
					</view>
				</button>
				<button class="text-img" @click="goTop" >
					<view class="buttom-view" >
						<image class="share-img" src="../static/icos/top.png" mode="" style="box-sizing: initial;"></image>
						<view class="text"></view>
					</view>
				</button>
<!-- 				<button class="text-img" open-type="contact">
					<view class="buttom-view">
						<image class="share-img" src="../static/icos/service.png" mode="" style="box-sizing: initial;"></image>
						<view class="text"></view>
					</view>
				</button> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "share",
		data() {
			return {

			};
		},
		methods:{
			goTop(){
				     uni.pageScrollTo({
				        scrollTop: 0
				      })
			}
		}
	}
</script>

<style scoped>
	.button-view{
		position: fixed;
		z-index: 999;
		bottom: 30upx;
		right: 10upx;
	}
	.share-popup {
		position: fixed;
		z-index: 999;
		display: flex;
		flex-direction: column;
	}

	.text-img {
		height: 60upx;
		background-color: #fff;
		font-size: 28upx;
		margin-bottom: 30upx;
		box-shadow: 0upx 0upx 6upx #E0E0E0;
		padding-left: 0upx;
		padding-right: 0upx;

	}

	.buttom-view {
		display: flex;
		justify-content: center;
		align-content: center;
		flex-direction: row;
	}

	.share-img {
		width: 50upx;
		height: 50upx;
		padding: 7upx;
	}

	.text {
		height: 60upx;
		line-height: 30upx;
	}
</style>
