<template>
	<view class="bg-white">
		<view class="padding     light">
			<view class=" bg-blue padding-sm  radius light " style="font-size: 13px;">
				<text class="text-gray">免责申明：平台发布的所有信息只负责发布，展示，与平台本身无法，平台不负任何责任。</text>
			</view>
		</view>
		
		<view class="padding" @click="toPuhlishWxBlog">
			<view class="flex justify-center padding  shadow shadow-lg text-bold  bg-blue radius align-center" style="width: 100%; height:80px; margin-top: 110px;">
				<view class="flex  justify-center">
					<view>微圈发布</view>
				</view>
			</view>
		</view>
		<view class="padding" @click="toPuhlishWxGroup">
			<view class="flex justify-center padding  shadow shadow-lg text-bold  bg-blue radius align-center" style="width: 100%; height:80px; ">
				<view class="flex  justify-center">
					<view>微群发布</view>
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
				
				toPuhlishWxBlog(){
				console.log("------------------")
				uni.navigateTo({
					url: '../../blog/publish/publish',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});

			},

				toPuhlishWxGroup(){
				console.log("------------------")
				uni.navigateTo({
					url: '../../category/publish/publish',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});

			}

		}
	}
</script>

<style>

</style>
