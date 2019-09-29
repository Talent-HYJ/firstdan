<template>
  <div id="app">
   <login id='login' :style="this.$store.state.closelogin"></login>
   <headtitle id='head'></headtitle>
   <router-view></router-view>
   
   <!-- <hotarea></hotarea> -->
   
  <foot></foot>
  <silder></silder>
  </div>
</template>

<script>
	import Game from './components/game'
import Foot from './components/footer'
import Head from './components/Head'
import HotArea from './components/hotarea'
import Login from './components/login'
import Sider from './components/silder'
export default {
  name: 'app',
  components: {
 headtitle:Head,
 hotarea:HotArea,
 login:Login,
 foot:Foot,
 game:Game,
 silder:Sider
  },
   computed: {
      count () {
        return this.$store.state.count
      },
	  // closelogin(){
		  
	  // }
    },
  data:function () {
	 
  	return {
	
	}
  },
  beforeUpdate:function(){
	
  },
  mounted:function(){

  
}
}
</script>

<style>
	input{
		outline: none;
	}
	li{
		list-style: none;
	} 
	body{
	  background: rgb(248,249,251);
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  color: #2c3e50;
 
}
</style>
