import axiosInstance from "../config/axiosConfig";

export const createProjectApi = () => {
  try {
    const response = axiosInstance.get("/api/v1/projects");
    console.log(response.data);
  } catch (error) {
    console.log("Error while creating Project");
    throw error;
  }
};
