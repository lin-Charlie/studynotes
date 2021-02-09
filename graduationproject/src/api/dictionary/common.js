import request from "@/utils/request.js"
const BASE = "/management"
// 查询数据字典数据
export function getDictionary(data){
    return request({
        url:`${BASE}/dictionary/queryPoDataItem/${data}`,
        method:"get"
    })
}
// 修改数据字典
export function updataDictionary(data){
    return request({
        url:`${BASE}/dictionary/update`,
        method: "put",
        data
    })
}
// 新增数据字典
export function saveDictionary(data){
    return request({
        url:`${BASE}/dictionary/save`,
        method:"post",
        data
    })
}
// 查询
export function serchDictionary(data){
    return request({
        url:`${BASE}/dictionary/findPoDataItem/${data}`,
        method:"get"
    })
}
// 删除
export function deleteDictionary(data){
    return request({
        url:`${BASE}/dictionary/deleteById/${data}`,
        method:"delete"
    })
}
// 获取数据类型
export function getDataTable(){
    return request({
        url:`${BASE}/dictionaryType/findAllPoDataType`,
        method:"get"
    })
}