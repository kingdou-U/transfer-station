// 案别分布图
function distributeChart(){
    var option = {
        backgroundColor: 'transparent',
        legend: {
            bottom: 0,
            left: 'center',
            data: ['行政公益', '危害国家安全','刑事案件','重大责任事故','职务犯罪'],
            textStyle:{color:'#c4c0ff',padding:[0,10]}
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
                    {value:400, name:'职务犯罪',itemStyle:{color:new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#b70800'},
                                    // {offset: 0.5, color: '#888'},
                                    {offset: 1, color: '#faed00'}
                                ]
                            )
                   }}
                ].sort(function (a, b) { return a.value - b.value; }),
                roseType: 'radius',
                label: {
                    normal: {
                        formatter: '{per|{d}%}\n  {b|{b}}   ',
                        textStyle: { //字体颜色，item
                            color: '#0d8dff',
                            fontSize:11,
                        },
                        padding:2,
                        backgroundColor: 'rgba(5,124,254,0.3)',
                        borderColor: '#057cfe',
                        borderWidth: 1,
                        borderRadius: 4,
                        rich: {
                            per: {
                                color: '#0d8dff',
                                fontSize:16,
                                fontWeight:'bold',
                                align: 'center'
                            },
                            b: {
                                fontSize: 12,
                                color:'#0d8dff',
                                lineHeight:16
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
    distributeChart= echarts.init(document.getElementById('distributeChart'));
    distributeChart.setOption(option);
}

// 案件处理情况图
function dealStation(){
    var option = {
        color: ['#420b9a', '#85007d', '#0b036b', '#f87803','#10d5c7'],
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            },
        },
        legend: {
            textStyle:{color:'#aaa7e1',fontSize:11},
            selectedMode:false,
            right:0,
            icon:'circle',
        },
        grid: {
            left: '3%',
            right: '6%',
            bottom: '10%',
            containLabel: false,
            borderColor:'#0090fb'
        },
        xAxis : [
            {
                type : 'category',
                splitLine:{
                  show:true,
                  lineStyle:{color:'#0090fb'}
                },
                boundaryGap : false,
                data : ['贪污','受贿','刑事','侵害公益','渎职','职位侵占','非法集资'],
                axisLine:{
                    lineStyle: {color:'#0090fb'}
                }
            }
        ],
        yAxis : [
            {
                name:'',
                axisLabel:{
                  show:false
                },
                axisLine:{
                    show:true,
                    lineStyle: {color:'#0090fb'}
                },
                splitLine:{
                    show:true,
                    lineStyle:{color:'#0090fb'}
                },
            },
            {
                name:'百分比',
                min:0,
                max:100,
                show:false,
                axisLabel: {
                    formatter: '{value} %'
                },
                axisLine:{
                    lineStyle: {color:'#0090fb'}
                },
                splitLine:{
                    show:true,
                    lineStyle:{color:'#0090fb'}
                },
            }
        ],

        series : [
            {
                name:'结案数',
                type:'line',
                smooth: true,
                stack: '案件数',
                symbol:'none',
                lineStyle: {color:'#420b9a',opacity:0.8},
                areaStyle: {color:'#420b9a',opacity:0.8},
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'撤案数',
                type:'line',
                stack: '案件数',
                symbol:'none',
                smooth: true,
                lineStyle: {color:'#85007d',opacity:0.8},
                areaStyle: {color:'#85007d',opacity:0.8},
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'立案数',
                type:'line',
                smooth: true,
                stack: '案件数',
                symbol:'none',
                lineStyle:{color:'#0b036b'},
                areaStyle: {color:'#0b036b',opacity:0.8},
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'结案率',
                type:'line',
                yAxisIndex:1,
                smooth: true,
                symbol:'none',
                lineStyle:{color:'#f87803'},
                data:[70, 82, 91, 34, 90, 78, 32]
            },
            {
                name:'撤案率',
                type:'line',
                yAxisIndex:1,
                smooth: true,
                symbol:'none',
                lineStyle:{color:'#10d5c7'},
                data:[70, 92, 81, 93, 85, 80, 50]
            }
        ]
    };
     caseDeal = echarts.init(document.getElementById('caseDeal'));
    caseDeal.setOption(option);

}

// 趋势对比图
function trendChart(){
    var option = {
        color:['#929adf','#004dc6','#01108f',],
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            textStyle:{color:'#aaa7e1',fontSize:11},
            selectedMode:false,
            right:0,
            icon:'circle',
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '5%',
            containLabel: true,
            borderColor:'#0090fb'
        },
        xAxis : [
            {
                type : 'category',
                splitLine:{
                    show:true,
                    lineStyle:{color:'#0090fb'}
                },
                boundaryGap : false,
                data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                axisLine:{
                    lineStyle: {color:'#0090fb'}
                }
            }
        ],
        yAxis : [
            {
                type:'value',
                name:'案件数',
                axisLabel:{
                  show:false,
                },
                axisLine:{
                    lineStyle: {color:'#0090fb'}
                },
                splitLine:{
                    show:true,
                    lineStyle:{color:'#0090fb'}
                },
            }
        ],
        dataZoom:[
            {
                type: 'inside',
                show: true,
                xAxisIndex: [0],
                start: 0,//默认为1
                end: 50
            },
        ],
        series : [
            {
                name:'2018',
                type:'line',
                smooth: true,
                stack: '案件数',
                symbol:'none',
                areaStyle: {color:'#929adf',opacity:0.8},
                data:[120, 132, 101, 134, 90, 230, 210,88,99,100,120,60]
            },
            {
                name:'2017',
                type:'line',
                stack: '案件数',
                symbol:'none',
                smooth: true,
                areaStyle: {color:'#004dc6',opacity:0.8},
                data:[220, 182, 191, 234, 290, 330, 310, 101, 134, 90, 230, 210,]
            },
            {
                name:'2016',
                type:'line',
                smooth: true,
                stack: '案件数',
                symbol:'none',
                areaStyle: {color:'#01108f',opacity:0.8},
                data:[150, 232, 201, 154, 190, 330, 410, 80, 140, 90, 59, 210,]
            },
        ]
    };
     caseTrend = echarts.init(document.getElementById('trend'));
    caseTrend.setOption(option);
}

