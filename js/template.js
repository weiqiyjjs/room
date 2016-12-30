/**
 * Created by Administrator on 2016/12/30.
 * author :卫旗
 */
//定义模板
Vue.component("example", {
    template: "#example-demo",
    props: ["a"],
});
var app = new Vue({
    el: "#app",
    data: {
        //国内综合
        zonghe: [
            {
                src: "https://www.w3ctech.com/", des: "w3ctech"
            },
            {
                src: "http://www.w3cplus.com/", des: "w3cplus"
            }
            ,
            {
                src: "http://www.qdfuns.com/", des: "w3cfuns"
            }
            ,
            {
                src: "http://www.html-js.com/", des: "前端乱炖"
            }
            ,
            {
                src: "https://www.qianduan.net/", des: "前端观察"
            }
            ,
            {
                src: "https://segmentfault.com/", des: "segmentfault"
            }
            ,
            {
                src: "http://www.html5tricks.com/", des: "html5tricks"
            }
            ,
            {
                src: "http://isux.tencent.com/", des: "腾讯ISUX"
            }
            ,
            {
                src: "http://efe.baidu.com/", des: "百度EFE"
            }
            ,
            {
                src: "http://www.75team.com/weekly/", des: "奇舞团"
            }
            ,
            {
                src: "http://www.yyyweb.com/", des: "前端里"
            }
            ,
            {
                src: "http://div.io/#/welcome", des: "div.io"
            }
            ,
            {
                src: "http://www.css88.com/", des: "web前端开发"
            }
            ,
            {
                src: "http://caibaojian.com/", des: "前端开发博客"
            }
            ,
            {
                src: "http://wx.h5.vc/", des: "爱奇舞-H5.vc"
            }
            ,
            {
                src: "http://www.kancloud.cn/explore", des: "看云"
            }
            ,
            {
                src: "http://www.hubwiz.com/", des: "汇智网"
            }
            ,
            {
                src: "http://blog.jobbole.com/", des: "伯乐在线"
            }
        ],
        //问答社区
        wenda: [
            {
                src: "https://www.zhihu.com/", des: "知乎"
            }
        ],
        //每日最新
        zuixin: [
            {src: "http://gold.xitu.io/", des: "稀土掘金"},
            {src: "https://toutiao.io/", des: "开发者头条"},
            {src: "http://geek.csdn.net/", des: "极客头条"},
            {src: "http://hao.caibaojian.com/", des: "开发头条"}
        ],
        //前端大神
        dashens: [
            {
                src: "http://www.liaoxuefeng.com/",
                des: "廖雪峰"
            },
            {
                src: "http://www.ruanyifeng.com/blog/",
                des: "阮一峰"
            },
            {
                src: "http://www.zhangxinxu.com/wordpress/",
                des: "张鑫旭"
            },
            {
                src: "https://yuguo.us/weblog/",
                des: "余果"
            },
            {
                src: "http://www.cnblogs.com/Darren_code/",
                des: "聂微东"
            },
            {
                src: "http://jiongks.name/all-slides/",
                des: "勾三股四"
            },
            {
                src: "http://www.cnblogs.com/rubylouvre/",
                des: "司徒正美"
            },
        ],
        //前端教程
        jiaocheng:[
            {
                src:"http://www.imooc.com/",des:"慕课网"
            }
        ],
        //CSS实例
        cssexams: [
            {
                eClass: "panda_img",
                eSrc: "example/CSS3/panda.html",
                eHead: "大熊猫",
                eDesc: "这是一个由CSS3绘制的大熊猫，很萌的呦"
            },
            {
                eClass: "bike_img",
                eSrc: "example/CSS3/bike.html",
                eHead: "自行车",
                eDesc: "由CSS3绘制的自行车，使用CSS3动画，看上去自行车一直在转动"
            },
            {
                eClass: "rback_img",
                eSrc: "example/CSS3/background.html",
                eHead: "多背景变换",
                eDesc: "多个背景逐渐变换的效果，使用CSS3动画，效果很炫"
            },
            {
                eClass: "cube_img",
                eSrc: "example/CSS3/cube.html",
                eHead: "3D立方体",
                eDesc: "利用CSS3的3D转换制作一个立方体，再使用动画让立方体动起来"
            },
            {
                eClass: "photo_img",
                eSrc: "example/CSS3/photo.html",
                eHead: "3D相册",
                eDesc: "利用CSS3的3D转换制作的一个3D相册，再使用动画动起来"
            }
        ],
        //canvas实例
        canvasexams: [
            {
                eClass: "lizi_img",
                eSrc: "example/canvas/炫酷的粒子连线.html",
                eHead: "炫酷的例子连线",
                eDesc: "使用canvas绘制的很炫酷的粒子连线"
            },
            {
                eClass: "loading_img",
                eSrc: "example/canvas/loading.html",
                eHead: "百分比加载动画",
                eDesc: "使用canvas绘制的可以百分比显示的动态加载动画"
            },
            {
                eClass: "lizidonghua_img",
                eSrc: "example/canvas/粒子动画.html",
                eHead: "粒子网格动画",
                eDesc: "使用canvas绘制粒子网格动画"
            },
            {
                eClass: "worddrop_img",
                eSrc: "example/canvas/worddrop.html",
                eHead: "黑客帝国",
                eDesc: "使用canvas完成类似黑客帝国中的文字掉落效果"
            }
        ],
        //js实例
        jsexams: [
            {
                eClass: "fall1_img",
                eSrc: "example/jsexample/瀑布流.html",
                eHead: "瀑布流示例",
                eDesc: "使用js完成瀑布流效果"
            },
            {
                eClass: "fall2_img",
                eSrc: "example/jsexample/瀑布流无限加载图片.html",
                eHead: "图片瀑布流",
                eDesc: "使用js完成瀑布流效果，并且可以无限加载图片"
            },
            {
                eClass: "xuehua_img",
                eSrc: "example/jsexample/雪花飞舞效果.html",
                eHead: "雪花效果",
                eDesc: "使用js模拟雪花飞舞的效果"
            },
            {
                eClass: "divmove_img",
                eSrc: "example/jsexample/divmove.html",
                eHead: "拖动效果",
                eDesc: "适配移动端的拖动效果，可在Chrome下模式移动端设备测试"
            }
        ]

    }
});
