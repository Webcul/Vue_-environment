"use strict";
import Vue from 'vue';

//引入自己的vue
import App from './app.vue';
import Home from './components/home/home.vue';

//路由对象
import VueRouter from 'vue-router';
//安装插件
Vue.use(VueRouter);

//引入mint-ui
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);

//axios:
import Axios from 'axios';
Vue.prototype.$ajax=Axios;


//配置路由规则
let router = new VueRouter({
	routes:[
	{path:'/',redirect:{name:'home'}},
	{name:'home',path:'/home',component:Home}
	]
});
new Vue({
	el:'#app',
	router,
	render:c=>c(App)
})