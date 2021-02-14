<template>
    <div class="container">
        <div class="box" ref="box" style="width: 800px;height:1000px;"></div>
    </div>
</template>

<script>
export default {
    mounted(){
        this.test()
    },
    methods: {
        test(){
            let elements = this.$refs.box
            let myChart = this.$echarts.init(elements)
            let options = {
                // 系列标记
                legend:{
                    // show:false
                },
                // 提示框
                tooltip:{
                    show:true,
                    trigger: 'axis',
                    /*'item':数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
                    'axis':坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用*/
                    axisPointer: {//坐标轴指示器配置项
                        type: 'cross',//'cross' 十字准星指示器
                        label: {//坐标轴指示器的文本标签
                            backgroundColor: '#283b56'
                        }
                    }
                },
                // 工具栏
                toolbox: {
                    show: true,
                    feature: {
                        dataView: {readOnly: false},
                        restore: {},
                        // 类型·转换
                        magicType: {
                            type: ['line', 'bar']
                        },
                        saveAsImage: {},
                        brush:{
                            type: ['lineX', 'clear']
                        }
                    }
                },
                // 坐标系设置
                grid:{
                    width:500,
                    height:400
                },
                dataset:[{
                    source:[
                        ["",'2015', '2016', '2017'],
                        ['Matcha Latte', 43.3, 85.8, 93.7],
                        ['Milk Tea', 83.1, 73.4, 55.1],
                        ['Cheese Cocoa', 86.4, 65.2, 82.5],
                        ['Walnut Brownie', 72.4, 53.9, 39.1]
                    ]
                },{
                    source:[
                        ['Mon', 43.3, 85.8, 93.7],
                        ['Tue', 83.1, 73.4, 55.1],
                        ['Wed', 86.4, 65.2, 82.5],
                        ['Thu', 72.4, 53.9, 39.1]
                    ]
                }],
                xAxis:[{
                   type:"category"/*'value' 数值轴，适用于连续数据
                   'time' 时间轴，适用于连续的时序数据*/
                },{type:"category",data:["Mon", "Tue", "Wed", "Thu"],offset:-460}],
                yAxis:{},
                series:[
                    {type:"bar",datasetIndex:0, tooltips:{show:true}},
                    {type:"bar",datasetIndex:0},
                    {type:"bar",datasetIndex:0},
                    {type:"line",datasetIndex:1,xAxisIndex:1,encode:{x:0,y:1}},
                    {type:"line",datasetIndex:1,xAxisIndex:1,encode:{x:0,y:2}},
                    {type:"line",datasetIndex:1,xAxisIndex:1,encode:{x:0,y:3}},
                    // 内外半径
                    {type:"pie",center:['70%','60%'],radius:[0,60]},
                    {type:"pie",center:['30%','60%'],radius:[10,60],encode:{itemName:0,value:2}},
                ]
            }
            let options2 = {
                tooltip:{},
                legend:{
                    show:true,
                    data:["利用率","完好率","在库数","在用数"]
                },
                grid:[{
                    height:300,
                },{
                    top:'40%',
                    height:300,
                    width:400
                }],
                xAxis:[
                    {gridIndex:0,type:"value",show:false},
                    {
                        gridIndex:1,type:"category",
                        data:["焉家分输站","中江首站","金山清管站","云秀分输站","元坝净化厂"]
                    }
                ],
                yAxis:[
                    {
                        type:"category",
                        gridIndex:0,
                        inverse:true,
                        axisLine:{
                            show:false
                        },
                        axisTick:{
                            show:false
                        },
                        data:["自控设备","电器设备","容器设备","阀门","调压设备","仪器设备"]
                    },
                    {type:"value",gridIndex:1,}
                ],
                series:[
                    {
                        type:"bar",
                        name:"利用率",
                        barGap:'10%',
                        data:[552,644,180,387,72,764],
                        label:{
                            show:true,
                            color:'#fff',
                            position: ['10', '50%']
                        },
                        itemStyle:{
                            color:"rgb(115,160,250)"
                        }
                    },{
                        data:[235,555,98,56,72,764],
                        name:"完好率",
                        type:"bar",
                        label:{
                            show:true,
                            color:'#000',
                            position: ['100%', '50%']
                        },
                        itemStyle:{
                            color:"rgb(115,222,150)"
                        }
                    },{
                        name:"在库数",
                        type:"bar",
                        barGap:'0',
                        xAxisIndex:1,
                        yAxisIndex:1,
                        data:[110,220,153,328,265],
                        itemStyle:{
                            color:"rgb(55,172,249)"
                        }
                    },{
                        name:"在用数",
                        type:"bar",
                        xAxisIndex:1,
                        yAxisIndex:1,
                        data:[99,199,130,299,220],
                        itemStyle:{
                            color:"rgb(245,108,108)"
                        }
                    }
                ]
            }
            myChart.setOption(options2)
        }
    },
}
</script>

<style lang="scss" scoped>

</style>