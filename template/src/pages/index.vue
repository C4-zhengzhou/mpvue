<template lang="pug">
.void
  .card
    p C4-mpvue
    p 更优雅的起手式
    p 微信小程序快速开发脚手架
    p Powered by code4ever.cn
  .section
    button(@click="bindViewTap") jump to log
    .info mpvue-router-patch
  .section
    button(@click="showToast=true") show toast
    .info mpvue-toast
  .section.center
    AnimatedNumber(:value="animatedNumberData.value" :precision="2")
    .info @gaomd/mpvue-animated-number
  .section
    button(@click="showPicker") show mpvuePicker
    .info mpvue-picker
    mpvue-picker(:mode="pickerData.mode" ref="mpvuePicker" :pickerValueDefault="pickerData.pickerValueDefault" @onChange="onChange" @onConfirm="onConfirm" @onCancel="onCancel" :pickerValueArray="pickerData.pickerValueArray")
  toast(message="hello from toast" :visible.sync="showToast")

</template>

<script>
import toast from "mpvue-toast";
import mpvuePicker from "mpvue-picker";
import AnimatedNumber from "@gaomd/mpvue-animated-number";
export default {
	mpType: "page",
	components: { toast, mpvuePicker, AnimatedNumber },
	data() {
		return {
			showToast: false,
			pickerData: {
				mode: "selector",
				pickerValueArray: [
					{
						label: "住宿费",
						value: "test1"
					},
					{
						label: "活动费",
						value: 2
					},
					{
						label: "通讯费",
						value: 3
					},
					{
						label: "补助",
						value: 4
					}
				],
				pickerValueDefault: []
			},
			animatedNumberData: {
				value: 2019
			}
		};
	},
	methods: {
		bindViewTap() {
			this.$router.push("/packageA/logs");
		},
		showPicker() {
			this.$refs.mpvuePicker.show();
		},
		onConfirm(e) {
			console.log(e);
		},
		onChange(e) {
			console.log(e);
		},
		onCancel(e) {
			console.log(e);
		}
	},
	created() {}
};
</script>
<style lang="less" scoped>
.card {
	padding: 50px 20px;
	background: @primary;
	color: @white;
}
.section {
  padding: 20px;
  .border-bottom;
	.info {
		.size(12px);
		.color();
		text-align: right;
		&:before {
			content: "Povide by ";
			display: inline;
		}
	}
}
</style>
