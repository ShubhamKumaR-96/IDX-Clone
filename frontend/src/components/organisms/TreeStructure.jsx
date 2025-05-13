import { useEffect } from "react"
import { useTreeStructureStore } from "../../store/treeStructureStore"
import { useParams } from "react-router-dom"


const TreeStructure = () => {
    const {treeStructure,setTreeStructure}=useTreeStructureStore()

    const {projectId}=useParams()

    useEffect(()=>{
        if(treeStructure){
            console.log("Tree structure:",treeStructure)
        }else{
            setTreeStructure(projectId)
        }
    
    },[treeStructure,setTreeStructure,projectId])

  return (
    <div>
     <h1> Tree Structure</h1>
    </div>
  )
}

export default TreeStructure
