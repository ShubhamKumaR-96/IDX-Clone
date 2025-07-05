import { useEffect } from "react"
import { useTreeStructureStore } from "../../store/treeStructureStore"
import { Tree } from "../molecules/TreeNode/Tree"


const TreeStructure = () => {
    const {treeStructure,setTreeStructure}=useTreeStructureStore()


    useEffect(()=>{
        if(treeStructure){
            console.log("Tree structure:", treeStructure)
        }else{
            setTreeStructure()
        }
    
    },[treeStructure,setTreeStructure])

  return (
    <div>
     <Tree FileFolderData={treeStructure} />
    </div>
  )
}

export default TreeStructure
