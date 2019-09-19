<template>
  <div id="app">
		<header>
			<div class="navBox">
				<h3 class="logo">向朋的个人主页</h3>
				<nav>
					<ul>
						<li><router-link to="/">主页</router-link></li>
						<li><router-link to="">个人博客</router-link></li>
						<li><router-link to="/about">关于我</router-link></li>
					</ul>
				</nav>
			</div>
		</header>
		<article>
			<router-view/>
		</article>
  </div>
</template>

<style lang="less" scope>
#app{
	width: 100%;
}
.navBox{
	width: 96%;
	display: flex;
	margin: 0 auto;
}
.logo{
  margin-right: 60px;
  font-size: 22px;
  line-height: 50px;
  font-weight: normal;
}
header{
	width: 100%;
    padding: 5px 0;
    background: #1C2327;
    height: 50px;
    color: white;
}
header::before {
    background: #000 linear-gradient(90deg, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
    content: "";
    height: 5px;
    position: absolute;
    top: 0;
    width: 100%;
}
header a{
  color: white;
}
nav ul{
	display: flex;
}
nav li{
	padding: 0 10px;
	font-size: 15px;
}
nav a{
	line-height: 50px;
}
article{
  width: 1200px;
  margin: 20px auto 0;
  display: flex;
  justify-content: space-between;
}
</style>
