import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import App from './App.vue';
import router from './router';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as Icons from '@element-plus/icons-vue';
import './assets/iconfont/iconfont.css';
import './styles/global.css';
import locale from 'element-plus/lib/locale/lang/zh-cn';

const app = createApp(App);
const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);

// 注册Icons 全局组件，element plus icon
Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key]);
});

app.use(router);
app.use(ElementPlus, { locale });
app.use(pinia);

app.mount('#app');
