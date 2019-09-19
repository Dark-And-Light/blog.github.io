<template>
  <div class="about">
	  <div class="top_box">
		  <div class="avatar_img">
			<img src="../assets/images/avater.jpg">
		</div>
		<h3>向&nbsp;&nbsp;朋</h3>
		<p>一个90后自学的草根</p>
		<p>欢迎您，来到我的个人博客，目前只是刚开始设计，以后会更新更多前端相关的问题已经解决办法</p>
	  </div>
	  <h2 class="gd_title">个人简介</h2>
	  <p class="jianjie">我是一个90后自学前端开发的学习者，19年开始了解前端开发。大学毕业后也找过电脑行业方面的工作，大多数公司以没有技术要求培训，说可以工作后再还费用，但是以我的了解十有九坑。后来也就没往这方面走，19年接触到一个在做开发相关的人，从他那里了解到前端开发的一些情况，后来开始自学，目前还有在当学徒的情况学习进度慢，一开始自学过程走了很多弯路，现在也是，刚开始想办法找视频学习，可惜当时不太懂找到的视频大多不全并且时间比较老，后来在一次巧合的情况在一个视频网站找到了很多很全的视频才开始算是正式的学习前端开</p>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
.about{
	overflow: hidden;
    background: url('../assets/images/abbg.png') no-repeat right top #fff;
    padding: 20px 40px;
	width: 100%;
	border-radius: 4px;
}
.avatar_img{
	position: relative;
    float: left;
    margin-right: 10px;
    background: -webkit-linear-gradient(bottom left, rgba(0,153,255,.9), rgba(42,228,197,.7));
    background: -o-linear-gradient(bottom left, rgba(0,153,255,.9), rgba(42,228,197,.7));
    background: linear-gradient(to top right, rgba(0,153,255,.9), rgba(42,228,197,.7));
    padding: 2px;
    width: 100px;
    border-radius: 50%;
}
.avatar_img img {
    width: 100%;
    border-radius: 50%;
}
.top_box {
    overflow: hidden;
    margin: 20px 0;
}
.top_box h3 {
    margin: 10px 0 10px;
    font-size: 18px;
}
.top_box p {
    color: #666;
    margin-bottom: 5px;
}
.gd_title {
    margin: 20px 0;
    font-size: 18px;
    background: url('../assets/images/hline.png') no-repeat bottom right;
    width: 120px;
    clear: both;
    background-size: 40px;
    border-bottom: #000 1px dashed;
    padding-left: 10px;
    padding-bottom: 5px;
    display: inline-block;
}
.jianjie{
	margin-bottom: 15px;
    display: inline-block;
}
.avatar_img::before{
	position: absolute;
    content: "";
    background: url('../assets/images/v.png') no-repeat;
    bottom: 0px;
    right: 10px;
    height: 24px;
    width: 24px;
    background-size: 24px;
}
</style>