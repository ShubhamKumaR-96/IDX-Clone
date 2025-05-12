import { useParams } from "react-router-dom";
import EditorComponent from "../components/molecules/EditorComponent";
import EditorButton from "../components/atoms/EditorButton/EditorButton";

const ProjectComponent = () => {
  const { projectId } = useParams();
  return (
    <div>
      ProjectId: {projectId}
      <div>
        <EditorComponent />
        <EditorButton isActive={true} />
        <EditorButton isActive={true} />
      </div>
    </div>
  );
};

export default ProjectComponent;