// 绵阳市案件分布图
function drawGraph(){
    var jsonData = MYData.features;
    var mapName='MianYang';
    echarts.registerMap(mapName,MYData);
    //处理经纬度
    var geoCoordMap={};
    jsonData.forEach(function(val){
        // 地区名称
        var name =val.properties.name;
        // 地区经纬度
        geoCoordMap[name]=val.properties.cp;
    });
    //假数据
    var data=[
        {name:'安县',value:18},
        {name:'平武县',value:28},
        {name:'北川羌族自治县',value:15},
        {name:'涪城区',value:12},
        {name:'游仙区',value:14},
        {name:'梓潼县',value:8},
        {name:'三台县',value:16},
        {name:'盐亭县',value:28},
        {name:'江油市',value:21},
    ];
    //整合数据与经纬度
    var convertData = function(data){
        var res= [];
        for(var i=0;i<data.length;i++){
            var geoCoord=geoCoordMap[data[i].name];
            if(geoCoord){
                res.push({
                    name:data[i].name,
                    value:geoCoord.concat(data[i].value),
                })
            }
        }
        return res;
    };
    var option = {
        geo: {
            show: true,
            map: mapName,
            itemStyle: {
                normal: {
                    areaColor: 'transparent', //区块颜色
                    borderColor: '#3699ff',
                    borderWidth:2,
                },
                emphasis: {
                    areaColor: '#1480e3', //鼠标移上时，区块颜色
                }
            },
            layoutCenter:['50%','50%'],
            layoutSize:'110%',
        },
        grid:{
            top:10,
            left:'10%',
            bottom:'10%'
        },
        series: [{
            name:'散点',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            symbolSize: function(val) {
                return 16;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: '#F62157',
                    shadowBlur: 10,
                    shadowColor: '#F62157'
                }
            },
            zlevel: 1,
            zoom:2,
            data: convertData(data),
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'bottom',
                    show: true,
                    textStyle:{
                        color:'#fff'
                    }
                },
                emphasis: {
                    show: true
                }
            },
        },
            {
                name: '点',
                type: 'scatter',
                coordinateSystem: 'geo',
                label: {
                    normal: {
                        show: true,
                        formatter:'{@value}',
                        textStyle: {
                            color: '#fff',
                            fontSize: 9,
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#F62157', //标志颜色
                    }
                },
                zlevel: 6,
                data: convertData(data),
            },
        ]
    };
    graphChart = echarts.init(document.getElementById('graphChart'));
    graphChart.setOption(option);
}

