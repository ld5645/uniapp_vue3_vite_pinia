<template>
	<view class="test">11111</view>
</template>

<script lang="ts" setup>
</script>

<style scoped>
	.test {
		background: red;
		width: 100%;
		height: 112rpx;
		/* app适应状态栏高度 */
		/* #ifdef APP-PLUS */
		height: calc(112rpx + var(--status-bar-height));
		/* #endif */
	}
</style>