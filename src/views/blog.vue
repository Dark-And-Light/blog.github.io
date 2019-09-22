<template>
    <div class="blog">
        <div class="title_wen">
            <div class="img">
                <img src="../assets/images/title_2.jpg">
            </div>
            <div class="wen">
                <p class="wenTitle">你我的故事-博客日志</p>
                <p>花开了，我便画花。花谢了，我便画我自己。你来了，我当然画你。你走了，我便画一画回忆。——电线《香蜜沉沉烬如霜》</p>
                <div class="span">
                    <span>文章数：<i>9</i></span>
                    <span>标签数：<i>10</i></span>
                </div>
            </div>
        </div>
        <div class="Label">
            <p>文章分类：</p>
            <ul>
                <li class="test" 
                v-for="(item, index) in label" 
                :key="index"
                @click="tabLabel(item)">{{item}}</li>
            </ul>
        </div>
        <blogwen :datas="this.data"></blogwen>
    </div>
</template>
<script>
import blogwen from '../components/LatestBlog'
import blogData from '../assets/data/blogwen'
export default {
    data() {
        return {
            data:[],
            label:[]
        }
    },
    created() {
        blogData.forEach((item,index)=>{
            if(index<5){
                this.data.push(item)
            }
            return  
        })
        blogData.forEach(item=>{
            this.label.push(item.label)
        })
       this.label =  this.quique(this.label);
    },
    methods: {
        tabLabel(i){
            this.data = []
            blogData.forEach(itme=>{
                if(itme.label == i ){
                    this.data.push(itme)
                }
            })
        },
        //去重
        quique(arr){
                for(var i=0; i<arr.length; i++){
                for(var j=i+1; j<arr.length; j++){
                    if(arr[i]==arr[j]){         //第一个等同于第二个，splice方法删除第二个
                        arr.splice(j,1);
                        j--;
                    }
                }
            }
            return arr;
        }
    },
    components:{
        blogwen
    }
}
</script>
<style lang="less" scope>
.blog{
    padding-top: 20px;
    width: 80%;
    margin: 0 auto;
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
    .Label{
        position: relative;
        margin-top:20px;
        background: white;
        width: 100%;
        border-radius: 4px;
        display: flex;
        align-items: center;
        padding: 20px;
        box-sizing: border-box;
        border: 1px solid #cccccc;
        ul{
            display: flex;
            li{
                margin: 0 5px;
            }
        }
        .test{
            display: block;
            width: 90px;
            height: 30px;
            background: linear-gradient(90deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
            background-size: 400%;
            text-align: center;
            line-height: 30px;
            border-radius: 15px;
            color:white;
            box-sizing: border-box;
            position: relative;
            z-index: 1;
        }
        .test:hover{
             animation: myMove 8s linear infinite;
        }
        .test::before{
            content: '';
            position: absolute;
            top:-5px;
            left: -5px;
            bottom: -5px;
            right: -5px;
            z-index: -1;
            background: linear-gradient(90deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
            background-size: 400%;
            border-radius: 20px;
            opacity: 0;
            transition: all ease 0.5s;
        }
        .test:hover::before{
            opacity: 1;
            filter: blur(5px);
            animation: myMove 8s linear infinite;
        }
        @keyframes myMove {
            0%{
                background-position: 0%;
            }
            100%{
                background-position: 400%;
            }
        }
    }
} 
</style>