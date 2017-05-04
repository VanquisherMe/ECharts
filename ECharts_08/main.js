var chart_08_mapData = [
    {'code': 'CN', 'name': '中国', 'value': 55, 'color': '#F96352'},
    {'code': 'CNNH', 'name': '南海', 'value': 20, 'color': '#04AEFF'},
    {'code': 'FI', 'name': '欧洲', 'value': 30, 'color': '#F7CC31'},
    {'code': 'RU', 'name': '俄罗斯', 'value': 40, 'color': '#F7CC31'},
    {'code': 'KZ', 'name': '中亚', 'value': 30, 'color': '#F7CC31'},
    {'code': 'IL', 'name': '地中海', 'value': 35, 'color': '#F7CC31'},
    {'code': 'IR', 'name': '波斯湾', 'value': 25, 'color': '#F7CC31'},
    {'code': 'OM', 'name': '西亚', 'value': 30, 'color': '#F7CC31'},
    {'code': 'IN', 'name': '南亚', 'value': 25, 'color': '#F7CC31'},
    {'code': 'TH', 'name': '东南亚', 'value': 30, 'color': '#F7CC31'},
    {'code': 'IOR', 'name': '印度洋', 'value': 35, 'color': '#04AEFF'},
    {'code': 'PACIFIC', 'name': '南太\n平洋', 'value': 40, 'color': '#04AEFF'}
];




var chart_08_getLatlong=function (mapData) {
   return mapData.map(function (itemOpt) {
        return {
            name: itemOpt.name,
            symbolSize:itemOpt.value,
            value: [
                latlong[itemOpt.code].longitude,
                latlong[itemOpt.code].latitude,
                itemOpt.value
            ],
            itemStyle: {
                normal: {
                    color:itemOpt.color,
                    borderColor:"#fff",
                    borderWidth:2,
                    opacity: 1
                }
            }
        };
    })
};


$.get("./world.json", function (worldjson) {
    var chart_08 = echarts.init(document.querySelector("#ECharts_08"));
    echarts.registerMap('world', worldjson);
    chart_08.setOption({
        backgroundColor:"#F5F5F5",
        geo: {
            show:true,
            type: 'map',
            map: 'world',
           /* label: {
                emphasis: {
                    show: false
                }
            },*/
            roam: true,
            aspectScale: 0.85,
            scaleLimit: {
                min: 0.5,
                max: 2
            },
            itemStyle: {
                normal: {
                    areaColor: '#CDCDCD',
                    borderColor: '#c1c1c1'
                },
                emphasis: {
                    areaColor: '#9c9c9c'
                }
            }
        },
        series: [ {
            name:"关系图",
            type: 'lines',
            zlevel: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 10,
            effect: {
                show: true,
                period: 6,
                trailLength: 0
            },
            lineStyle: {
                normal: {
                    color:"#ff0028",
                    width: 1,
                    opacity: 1
                }
            },
            data: [{
                coords: [[85.5, 18.5],[45.5, 1.5]]
            }]
        },{
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol:"circle",
            label: {
                normal: {
                    show: true,
                    formatter: '{b}'
                }
            },
            itemStyle: {
                normal: {
                    opacity:1
                }
            },
            data:chart_08_getLatlong(chart_08_mapData)
            /*data:[{
                name: "中国",
                value: [105, 35],
                symbolSize:40,
                itemStyle:{
                    normal:{
                        color:"#ff0028",
                        borderColor:"#fffff",
                        borderWidth:5
                    }
                }
            }]*/
        }]
    });
});