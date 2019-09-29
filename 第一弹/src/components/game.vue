<template>
	<div class="game">
		
		<div class="head">
			<img src="http://localhost:8888/imgs/gameimgs/head.jpg" alt="">
		</div>
		<div class="game-diff">
			<span class="s0">游戏中心</span>
			<span>游戏版区</span>
		</div>
		<div class="game-once">
			<div class="rec_top">
				<span>今日推荐</span>
			</div>
			<div class="rec-list">
			<ul>
				<li v-for="item in 4">
					<a href="">
						<img src="http://localhost:8888/imgs/gameimgs/game.jpg" alt="">
					</a>
					<p class="gamename">牧羊人之心</p>
					<p class="p1">123890人正在讨论>></p>
					<div class="download-game">下载游戏</div>
				</li>
			</ul>
		</div>
		</div>
		<div class="game-sort">
			<div class="rec_top">
				<span>精品排行</span>
			</div>
			<ul>
				<li><p>1</p>
					<div class="gamerange1"></div>
					<div class="left-img">
						<img src="http://localhost:8888/imgs/gameimgs/muyangrenzhixin.png" alt="">
					</div>
					<div class="right-area">
						<div class="title">牧羊人之心</div>
						<div class="labble">
							<span class="s1">休闲</span>
							<span class="s2">魔物娘</span>
							<span class="s3">模拟经营</span>
							<span class="s4">RPG</span>
						</div>
						<div class="pc-intr">游戏介绍：陈坤代言，Fate系列首款正版手游</div>
						<div class="more"><span class="s1">版区论坛</span>123890人正在讨论该游戏</div>
					</div>
				<div class="download-game2">下载游戏</div>
				</li>
				
				<li>
					<p>2</p>
					<div class="gamerange1" style="border-top: 25px solid rgb(164,87,255);border-left: 25px solid rgb(164,87,255);"></div>
					<div class="left-img">
						<img src="http://localhost:8888/imgs/gameimgs/muyangrenzhixin.png" alt="">
					</div>
					<div class="right-area">
						<div class="title">阴阳师</div>
						<div class="labble">
							<span class="s1">和风</span>
							<span class="s2">半即时</span>
							<span class="s3">回合制</span>
							<span class="s4">RPG</span>
						</div>
						<div class="pc-intr">游戏介绍：阴阳师官方正版手游</div>
						<div class="more"><span class="s1">版区论坛</span>123890人正在讨论该游戏</div>
					</div>
					<div class="download-game2">下载游戏</div>
				</li>
				<li>
					<p>3</p>
					<div class="gamerange1" style="border-top: 25px solid rgb(91,203,10);border-left: 25px solid rgb(91,203,10);"></div>
					<div class="left-img">
						<img src="http://localhost:8888/imgs/gameimgs/muyangrenzhixin.png" alt="">
					</div>
					<div class="right-area">
						<div class="title">少女咖啡枪</div>
						<div class="labble">
							<span class="s1">休闲</span>
							<span class="s2">魔物娘</span>
							<span class="s3">模拟经营</span>
							<span class="s4">RPG</span>
						</div>
						<div class="pc-intr">游戏介绍：陈坤代言，Fate系列首款正版手游</div>
						<div class="more"><span class="s1">版区论坛</span>123890人正在讨论该游戏</div>
					</div>
					<div class="download-game2">下载游戏</div>
				</li>
				<li>
					<p>4</p>
					<div class="gamerange1" style="border-top: 25px solid rgb(192,192,192);border-left: 25px solid rgb(192,192,192);"></div>
					<div class="left-img">
						<img src="http://localhost:8888/imgs/gameimgs/muyangrenzhixin.png" alt="">
					</div>
					<div class="right-area">
						<div class="title">捉妖手机</div>
						<div class="labble">
							<span class="s1">休闲</span>
							<span class="s2">魔物娘</span>
							<span class="s3">模拟经营</span>
							<span class="s4">RPG</span>
						</div>
						<div class="pc-intr">游戏介绍：陈坤代言，Fate系列首款正版手游</div>
						<div class="more"><span class="s1">版区论坛</span>123890人正在讨论该游戏</div>
					</div>
					<div class="download-game2">下载游戏</div>
				</li>
				<li>
					<p>5</p>
					<div class="gamerange1" style="border-top: 25px solid rgb(192,192,192);border-left: 25px solid rgb(192,192,192);"></div>
					<div class="left-img">
						<img src="http://localhost:8888/imgs/gameimgs/muyangrenzhixin.png" alt="">
					</div>
					<div class="right-area">
						<div class="title">异次元战姬</div>
						<div class="labble">
							<span class="s1">休闲</span>
							<span class="s2">魔物娘</span>
							<span class="s3">模拟经营</span>
							<span class="s4">RPG</span>
						</div>
						<div class="pc-intr">游戏介绍：陈坤代言，Fate系列首款正版手游</div>
						<div class="more"><span class="s1">版区论坛</span>123890人正在讨论该游戏</div>
					</div>
					<div class="download-game2">下载游戏</div>
				</li>
				
			</ul>
		</div>	
		<div class="game-center-all">
			<div class="rec_top">
						        <span class="s1">全部游戏</span>
						    </div>
		<div class="game-sorts">
			<p>所有游戏</p>
			<ul>
				
				<li v-for="item in allGames" :key='item'>{{item}}</li>
			</ul>
			
		</div>
		</div>	
		
		
	
	</div>
</template>

