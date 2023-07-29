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

export default request;
