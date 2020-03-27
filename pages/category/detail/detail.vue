<template>
	<view class="" style="width: 100%;">
		<view>
			<view class="   bg-white   "  >
				<view class="cu-form-group  solids-bottom  ">
					<input placeholder="请输入群名称/标题..." name="input"></input>
				</view>
				<view class="cu-form-group     " style="font-size: 12px;">
					<textarea class="margin-top" style="height: 80px;font-size: 13px;" placeholder="介绍一下你的群吧..." name="content"></textarea>
				</view>
				<view class="cu-form-group   ">
					<view class="title "><text class="cuIcon-phone text-orange " style="font-size: 16px;"></text>联系</view>
					<text style="font-size: 14px; " class="text-right"    >13223123412</text>
				</view>
			</view>
			<view class="cu-bar  bg-white   solids-top ">
				<view class="action text-sm text-gray">
					图片
				</view>
			</view>
			<view class="bg-white  flex justify-around">
				<view class="" style="width:80px;">
					<view class="grid col-1 grid-square flex-sub">
						<view class="bg-img" v-if="wxGroup!=null">
							<image :src="wxGroup" mode="aspectFill"></image>
							<view class="cu-tag bg-red" data-pid="wxGroup" @tap.stop="DelImg">
								<text class='cuIcon-close'></text>
							</view>
						</view>
						<view class="solid" @tap="ChooseImage" data-pid="wxGroup" v-if="wxGroup==null">
							<text class='cuIcon-cameraadd sm'></text>
						</view>
					</view>
				</view>
				<view class="" style="width:80px;">
					<view class="grid col-1 grid-square flex-sub">
						<view class="bg-img" v-if="wxUser!=null">
							<image :src="wxUser" mode="aspectFill"></image>
							<view class="cu-tag bg-red" data-pid="wxUser" @tap.stop="DelImg">
								<text class='cuIcon-close'></text>
							</view>
						</view>
						<view class="solid" @tap="ChooseImage" data-pid="wxUser" v-if="wxUser==null">
							<text class='cuIcon-cameraadd sm'></text>
						</view>
					</view>
				</view>
			</view>
			<view class="bg-white padding-bottom-sm solid-bottom flex justify-around  align-center">

				<view class="text-center" style="width: 78px; ">
					群二维码
				</view>
				<view class="text-center" style="width: 78px; ">
					群主二维码
				</view>
			</view>
			<view class="  bg-white  flex justify-center  padding  solid-top  ">
	 
			</view>
			<view class="cu-bar bg-white padding-lr" style=" padding-bottom: 20px;">
				<!-- <button class="cu-btn bg-blue lg" style="width: 100%;">立即提交</button> -->
			</view>
		</view>

	</view>


</template>

<script>
	export default {
		data() {
			return {
				imgList: [],
				isReadAndagree: true,
				ColorList: this.ColorList,
				checkbox: [{
					value: 'A',
					checked: true
				}],

				mainPic: null,
				wxGroup: null,
				wxUser: null
			}
		},
		methods: {

			CheckboxChange(e) {
				var items = this.checkbox,
					values = e.detail.value;
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					items[i].checked = false;
					for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
						if (items[i].value == values[j]) {
							items[i].checked = true;
							break
						}
					}
				}
			},

			ChooseImage(e) {
				console.log(e.currentTarget.dataset.pid)
				var picId = e.currentTarget.dataset.pid;
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						if (picId == 'mainPic') {
							this.mainPic = res.tempFilePaths[0];
						}
						if (picId == 'wxGroup') {
							this.wxGroup = res.tempFilePaths[0];
						}
						if (picId == 'wxUser') {
							this.wxUser = res.tempFilePaths[0];
						}

						// console.log(this.{"main"})
						// if (this.imgList.length != 0) {
						// 	this.imgList = this.imgList.concat(res.tempFilePaths)
						// } else {
						// 	this.imgList = res.tempFilePaths
						// }
					}
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			 
		}
	}
</script>

<style>
 

 
</style>
