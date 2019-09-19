let blog_wen = [
    {
        title:"在Vue中使用audio遇到的情况想法以及解决过程的岔路",
        img_url:require('../images/img_row1.jpg'),
        first:"在之前的项目中极少涉及到多媒体相关的使用,这是设计博客,能想到的样式太少,就想到在页面设计一个类似于网易云音乐的样式,开始的时候想到的是Vue中的refs属性来获取到audio的属性和方法,后来在做的过程中也验证了思路是没错的,但是audio在Vue中似乎有属于他的方法才能实现音乐播放过程及结束时调用",
        content:""
    },
    {
        title:"由Vue/cli③创建的Vue项目本地图片同过动态绑定会出现图片不显示也不报错的问题",
        img_url:require('../images/img_row2.jpg'),
        first:"以前使用webpack创建的项目使用本地图片资源未出现这样的情况,连图片404都没有显示,就我在控制台看到的信息并未报错任何错误,目前只找一个解决办法require('图片地址'),并且发现(目前在开发环境中看到的)查看的图片地址的url发生了改变变成img/img/的地址",
        content:""
    }
]
export default blog_wen;