//request 请求
// import request from "@/utils/request";

// /**
//  * @description 授权登录
//  * @param {*} data
//  */
// export function wxLogin(data) {
// 	return request({
// 		url: "/wx/code2Session",
// 		method: "post",
// 		params: {},
// 		data,
// 	});
// }

// /**
//  * @description 获取手机号
//  * @param {*} data
//  */
// export function getPhoneNumber(data) {
// 	return request({
// 		url: "/wx/getPhoneNumber",
// 		method: "post",
// 		params: {},
// 		data,
// 	});
// }

//通过http去请求
import HttpClient from "@/utils/http";
import type { ListParams, ListModel } from "./model/userModel";

export const getList = (params: ListParams) => {
	return HttpClient.get<ListModel>("./user", { params });
};
