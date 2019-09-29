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
		
		