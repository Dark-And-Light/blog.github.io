<template>
  <div class="blogWen">
	  <h2>最新博文</h2>
	  <ul>
		  <router-link tag="li" to="" v-for="(item, index) in wenData" :key="index">
			  <h3 class="blogTitle">
				  <span>【顶】</span>
				  <a href="#">{{item.title}}</a>
			  </h3>
			  <div class="box">
				  <div class="blog_img">
					  <span><a href="javascript:;">设计心得</a></span>
					  <img :src="item.img_url">
				  </div>
				  <div class="blogText">
						<p class="text">
							{{item.first}}
						</p>
						<div class="blogInfo">
							<div class="avatar">
							<el-avatar :size="30" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
							</div>
							<p>2019-9-15</p>
							<p>【<a href="javascript:;">设计心得</a>】</p>
							<a href="#" class="r">阅读更多</a>
						</div>
				  </div>
			  </div>
		  </router-link>
	  </ul>
  </div>
</template>
<script>
export default {
	props:['datas'],
	data() {
		return {
			wenData:this.datas
		}
	},
	watch: {
		datas:function(newV){
			this.wenData = newV
		}
	}
}
</script>
<style scope>
.blogWen{
  width: 100%;
  margin-top:20px;
  border-radius: 6px;
  background: white;
  padding: 20px 20px 0 20px;
  box-sizing: border-box;
  border: #cccccc solid 1px;
}
.blogWen:hover{
	box-shadow: 2px 0 20px #cccccc;
}
.blogWen h2{
	font-size: 16px;
	line-height: 40px;
	border-bottom: 1px solid #eee;
	color: #484848;
	font-weight: normal;
	margin-bottom: 10px;
}
.blogWen h2::after{
	display: block;
	content: "";
	width: 60px;
	height: 2px;
	background: #000;
	transition: all ease 2s;
}
.blogWen h2:hover:after{
	display: block;
	content: "";
	width: 100px;
	height: 2px;
	background: #000;
}
.blogTitle{
	margin: 0 0 10px 0;
    font-size: 18px;
}
.blogTitle span {
    color: #F00;
}
.blogTitle a{
	color: #000;
}
.blogWen li{
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 20px;
	border-bottom: #ccc 1px dashed;
	padding-bottom: 20px;
	position: relative;
	min-height: 120px;
}
.blogWen li h3{
	width: 100%;
}
.blog_img{
	position: relative;
	width: 24%;
	border-radius: 2px;
	margin-right: 20px;
}
.blog_img img{
	width: 100%;
}
.blog_img span{
	position: absolute;
	top: 0;
	left: 0;
	width: 56px;
	height: 20px;
	padding: 3px 5px;
    background: rgba(18,182,221,.8);
    font-size: 14px;
}
.blog_img span a{
	font-size: 14px;
	line-height: 20px;
	color: white;
}
.blogText{
	width: 73%;
	font-size: 14px;
	color: #666;
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.text{
	text-indent: 2em;
	overflow: hidden;
	text-overflow: ellipsis;
	-webkit-box-orient: vertical;
	display: -webkit-box;
	-webkit-line-clamp: 3;
}
.box{
	display: flex;
	justify-content: space-between;
}
.blogInfo{
	display: flex;
	align-items: center;
	position: relative;
}
.avatar{
	border: 2px solid skyblue;
	border-radius:50%;
	height: 30px;
	width: 30px;
	margin-right: 15px;
}
.blogInfo p{
	margin: 0 5px; 
}
.r{
    right: 10px;
    bottom: 0;
    position: absolute;
    padding: 3px 10px;
    background: #12b7de;
    color: #fff;
    border-radius: 3px;
}
</style>