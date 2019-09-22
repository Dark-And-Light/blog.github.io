<template>
  <div class="home">
	  <div class="left">
			<div class="swiper">
				<el-carousel indicator-position="none">
					<el-carousel-item v-for="(item,index) in swiper" :key="index">
					<img :src="item.src">
					</el-carousel-item>
				</el-carousel>
			</div>
			<ul class="img_row">
				<li>
					<a href="javascript:;">
						<img src="../assets/images/img_row1.jpg" alt="为什么说10月24日是程序员的节日？">
						<span>为什么说10月24日是程序员的节日？</span>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<img src="../assets/images/img_row2.jpg" alt="个人网站做好了，百度不收录怎么办？来，看看他们怎么做的。">
						<span>个人网站做好了，百度不收录怎么办？来，看看他们怎么做的。</span>
					</a>
				</li>
			</ul>
			<blogwen :datas="this.newBlog"></blogwen>
	  </div>
	  <div class="right">
			<div class="card">
				<h2>我的名片</h2>
				<p>GitHub：Dark-And-Light</p>
				<p>现&nbsp;&nbsp;住：湖北-黄石</p>
				<p>Email：327271162@qq.com</p>
				<p>职&nbsp;&nbsp;业：</p>
				<ul class="linkicon">
					<li>
						<a href="" class="my-icon-house__easyic" title="网站主页"></a>
					</li>
					<li>
						<a href="" class="my-icon-youxiang" title="我的邮箱"></a>
					</li>
					<li>
						<a href="" class="my-icon-qq" title="QQ联系我"></a>
					</li>
					<li>
						<a href="" class="my-icon-weixin" title="我的微信"></a>
					</li>
				</ul>
			</div>
			<music></music>
			<siteinfo :number="number"></siteinfo>
	  </div>
  </div>
</template>

<script>
import blogwen from '../components/LatestBlog.vue'
import music from '../components/Music.vue'
import siteinfo from '../components/siteInfo.vue'
import blogData from '../assets/data/blogwen.js'
export default {
	data() {
		return {
			swiper:[
				{src:require('../assets/images/img_row1.jpg')},
				{src:require('../assets/images/img_row2.jpg')}
			],
			newBlog:[],
			number:0
		}
	},
	created() {
		blogData.forEach((item,index)=>{
			this.number = index+1;
			if(index<4){
				this.newBlog.push(item)
			}
		})
	},
	components:{
		blogwen,
		music,
		siteinfo
	}
}
</script>
<style lang="less" scope>
.home{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
.el-carousel__container {
    position: relative;
    height: 260px !important;
}
.el-carousel__item:nth-child(2n) {
background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
background-color: #d3dce6;
}
.left{
	width: 75%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: wrap;
}
.left img{
	width: 100%;
	height: 100%;
	border-radius: 4px;
}
.right{
  width: 23.5%;
}
.swiper{
 	width: 68.5%;
	height: 260px;
	border-radius: 4px;
}
.img_row{
	width: 30%;
	height: 260px;
}
.img_row li{
	width: 100%;
	height: 125px;
	margin-bottom: 10px;
	border-radius: 4px;
	position: relative;
	transition: all ease-in-out 0.5s;
}
.img_row li:hover{
	transform: scale(1.05);
}
.img_row li span{
	position: absolute;
	top: 30%;
	color: white;
	padding: 0 40px;
	overflow: hidden;
	text-overflow: ellipsis;
	-webkit-box-orient: vertical;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	line-height: 24px;
	height: 48px;
}
.card{
	box-shadow: 0px 1px 0px rgba(255,255,255,.1), inset 0px 1px 1px rgba(0,0,0,.7);
    border-radius: 3px;
    background: url('../assets/images/car.png') no-repeat top right rgba(42,42,42,1);
    height: 260px;
    overflow: hidden;
    margin-bottom: 20px;
}
.card h2 {
    font-size: 22px;
    margin: 10px;
    color: #89919a;
    font-weight: normal;
    padding-bottom: 10px;
}
.card p {
	font-size: 12px;
	padding: 0 0 0 20px;
	line-height: 28px;
	text-shadow: 0px 1px 2px rgba(0,0,0,.5);
	color: #d0d2d4;
	-webkit-animation: animations2 5s ease-in-out 5s;
	-moz-animation: animations2 5s ease-in-out 5s;
	-o-animation: animations2 5s ease-in-out 5s;
	-ms-animation: animations2 5s ease-in-out 5s;
	animation: animations2 5s ease-in-out 5s;
}
.linkicon{
	display: flex;
	justify-content: space-around;
	margin: 15px;
}
.linkicon li{
	width: 25%;
}
.linkicon li a{
	display: block;
	height: 54px;
    overflow: hidden;
    box-shadow: 0px 1px 0px rgba(255,255,255,.1), inset 0px 1px 1px rgba(0,0,0,.7);
    border-radius: 50%;
	margin: 0 5px;
}
</style>