import request from "@/utils/request.js"

// 土地信息--列表
export function landinfoPage(data){
    return request({
        url:`/api/monitor/landinfo/list`,
        method:"post",
        data
    })
}
// 土地信息--删除
export function landinfoDelete(data){
    return request({
        url:`/api/monitor/landinfo/delete`,
        method:"delete",
        data
    })
}
// 土地信息--新增
export function landinfoAdd(data){
    return request({
        url:`/api/monitor/landinfo/add`,
        method:"post",
        data
    })
}
// 土地信息--修改
export function landinfoUpdate(data){
    return request({
        url:`/api/monitor/landinfo/update`,
        method:"update",
        data
    })
}