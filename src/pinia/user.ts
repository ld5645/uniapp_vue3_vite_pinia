/**
 * @description 用户信息数据持久化
 */
// @ts-ignore
import { defineStore } from "pinia";
import type { User } from "./model/userModel";
export const useUserStore = defineStore("user", {
	state() {
		return {
			userInfo: {},
		};
	},
	unistorage: true,
	actions: {
		setUserInfo(data: User) {
			this.userInfo = data;
		},
	},
});
