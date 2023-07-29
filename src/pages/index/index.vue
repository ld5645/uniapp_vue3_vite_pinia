<template>
	<view>{{ userStore.userInfo }}</view>
	<button @click="save()">存储</button>
</template>
<script lang="ts" setup>
	// @ts-ignore
	import { useUserStore } from "@/pinia/user";
	const userStore = useUserStore();
	const save = () => {
		userStore.setUserInfo({
			name: "张三",
			age: 18,
			sex: "男",
		});
	};
</script>
