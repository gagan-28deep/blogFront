import {defaultSecuredAxios} from "../DefaultSecuredAxiosInstance"

export const login = (data)=>{
    return defaultSecuredAxios.post("/user/login" , data)
}