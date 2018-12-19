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
function scrollBlock(el,firstChild){
    var $scrollLists = $(el);
    var timer = null;
    $scrollLists.hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(function(){
            scrollNow($scrollLists);
        },1000);
    }).trigger('mouseleave');

    function scrollNow(){
        var height = $scrollLists.find(firstChild).height();
        $scrollLists.stop().animate({
            marginTop:-height
        },1000,function(){
            $scrollLists.css({
                marginTop:0
            }).find(firstChild).appendTo($scrollLists);
        })
    }
}
// 消息滚动
scrollBlock('.notice-lists','li:first');
// 绩效排名
scrollBlock('.ranking-table-body','.ranking-row:first');


