<template>
	<div>
		<div class="hot-search">
			<div class="search">
				<div class="search-top">
					<span>版区>版区搜索</span>
				</div>
				<div class="search-for">
					<input type="text" placeholder="搜索版区">
					<button><i class="iconfont icon-sousuo" style="font-size: 18px;"></i></button>
				</div>
			</div>
		</div>
		<div class="area-section">
			<ul>
				
				<li v-for="item in hotdata" >
					<div><img :src="item.src" alt=""></div>
					<div class="area-title">{{item.title}}</div>
					<div class="area-descibe">
						<span>成员：{{item.member}}</span>
						<span>作品：{{item.zuopin}}</span>
					</div>
					<div class="area-join">加入</div>
				</li>
				<li v-for="item in hotdata" >
					<div><img :src="item.src" alt=""></div>
					<div class="area-title">{{item.title}}</div>
					<div class="area-descibe">
						<span>成员：{{item.member}}</span>
						<span>作品：{{item.zuopin}}</span>
					</div>
					<div class="area-join">加入</div>
				</li>
				<li v-for="item in hotdata" >
					<div><img :src="item.src" alt=""></div>
					<div class="area-title">{{item.title}}</div>
					<div class="area-descibe">
						<span>成员：{{item.member}}</span>
						<span>作品：{{item.zuopin}}</span>
					</div>
					<div class="area-join">加入</div>
				</li>
				<li v-for="item in hotdata" >
					<div><img :src="item.src" alt=""></div>
					<div class="area-title">{{item.title}}</div>
					<div class="area-descibe">
						<span>成员：{{item.member}}</span>
						<span>作品：{{item.zuopin}}</span>
					</div>
					<div class="area-join">加入</div>
				</li>
				<li v-for="item in hotdata" >
					<div><img :src="item.src" alt=""></div>
					<div class="area-title">{{item.title}}</div>
					<div class="area-descibe">
						<span>成员：{{item.member}}</span>
						<span>作品：{{item.zuopin}}</span>
					</div>
					<div class="area-join">加入</div>
				</li>
				<li v-for="item in hotdata" >
					<div><img :src="item.src" alt=""></div>
					<div class="area-title">{{item.title}}</div>
					<div class="area-descibe">
						<span>成员：{{item.member}}</span>
						<span>作品：{{item.zuopin}}</span>
					</div>
					<div class="area-join">加入</div>
				</li>
				<li v-for="item in hotdata" >
					<div><img :src="item.src" alt=""></div>
					<div class="area-title">{{item.title}}</div>
					<div class="area-descibe">
						<span>成员：{{item.member}}</span>
						<span>作品：{{item.zuopin}}</span>
					</div>
					<div class="area-join">加入</div>
				</li>
			</ul>
		</div>
	
	</div>
</template>

<script>
	export default{
		name:"HotArea",
		data:function(){
			return {
				hotdata:[]
			}
		},
		mounted() {
			this.axios.get("http://localhost:8888/hot").then(res=>{
				this.hotdata=res.data;
			})
		}
	}
</script>

<style scoped="scoped">
	.hot-search{
		height: 120px;
		background: url(imgs/hot_top.png);
	}
	.search{
		width: 1000px;
		height: 83.6px;
		margin: 0 auto;
		color: white;
	}
	.search-top{
		width: 973px;
		height: 21.6px;
		padding-top: 15px;
	}
	.search-for{
		width: 450px;
		height: 40px;
		margin: 0 auto;
		border: 1px solid white;
		border-radius: 25px;
		overflow: hidden;
	}
	.search-for input{
		display: block;
		float: left;
		outline-style: none;
		padding-left: 20px;
		width: 360px;
		height: 38px;
		background: rgba(0,0,0,.5);
		border: 0px ;
	
	color: white;
	text-align: center;
		
	}
	.search-for button{
		padding: 1px 6px;
		width: 70px;
		height: 42px;
		border: 0;
		background: #FF69B4;
		color: white;
	}
	.area-section{
		margin: 0 auto;
		margin-top: 10px;
		width: 1035px;
	}
	.area-section img{
		width: 180px;
		height: 173px;
	}
	.area-section ul{
		display: flex;
		flex-wrap: wrap;
	}
	.area-section li{
		margin-right: 25px;
		margin-bottom: 30px;
		list-style: none;
		width: 180px;
		height: 290px;
		box-shadow: -2px 0px 4px rgba(0, 0, 0, .08), 0px 4px 4px rgba(0, 0, 0, .015), 2px 0px 4px rgba(0, 0, 0, .08);
	}
	.area-section li:hover{
		transform: scale(1.04);
		box-shadow: -2.5px 0px 30px rgba(0, 0, 0, .08), 0px 4.5px 30px rgba(0, 0, 0, .015), 2.5px 0px 30px rgba(0, 0, 0, .08);
		
	}
	.area-section .area-title{
		width: 100%;
		height: 30px;
		text-align: center;
		}
		.area-descibe{
			width: 100%;
			height: 22px;
		}
		.area-descibe span{
			padding: 0 3px;
			font-size: 12px;
		}
		.area-join{
			margin-top: 15px;
			margin-left: 44px;
			margin-right: 44px;
			width: 90px;
			height: 30px;
			border: 1px solid orange;
			border-radius: 25px;
			text-align: center;
			color: #FFA500;
		}
</style>
