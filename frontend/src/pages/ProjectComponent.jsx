import { useParams } from "react-router-dom"
import EditorComponent from "../components/molecules/EditorComponent"

const ProjectComponent = () => {

    const {projectId}=useParams()
  return (
    <div>
      ProjectId: {projectId}
      <div>
        <EditorComponent />
      </div>
    </div>
  )
}

export default ProjectComponent
