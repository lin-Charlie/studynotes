import request from "@/utils/request.js"
const BASE = "management"

// 添加指令弹窗
export function addCommon(data){
    return request({
        url:`/${BASE}/pocommand/save`,
        method:"post",
        data
    })
}
export function getInfo(){
    return request({
        url:`/${BASE}/sporganization/findSpOrganization`,
        method:"get",
    })
}
// 终止指令弹窗
export function stopCommon(data){
    return request({
        url:`/${BASE}/pocommand/stop`,
        method:"put",
        data
    })
}

// 执行指令弹窗
export function doCommon(data){
    return request({
        url:`/${BASE}/pocommand/stop`,
        method:"put",
        data
    })
}
//上传文件
export function upFile(data){
    return request({
        url:`/${BASE}/pocommandfile/file`,
        method:"post",
        data
    })
}
//查询指令附件
export function getFile(data){
    return request({
        url:`/${BASE}/pocommandfile/gitById/${data}`,
        method:"get",
    })
}