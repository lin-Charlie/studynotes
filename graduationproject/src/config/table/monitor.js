// 土地信息
export const landInfoTable ={
    options:[
        {
            label:"土地名称",
            prop:"landName"
        },
        {
            label:"土地位置",
            prop:"landPlace"
        },
        {
            label:"土地面积",
            prop:"landArea"
        },
        {
            label:"土地所有者",
            prop:"landOwner"
        },
        {
            label:"传感器数量",
            prop:"landSensor"
        },
    ],
    config:{
        selection: {},
        index:{
            method:(val)=> val + 1
        },
        rowClassName:(row)=>{
            if((row.rowIndex+1)%2==1){
                return "oddCows"
            }else{
                return "evenCows"
            }
        },
        buttons: {
            list: [
              {
                key: "edit",
                label: "修改",
                class: "edit_btn",
                icon: "el-icon-edit",
              },
              {
                key: "detail",
                label: "详情",
                class: "orange_btn",
                icon: "el-icon-view",
              },
            ],
          },
    }
}
// 传感器信息
export const senorInfoTable ={
    options:[
        {
            label:"传感器名称",
            prop:"sensorName"
        },
        {
            label:"所属土地",
            prop:"belongLand"
        },
        {
            label:"传感器类型",
            prop:"sensorType"
        },
        {
            label:"安装时间",
            prop:"installDate"
        },
    ],
    config:{
        selection: {},
        index:{
            method:(val)=> val + 1
        },
        rowClassName:(row)=>{
            if((row.rowIndex+1)%2==1){
                return "oddCows"
            }else{
                return "evenCows"
            }
        },
        buttons: {
            list: [
              {
                key: "edit",
                label: "修改",
                class: "edit_btn",
                icon: "el-icon-edit",
              },
              {
                key: "detail",
                label: "详情",
                class: "orange_btn",
                icon: "el-icon-view",
              },
            ],
          },
    }
}
// 土壤信息
export const soilInfoTable ={
    options:[
        {
            label:"土地名称",
            prop:"landName"
        },
        {
            label:"土地位置",
            prop:"landPlace"
        },
        {
            label:"氮含量",
            prop:"nitrogenValue"
        },
        {
            label:"磷含量",
            prop:"phosphorusValue"
        },
        {
            label:"钾含量",
            prop:"potassiumValue"
        },
        {
            label:"水含量",
            prop:"waterValue"
        },
        {
            label:"PH值",
            prop:"phValue"
        },
        {
            label:"更新时间",
            prop:"update"
        },
        {
            label:"传感器数量",
            prop:"sensorNum"
        },
    ],
    config:{
        selection: {},
        index:{
            method:(val)=> val + 1
        },
        rowClassName:(row)=>{
            if((row.rowIndex+1)%2==1){
                return "oddCows"
            }else{
                return "evenCows"
            }
        },
        buttons: {
            list: [
              {
                key: "edit",
                label: "修改",
                class: "edit_btn",
                icon: "el-icon-edit",
              },
              {
                key: "detail",
                label: "详情",
                class: "orange_btn",
                icon: "el-icon-view",
              },
            ],
          },
    }
}