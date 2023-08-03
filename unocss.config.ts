import presetWeapp from "unocss-preset-weapp";

import { transformerClass, transformerAttributify } from "unocss-preset-weapp/transformer";

export default {
	presets: [presetWeapp()],
	transformers: [transformerAttributify(), transformerClass()],
	shortcuts: [{ center: "flex items-center justify-center" }],
};
