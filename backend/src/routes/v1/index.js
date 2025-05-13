import express from "express"
import { testCheck } from "../../controllers/testControl.js";
import { createProjectController } from "../../controllers/ProjectController.js";
import projectRouter from './projects.js'
const router=express.Router()

router.use('/check',testCheck)
router.use('/projects',projectRouter)



export default router;