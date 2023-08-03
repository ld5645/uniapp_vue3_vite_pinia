import { createSSRApp, defineAsyncComponent } from "vue";
import * as Pinia from "pinia";
//pinia数据持久化
import { createUnistorage } from "pinia-plugin-unistorage";
//引入unocss
import "uno.css";
import App from "./App.vue";
export function createApp() {
	const app = createSSRApp(App);
	const store = Pinia.createPinia();

	//组件自动化注册
	let components = import.meta.glob("./components/*.vue");
	Object.entries(components).forEach(([file, module]) => {
		const name = file.split("/").pop()?.replace(/.vue/, "") as string;
		app.component(name, defineAsyncComponent(module));
	});
	store.use(createUnistorage());
	app.use(store);
	return {
		app,
		Pinia,
	};
}
