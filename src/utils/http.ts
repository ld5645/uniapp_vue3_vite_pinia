import axios from "axios";
import mpAdapter from "axios-miniprogram-adapter";

/*
 * 创建实例
 * 与后端服务通信
 */
axios.defaults.adapter = mpAdapter;
const HttpClient = axios.create({
	// baseURL: import.meta.env.VITE_BASE_URL,
	timeout: 50000,
	baseURL: import.meta.env.VITE_APP_API_BASE_URL,
});

/**
 * 请求拦截器
 * 功能：配置请求头
 */
HttpClient.interceptors.request.use(
	(config: any) => {
		const token = "222";
		config.headers.authorization = "Bearer " + token;
		return config;
	},
	(error) => {
		console.error("网络错误，请稍后重试");
		return Promise.reject(error);
	}
);

/**
 * 响应拦截器
 * 功能：处理异常
 */
HttpClient.interceptors.response.use(
	(config) => {
		return config.data;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default HttpClient;