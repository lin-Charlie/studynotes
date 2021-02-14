import request from "@/utils/request.js"

export function login2(data){
    return request({
        url:`/api/user/login`,
        method:"post",
        data
    })
}

export function getRouter(data){
    return request({
        url:`/api/user/getUserInfo?${data}`,
        method:"get",
    })
}