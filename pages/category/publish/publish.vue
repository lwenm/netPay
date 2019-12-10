<template>
	<view class="">
		<form>
			<view class="   bg-white   ">
				<view class="cu-form-group  solids-bottom  ">
					<input placeholder="请输入群名称/标题..." name="input"></input>
				</view>
				<view class="cu-form-group     " style="font-size: 12px;">
					<textarea class="margin-top" style="height: 80px;font-size: 13px;" placeholder="介绍一下你的群吧..." name="content"></textarea>
				</view>
				<view class="cu-form-group   ">
					<view class="title "><text class="cuIcon-phone text-orange " style="font-size: 16px;"></text>联系</view>
					<input style="font-size: 14px;" placeholder="手机号码/微信..." name="input"></input>
				</view>
			</view>

			<view class="cu-bar bg-white   solids-top ">
				<view class="action text-sm text-gray">
					图片
				</view>
				<view class="action">
					 
				</view>
			</view>
			<view class="bg-white      flex justify-around">

		 
				<view class="    " style="width:80px;">
					<view class="grid col-1 grid-square flex-sub" >
						<view class="bg-img"  v-if="mainPic!=null"  >
							<image :src="mainPic" mode="aspectFill"></image>
							<view class="cu-tag bg-red"  data-pid="mainPic"  @tap.stop="DelImg"  >
								<text class='cuIcon-close'></text>
							</view>
						</view>
						<view class="solid" @tap="ChooseImage" data-pid="mainPic" v-if="mainPic==null">
							<text class='cuIcon-cameraadd sm'></text>
						</view>
					</view>
				</view>
				<view class="    " style="width:80px;">
					<view class="grid col-1 grid-square flex-sub" >
						<view class="bg-img"  v-if="wxGroup!=null"  >
							<image :src="wxGroup" mode="aspectFill"></image>
							<view class="cu-tag bg-red" data-pid="wxGroup" @tap.stop="DelImg"  >
								<text class='cuIcon-close'></text>
							</view>
						</view>
						<view class="solid" @tap="ChooseImage" data-pid="wxGroup" v-if="wxGroup==null">
							<text class='cuIcon-cameraadd sm'></text>
						</view>
					</view>
				</view>
				<view class="   " style="width:80px;">
					<view class="grid col-1 grid-square flex-sub" >
						<view class="bg-img"  v-if="wxUser!=null"  >
							<image :src="wxUser" mode="aspectFill"></image>
							<view class="cu-tag bg-red" data-pid="wxUser"  @tap.stop="DelImg"  >
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
					主图
				</view>
				<view class="text-center" style="width: 78px; ">
					群二维码
				</view>
				<view class="text-center" style="width: 78px; ">
					群主二维码
				</view>
			</view>
			<view class="cu-bar bg-white solids-top    ">
				<view class="action text-sm text-gray">
					选择分类
				</view>
			</view>
			<view class="cu-bar  bg-white   ">
				<view class="margin-left-sm   margin-bottom-sm flex " style=" flex-wrap:wrap">
					<view class="margin-left-sm margin-top-sm text-center" v-for="(item,index) in ColorList" :key="index" v-if="item.name!='white'">
						<button class="cu-btn round sm" :class="[1==2?'lines-' + item.name:'line-' + item.name]">{{item.title}}</button>
					</view>
				</view>
			</view>
			<view class="  bg-white  flex justify-center  padding  solid-top  ">
				<view class="title margin-right margin-left-sm" style="font-size: 12px;">我已阅读并同意
					<text class=" text-blue">《平台用户服务协议》</text></view>
				<view class="" style="height: 2px;">
					<checkbox-group class=" " @change="CheckboxChange">
						<view class="">
							<checkbox class="round cb" :class="checkbox[0].checked?'checked':'' " :checked="checkbox[0].checked?true:false"
							 value="A"></checkbox>
						</view>
					</checkbox-group>
				</view>

			</view>

		</form>
		<view class="cu-bar bg-white padding-lr" style=" padding-bottom: 20px;">
			<button class="cu-btn bg-blue lg" style="width: 100%;">立即提交</button>
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
			DelImg(e) {
				var picId = e.currentTarget.dataset.pid;
				console.log(picId )
				uni.showModal({
					title: '提醒',
					content: '确定要删除这张图片吗？',
					cancelText: '再看看',
					confirmText: '确定',
					success: res => {
						if (picId == 'mainPic') {
							this.mainPic = null;
						}
						if (picId == 'wxGroup') {
							this.wxGroup = null;
						}
						if (picId == 'wxUser') {
							this.wxUser = null;
						}
					}
				})
				
				console.log(this.mainPic )
			}
		}
	}
</script>

<style>
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}

	.cb {
		transform: scale(0.6, 0.6);
	}

	.imgWH {

	/* 	width: 85px;
		height: 85px; */
	}
</style>
