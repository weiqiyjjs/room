/**
 * Created by Administrator on 2016/12/7.
 */
$(function () {
    var bodyScroll = 0;

    //计算滚动位置
    var communityScroll = $("#community").scrollTop();
    var exampleScroll = $("#example").scrollTop();
    var pluginScroll = $("#plugin").scrollTop();

    //页面完成时使用瀑布流方式加载
    fall();

    //计算左侧导航栏高度
    $("nav.nav_left").height($(window).height());

    //窗口大小改变以后重新计算大小
    $(window).resize(function () {
        $("nav.nav_left").height($(window).height());
        fall();
    });

    ////鼠标滑动事件
    //$(window).scroll(function(){
    //    bodyScroll = $(document).scrollTop();
    //    if(bodyScroll>=communityScroll && bodyScroll<=(communityScroll+$("#community").height())){
    //        $("#nav_community").closest("li").addClass("nav_current").siblings().removeClass("nav_current");
    //    }else if(bodyScroll>=exampleScroll && bodyScroll<=(exampleScroll+$("#example").height())){
    //        $("#nav_example").closest("li").addClass("nav_current").siblings().removeClass("nav_current");
    //    }else if(bodyScroll>=pluginScroll && bodyScroll<=(pluginScroll+$("#plugin").height())){
    //        $("#nav_plugin").closest("li").addClass("nav_current").siblings().removeClass("nav_current");
    //    }
    //});

    //瀑布流方式显示
    function fall(){
        fallFunction("css3Show");
        fallFunction("canvasShow");
        fallFunction("jsShow");
    }

    //传入id加载局部瀑布流
    function fallFunction(id){
        var length = $("#"+id).find(".example").length;
        var pWidth = $("#"+id).width();
        var cWidth = $(".example").width()+10;
        var size = parseInt(pWidth/cWidth);
        var imgSize = [];
        for(var i = 0;i<length;i++){
            if(i<size){
                imgSize[i] = $($("#"+id).find(".example").get(i)).height()+20;
                console.log(imgSize[i]);
            }else{
                var minHeight = Math.min.apply(null,imgSize);
                var min = getMin(imgSize,minHeight);
                $($("#"+id).find(".example").get(i)).css({
                    "position":"absolute",
                    "top":minHeight+"px",
                    "left":min*cWidth+20+"px"
                });
                imgSize[min] = imgSize[min]+$($("#"+id).find(".example").get(i)).height()+10;
            }
            if(i===length-1){
                $("#"+id).height(Math.max.apply(null,imgSize));
                console.log($("#"+id).height(Math.max.apply(null,imgSize)));
            }
        }
    }

    //获取数组中最小值
    function getMin(arr,value){
        for(var i = 0;i<arr.length;i++){
            if(arr[i] === value){
                return i;
            }
        }
    }

    //左侧导航栏交互效果
    $("nav.nav_left ul li a").each(function () {
        $(this).on("click", function () {
            $(this).closest("li").addClass("nav_current").siblings().removeClass("nav_current");
        });
    });

    //点击导航时滚动
    $("#nav_community").on("click",function(){
        event.preventDefault();
        var tar = getScroll("community");
        $("body").animate({
            scrollTop:tar
        },500)
    });
    $("#nav_example").on("click",function(){
        event.preventDefault();
        var tar = getScroll("example");
        $("body").animate({
            scrollTop:tar
        },500);
    });
    $("#nav_plugin").on("click",function(){
        event.preventDefault();
        var tar = getScroll("plugin");
        $("body").animate({
            scrollTop:tar
        },500);
    });

    //根据id获取该div距离网页最顶部的高度
    function getScroll(id){
        var t = document.getElementById(id);
        var b = document.getElementsByTagName("body")[0];
        var top = 0;
        top = t.offsetTop;
        while(t !== b){
            t = t.offsetParent;
            top+= t.offsetTop;
        }
        return top;
    }
})