<template>
	<div class="silderbox">
		<div class="back-top"><a href="#head">返回顶部</a></div>
		<div class="img"><img src="http://localhost:8888/imgs/rightsilder/siderbar.png" alt=""></div>
		<div class="download">点击下载</div>
		<div class="download">意见反馈</div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped="scoped">
	.silderbox{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 140px;
		height: 332px;
		position: fixed;
		right: 40px;
		top: 200px;
	}
	.silderbox img{
		width: 124px;
		height: 221px;
	}
	.back-top{
		width: 90px;
		height: 40px;
		background: rgb(253,76,134);
		line-height: 40px;
		text-align: center;
		color: white;
		border-radius: 5px;
		font-size: 14px;
		margin-bottom: 10px;
	}
	.back-top a{
		color: white;
		text-decoration: none;
	}
	.img{
		
	}
	.download{
		width: 90px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		color: white;
		
		font-size: 14px;
		background: rgb(253,76,134);
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
		margin-bottom: 10px;
	}
</style>
