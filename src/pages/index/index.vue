<template>
	<my-nav-bar></my-nav-bar>
	<view
		class="p-4 text-28 text-blue hover:text-red-6 transition-all-2000 b-rd-5 bg-#808080 p-4 box-border cursor-pointer hover:bg-#808 dark:bg-black flex flex-col"
		>{{ JSON.stringify(userStore.userInfo) }}</view
	>
	<button @click="save()">存储</button>
	<button @click="getData()">获取数据</button>
	<button @click="changeTheme()">变色</button>
</template>
<script lang="ts" setup>
	// @ts-ignore
	import { useUserStore } from "@/pinia/user";
	// @ts-ignore
	import { getList } from "@/api/user";
	// @ts-ignore
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
	const changeTheme = () => {
		document.body.className = "dark";
	};
</script>
