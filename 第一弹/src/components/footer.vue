<template>
	<div class="foot">
		<div class="footabout">
			
			<p class="foot-title">| &nbsp;关于我们</p>
			<p class="footabout-line">
				<a href="">申请认证</a>
				<a href="">联系我们</a>
				<a href="">免责声明</a>
				<a href="">未成年人家长监护工程</a>
				<a href="">账号注销</a>
			</p>
			<p class="footabout-line">
				<span>品牌合作：wuping@diyidan.com</span>
			</p>
			<p class="footabout-line">
				<a href=""><img src="//www-static.diyidan.com/static/image/culture-logo.png?v=e4ecd90b7a40df069898e30fc16d08ee" alt="">
				<span>沪网文[2017]1878-076号</span>
				</a>
				<span>沪ICP备17004397号-1</span>
			</p>
			<p class="footabout-line">
				<a href=""><img src="//www-static.diyidan.com/static/image/police.png?v=b769e8dfde5660239317ed60758dba13" alt="">
				<span>沪公网安备 31011202001517号</span>
				</a>
				
			</p>
			<p class="footabout-line"><span>不良信息举报邮箱：jubao@diyidan.com</span></p>
			<p class="footabout-line">不良信息举报电话：0551-63823045</p>
		
		</div>
	<div class="footlink">
		<p class="foot-title">| 友情链接</p>
		<ul>
			<li>第一弹</li>
			<li>漫展吧</li>
			<li>SF轻小说</li>
			<li>网易漫画</li>
			<li>轻文轻小说</li>
			<li>布卡漫画</li>
			<li>猫耳FM</li>
			<li>知音漫客网</li>
			<li>漫客栈</li>
			<li>零界点</li>
			<li>轻之文库</li>
			<li>快看漫画</li>
			<li>豆腐</li>
			<li>KilaKila</li>
			<li>旅法师营地</li>
		</ul>
	</div>
	</div>
	<!-- <div class="copyright">
	  <div class="aboutUs">
	    <p class="title">关于我们</p>
	    <p class>
	      <span>
	        <a href="#">申请认证</a>
	      </span>
	      <span>
	        <a href="#">联系我们</a>
	      </span>
	      <span>
	        <a href="#">免责声明</a>
	      </span>
	      <span>
	        <a href="#">未成年人家长监护工程</a>
	      </span>
	      <span>
	        <a href="#">账号注销</a>
	      </span>
	    </p>
	    <p>
	      <span>
	        <a href="#">品牌合作：wuping@diyidan.com</a>
	      </span>
	    </p>
	    <p>
	      <span>
	        <a href="#">
	          <img class="culture-logo" src="../../img/图标/culture-logo.png" alt /> 沪网文[2107]1878-076号
	        </a>
	      </span>
	      <span>
	        <a href="#">沪ICP备17004397号-1</a>
	      </span>
	    </p>
	    <p>
	      <img class="police-logo" src="../../img/图标/police.png" alt /> 沪公网安备 310111202001517号
	    </p>
	    <p>不良信息举报邮箱：jubao@diyidan.com</p>
	    <p>不良信息举报电话：0551-63823045</p>
	    <div class="theEmail">
	      <img src="../../img/图标/int-info.png" alt />
	      <div>
	        <a href="#">上海市互联网违法和不良信息举报中心</a>
	      </div>
	    </div>
	  </div>
	  <div class="relatedLinks">
	    <p class="title">友情链接</p>
	    <div class="website">
	      <li>
	        <a href="#">第一弹</a>
	      </li>
	      <li>
	        <a href="#">漫展吧</a>
	      </li>
	      <li>
	        <a href="#">SF轻小说</a>
	      </li>
	      <li>
	        <a href="#">网易漫画</a>
	      </li>
	      <li>
	        <a href="#">轻文轻小说</a>
	      </li>
	      <li>
	        <a href="#">卡布漫画</a>
	      </li>
	      <li>
	        <a href="#">猫耳FM</a>
	      </li>
	      <li>
	        <a href="#">知音漫客网</a>
	      </li>
	      <li>
	        <a href="#">漫客栈</a>
	      </li>
	      <li>
	        <a href="#">零界点</a>
	      </li>
	      <li>
	        <a href="#">轻之文库</a>
	      </li>
	      <li>
	        <a href="#">快看漫画</a>
	      </li>
	      <li>
	        <a href="#">豆腐</a>
	      </li>
	      <li>
	        <a href="#">KilaKila</a>
	      </li>
	      <li>
	        <a href="#">旅法师营地</a>
	      </li>
	    </div>
	  </div>
	</div> -->
</template>

<script>
	export default{
		name:"Foot"
	}
</script>

<style scoped="scoped">
	.foot{
		width: 1000px;
		height: 274px;
		margin: 0 auto;
	}
	.footabout{
		width: 400px;
		height: 194px;
		float: left;
	}
	.foot-title{
		width: 100%;
		height: 20px;
		padding-top: 20px;
		padding-bottom: 10px;
	}
	.footabout-line{
		width: 384px;
		height: 24px;
		line-height: 24px;
		padding-left: 16px;
		font-size: 12px;
		}
		.footabout-line img{
			width: 20px;
			height: 20px;
		}
		.footabout-line a{
			text-decoration: none;
			color: #000000;
			margin-right: 10px;
			font-size: 12px;
		}
		.footlink{
			float: left;
			width: 600px;
			height: 122px;
			}
			.footlink li{
				list-style: none;
				float: left;
				width: 80px;
				height: 24px;
				line-height: 24px;
				font-size: 12px;
			}
			.footlink li:hover{
				color: red;
			}
</style>
