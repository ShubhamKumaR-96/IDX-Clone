import axiosInstance from "../config/axiosConfig";

export const createProjectApi = async() => {
  try {
    const response = await axiosInstance.post("/api/v1/projects");
    console.log(response.data);
    return response.data
  } catch (error) {
    console.log("Error while creating Project");
    throw error;
  }
};
