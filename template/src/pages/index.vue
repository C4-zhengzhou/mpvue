<template lang="pug">
.void
  .card
    p this is pug and less page
  .card
    button(@click="bindViewTap") jump to log
</template>

<script>
export default {
	mpType: "page",
	components: {},
	data() {
		return {};
	},
	methods: {
		bindViewTap() {
			this.$router.push("/packageA/logs");
		}
	},
	created() {}
};
</script>
<style lang="less" scoped>
.void {
	.card {
		padding: 20px;
		background: @primary;
		color: @white;
	}
}
</style>
