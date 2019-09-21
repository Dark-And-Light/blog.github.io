<template>
    <div class="siteInfo">
        <h3>站点信息</h3>
        <p><strong>建站时间</strong>：2019-9-17</p>
        <p><strong>主题模板：</strong>样式手敲代码仿制杨青青博客</p>
        <p><strong>文章统计：</strong>32篇文章</p>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less">
   .siteInfo {
       background: white;
       padding: 20px;
       margin-top: 20px;
       width: 100%;
       box-sizing: border-box;
       box-shadow: 2px 2px 10px #cccccc;
       h3{
            border-bottom: 1px solid #cccccc;
            line-height: 40px;
            height: 40px;
            width: 100%;
            margin-bottom: 10px;
       }
       h3::after{
           display: block;
            content: '';
            width: 60px;
            background: #000;
            height: 2px;
            transition: all ease 2s;
       }
       h3:hover::after{
            display: block;
            content: '';
            width: 100px;
            background: #000;
            height: 2px;
       }
       p{
           line-height: 30px;
       }
   }
</style>