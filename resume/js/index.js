window.onload = function () {
    var mySwiper = new Swiper(".swiper-container",{
        scrollbar: '.swiper-scrollbar',
        direction:"vertical",
        pagination: '.swiper-pagination',

        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    });
    //音乐的播放
    var bBtn = true;
    $(".audio").click(function () {
        if(bBtn){
            $(".music1").css({animationPlayState:"paused"});
            $(".music2").css({display:"none"});
            bBtn = false;
        }else{
            $(".music1").css({animationPlayState:"running"});
            $(".music2").css({display:"block"});
            bBtn = true;
        }
    });
}
