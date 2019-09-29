<template>
	<div class="index">
		<div class="bd-bnrs">
			<div class="bd-slideBox">
				 <el-carousel indicator-position="outside" class="lunbo">
				    <el-carousel-item v-for="item in swipper" >
				      <h3><img :src="item" alt="" class="swipper"></h3>
				    </el-carousel-item>
				  </el-carousel>
			</div>
			<div class="bd-smBnrs">
				<div class="smBnr-img" v-for="item in sider">
					<p><img :src="item.url" alt=""></p>
					<p>[P站搬运]画师推荐(二十四)</p>
				</div>

			</div>
		</div>
	<div class="zhuanqu-box">
		<ul v-for="item in head" >
			<li>
				<p><img :src="item.url" alt=""></p>
				<p>【原创同人图】之前画的麦爹</p>
				<p>
					<span><i class="iconfont icon-wode"></i>弥亚mia</span>
					<span>10</span>
				</p>
			</li>
		</ul>
	</div>
	<div class="hot-theme">
		<div class="title">
			<img src="http://localhost:8888/imgs/indeximgs/hottheme.png" alt="">
			
			<span>热门主题区</span>
		</div>
		<ul  >
			<li v-for="item in theme">
				<div class="imgbox"><img :src="item.url" alt=""></div>
			<div class="res_zhuanqu_textBox">
				<div class="res_zhuanqu_tt">牧羊人之心</div>
				<div class="res_zhuanqu_intro">第一弹牧羊人之心群号：874193497，官方在线解答各种问题哦~</div>
				<div class="res_zhuanqu_nums">
					<span>帖子：1511658</span>
					<span>成员：123894</span>
				</div>
			</div>
			</li>
		</ul>
	</div>
	<div class="dongmanbox">
		<div class="rec-titleBox">
		<div class="titleimg"><img src="http://localhost:8888/imgs/indeximgs/yuanchuangmanhua.png" alt=""></div>
		<div class="titlename">原创漫画</div>
		<span style="border-bottom: 2px solid rgb(253,76,134);color: rgb(253,76,134);">小说</span>
		<span>漫画</span>
		</div>
		<ul >
			<li v-for="item in dongman" >
				<p><img :src="item.url" alt=""></p>
				<p>消失的同桌也要搞事情</p>
				<p><span><i class="iconfont icon-tangguotianqiao"></i>1191</span>
				<span><i class="iconfont icon-xiaoxi"></i>56</span>
				</p>
			</li>
		</ul>
	</div>
	<div class="dongmanbox">
		<div class="rec-titleBox">
		<div class="titleimg"><img src="http://localhost:8888/imgs/indeximgs/yuanchuangmanhua.png" alt=""></div>
		<div class="titlename">ACG音乐</div>
		
		</div>
		<ul >
			<li v-for="item in music" >
				<p><img :src="item.url" alt=""></p>
				<p>【原创电音】我能感觉到你，世界 — FEEL【Nekock·LK】</p>
				<p><span><i class="iconfont icon-wode"></i>1191</span>
				<span><i class="iconfont icon-xiaoxi"></i>56</span>
				</p>
			</li>
		</ul>
	</div>
	<div class="dongmanbox">
		<div class="rec-titleBox">
		<div class="titleimg"><img src="http://localhost:8888/imgs/indeximgs/yuanchuangmanhua.png" alt=""></div>
		<div class="titlename">网配/CV</div>
		
		</div>
		<ul >
			<li v-for="item in CV" >
				<p><img :src="item.url" alt=""></p>
				<p>【原创电音】我能感觉到你，世界 — FEEL【Nekock·LK】</p>
				<p><span><i class="iconfont icon-tangguotianqiao"></i>1191</span>
				<span><i class="iconfont icon-xiaoxi"></i>56</span>
				</p>
			</li>
		</ul>
	</div>
	</div>
</template>

