<template>
  <div class="headbox" id='head'>
   <div class="head">
	   <div class="logo"><img src="./imgs/logo.png" alt=""></div>
	   <div class="head-nav">
		   <ul ref="headnav">
			   <li @click="toIndex" style="border-bottom: 2px solid rgb(251,59,123);">首页</li>
			   <li @click="toHotArea">热区</li>
			   <li @click="toGame">游戏</li>
			   <li>下载</li>
		   </ul>
	   </div>
	   <div class="head-search">
		  <div class="searchbt"><i class="iconfont icon-sousuo"></i></div>
		   <input type="text" placeholder="手机游戏" @focus="onFocusSearch" @blur="blurSearch" v-model="searchvalue">
		   <div class="hotsearch-box" ref='hotsearchbox'>
			   <p>今日热搜</p>
			   <ol>
				   <li @click="toSearchValue">配音/声控</li>
				   <li @click="toSearchValue">手机游戏</li>
				   <li @click="toSearchValue">吃鸡</li>
				   <li @click="toSearchValue">表情包</li>
				   <li @click="toSearchValue">壁纸</li>
				   <li @click="toSearchValue">情侣头像</li>
				   <li @click="toSearchValue">王者荣耀</li>
				   <li @click="toSearchValue">QQ美化</li>
				   <li @click="toSearchValue">minecraft</li>
				   <li @click="toSearchValue">安卓分享</li>
			   </ol>
		   </div>
	   </div>
	   <div class="login" @click="login" id='loginbt' ref='loginOrRegister' :style="isLogin">
		   <span>登录</span>
		   <span>/</span>
		   <span>注册</span>
	   </div>
	   <div class="login"  id='loginbt' :style="isLogined">
	   		  <img src="./imgs/头像.png" alt="" width="25px" style="">
	   		   <span v-text="nickname"></span>
	   </div>
	   <div class="fatie">
		   <span>我要发帖</span>
	   </div>
   </div>
  </div>
</template>

<script>
	import Login from "./login.vue"
export default {
  name: 'Head',
  components:{
	 login:Login
  },
  computed:{
	  isLogin:function(){
		  return this.$store.state.isLogin
	  },
	  nickname:function(){
		   return this.$store.state.nickname
	  },
	  isLogined:function(){
		    return this.$store.state.isLogined
	  }
  },
  data:function() {
  	return {
		searchvalue:'',
	}
  },
 mounted(){
	 // this.$refs.loginOrRegister.style.display=this.$store.state.isLogin;

 },
  props: {
    msg: "head页面"
  },
  methods:{
	  toSearchValue:function(e){
		  this.searchvalue=e.target.innerText
		 console.log(e)
	  },
	  blurSearch:function(){
		 // this.$refs.hotsearchbox.style.display='none'  
		 this.$refs.hotsearchbox.style.height='0';
		 this.$refs.hotsearchbox.style.transition='all 1s'
	  },
	  onFocusSearch:function(){
		// this.$refs.hotsearchbox.style.display='block';
		this.$refs.hotsearchbox.style.height='260px';
		this.$refs.hotsearchbox.style.transition='all 1s'
	  },
	  login:function(){
		  this.$store.state.closelogin='display:block'

	  },
	  toHotArea:function(){
		  this.$router.push('/hotarea');
		  let li=this.$refs.headnav.children;
		 for(let i=0;i<li.length;i++){
			 li[i].style.border='0';
			  li[i].style.color='black';
		 }
		  li[1].style.color='rgb(251,59,123)';
		    li[1].style.borderBottom='2px solid rgb(251,59,123)';
	  },
	  toGame:function(){
		  this.$router.push('/game');
		  let li=this.$refs.headnav.children;
		  for(let i=0;i<li.length;i++){
		  			 li[i].style.border='0';
		  			  li[i].style.color='black';
		  }
		  li[2].style.color='rgb(251,59,123)';
		    li[2].style.borderBottom='2px solid rgb(251,59,123)';
	  },
	  toIndex:function(){
	  		  this.$router.push('/index');
			  let li=this.$refs.headnav.children;
			  for(let i=0;i<li.length;i++){
			  			 li[i].style.border='0';
			  			  li[i].style.color='black';
			  }
			  li[0].style.borderBottom='2px solid rgb(251,59,123)';
			  li[0].style.color='rgb(251,59,123)'
	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.headbox{
	width: 100%;
	background: white;	
   
     z-index: 20;
	}
.head{
	margin: 0 auto;
	width: 1040px;
	height: 60px;
}
.logo{
	margin-top: 12px;
	float: left;
}
.logo img{
	width: 146px;
	height: 39px;
}
.head-nav{
	margin-left: 50px;
	float: left;
}
.head-nav li{
	width: 70px;
	line-height: 58px;
	text-align: center;
	list-style: none;
	float: left;
}
.head-search{
	float: left;
	position: relative;
}
.head-search .searchbt{
	position: absolute;
	right: 20px;
	top: 20px;
}
.head-search .hotsearch-box{
	overflow: hidden;
	position: absolute;
	width: 120px;
	height: 0;
	padding: 0 10px;
	text-align: left;
	background: white;
	right: 0;
	top: 50px;
	border-radius: 5px;
	box-sizing: border-box;
	z-index: 2;
}
.head-search .hotsearch-box p{
	color: rgb(106,106,106);
	text-align: center;
	border-bottom: 1px solid rgb(241,241,241);
}
.head-search .hotsearch-box ol li{
	color: rgb(106,106,106);
	font-size: 14px;
	list-style: decimal;
	list-style-position: inside;
	padding-bottom: 3px;
}
.head-search .hotsearch-box li:hover{
	color: rgb(253,76,134);
	background: rgb(254,237,243);
}
.head-search input{
	margin-top: 13px;
	margin-left: 50px;
	width: 152px;
	height: 34px;
	padding-left: 18px;
	border: 1px solid rgb(200,200,200);
	border-radius: 25px;
}
.login{
	margin-left: 30px;
	float: left;
	
	line-height: 60px;
	color:hotpink;
}
.login img{
	vertical-align: middle;
}
.fatie{
	float: left;
	margin-top: 8px;
	margin-left: 40px;
	width: 130px;
	height: 40px;
	background: #FF69B4;
	line-height: 40px;
	text-align: center;
	color: white;
	border-radius: 20px;
}
</style>
