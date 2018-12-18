layui.use(['carousel'], function() {
    var carousel = layui.carousel;

    //常规轮播
    carousel.render({
        elem: '#onAir',
        arrow: 'always',
        width:'100%',
        height:'290px',
        autoplay:true
    });
});

// chart
var option = {
    backgroundColor: 'transparent',
    // tooltip : {
    //     trigger: 'item',
    //     formatter: "{a} <br/>{b} : {c} ({d}%)"
    // },
    legend: {
        bottom: 10,
        left: 'center',
        data: ['行政公益', '危害国家安全','刑事案件','重大责任事故','职务犯罪'],
        textStyle:{color:'#c4c0ff',padding:[0,15]}
    },
    series : [
        {
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'行政公益',itemStyle:{color:'#ee2a00'}},
                {value:310, name:'危害国家安全',itemStyle:{color:'#6a00ec'}},
                {value:274, name:'刑事案件',itemStyle:{color:'#0086ff'}},
                {value:200, name:'重大责任事故',itemStyle:{color:'#00d05d'}},
                {value:400, name:'职务犯罪',itemStyle:{color:'#e309a8'}}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                normal: {
                    formatter: '{per|{d}%}\n  {b|{b}}   ',
                    textStyle: { //字体颜色，item
                        color: '#0d8dff'
                    },
                    padding:5,
                    backgroundColor: 'rgba(5,124,254,0.3)',
                    borderColor: '#057cfe',
                    borderWidth: 1,
                    borderRadius: 4,
                    rich: {
                        per: {
                            color: '#0d8dff',
                            fontSize:18,
                            fontWeight:'bold',
                            lineHeight: 18,
                            align: 'center'
                        },

                        b: {
                            fontSize: 14,
                            color:'#0d8dff',
                            lineHeight: 28
                        },

                    }
                },
            },

            labelLine: {
                normal: {
                    lineStyle: { //item线条颜色
                        color: '#0d8dff'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};
var myChart = echarts.init(document.getElementById('distributeChart'));
myChart.setOption(option);
