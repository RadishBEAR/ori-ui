import { VueConstructor } from 'vue';
import OriTest from './src/test.vue';

(OriTest).install = (Vue: VueConstructor) => {
	Vue.component(OriTest.entryName, OriTest);
};

export default OriTest;
