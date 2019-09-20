<template>
    <div class="footer">
        <div class="endnav">
            <h3>站点声明：</h3>
            <p>1、本博客网站暂时只做测试使用，不具有任何商业目的</p>
            <p>2、所使用素材图片若有侵权请联系我的邮箱：327271162@qq.com</p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scope>
.footer{
    background: #373D41;
    width: 100%;
    border-top: 10px solid #00C1DE;
    padding: 20px 20px 40px 20px;
    display: flex;
    justify-content: space-around;
    color:white;
    .endnav{
        h3{
            color: #00C1DE;
            margin-bottom: 5px;
        }
        p{
            margin-bottom: 5px;
            color: #73777a;
            font-size: 14px;
        }
    }
    
}
</style>