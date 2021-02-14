export function getOptions(params){
    // 根据土地数量添加折线
    let seriesLine = []
    let seriesObj = {}
    // 根据数据长度
    let len = params.data[0].length-1
    for(let i=0;i<len;i++){
        seriesObj = {
            name:params.data[0][i+1],
            type:"line",
            encode:{x:'time',y:params.data[0][i+1]},
            label:{
                color:"#fff"
            }
        }
        seriesLine.push(seriesObj)
    }
    let pieOptions = {}
    return pieOptions = {
        dataset:{
            source:params.data
        },
        legend:{
            show:true,
            data:params.data[0]
        },
        grid:[{
            height:220,
        }],
        tooltip:{},
        xAxis:[{
            gridIndex:0,
            type:"category",
            axisLine:{
                lineStyle:{
                    color:'#fff'
                }
            }
        }],
        yAxis:[{
            type:'value',
            gridIndex:0,
            name:params.title,
            nameTextStyle:{
                fontSize:14
            },
            axisLine:{
                lineStyle:{
                    color:'#fff'
                }
            }
        }],
        series:seriesLine
    }
}