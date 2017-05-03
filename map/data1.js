var chart_06 = echarts.init(document.getElementById('ECharts_06'));

var chart_06_xStyle = [
    {
        color: "#93DEDA",
        fontSize: 14,
        fontWeight: "bold"
    },
    {
        color: "#E69489",
        fontSize: 14,
        fontWeight: "bold"
    }
];

var chart_06_itemStyle = [
    {
        normal: {
            color: "#59B1E3"
        }
    },
    {
        normal: {
            color: "#B8A0EA"
        }

    },
    {
        normal: {
            color: "#E6E6E6"
        }

    },
    {
        normal: {
            color: "#95DDDC"
        }

    },
    {
        normal: {
            color: "#E69489"
        }

    }
];

var downloadJson = {
    "echarts.min.js": 17365,
    "echarts.simple.min.js": 4079,
    "echarts.common.min.js": 6929,
    "echarts.js": 14890
};
var chart_06_option = {
    title: {
        text: 'ECharts '
    },
    tooltip: {},
    legend: {
        data: ['项目数(单位"个")', '投资数(单位"亿美元")','对外投资','吸引外资比例']
    },
    grid: [{
        top: 80,
        width: '90%',
        bottom: '50%',
        left:'center',
        containLabel: true
    }, {
        top: '60%',
        width: '50%',
        right:"5%",
        bottom: "10%",
        containLabel: true
    }],
    xAxis: [
        {
            gridIndex: 0,
            splitLine: {show: false},
            axisTick: {show: false},
            axisLine: {show: false},

            data: [
                {
                    value: "2012",
                    textStyle: chart_06_xStyle[0]
                },
                {
                    value: "2013",
                    textStyle: chart_06_xStyle[1]
                },
                {
                    value: "2014",
                    textStyle: chart_06_xStyle[0]
                },
                {
                    value: "2015",
                    textStyle: chart_06_xStyle[1]
                },
                {
                    value: "2016",
                    textStyle: chart_06_xStyle[0]
                }
            ]
        },
        {
            gridIndex: 1,
            splitLine: {show: false},
            axisTick: {show: false},
            axisLabel: {show: false}
        }
    ]
    ,
    yAxis:
        [
            {
                gridIndex: 0,
                splitLine: {show: false},
                axisTick: {show: false},
                axisLine: {show: false},
                axisLabel: {show: false},
            },
            {
                gridIndex: 1,
                axisTick: {show: false},
                axisLabel: {show: false},
                data: [
                    {
                        value: "2016",
                        textStyle: chart_06_xStyle[0]
                    },
                    {
                        value: "2012",
                        textStyle: chart_06_xStyle[1]
                    }
                ]
            }
        ],
    series: [
        {
            name: '项目数(单位"个")',
            type: 'bar',
            stack: '项目数',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: [562, 563, 666, 878, 1004],
            itemStyle: chart_06_itemStyle[0]
        },
        {
            name: '投资数(单位"亿美元")',
            type: 'bar',
            stack: '投资数',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: [53.9, 63.2, 66.6, 114, 130],
            itemStyle: chart_06_itemStyle[1]
        },
        {
            name: '项目基数',
            type: 'bar',
            stack: '项目数',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: [888, 663, 766, 978, 1004],
            itemStyle: chart_06_itemStyle[2]
        },
        {
            name: '投资基数',
            type: 'bar',
            stack: '投资数',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: [63.9, 73.2, 76.6, 134, 138],
            itemStyle: chart_06_itemStyle[2]
        },
        {
            type: 'pie',
            radius: [0, '30%'],
            center: ['15%', '75%'],
            data: Object.keys(downloadJson).map(function (key) {
                return {
                    name: key.replace('.js', ''),
                    value: downloadJson[key]
                }
            })
        },
        {
            name: '对外投资',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            label: {
                normal: {
                    position: 'right',
                    show: true
                }
            },

            data: [{
                value:1,
                itemStyle: chart_06_itemStyle[3]
            },{
                value:1,
                itemStyle: chart_06_itemStyle[4]
            }],
            itemStyle:{

            }
        },
        {
            name: '吸引外资比例',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            label: {
                normal: {
                    position: 'right',
                    show: true
                }
            },

            data: [{
                value:1.9,
                itemStyle: chart_06_itemStyle[3]
            },{
                value:12,
                itemStyle: chart_06_itemStyle[4]
            }]
        }]

};
chart_06.setOption(chart_06_option);