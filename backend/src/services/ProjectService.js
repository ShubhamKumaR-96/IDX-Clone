import { v4 as uuidv4 } from "uuid";
import fs from "fs/promises";
import { execPromisified } from "../utils/execUtility.js";
import { REACT_PROJECT_CMD } from "../config/serverConfig.js";
import path from "path";
import directoryTree from "directory-tree";

export const createProjectServcvice=async()=>{
const projectId = uuidv4();
  console.log("New project id :", projectId);

  // 🔹 Create a new directory for the project using the unique ID
  // This will store user projects inside the "projects" folder
  await fs.mkdir(`./projects/${projectId}`);

  // ✅ If you ever want to execute shell commands:
  // const { stdout, stderr } = await execPromisified('dir');
  // console.log("stdout", stdout);

  const response=await execPromisified(REACT_PROJECT_CMD,{
    cwd:`./projects/${projectId}`
  })
  return projectId
}

 export const getProjectTreeService=async(projectId)=>{
    const projectPath=path.resolve(`./projects/${projectId}`)
    const tree=directoryTree(projectPath)
    return tree
 }