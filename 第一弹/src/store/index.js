import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
	  alert:'',
    count: 0,
	closelogin:"display:none",
	nickname:'二哈',
	isLogin:'display:block',
	isLogined:'display:none'
  },
  mutations: {
    increment (state) {
      state.count++
    },
	checkisLogin(state){
		state.isLogin='display:none'
	},
	updatanickname(state,name){
		state.nickname=name;
		console.log(state)//能正常打印出数据，单页面渲染的是最开始的nickname，没有刷新
	}
  },
   actions: {
     updatanickname({commit},name) {
		
         setTimeout((name) => {
			  console.log(name)
           commit('updatanickname',name)
         }, 100,name)
       }
    }
})
export default store