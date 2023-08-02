/*
 const request = (obj: any) => {
	// 获取用户本地保存的token
	let token = "";
	if (token) {
		obj.header = {};
		obj.header["token"] = token;
	}
	obj.params = obj.params || {};
	if (obj.params) {
		// obj.url = obj.url + queryParams(obj.params, true);
	}
	return new Promise((resolve, reject) => {
		uni.request({
			url: obj.url,
			method: obj.method || "get",
			data: obj.data,
			dataType: "json",
			header: obj.header,
		})
			.then((res) => {
				let resData = res.data || {};
				resolve(resData);
			})
			.catch((err) => {
				return reject(err);
			});
	});
};

export default request*/
import axios from "axios";
import { netConfig } from "@/config/net.config";
const { baseURL, contentType, requestTimeout, successCode } = netConfig;

let tokenLose = true;

const instance = axios.create({
	baseURL,
	timeout: requestTimeout,
	headers: {
		"Content-Type": contentType,
	},
});

// request interceptor
instance.interceptors.request.use(
	(config) => {
		// do something before request is sent
		return config;
	},
	(error) => {
		// do something with request error
		return Promise.reject(error);
	}
);

// response interceptor
instance.interceptors.response.use(
	/**
	 * If you want to get http information such as headers or status
	 * Please return  response => response
	 */
	(response) => {
		const res = response.data;

		// 请求出错处理
		// -1 超时、token过期或者没有获得授权
		if (res.status === -1 && tokenLose) {
			tokenLose = false;
			uni.showToast({
				title: "服务器异常",
				duration: 2000,
			});

			return Promise.reject(res);
		}
		if (successCode.indexOf(res.status) !== -1) {
			return Promise.reject(res);
		}
		return res;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default instance;
