import util from "util";
import child_process from "child_process";
import fs from "fs/promises";
import { v4 as uuidv4 } from "uuid";

// Convert child_process.exec into a Promise-based function
const execPromisified = util.promisify(child_process.exec);

export const createProjectController = async (req, res) => {
  // 🔹 Generate a unique project ID using UUID v4
  const projectId = uuidv4();
  console.log("New project id :", projectId);

  // 🔹 Create a new directory for the project using the unique ID
  // This will store user projects inside the "projects" folder
  await fs.mkdir(`./projects/${projectId}`);

  // ✅ If you ever want to execute shell commands:
  // const { stdout, stderr } = await execPromisified('dir');
  // console.log("stdout", stdout);

  const response=await execPromisified('npm create vite@latest playground -- --template react',{
    cwd:`./projects/${projectId}`
  })

  return res.json({
    msg: "Project Created",
  });
};
