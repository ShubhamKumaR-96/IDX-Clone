import axiosInstance from "../config/axiosConfig";

export const createProjectApi = async() => {
  try {
    const response = await axiosInstance.post("/api/v1/projects");
    return response.data
  } catch (error) {
    console.log("Error while creating Project");
    throw error;
  }
};

export const getProjectTree=async({projectId})=>{
  try {
    const response=await axiosInstance.get(`/api/v1/projects/${projectId}/tree`)
    console.log("getting project tree",response.data.projectId)
    return response?.data?.projectId
  } catch (error) {
    console.log("Error while getting the data")
    throw error
  }
}
