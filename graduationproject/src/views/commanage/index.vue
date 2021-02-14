<template>
    <div class="container">
        <div class="echarts_wrapper">
            <div class="echarts_box1">
                <el-row>
                    <el-col :span="24"><span>汇总</span></el-col>
                </el-row>
                <div class="collect_info">
                    <el-row>
                        <el-col :span="12">
                            <div class="info_wrapper">
                                <i class="el-icon-s-marketing"></i>
                                <div class="info">
                                    <span>总土地数量</span><br>
                                    <span>4</span>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="info_wrapper">
                                <i class="el-icon-data-analysis"></i>
                                <div class="info">
                                    <span>总传感器数量</span><br>
                                    <span>40</span>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <el-row>
                    <el-col :span="24"><span>传感器类型数量</span></el-col>
                </el-row>
                <div class="echarts_pie" ref="echarts_pie"></div>
                <el-row>
                    <el-col :span="24"><span>土地传感器数量</span></el-col>
                </el-row>
                <div class="echarts_bar" ref="echarts_bar"></div>
            </div>
            <div class="echarts_box2">
                <div class="soil_humidity" ref="soil_humidity"></div>
                <div class="soil_PH" ref="soil_PH"></div>
                <div class="soil_nitrogen" ref="soil_nitrogen"></div>
            </div>
            <div class="echarts_box3">
                <div class="soil_phosphorus" ref="soil_phosphorus"></div>
                <div class="soil_potassium" ref="soil_potassium"></div>
            </div>
        </div>
    </div>
</template>

<script>
import {getOptions} from "@/config/charts/commanage.js"
export default {
    data(){
        return{
            lineOptions:{},
            chartsParams:{
                title:"",
                data:[],
            }
        }
    },
    mounted(){
        this.pie(),
        this.bar(),
        this.echartsBox2(),
        this.echartsBox3()
    },
    methods: {
        pie(){
            let echartsPie = this.$refs.echarts_pie
            let myChart = this.$echarts.init(echartsPie)
            let options = {
                legend:{
                    textStyle:{
                        color:"#fff",
                        fontSize:"14"
                    }
                },
                
                series:[
                    // 内外半径
                    {
                        name:'传感器类型数量',
                        type:"pie",
                        radius:[50,100],
                        data:[
                            {value:13,name:'湿度传感器'},
                            {value:5,name:'氮含量传感器'},
                            {value:4,name:'磷含量传感器'},
                            {value:3,name:'钾含量传感器'},
                            {value:15,name:'PH值传感器'},
                        ],
                        label:{
                            color:"#fff",
                            fontSize:"16"
                        },
                        labelLine:{
                            lineStyle:{
                                color:"#fff",
                            }
                        }
                    },
                ]
            }
            myChart.setOption(options)
        },
        bar(){
            let echartsBar = this.$refs.echarts_bar
            let myBar = this.$echarts.init(echartsBar)
            let barOptions = {
                tooltip:{
                    trigger: "axis",
                    axisPointer: {
                        type: "shadow"
                    }
                },
                dataset:{
                    source:[
                        ['土地一',10],
                        ['土地二',8],
                        ['土地三',9],
                        ['土地四',13],
                    ]
                },
                xAxis:{
                    type:'category',
                    axisLine:{
                        lineStyle:{
                            color:'#fff'
                        }
                    }
                },
                yAxis:{
                    type: "value",
                    name:'传感器数量：个',
                    nameTextStyle:{
                        fontSize:14
                    },
                    axisLine:{
                        show:false,
                        lineStyle:{
                            color:'#fff'
                        }
                    }
                },
                series:[
                    {
                        name:"传感器数量",
                        type:"bar",
                        encode:{x:0,y:1},
                        label:{
                            color:'#fff'
                        }
                    },
                ]
            }
            myBar.setOption(barOptions)
        },
        echartsBox2(){
            let options = {}
            this.chartsParams.data = [
                ['time','土地一','土地二','土地三','土地四'],
                ['1:00',12,19,11,22],
                ['2:00',10,18,21,11],
                ['3:00',15,13,16,19],
                ['4:00',13,12,13,16],
                ['5:00',16,16,19,21],
                ['6:00',17,11,14,20],
                ['7:00',12,10,15,19],
                ['8:00',11,17,12,21],
                ['9:00',18,12,11,17],
            ]

            this.chartsParams.title = "土壤湿度"
            let echartsHumidity = this.$refs.soil_humidity
            let humidityLine  = this.$echarts.init(echartsHumidity)
            this.lineOptions = getOptions(this.chartsParams)
            options = this.lineOptions
            humidityLine.setOption(options)

            this.chartsParams.title = "土壤PH值"
            let echartsPH = this.$refs.soil_PH
            let phLine  = this.$echarts.init(echartsPH)
            this.lineOptions = getOptions(this.chartsParams)
            options = this.lineOptions
            phLine.setOption(options)

            this.chartsParams.title = "土壤氮含量"
            let echartsNitrogen = this.$refs.soil_nitrogen
            let nitrogenLine  = this.$echarts.init(echartsNitrogen)
            this.lineOptions = getOptions(this.chartsParams)
            options = this.lineOptions
            nitrogenLine.setOption(options)
        },
        echartsBox3(){
            let options = {}
            this.chartsParams.data = [
                ['time','土地一','土地二','土地三','土地四'],
                ['1:00',12,19,11,22],
                ['2:00',10,18,21,11],
                ['3:00',15,13,16,19],
                ['4:00',13,12,13,16],
                ['5:00',16,16,19,21],
                ['6:00',17,11,14,20],
                ['7:00',12,10,15,19],
                ['8:00',11,17,12,21],
                ['9:00',18,12,11,17],
            ]

            this.chartsParams.title = "土壤磷含量"
            let echartsPhosphorus = this.$refs.soil_phosphorus
            let phosphorusLine  = this.$echarts.init(echartsPhosphorus)
            this.lineOptions = getOptions(this.chartsParams)
            options = this.lineOptions
            phosphorusLine.setOption(options)

            this.chartsParams.title = "土壤钾含量"
            let echartsPotassium = this.$refs.soil_potassium
            let potassiumLine  = this.$echarts.init(echartsPotassium)
            this.lineOptions = getOptions(this.chartsParams)
            options = this.lineOptions
            potassiumLine.setOption(options)
        }
    },
}
</script>

