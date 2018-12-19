layui.use(['carousel'], function() {
    var carousel = layui.carousel;
    //常规轮播
    carousel.render({
        elem: '#onAir',
        arrow: 'always',
        width:'100%',
        autoplay:true,
    });
});
// 案别分布图
distributeChart();
//案件处理情况图
dealStation();
// 趋势对比图
trendChart();

// 消息滚动
function scrollTips(){
    var $scrollLists = $('.notice-lists');
    var timer = null;
    $scrollLists.hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(function(){
            scrollNow($scrollLists);
        },1000);
    }).trigger('mouseleave');

    function scrollNow(){
        var height = $scrollLists.find('li:first').height();
        $scrollLists.stop().animate({
            marginTop:-height
        },800,function(){
            $scrollLists.css({
                marginTop:0
            }).find('li:first').appendTo($scrollLists);
        })
    }
}
scrollTips();
// 绩效排名
function scrollRank(){
    var $scrollLists = $('.ranking-table-body');
    var timer = null;
    $scrollLists.hover(function(){
        clearInterval(timer);
    },function(){
        timer= setInterval(function(){
            scrollNow();
        },1000);
    }).trigger('mouseleave');
    function scrollNow(){
        var height = $scrollLists.find('.ranking-row:first').height();
        $scrollLists.stop().animate({
            marginTop:-height,
        },1000,function(){
            $scrollLists.css({marginTop:0}).find('.ranking-row:first').appendTo($scrollLists);
        })
    }
}
scrollRank();
