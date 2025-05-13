import { createProjectServcvice, getProjectTreeService } from "../services/ProjectService.js";



export const createProjectController = async (req, res) => {
  
     const projectId=await createProjectServcvice()

     return res.json({
      messgae:"Project Created successfully",
      projectId:projectId
     })
  
};

export const getProjectTree=async(req,res)=>{
  const tree=await getProjectTreeService(req.params.projectId)
   return res.status(200).json({
    projectId:tree,
    success:true,
    message:"Successfully fetched the tree"
   })

}
