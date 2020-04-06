<template>
	<view class="">
		<form>
			<view class="   bg-white   ">
				<view class="cu-form-group  solids-bottom margin-top ">
					<input placeholder="请输入标题..." name="input" v-model="title"> </input>
				</view>
				<view class="cu-form-group     " style="font-size: 12px;">
					<textarea class="margin-top" style="height: 80px;font-size: 13px;" placeholder="要发布的内容..." name="content" v-model="content"></textarea>
				</view>
				<!-- 				<view class="cu-form-group   ">
					<view class="title "><text class="cuIcon-phone text-orange " style="font-size: 16px;"></text>联系</view>
					<input style="font-size: 14px;" placeholder="+86" name="input"></input>
					<view class="cu-capsule radius ">
						<view class='cu-tag bg-blue '>
							+86
						</view>
						<view class="cu-tag line-blue">
							中国大陆
						</view>
					</view>
				</view> -->
				<!-- 				<view class="solid-top  " style="height: 3px;">

				</view> -->
			</view>

			<view class="cu-bar bg-white   solids-top ">
				<view class="action text-sm text-gray">
					图片
				</view>
				<view class="action">
					{{imgList.length}}/8
				</view>
			</view>
			<view class="cu-form-group solid-bottom ">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
						<image :src="imgList[index]" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="solid" @tap="ChooseImage" style=" " v-if="imgList.length<8">
						<text class='cuIcon-cameraadd sm'></text>
					</view>
				</view>
			</view>
			<view class="cu-bar bg-white solids-top    ">
				<view class="action text-sm text-gray">
					选择分类
				</view>
			</view>

			<view class="cu-bar  bg-white">
				<view class="margin-left-sm   margin-bottom-sm flex " style=" flex-wrap:wrap">
					<view class="margin-left-sm margin-top-sm text-center" v-for="(item,index) in categoryList" :key="index" :data-id="item.id"
					 @click="selectCategory">
						<button class="cu-btn round  " :class="[categoryId==item.id?'lines-' + item.typeColor:'line-' + item.typeColor]">{{item.typeName}}</button>
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
			<button class="cu-btn bg-blue lg" style="width: 100%;" @click="commitBlog">立即提交</button>
		</view>

		<view class="cu-modal" :class="showTips?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content"></view>
					<view class="action" @tap="hideTipsModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					标题，内容，分类为必填！
				</view>
			</view>
		</view>

	</view>


</template>

<script>
	export default {
		data() {
			return {
				showTips: false,
				imgList: [],
				tempList: [],
				content: "",
				title: "",
				imgFileCodeList: [],
				categoryList: [], //分类列表
				isReadAndagree: true,
				categoryId: -1,
				ColorList: this.ColorList,
				checkbox: [{
					value: 'A',
					checked: true
				}, {
					value: 'B',
					checked: true
				}, {
					value: 'C',
					checked: false
				}],
			}
		},
		onLoad() {

			var JSObject = JSObject;
			let params = {
				categoryId: 2,
			}
			uni.request({
				method: "POST",
				dataType: "JSON",
				data: params,
				url: this.websiteUrl + "/api/wxapp/blog/category",
				success: (res) => {
					this.categoryList = JSON.parse(res.data).data
					console.log(this.categoryList);
				}
			});

		},
		methods: {


			showTipsModal() {
				this.showTips = true;
			},
			hideTipsModal(e) {
				this.showTips = false;
			},
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

			commitBlog(e) {

				    console.log(this.title + "-----" + this.content),
					console.log(this.imgFileCodeList),
					console.log(this.categoryId);
					if (this.ti == "" || this.categoryId == -1 || this.content == "") 
					{
						this.showTipsModal();
						return;
					};
					let  paramData = {
						
						
						
					}
					uni.request({
						method: "POST",
						dataType: "JSON",
						data: params,
						url: this.websiteUrl + "/api/wxapp/blog/category",
						success: (res) => {
							this.categoryList = JSON.parse(res.data).data
							console.log(this.categoryList);
						}
					});

			},

			selectCategory(e) {

				this.categoryId = e.currentTarget.dataset.id;
				console.log(e.currentTarget.dataset.id);


			},

			ChooseImage() {
				var that = this;
				uni.chooseImage({
					count: 8, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						console.log(res);
						this.tempList = res.tempFilePaths;
						if (this.imgList.length != 0) {
							this.imgList = this.imgList.concat(res.tempFilePaths)
						} else {
							this.imgList = res.tempFilePaths
						}
						for (var i = 0; i < this.tempList.length; i++) {
							var imageSrc = this.tempList[i];
							uni.uploadFile({
								url: that.websiteUrl + '/api/common/file/upload',
								filePath: imageSrc,
								fileType: 'image',
								name: 'file',
								success: (res) => {
									console.log('uploadImage success, res is:', res)
									uni.showToast({
										title: '上传成功',
										icon: 'success',
										duration: 1000
									})
									var jsonData = JSON.parse(res.data);
									var code = jsonData.data;
									this.imgFileCodeList.push(code)
									console.log(this.imgFileCodeList)
								},
								fail: (err) => {
									console.log('uploadImage fail', err);
									uni.showModal({
										content: err.errMsg,
										showCancel: false
									});
								}
							});
						}

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
				uni.showModal({
					title: '召唤师',
					content: '确定要删除这段回忆吗？',
					cancelText: '再看看',
					confirmText: '再见',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1);
							this.imgFileCodeList.splice(e.currentTarget.dataset.index, 1);
							console.log(this.imgList)
							console.log(this.imgFileCodeList);
						}
					}
				})
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
</style>
