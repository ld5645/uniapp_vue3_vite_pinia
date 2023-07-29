<script setup lang="ts">
	// @ts-ignore
	import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
	onLaunch(() => {
		console.log("App Launch", import.meta.env);
	});
	onShow(() => {
		console.log("App Show");
	});
	onHide(() => {
		console.log("App Hide");
	});
</script>
<style></style>
