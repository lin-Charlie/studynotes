import request from "@/utils/request.js"
const BASE = "management/pocommand"
// 获取指令处理时间
export function getUseTime(data){
    return request({
        url:`/${BASE}/getById/${data}`,
        method:"get",
    })
}
export function getCommon(data){
    return request({
        url:`/${BASE}/findAllPoCommand/${data}`,
        method:"get"
    })
}

//状态分类指令
export function getStateCommon(data){
    return request({
        url:`/${BASE}/findPoCommand/${data}`,
        method:"get"
    })
}
// 时间查询指令
export function getTimeCommon(data){
    return request({
        url:`/${BASE}/selectPoCommand?${data}`,
        method:"get",
    })
}

