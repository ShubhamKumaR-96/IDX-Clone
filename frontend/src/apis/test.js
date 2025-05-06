
import axiosInstance from "../config/axiosConfig"

export const testApi=async()=>{
    try {
        const response=await axiosInstance.get('/api/v1/check')
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log("Error while testing api", error)
    }

}