<script>
	export default{
		name:'index',
		data:function(){
			return {
				sider:[
					{url:"http://localhost:8888/imgs/indeximgs/sider1.png"},
					{url:"http://localhost:8888/imgs/indeximgs/sider2.jpg"},
					{url:"http://localhost:8888/imgs/indeximgs/sider3.jpg"},
				{url:"http://localhost:8888/imgs/indeximgs/sider4.jpg"},
				{url:"http://localhost:8888/imgs/indeximgs/sider5.jpg"},
				{url:"http://localhost:8888/imgs/indeximgs/sider6.jpg"}
				],
				swipper:[
					"http://localhost:8888/imgs/indeximgs/teacher.jpg",
					"http://localhost:8888/imgs/indeximgs/teacher.jpg",
					"http://localhost:8888/imgs/indeximgs/teacher.jpg",
					"http://localhost:8888/imgs/indeximgs/teacher.jpg"
				],
				head:[
					{
						url:"http://localhost:8888/imgs/indeximgs/head1.jpg"
					},
					{
						url:"http://localhost:8888/imgs/indeximgs/head2.jpg"
					},
					{
						url:"http://localhost:8888/imgs/indeximgs/head3.jpg"
					},
					{
						url:"http://localhost:8888/imgs/indeximgs/head4.jpg"
					},
					{
						url:"http://localhost:8888/imgs/indeximgs/head5.jpg"
					},
					{
						url:"http://localhost:8888/imgs/indeximgs/head6.jpg"
					},
					{
						url:"http://localhost:8888/imgs/indeximgs/head7.jpg"
					},
					{
						url:"http://localhost:8888/imgs/indeximgs/head8.jpg"
					},
					{
						url:"http://localhost:8888/imgs/indeximgs/head9.jpg"
					},
					{
						url:"http://localhost:8888/imgs/indeximgs/head10.jpg"
					}
				],
				CV:[
					{url:'http://localhost:8888/imgs/indeximgs/cv1.jpg'
						
					},
					{url:'http://localhost:8888/imgs/indeximgs/cv2.jpg'
						
					},
					{url:'http://localhost:8888/imgs/indeximgs/cv3.jpg'
						
					},
					{url:'http://localhost:8888/imgs/indeximgs/cv4.png'
						
					},
					{url:'http://localhost:8888/imgs/indeximgs/cv5.jpg'
						
					},
					{url:'http://localhost:8888/imgs/indeximgs/cv6.jpg'
						
					},
					{url:'http://localhost:8888/imgs/indeximgs/cv7.jpg'
						
					},
					{url:'http://localhost:8888/imgs/indeximgs/cv8.png'
						
					},
					{url:'http://localhost:8888/imgs/indeximgs/cv9.jpg'
						
					},
					{url:'http://localhost:8888/imgs/indeximgs/cv10.jpg'
						
					}
				],
			music:[
				{url:'http://localhost:8888/imgs/indeximgs/music1.png'	
				},
				{url:'http://localhost:8888/imgs/indeximgs/music2.jpg'
				},
				{url:'http://localhost:8888/imgs/indeximgs/music3.jpg'
				},
				{url:'http://localhost:8888/imgs/indeximgs/music4.jpg'
				},
				{url:'http://localhost:8888/imgs/indeximgs/music5.jpg'
				},
				{url:'http://localhost:8888/imgs/indeximgs/music6.jpg'
				},
				{url:'http://localhost:8888/imgs/indeximgs/music7.jpg'
				},
				{url:'http://localhost:8888/imgs/indeximgs/music8.jpg'
				},
				{url:'http://localhost:8888/imgs/indeximgs/music9.jpg'
				},
				{url:'http://localhost:8888/imgs/indeximgs/music10.jpg'
				}
			],
			dongman:[
				{
					url:"http://localhost:8888/imgs/indeximgs/dongman1.jpg"
				},
				{
					url:"http://localhost:8888/imgs/indeximgs/dongman2.png"
				},
				{
					url:"http://localhost:8888/imgs/indeximgs/dongman3.jpg"
				},
				{
					url:"http://localhost:8888/imgs/indeximgs/dongman4.jpg"
				},
				{
					url:"http://localhost:8888/imgs/indeximgs/dongman5.png"
				}
			],
			theme:[
				{
					url:"http://localhost:8888/imgs/indeximgs/muyangrenzhixin.jpg"
				},
				{
					url:"http://localhost:8888/imgs/indeximgs/theme2.jpg"
				},
				{
					url:"http://localhost:8888/imgs/indeximgs/theme3.jpg"
				},
				{
					url:"http://localhost:8888/imgs/indeximgs/theme4.jpg"
				},
				{
					url:"http://localhost:8888/imgs/indeximgs/theme5.jpg"
				},
				{
					url:"http://localhost:8888/imgs/indeximgs/theme6.jpg"
				}
			
			]
			}
		}
	}
</script>

