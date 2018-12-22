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

// 案别分布图
function draw0Pie(){
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
}
draw0Pie();

// 案件处理情况图
function dealStation(){
    var xData = function() {
        var data = [];
        for (var i = 2011; i < 2017; i++) {
            data.push(i + "年");
        }
        return data;
    }();
    var color = ['#1a9bfc', '#99da69', '#e32f46', '#7049f0', '#fa704d', '#01babc', ]
    var name = ['学前教育', '义务教育', '高中教育', '高等教育', '教师队伍', '教学条件']
    var data = [
        [13.7, 3.4, 13.5, 16.1, 7.4, 15.2],
        [17.4, 13.7, 13.5, 3.4, 15.2, 13.5],
        [13.4, 7.4, 13.7, 13.5, 16.1, 13.7],
        [3.5, 15.2, 16.1, 17.4, 13.4, 6.1],
        [16.1, 13.5, 3.7, 17.4, 15.2, 18.9],
        [17.4, 6.1, 13.4, 15.2, 13.7, 5.2],
    ]

    var series = [];
    for (var i = 0; i < 6; i++) {
        series.push({
            name: name[i],
            type: "line",
            symbolSize: 3,//标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10[ default: 4 ]
            symbol: 'circle',//标记的图形。ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            smooth: true, //是否平滑曲线显示
            showSymbol: false, //是否显示 symbol, 如果 false 则只有在 tooltip hover 的时候显示
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: color[i]
                    }, {
                        offset: 0.8,
                        color: 'rgba(255,255,255,0)'
                    }], false),
                    // shadowColor: 'rgba(255,255,255, 0.1)',
                    shadowBlur: 10,
                    opacity:0.3,
                }
            },
            itemStyle: {
                normal: {
                    color: color[i],
                    lineStyle: {
                        width: 1,
                        type: 'solid' //'dotted'虚线 'solid'实线
                    },
                    borderColor: color[i], //图形的描边颜色。支持的格式同 color
                    borderWidth: 8 ,//描边线宽。为 0 时无描边。[ default: 0 ]
                    barBorderRadius: 0,
                    label: {
                        show: false,
                    },
                    opacity:0.5,
                }
            },
            data: data[i],

        })
    }
    var option = {
        tooltip: {
            trigger: 'axis', //触发类型。[ default: 'item' ] :数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用;'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
            axisPointer: {
                lineStyle: {
                    color: '#0090fb'
                }
            }
        },
        legend: {
            icon: 'circle', //设置图例的图形形状，circle为圆，rect为矩形
            itemWidth: 8, //图例标记的图形宽度[ default: 25 ]
            itemHeight: 8, //图例标记的图形高度。[ default: 14 ]
            itemGap: 13, //图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。[ default: 10 ]
            data: ['结案数', '撤案数','立案数', '结案率','撤案率'],
            right: '4%', //图例组件离容器右侧的距离
            textStyle: {
                fontSize: 14,
                color: '#c4c0ff'
            }
        },
        grid: {
            left: '0', //grid 组件离容器左侧的距离。
            right: '4%', //grid 组件离容器右侧的距离。
            bottom: '10%', //grid 组件离容器下侧的距离。
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
            axisLine: {
                lineStyle: {
                    color: '#57617B' //坐标轴线线的颜色。
                }
            },
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#0090fb',
                    shadowColor: '#0090fb',
                    shadowBlur: 5
                }
            },
            data: ['贪污', '受贿', '刑事', '侵害公益', '渎职', '职位侵占', '非法集资']
        }],
        yAxis: {
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#0090fb',
                    shadowColor: '#0090fb',
                    shadowBlur: 10
                }
            },
        },
        series: [{
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },

            itemStyle: {
                normal: {
                    color: 'rgb(0,136,212)',
                    borderColor: 'rgba(0,136,212,0.2)',
                    borderWidth: 15

                }
            },
            data: [10,40,20,40,50,10,44],
        }, {
            // symbol:'circle',
            // symbolSize: 42,
            type: "line",
            // yAxisIndex: 1,
            data: [30,40,10,40,10,40,50],
            itemStyle: {
                normal: {
                    borderWidth: 10,
                    color: {
                        colorStops: [{
                            offset: 0,
                            color: '#f00'
                        },

                            {
                                offset: 1,
                                color: '#F0FFFF'
                            }
                        ],
                    }
                }
            }
        }]
    };
    var myChart = echarts.init(document.getElementById('caseDeal'));
    myChart.setOption(option);
}
dealStation();
