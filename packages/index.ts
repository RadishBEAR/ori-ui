// packages/index.ts
import { VueConstructor } from 'vue';
import OriTest from './test';

interface Component {
	[prop: string]: unknown;
	install: (Vue: VueConstructor) => void;
}

const components = [OriTest];

const install = (Vue: VueConstructor) => {
	components.forEach(component => Vue.component(component.name, component));
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export default {
	// 导出的对象必须具有 install，才能被 Vue.use() 方法安装
	OriTest,
	install
} as Component;
