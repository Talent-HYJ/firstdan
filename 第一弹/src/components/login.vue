<template>
	<div class="loginbox" id='loginbox' style="display: none;" >
		<div class="login" ref='loginbox'>
			<div class="login-title">
				<div>登录</div>
				<div @click="close" id='closelogin'>关闭</div>
			</div>
			<form action="" method="get">
				<div class="phone">
				<div class="img"><img src="./imgs/telep_bg.png" alt="" width="18px"></div>
				<div><input type="text" placeholder="请输入手机号" name="account"  v-model="account" @blur="checkph" @focus="onfocusph" maxlength="11"></div>
				
			</div>
			<div class="phone">
				<div><img src="./imgs/passw_bg.png" alt="" width="18px"></div>
				<div><input type="password" placeholder="请输入密码" name="password" v-model="password" @blur="checkps" @focus="onfocusps" maxlength="18"></div>
			</div>
			<div class="auto-login">
				<div class="auto-loginbox">
					<div style="display: flex;align-items: center;">
						
					<div class="round" ref='autologin' @click="autoLogin(count++)" id='autologin'></div>
					<div @click="autoLogin(count++)">自动登录</div>
				</div>
				<div>
					第一弹用户协议
				</div>
				<div>忘记密码？</div>
				</div>
			</div>
			
			<div class="login-button" @click="tologin">
				<div class="alert"  id='alertmsg'></div>
				<input type="button" value="登录">
			</div>
			</form>
			<div class="guodu">
				<div class="register">
					<input type="button" value="注册" @click="toregisterbox">
				</div>
				<div class="other-login">
					<div class="other-text">第三方登录</div>
					<div class="other-img" style="background: #4f9cf6;"><img src="./imgs/q1.png" alt=""></div>
					<div class="other-img" style="background: #50bd57;"><img src="./imgs/w1.png" alt=""></div>
					<div class="other-img" style="background: #ea5a56;"><img src="./imgs/x1.png" alt=""></div>
				</div>
			</div>
			<div class="login-ewm">
				<div><img src="./imgs/login_address.png" alt=""></div>
			<div>扫我下载APP</div>
			</div>
		</div>
		<!-- 注册框 -->
		<div class="registerbox" ref='registerbox'>
			<div class="login-title">
				<div>注册</div>
				<div @click="close" id='closelogin'>关闭</div>
			</div>
			
			<div class="phone">
				<div class="img"><img src="./imgs/cellphone_gray.png" alt="" width="18px"></div>
				<div><input type="text" placeholder="请输入手机号" name="rephone"  v-model="registerphone" maxlength="11"></div>
				
			</div>
			<div class="phone">
				<div class="img"><img src="./imgs/nickname_gray.png" alt="" width="18px"></div>
				<div><input type="text" placeholder="昵称" name="renickname"  v-model="registernickname" maxlength="12"></div>
				
			</div>
			<div class="phone">
				<div class="img"><img src="./imgs/name_gray.png" alt="" width="18px"></div>
				<div><input type="text" placeholder="请输入真实姓名" name="rename"  v-model="registername" maxlength="6"></div>
				
			</div>
			<div class="phone">
				<div class="img"><img src="./imgs/id_gray.png" alt="" width="18px"></div>
				<div><input type="text" placeholder="请输入身份证号码" name="reid"  v-model="registerid" maxlength="18"></div>
				
			</div>
			<div class="phone">
				<div class="img"><img src="./imgs/password_gray.png" alt="" width="18px"></div>
				<div><input type="text" placeholder="请输入密码" name="repassword"  v-model="registerpassword" maxlength="18"></div>
				
			</div>
			<div class="phone" style="position: relative;">
				<div class="img"><img src="./imgs/val_code_gray.png" alt="" width="18px"></div>
				<div ><input type="text" placeholder="请输入验证码"  maxlength="4"></div>
				<p class="getcheckcode">获取验证码</p>
			</div>
			<div class="login-button" @click="submitRegister">
				<input type="button" value="注册" @click="isRegister">
			</div>
			<div class="guodu">
				<div class="register" @click="tologinbox">
					<input type="button" value="登录">
				</div>
				<div class="other-login">
					<div class="other-text">第三方登录</div>
					<div class="other-img" style="background: #4f9cf6;"><img src="./imgs/q1.png" alt=""></div>
					<div class="other-img" style="background: #50bd57;"><img src="./imgs/w1.png" alt=""></div>
					<div class="other-img" style="background: #ea5a56;"><img src="./imgs/x1.png" alt=""></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default{
		name:'Login',
		data:function(){
			return {
				count:0,
				closestate:'',
				account:'',
				password:'',
				registername:'',
				registernickname:'',
				registerphone:'',
				registerid:'',
				registerpassword:''
			}
		},
		computed:{
			alertmsg:function () {
				return this.alert;
			}
			
				
			
		},
		mounted() {
			
		},
		updated() {
			
		},
		methods:{
			isRegister:function(){
				if(this.registername!=''&&this.registernickname!=''
				&&this.registerid!=''&&this.registerpassword!=''&&this.registerphone!=''){
					alert("注册成功")
					this.tologinbox()
				}else{
					alert("请完善信息")
				}
				
			},
			autoLogin:function(count){
				console.log(count)
				if(count%2==0){
					this.$refs.autologin.style.background='rgb(241,69,93)'	
				}else{
					this.$refs.autologin.style.background='gray'	
				}
				
			},
			onfocusph:function(){
				let msg=document.getElementById('alertmsg');
				if(this.account==''){
					msg.innerHTML="请输入11位手机号";
					}
			},
			onfocusps:function(){
				let msg=document.getElementById('alertmsg');
				if(this.password==''){
					msg.innerHTML="请输入密码";
					}
			},
			checkps:function(){
				let msg=document.getElementById('alertmsg')
				if(this.password==''){
					msg.innerHTML="请输入密码";
				console.log(this.alert)
				}else{
					msg.innerHTML="格式正确"
				}
			},
			checkph:function(){
				var reg= /^((0\d{2,3}-\d{7,8})|(1[35847]\d{9}))$/;
				let msg=document.getElementById('alertmsg')
				if(this.account==''){
					
					msg.innerHTML="请输入手机号"
				}else if(!reg.exec(this.account)){
					msg.innerHTML="格式错误"
				}
				else{
					msg.innerHTML="格式正确"
					}
			},
			close:function(){
				 this.$store.state.closelogin='display:none'
			},
			tologinbox:function(){
				// var lefton = parseInt((window.document.body.offsetWidth-350)/2)
				this.$refs.registerbox.style.left="-350px";
				this.$refs.registerbox.style.opacity='0'
				this.$refs.registerbox.style.transition="all 1s"
				this.$refs.loginbox.style.right='50%';
				this.$refs.registerbox.style.marginRight='-215px';
				this.$refs.loginbox.style.opacity='1'
				this.$refs.loginbox.style.transition="all 1s"
			},
			toregisterbox:function(){
				// var lefton = parseInt((window.document.body.offsetWidth-350)/2)
				this.$refs.registerbox.style.left='50%';
				this.$refs.registerbox.style.marginLeft='-215px';
				this.$refs.registerbox.style.opacity='1'
				this.$refs.registerbox.style.transition="all 1s"
				this.$refs.loginbox.style.right="-350px";
				this.$refs.loginbox.style.opacity='0'
				this.$refs.loginbox.style.transition="all 1s"
			},
			tologin:function(){
				if(this.account!=''&&this.password!=''){
					this.axios.post('http://localhost:8888/login',{
					name:this.account,
					password:this.password
				}).then((res)=>{
					if(res.data==false){
						alert("请先注册")
					}
					else if(res.data[0].password!=this.password){
						alert("密码错误")
					}else{
						alert("密码正确")
						
						 this.$store.state.isLogined='display:block'
						this.$store.dispatch('updatanickname',res.data[0].nickname)
						this.$store.commit('checkisLogin')

						//this.$store.commit('updatanickname',res.data[0].nickname)
						}
				})
				}else{
					alert('请正确输入手机号和密码')
				}
				
			},
			submitRegister:function(){
				this.axios.post('http://localhost:8888/login',{
					register:1,
					name:this.registername,
					phone:this.registerphone,
					nickname:this.registernickname,
					password:this.registerpassword,
					idcard:this.registerid
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.alert{
		position: absolute;
		padding-left: 10px;
		left: 0;
		top: -30px;
		width: 100px;
		height: 20px;
		line-height: 20px;
		font-size: 12px;
		color: red;
	}
	input{
		outline: none;
	}
	.registerbox{
	position: absolute;
	left: -350px;
	top: 100px;
	width: 350px;
	height: 500px;
	padding: 20px 40px 0;
	background: #f5f5f5;
	opacity: 0;
	z-index: 100;	
	}
	.loginbox{
		position: fixed;
		width: 100%;
		height: 100%;
		background: rgb(0,0,0,.5);
		z-index: 100;
	}
	.login{
		position: absolute;
		right: 50%;
		margin-right:-215px;
		top: 100px;
		width: 350px;
		height: 500px;
		padding: 20px 40px 0;
		background: #f5f5f5;
		z-index: 100;
	}
	.login-title{
		float: left;
		width: 350px;
		height: 20px;
		
	}
	.login-title :first-child{
		float: left;
	}
	.login-title :last-child{
		float: right;
	}
	.phone{
		float: left;
		width: 350px;
		height: 30px;
		margin-top: 20px;
		border-bottom: 1px solid white;
	}

	.phone>div{
		float: left;
	}
	.phone div:first-child{
		width: 28px;
		height: 30px;
	}
	.phone div:last-child{
		width: 28px;
		height: 30px;
	}
	.img{
		width: 28px;
		height: 30px;
	}
	.phone input{
		width: 322px;
		height: 30px;
		outline-style: none;
		background: rgb(0,0,0,0);
		border: 0;
		
	}
	.auto-login{
		margin-top: 10px;
		float: left;
		width: 100%;
		height: 30px;
	}
	.round{
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background: gray;
	}
	.auto-loginbox{
		display: flex;
		justify-content: space-around;
	}
	.login-button{
		position: relative;
		margin-top: 30px;
		margin-bottom: 20px;
		float: left;
		width: 346px;
		height: 36px;
	}
	.login-button input{
		width: 346px;
		height: 36px;
		background: #FF69B4;
		color: white;
		border: 0;
		border-radius: 25px;
	}
	.guodu{
		margin-top: 10px;
		float: left;
		width: 350px;
		height: 36px;
		display: flex;
	}
	.guodu .other-login{
		display: flex;
		margin-left: 20px;
		line-height: 36px;
	}
	.guodu .other-login .other-text{
		margin-right: 15px;
	}
	.guodu .other-img{
		border-radius: 50%;
	}
	.guodu .other-img img{
		width: 34px;
		height: 34px;
	}
	.guodu .other-img{
		margin-right: 10px;
		width: 34px;
		height: 34px;
		background: blue;
	}
	.guodu .register input{
		width: 70px;
		height: 36px;
		border-radius: 25px;
		background: #FF69B4;
		border: 0;
		color: white;
	}
	.login-ewm{
		float: left;
		margin-left: 100px;
		margin-top:15px;
		text-align: center;
		}
		.login-ewm img{
			width: 128px;
			height: 128px;
			}
			.getcheckcode{
				position: absolute;
				width: 200px;
				height: 50px;
				right: -50px;
				color: red;
				top: 0px;
				
			}
</style>