<style scoped="scoped">
	.lunbo{
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.el-carousel__item h3 {
	  color: #475669;
	    font-size: 18px;
	    opacity: 0.75;
	    
	    margin: 0;
	  }
	  .swipper{
		  width: 500px;
		  height: 208px;
	  }
	.index{
		margin: 0 auto;
		width: 1040px;
		height: 2300px;
	}
	.bd-bnrs{
		width: 1040px;
		height: 208px;
		float: left;
	}
	.bd-slideBox{
		position: relative;
		/* z-index: -1; */
		float: left;
		width: 500px;
		height: 208px;
	}
	.bd-smBnrs{
		position: relative;
		/* z-index: -1; */
		display: flex;
		justify-content: space-between;
		align-content: space-between;
		flex-wrap: wrap;
		width: 520px;
		height: 208px;
		float: right;
	}
	.smBnr-img{
		float: left;
		position: relative;
		width: 160px;
		height: 90px;
	
	}
	.smBnr-mask{
		/* width: 100%;
		height: 100%;
		position: relative;
		background: rgb(0,0,0,.5); */
	}
	.smBnr-img>p:first-child{
		width: 100%;
		height: 90px;
		overflow: hidden;
		border-radius: 5px;
	}
	.smBnr-img img{
		width: 160px;
		
	}
	.smBnr-img>p:last-child{
		width: 100%;
		position: absolute;
		left: 0;
		bottom:8px ;
		font-size: 12px;
		text-align: center;
		color:white;
	}
	.smBnr-img:hover p{
		color: transparent;
		transition: all 1s;
	}
	.smBnr-img:hover img{
		/* display: block; */
	transform: scale(1.1);
	
		
	}
	.zhuanqu-box{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		float: left;
		width: 1000px;
		height: 428px;
		padding-left: 20px;
		padding-top: 10px;
		padding-right: 20px;
		margin-top: 20px;
		background: white;
	}
	.zhuanqu-box li{
		
		width: 182px;
		height: 188px;
		border: 1px solid rgb(248,248,248);
		margin-bottom: 20px;
	}
	.zhuanqu-box li:hover{
		box-shadow: 0 0 4px 0 rgba(254, 119, 128, 0.47);
}



	.zhuanqu-box li img{
		width: 184px;
	}
	.zhuanqu-box li p:first-child{
		width: 182px;
		height: 122px;
		overflow: hidden;
	}
	.zhuanqu-box li p:nth-child(2){
		width: 100%;
		overflow: hidden;
		font-size: 14px;
		text-overflow:ellipsis;
		white-space:nowrap;
		margin-top: 8px;
	}
	.zhuanqu-box li p:nth-child(2):hover{
		color: rgb(253,76,134);
	}
	.zhuanqu-box li p:last-child{
		width: 100%;
		height: 16.8px;
		margin-top: 9px;
		font-size: 12px;
		color: rgb(153,153,153);
	}
	.zhuanqu-box li p:last-child:hover{
		color: rgb(253,76,134);
	}
	.hot-theme{
		
		width: 1020px;
		height: 336px;
		padding: 10px 0 0 20px;
		margin-top: 20px;
	}
	.hot-theme .title{
		float: left;
		width: 1000px;
		height: 48px;
		margin-bottom: 8px;
		line-height: 48px;
	}
	.hot-theme .title img{
		float: left;
		display: block;
	margin-top: 10px;
	}
	.hot-theme .title span{
		float: left;
		width: 100px;
		height: 48px;
		display: block;
		margin-left: 10px;
		font-weight: bold;
		line-height: 48px;
		font-size: 18px;
	}
	.hot-theme ul{
		position: relative;
		/* z-index: 0; */
	}
	.hot-theme li{
		
		float: left;
		margin-right: 20px;
		margin-bottom: 20px;
		width: 318px;
		height: 118px;
		border: 1px solid rgb(248,248,248);
	}
	.hot-theme ul li:hover{
		
		box-shadow: 0 0 4px 0 rgba(254, 119, 128, 0.47);
}

	.hot-theme li .imgbox{
		float: left;
		margin: 10px;
		width: 100px;
		height: 100px;
	}
	.hot-theme li .imgbox img{
		width: 100px;
		height: 100px;
		border-radius: 5px;
	}
	.res_zhuanqu_textBox{
		position: relative;
		float: left;
		margin-top: 10px;
		width: 190px;
		height: 100px;
	}
	.res_zhuanqu_tt{
		float: left;
	width: 190px;
	height: 20px;
	font-size: 14px;
	}
	.res_zhuanqu_intro{
		float: left;
		height: auto;
		width: 100%;
		font-size: 12px;
	}
	.res_zhuanqu_nums{
		position: absolute;
		left: 0;
		bottom: 0px;
		width: 190px;
		height: 20px;
		font-size: 12px;
	}
	.res_zhuanqu_nums span:first-child{
		padding-right: 20px;
	}
	.dongmanbox{
		float: left;
		width: 1020px;
		margin-top: 20px;
		padding-left: 20px;
		height: auto;
	}
	.dongmanbox .rec-titleBox{
		width: 1000px;
		height: 48px;
		padding-right: 20px;
		margin-bottom: 8px;
		float: left;
	}
	.dongmanbox ul li{
		margin-bottom: 10px;
	}
	.dongmanbox ul li:hover{
		box-shadow: 0 0 4px 0 rgba(254, 119, 128, 0.47);
		color:rgb(253,76,134) ;
	}
	.dongmanbox ul li p:last-child{
		display: flex;
		justify-content: space-between;
		font-size: 12px;
	}
	.titleimg{
		display: flex;
		align-items: center;
		width: 50px;
		height:48px ;
		line-height: 48px;
		float: left;
	}
	.dongmanbox .rec-titleBox .titlename{
		display: block;
	float: left;
height: 48px;
line-height: 48px;
font-weight: bold;
font-size: 18px;
	}
	.dongmanbox .rec-titleBox span{
		
		margin-left: 10px;
		line-height: 48px;
	}
	.dongmanbox ul{
		width: 100%;
		padding-right: 20px;
		float: left;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-between;
	}
	.dongmanbox ul li{
		width: 182px;
		height: 198px;
		border: 1px solid rgb(248,248,248);
	}
	.dongmanbox ul img{
		width: 184px;
		height: 141px;
	}
	.dongmanbox ul li p:nth-child(2){
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		padding: 0 10px;
		text-align: center;
	}
	.dongmanbox ul li p:nth-child(3){
		margin-top: 10px;
		padding: 0 10px;
	}
</style>
