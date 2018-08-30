import Vue from 'vue';
import App from './App';
import wc from './utils/wc';
import './static/iconfont/iconfont.css';

Vue.config.productionTip = false;
App.mpType = 'app';

Vue.prototype.$get = wc.get;

const app = new Vue(App);
app.$mount();
