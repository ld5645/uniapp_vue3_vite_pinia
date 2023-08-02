type StorageReturn = boolean | undefined;

/**
 * 存储localStorage
 */
export const setStorageSync: any = (key: string, val: any): StorageReturn => {
	if (!key) return;
	try {
		uni.setStorageSync(key, val);
	} catch (e) {
		// error
		return false;
	}
	return true;
};

/**
 * 获取localStorage
 */
export const getStorageSync = (key: string): StorageReturn => {
	if (!key) return;
	let val = uni.getStorageSync(key);
	return val;
};

/**
 * 删除localStorage
 */
export const removeStorageSync = (key: string): StorageReturn => {
	if (!key) {
		return false;
	}
	try {
		uni.removeStorageSync(key);
	} catch (e) {
		// error
		return false;
	}
	return true;
};