<style lang="scss" scoped>
.container{
    margin: 0!important;
    width: calc(100%)!important;
    box-sizing: border-box;
    border: rgb(128, 216, 128) 5px solid;
    .echarts_wrapper{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        background: url("~@/assets/zhny.jpg");
        background-size:cover;
        .echarts_box1{
            width: 3.3rem;
            height: 100%!important;
            box-sizing: border-box;
            padding-left: 10px;
            padding-top: 10px;
            span{
                font-size: 24px;
                color: rgb(21,247,250);
            }
            .collect_info{
                width: 3.3rem;
                height: 10%;
                box-sizing: border-box;
                padding-left: 15px;
                padding-top: 15px;
                border-radius: 30px;
                background-color: rgba($color: rgb(38, 114, 128), $alpha: 0.3);
                .info_wrapper{
                    display: flex;
                    justify-content: flex-start;
                    span{
                        font-size: 20px!important;
                         color: rgb(255, 255, 255)
                    }
                    i{
                        font-size: 50px;
                        color: rgb(255, 255, 255);
                        margin-right: 5px;
                    }
                }
                
            }
            .echarts_pie{
                width: 3.3rem;
                height: 40%;
                background-color: rgba($color: rgb(38, 114, 128), $alpha: 0.3);
                border-radius: 4%;
            }
            .echarts_bar{
                width: 3.3rem;
                height: 40%;
                border-radius: 4%;
                background-color: rgba($color: rgb(38, 114, 128), $alpha: 0.3);
            }
        }
        .echarts_box2{
            width: 3.1rem;
            height: 100%!important;
            display: flex;
            flex-direction:column;
            justify-content: space-around;
            border-radius: 4%;
            box-sizing: border-box;
            background-color: rgba($color: rgb(38, 114, 128), $alpha: 0.3);
            .soil_humidity{
                width: 3.1rem;
                height: 33%;
            }
            .soil_PH{
                width: 3.1rem;
                height: 33%;
            }
            .soil_nitrogen{
                width: 3.1rem;
                height: 33%;
            }
        }
        .echarts_box3{
            width: 3.1rem;
            height: 100%!important;
            display: flex;
            flex-direction:column;
            justify-content: flex-start;
            border-radius: 4%;
            box-sizing: border-box;
            background-color: rgba($color: rgb(38, 114, 128), $alpha: 0.3);
            .soil_phosphorus{
                width: 3.1rem;
                height: 33%;
            }
            .soil_potassium{
                width: 3.1rem;
                height: 33%;
            }
        }
    }
}

</style>