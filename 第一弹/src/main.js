import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/iconfont.css'
import VueRouter from 'vue-router'
import router from './router/router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.use(Vuex)



// console.log(store)
new Vue({
	router,
	store,
  render: h => h(App),
  
}).$mount('#app')