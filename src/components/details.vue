<template>
    <div class="details">
         <div class="title_wen">
            <div class="img">
                <img src="../assets/images/title_1.jpg">
            </div>
            <div class="wen">
                <p class="wenTitle">你我的故事-博客日志</p>
                <p> 如果在这里退缩了一步 那么过去那些重要的誓言 约定 就全部会消失不见 而我也无法回到这里了。——《海贼王》——索隆</p>
                <!-- <div class="span">
                    <span>文章数：<i>9</i></span>
                    <span>标签数：<i>10</i></span>
                </div> -->
            </div>
        </div>
        <div class="info">
            <h2>{{details.title}}</h2>
            <div class="content" v-html="details.content"></div>
        </div>
        
    </div>
</template>
<script>
import blogwen from '../assets/data/blogwen'
export default {
    data() {
        return {
            id:this.$route.params.id,
            details:[]
        }
    },
    created() {
        blogwen.forEach(item=>{
            if(item.id == this.id){
                this.details = item
                return
            }
        })
    },
}
</script>
<style lang="less" scope>
  .details{
      width: 80%;
      box-sizing: border-box;
      background: white;
      margin: auto;
      .title_wen{
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
        background: white;
        border: #cccccc solid 1px;
        transition: all ease 1s;
        display: flex;
        align-items: center;
        justify-content: space-around;
        .img{
            width: 34%;
            img{
                width: 100%;
                height: 185px;
            }
        }
        p{
            font-size: 16px;
            margin-bottom: 5px;
        }
        .wen{
            width: 62%;
            .wenTitle{
                font-size: 18px;
                margin-bottom: 10px;
            }
            .span span{
                padding: 3px 5px 3px 0px;
                margin-right: 20px;
                font-size: 16px;
                i{
                    color: red;
                }
            }
        }
        
    }
    .title_wen:hover{
        box-shadow: 2px 0 20px #cccccc;
    }
    .info{
        padding: 20px;
         h2{
            text-align: center;
        }
        .content{
            p{
                text-indent: 2em;
            }
        }
    }
  }  
</style>