/**
 * Created by Administrator on 2016/12/7.
 */
$(function () {
    //页面完成时使用瀑布流方式加载
    fall();

    //计算左侧导航栏高度
    $("nav.nav_left").height($(window).height());

    //窗口大小改变以后重新计算大小
    $(window).resize(function () {
        $("nav.nav_left").height($(window).height());
        fall();
    });

    //瀑布流方式显示
    function fall(){
        fallFunction("css3Show");
        fallFunction("canvasShow");
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
})