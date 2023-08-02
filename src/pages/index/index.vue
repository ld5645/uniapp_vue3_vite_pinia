<template>
	<my-nav-bar></my-nav-bar>
	<view>{{ JSON.stringify(userStore.userInfo) }}</view>
	<button @click="save()">存储</button>
	<button @click="getData()">获取数据</button>
</template>
<script lang="ts" setup>
	// @ts-ignore
	import { useUserStore } from "@/pinia/user";
	import { getList } from "@/api/user";
	import to from "@/utils/await-to";
	const userStore = useUserStore();
	const save = () => {
		userStore.setUserInfo({
			name: "张三",
			age: 18,
			sex: "男",
		});
		console.log(userStore.userInfo);
	};
	const getData = async () => {
		// let [err, res] = await to(getList({ id: '121' }));
		// console.log(res, err);
		let res = await getList();
		console.log(res);
	};
</script>