<script>
	export default {
		name:'game',
		data:function(){
			return {
				allGames:[
					'永远的7日之都',
					'妖刀少女异闻录',
					'料理次元',
					'三国罗曼史',
					'神无月',
					'零界点',
					'诺亚幻想',
					'魔法禁书目录',
					'神域召唤',
					'如果的世界',
					'宝石研物语',
					'夏日甜心',
					'城与龙',
					'黑晶少女',
					'斩魔无双'
				]
			}
		}
	}
</script>

<style scoped="scoped">
	.game{
		width: 1000px;
		height: 1000px;
		margin: 0 auto;
	}
	.gamebox{
		float: left;
		width: 100%;
		
	}
	.head{
		float: left;
		width: 100%;
		height: 350px;
	}
	.head img{
		width: 100%;
		height: 350px;
	}
	.game-diff{
		float: left;
		width: 100%;
		height: 60px;
		border-bottom: 1px solid black;
	}
	.game-diff span{
		display: inline-block;
		width: 103px;
		height: 60px;
		line-height: 60px;
		text-align: center;
	}
	.game-diff .s0{
		background: rgb(253,76,134);
		color: white;
	}
	.game-once{
		float: left;
		width: 1000px;
		height: 275px;
		padding-bottom: 40px;
	}
	.game-once li{
		box-shadow: 0 2px 4px 0 rgba(222, 193, 193, 0.5);;
	}
	.rec_top{
		width: 975px;
		height: 55px;
		padding-left: 25px;
	}
	.rec_top span{
		display: inline-block;
		width: 76px;
		height: 54.4px;
		text-align: center;
		line-height: 54.4px;
	}
	.rec-list{
		width: 1000px;
		height: 220px;
		float: left;
	}
	.rec-list li{
		position: relative;
		list-style: none;
		float: left;
	margin-left: 20px;
		width: 225px;
		height: 220px;
	}
	.rec-list li .download-game{
		display: none;
		position: absolute;
		width: 100px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		right: 0px;
		bottom: 29px;
		background: orange;
	}
	.rec-list li:hover .download-game{
		display: block;
	}
	.rec-list li img{
		width: 225px;
		height: 150px;
	}
	.gamename{
		
		width: 225px;
		height: 44px;
		line-height: 44px;
		padding-left: 10px;
		box-sizing: border-box;
		font-size: 14px;
	}
	.p1{
		width: 215px;
		height: 26px;
		padding-left: 10px;
		line-height: 26px;
		font-size: 12px;
		color:rgb(131,131,131) ;
	}
	.game-sort{
		float: left;
		width: 1000px;
		height: 888.8px;
		padding-bottom: 30px;
		
	}
	.game-sort li{
		position: relative;
		float: left;
		width: 958px;
		height: 159px;
		margin-left: 20px;
		background: rgb(251,251,251);
		border-bottom: 1px solid rgb(244,244,244);
	}
	.game-sort li .download-game2{
		width: 100px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		border-radius: 5px;
		background: rgb(255,202,59);
		position: absolute;
		right: 30px;
		bottom: 50px;
	}
	.gamerange1{
		width: 0;
		height: 0;
		position: absolute;
		left: 0;
		top: 0;
		border-top: 25px solid rgb(255,200,51);
		border-left: 25px solid rgb(255,200,51);
	border-right:25px solid transparent;
	border-bottom:25px solid transparent;
	z-index: 1;
	}
	.game-sort li>p{
		width: 25px;
		height: 25px;
		position: absolute;
		text-align: center;
		line-height: 25px;
		color: white;
		left: 0;
		top: 0;
		z-index: 2;
	}
	.game-sort li img{
		width: 110px;
		height: 110px;
	}
	.left-img{
		float: left;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 160px;
		height: 160px;
		line-height: 160px;
	}
	.game-sort .right-area{
		float: left;
		width: 602px;
		height: 109px;
		padding-top: 20px;
	}
	.game-sort .right-area .title{
		font-weight: bold;
		}
	.labble{
		float: left;
		width: 602px;
		height: 23.4px;
		margin-top: 6px;
	}
	.labble .s2{
		border-color: rgb(227,119,228);
	}
	.labble .s3{
		border-color: orange;
	}
	.labble .s4{
		border-color: cornflowerblue;
	}
	.labble span{
		border: 1px solid orangered;
		border-radius: 15px;
		padding: 2px 6px;
	font-size: 12px;
		margin-right: 10px;
	}
	.pc-intr{
		width: 580px;
		height: 30px;
		float: left;
		margin-top: 8px;
		font-size: 12px;
	}
	.more{
		float: left;
		width: 602px;
		height: 20px;
		font-size: 12px;
		color: rgb(253,76,134);
	}
	.game-center-all{
		float: left;
		width: 1000px;
		height: 271px;
		padding-bottom: 30px;
		margin: 10px 0;
	}
	.game-sorts{
		float: left;
		width: 958px;
		height: 203px;
		border: 1px solid orange;
		margin: 0 20px;
		background: rgb(244,244,244);
	}
	.game-sorts p{
		padding-left: 10px;
		width: 100%;
		height: 50px;
		line-height: 50px;
	}
	.game-sorts li{
		float: left;
		width: 190.5px;
		height: 50px;
		border-top: 1px solid white;
		 border-right: 1px solid white;
		 text-align: center;
		 line-height: 50px;
		 color: rgb(85,26,139);
		 font-size: 14px;
	}
	.game-sorts li:nth-child(5n){
		 border-right: 0;
		 
		
	}
</style>
